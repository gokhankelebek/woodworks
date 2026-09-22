// Vercel serverless function: contact form -> Resend email
// Requires the RESEND_API_KEY environment variable (set in the Vercel dashboard).
// The from-address domain must be verified in Resend (DNS records on Cloudflare).

const RESEND_URL = 'https://api.resend.com/emails';
const TO = 'mert@vegasvoguewoodworks.com';
const FROM = 'Vegas Vogue Woodworks <leads@vegasvoguewoodworks.com>';
const BRASS = '#b08d57';
const INK = '#16130f';

const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const field = (label, value) =>
  value
    ? `<tr><td style="padding:8px 16px 8px 0;color:${BRASS};font-size:11px;letter-spacing:2px;text-transform:uppercase;white-space:nowrap;vertical-align:top">${label}</td>
       <td style="padding:8px 0;color:${INK};font-size:15px">${esc(value)}</td></tr>`
    : '';

async function sendEmail(apiKey, payload) {
  const res = await fetch(RESEND_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const wantsJson = (req.headers.accept || '').includes('application/json');
  const finish = (ok) =>
    wantsJson
      ? res.status(ok ? 200 : 500).json({ ok })
      : res.redirect(303, ok ? '/thank-you/' : '/contact/?error=1');

  const b = req.body || {};

  // honeypot: bots fill the hidden "company" field — pretend success
  if (b.company) return finish(true);

  const name = String(b.name || '').trim().slice(0, 200);
  const phone = String(b.phone || '').trim().slice(0, 60);
  const email = String(b.email || '').trim().slice(0, 200);
  const location = String(b.location || '').trim().slice(0, 200);
  const projectType = String(b.project_type || '').trim().slice(0, 100);
  const budget = String(b.budget || '').trim().slice(0, 100);
  const message = String(b.message || '').trim().slice(0, 5000);

  if (!name || !phone) {
    return wantsJson
      ? res.status(400).json({ ok: false, error: 'Name and phone are required.' })
      : res.redirect(303, '/contact/?error=1');
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return finish(false);
  }

  const lead = {
    from: FROM,
    to: [TO],
    ...(email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? { reply_to: email } : {}),
    subject: `New project inquiry — ${name}${location ? ` (${location})` : ''}`,
    html: `
      <div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:32px 24px;color:${INK}">
        <p style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:${BRASS};margin:0 0 6px">New Lead — vegasvoguewoodworks.com</p>
        <h1 style="font-size:26px;font-weight:500;margin:0 0 24px">${esc(name)}</h1>
        <table style="border-collapse:collapse;width:100%">
          ${field('Phone', phone)}
          ${field('Email', email)}
          ${field('Location', location)}
          ${field('Project', projectType)}
          ${field('Budget', budget)}
          ${field('Message', message)}
        </table>
        <p style="margin-top:28px"><a href="tel:${esc(phone.replace(/[^+\d]/g, ''))}" style="background:${BRASS};color:${INK};text-decoration:none;padding:12px 24px;font-family:Arial,sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase">Call ${esc(name)}</a></p>
      </div>`,
  };

  try {
    await sendEmail(apiKey, lead);
  } catch (err) {
    console.error('Lead email failed:', err);
    return finish(false);
  }

  // auto-reply to the customer (best effort — never fails the submission)
  if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    try {
      await sendEmail(apiKey, {
        from: FROM,
        to: [email],
        reply_to: TO,
        subject: 'We received your inquiry — Vegas Vogue Woodworks',
        html: `
          <div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:32px 24px;color:${INK}">
            <p style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:${BRASS};margin:0 0 6px">Vegas Vogue Woodworks</p>
            <h1 style="font-size:26px;font-weight:500;margin:0 0 20px">Thank you, ${esc(name.split(' ')[0])}.</h1>
            <p style="font-size:15px;line-height:1.7">We've received your project inquiry and one of our design team will reach out within one business day.</p>
            <p style="font-size:15px;line-height:1.7">If you'd like to talk sooner, call or WhatsApp us at <a href="tel:+17023431078" style="color:${BRASS}">(702) 343-1078</a> — you'll speak directly with the people who design and build every piece.</p>
            <p style="font-size:15px;line-height:1.7;margin-top:24px">— Mert &amp; the Vegas Vogue Woodworks team<br>
            <span style="font-size:13px;color:#777">2915 Losee Road #107, North Las Vegas, NV 89030</span></p>
          </div>`,
      });
    } catch (err) {
      console.error('Auto-reply failed (non-fatal):', err);
    }
  }

  return finish(true);
}
