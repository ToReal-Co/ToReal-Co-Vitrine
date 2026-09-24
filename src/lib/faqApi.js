const API_BASE =
  (import.meta.env.VITE_BOOKING_API_URL || 'http://localhost:4000/api/website').replace(/\/$/, '');

/**
 * Returns the CMS FAQ list, or null if it's empty/unreachable — the caller
 * falls back to its own bundled defaults so the site never looks broken.
 */
export async function getCmsFaq() {
  try {
    const res = await fetch(`${API_BASE}/faq`);
    if (!res.ok) return null;
    const data = await res.json();
    const items = data?.items;
    return Array.isArray(items) && items.length > 0 ? items : null;
  } catch {
    return null;
  }
}
