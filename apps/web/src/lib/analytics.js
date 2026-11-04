// Lightweight, forward-compatible analytics helper.
//
// No analytics provider is wired into this project yet (no GTM/gtag snippet
// in index.html). This helper pushes events to `window.dataLayer` (Google Tag
// Manager) and calls `window.gtag` (GA4) if either is present, so events are
// captured automatically once a provider is added. Until then, calls are
// no-ops (apart from a dev-only console log) and never throw.
//
// Only anonymous engagement events are tracked here. We never send emails,
// organization names, free-text concerns, or individual answers to analytics.

const isDev = import.meta.env && import.meta.env.DEV;

export function trackEvent(name, params = {}) {
  try {
    if (typeof window === 'undefined') return;

    // Google Tag Manager / GA4 dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...params });

    // Direct GA4 gtag if loaded
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params);
    }

    if (isDev) {
      // eslint-disable-next-line no-console
      console.debug('[analytics]', name, params);
    }
  } catch (_) {
    // Analytics must never break the page.
  }
}
