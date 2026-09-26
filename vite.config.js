import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

/** Injects an early GET into index.html so the booking API wakes before React. */
function wakeBookingApiHtml(apiBase) {
  const base = String(apiBase || '').replace(/\/$/, '');
  if (!base) return null;

  let origin = '';
  try {
    origin = new URL(base).origin;
  } catch {
    origin = '';
  }

  const snippet = [
    origin
      ? `    <link rel="preconnect" href="${origin}" crossorigin />\n    <link rel="dns-prefetch" href="${origin}" />`
      : '',
    `    <script>`,
    `      (function () {`,
    `        try {`,
    `          var d = new Date();`,
    `          var m = String(d.getMonth() + 1).padStart(2, '0');`,
    `          var day = String(d.getDate()).padStart(2, '0');`,
    `          var iso = d.getFullYear() + '-' + m + '-' + day;`,
    `          fetch(${JSON.stringify(base + '/availability?date=')} + encodeURIComponent(iso), {`,
    `            method: 'GET',`,
    `            keepalive: true,`,
    `          }).catch(function () {});`,
    `        } catch (e) {}`,
    `      })();`,
    `    </script>`,
  ]
    .filter(Boolean)
    .join('\n');

  return {
    name: 'wake-booking-api-html',
    transformIndexHtml(html) {
      return html.replace(
        '<link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />',
        `<link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />\n${snippet}`
      );
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const wakePlugin = wakeBookingApiHtml(env.VITE_BOOKING_API_URL);

  return {
    plugins: [react(), wakePlugin].filter(Boolean),
    build: {
      // Source maps stay out of production: they add weight to the deploy and
      // hand the full source tree to anyone who asks for it.
      sourcemap: false,
      // three.js already ships as its own lazy chunk, so the remaining
      // warnings would only be noise at this size.
      chunkSizeWarningLimit: 700,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes('node_modules')) return undefined;
            // three.js is pulled in by a dynamic import and must stay in its
            // own chunk — folding it into the vendor bundle would put it back
            // on the critical path.
            if (id.includes('three')) return 'three';
            if (id.includes('react-router')) return 'router';
            if (id.includes('react-dom') || id.includes('/react/') || id.includes('scheduler')) {
              return 'react';
            }
            return 'vendor';
          },
        },
      },
    },
  };
});
