type AnalyticsEvent = Record<string, unknown> & { event: string };

declare global {
  interface Window {
    dataLayer: (AnalyticsEvent | IArguments)[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Keep contact details and free-text form fields out of analytics.
export function trackEvent(event: AnalyticsEvent) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
  // Same event to our own GA4 property (the 'own' group in Base.astro); GTM's callback
  // fields stay with the dataLayer event.
  const { event: name, eventCallback, eventTimeout, ...params } = event;
  window.gtag?.('event', name, { ...params, send_to: 'own' });
}

export function completeInquiry() {
  let navigated = false;
  const navigate = () => {
    if (navigated) return;
    navigated = true;
    window.location.assign('/thank-you/');
  };
  // Navigate even when GTM is blocked or no tags are configured.
  window.setTimeout(navigate, 1600);
  trackEvent({
    event: 'generate_lead',
    form_id: 'project_inquiry',
    eventCallback: navigate,
    eventTimeout: 1500,
  });
}
