import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App.jsx';

/**
 * Build-time entry. `scripts/prerender.mjs` calls this once per route and
 * writes the result into the HTML shell, so every URL is served with its
 * real content instead of an empty <div id="root">.
 *
 * Nothing here touches the DOM: every browser API in the tree sits inside
 * an effect or an event handler, and effects do not run on the server.
 */
export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
}

// Re-exported so the prerenderer reads the route table through the same
// bundle as the components do, rather than resolving the source tree a
// second time with different module resolution.
export { ROUTES } from './lib/routes';
export { SITE_URL } from './lib/siteConfig';
