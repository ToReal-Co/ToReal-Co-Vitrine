const API_BASE =
  (import.meta.env.VITE_BOOKING_API_URL || 'http://localhost:4000/api/website').replace(/\/$/, '');

/**
 * Returns the CMS project list, or null if it's empty/unreachable — the caller
 * falls back to its own bundled defaults so the site never looks broken.
 */
export async function getCmsProjects() {
  try {
    const res = await fetch(`${API_BASE}/projects`);
    if (!res.ok) return null;
    const data = await res.json();
    const projects = data?.projects;
    return Array.isArray(projects) && projects.length > 0 ? projects : null;
  } catch {
    return null;
  }
}
