import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
});
