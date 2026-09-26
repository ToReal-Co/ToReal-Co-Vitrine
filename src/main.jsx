import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/600.css';
import '@fontsource/outfit/700.css';
import '@fontsource/jetbrains-mono/400.css';
import './styles/index.css';
import App from './App.jsx';
import { wakeBookingApi } from './lib/bookingApi';

// Wake the booking API as soon as the bundle runs — before React hydrates.
wakeBookingApi();

const container = document.getElementById('root');

const tree = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Production HTML arrives prerendered, so React attaches to the existing
// markup instead of throwing it away and painting a second time.
//
// The test is firstElementChild, not hasChildNodes: the dev server serves
// the raw shell, whose #root still holds the <!--app-html--> placeholder.
// That comment is a child node, so hasChildNodes would be true there and
// send an empty container down the hydration path.
if (container.firstElementChild) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
