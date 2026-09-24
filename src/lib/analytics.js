const API_BASE =
  (import.meta.env.VITE_BOOKING_API_URL || 'http://localhost:4000/api/website').replace(/\/$/, '');

const VISITOR_KEY = 'trc_visitor_id';

/**
 * First-party, non-cross-site visitor id — kept only in this browser's
 * localStorage, sent only to our own API, never to a third party.
 */
function getVisitorId() {
  try {
    let id = localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  } catch {
    return 'no-storage';
  }
}

/** Fires a single pageview beacon. Best effort — never blocks or throws. */
export function trackPageview() {
  try {
    const payload = JSON.stringify({
      path: window.location.pathname + window.location.hash,
      referrer: document.referrer || undefined,
      visitorId: getVisitorId(),
    });
    const url = `${API_BASE}/track`;
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, new Blob([payload], { type: 'application/json' }));
    } else {
      fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: payload, keepalive: true }).catch(() => {});
    }
  } catch {
    // Analytics must never break the site.
  }
}
