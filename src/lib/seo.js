/** Creates or updates a <script type="application/ld+json"> tag in <head>, keyed by id. */
export function setJsonLd(id, data) {
  if (typeof document === 'undefined') return;

  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}
