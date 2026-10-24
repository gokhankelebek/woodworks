import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import handler from '../api/contact.js';

test('HTML submissions redirect only after successful delivery; failures stay on contact', async () => {
  const originalFetch = globalThis.fetch;
  const originalKey = process.env.RESEND_API_KEY;
  process.env.RESEND_API_KEY = 'test-only';
  const response = () => ({ status(code) { this.code = code; return this; }, json(body) { this.body = body; }, redirect(code, url) { this.code = code; this.url = url; } });
  try {
    let sends = 0;
    globalThis.fetch = async () => { sends++; return { ok: true }; };
    const success = response();
    await handler({ method: 'POST', headers: {}, body: { name: 'Test', phone: '555-0100' } }, success);
    assert.equal(success.code, 303);
    assert.equal(success.url, '/thank-you/');
    assert.equal(sends, 1);
    const invalid = response();
    await handler({ method: 'POST', headers: {}, body: {} }, invalid);
    assert.equal(invalid.url, '/contact/?error=1');
    assert.equal(sends, 1);
    delete process.env.RESEND_API_KEY;
    const failure = response();
    await handler({ method: 'POST', headers: {}, body: { name: 'Test', phone: '555-0100' } }, failure);
    assert.equal(failure.url, '/contact/?error=1');
  } finally {
    globalThis.fetch = originalFetch;
    if (originalKey === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = originalKey;
  }
});

test('client records a lead only when the server confirms success', async () => {
  const source = readFileSync(new URL('../src/components/ContactForm.astro', import.meta.url), 'utf8').match(/<script>([\s\S]*?)<\/script>/)[1].replace(/import .*?;/, '');
  for (const [ok, body, expected] of [[true, { ok: true }, 1], [false, { ok: false }, 0], [true, { ok: false }, 0]]) {
    let submit;
    let leads = 0;
    const status = { hidden: true };
    const button = { disabled: false };
    const form = { action: '/api/contact', reportValidity: () => true, querySelector: (s) => s === '.form-status' ? status : button, addEventListener: (_, cb) => { submit = cb; } };
    vm.runInNewContext(ts.transpile(source), {
      document: { querySelector: (s) => s === '.contact-form' ? form : {} },
      location: { search: '' }, URLSearchParams,
      FormData: class { *[Symbol.iterator]() { yield ['name', 'Test']; yield ['phone', '555-0100']; } },
      fetch: async () => ({ ok, json: async () => body }),
      completeInquiry: () => { leads++; },
    });
    await submit({ preventDefault() {} });
    assert.equal(leads, expected);
    if (!expected) { assert.equal(status.hidden, false); assert.equal(button.disabled, false); }
  }
});

test('lead navigation works with blocked GTM and runs only once', async () => {
  const { completeInquiry } = await import('../src/lib/analytics.ts');
  const originalWindow = globalThis.window;
  try {
    const destinations = [];
    let timeout;
    globalThis.window = { dataLayer: [], setTimeout: (cb) => { timeout = cb; }, location: { assign: (url) => destinations.push(url) } };
    completeInquiry();
    const event = window.dataLayer[0];
    assert.equal(event.event, 'generate_lead');
    assert.deepEqual(Object.keys(event).sort(), ['event', 'eventCallback', 'eventTimeout', 'form_id']);
    timeout();
    event.eventCallback();
    assert.deepEqual(destinations, ['/thank-you/']);
  } finally {
    if (originalWindow === undefined) delete globalThis.window;
    else globalThis.window = originalWindow;
  }
});

test('events also go to our own GA4 property, without GTM callback fields', async () => {
  const { trackEvent, completeInquiry } = await import('../src/lib/analytics.ts');
  const originalWindow = globalThis.window;
  try {
    const sent = [];
    globalThis.window = { dataLayer: [], setTimeout: () => {}, location: { assign() {} }, gtag: (...args) => sent.push(args) };
    trackEvent({ event: 'phone_click', page_path: '/', link_placement: 'header' });
    completeInquiry();
    assert.deepEqual(sent, [
      ['event', 'phone_click', { page_path: '/', link_placement: 'header', send_to: 'own' }],
      ['event', 'generate_lead', { form_id: 'project_inquiry', send_to: 'own' }],
    ]);
    assert.equal(window.dataLayer[0].event, 'phone_click');
    assert.equal(typeof window.dataLayer[1].eventCallback, 'function');
  } finally {
    if (originalWindow === undefined) delete globalThis.window;
    else globalThis.window = originalWindow;
  }
});
