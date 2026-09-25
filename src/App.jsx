import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';
import SiteBackground from './common/SiteBackground';
import CustomCursor from './common/CustomCursor';
import { BookingProvider } from './common/BookingContext';
import { trackPageview } from './lib/analytics';
import { LocaleProvider, localeFromPath } from './i18n';
import { SERVICE_PAGES } from './content/services';
import { LEGAL_PAGES } from './content/legal';
import { getRoute } from './lib/routes';
import { applyRouteHead } from './lib/seo';

/**
 * Router-aware shell. It has to live inside the router (it reads the
 * location to pick the locale), which is why the Router itself is created
 * by the entry points — BrowserRouter on the client, StaticRouter during
 * the prerender.
 */
function App() {
  const { pathname } = useLocation();
  const locale = localeFromPath(pathname);
  const route = getRoute(pathname);

  // The head is already correct in the served HTML; this keeps it correct
  // after a client-side navigation between routes.
  useEffect(() => {
    applyRouteHead(route, locale);
  }, [route, locale]);

  useEffect(() => {
    trackPageview();
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <LocaleProvider locale={locale}>
      <div className="relative min-h-screen overflow-x-clip bg-trWhite font-outfit text-darkBlue antialiased">
        <SiteBackground />
        <CustomCursor />
        <BookingProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/en" element={<HomePage />} />
            <Route path="/en/" element={<HomePage />} />
            {SERVICE_PAGES.map((page) => (
              <Route
                key={page.slug}
                path={page.path}
                element={<ServicePage slug={page.slug} />}
              />
            ))}
            {SERVICE_PAGES.map((page) => (
              <Route
                key={`en-${page.slug}`}
                path={`/en${page.path}`}
                element={<ServicePage slug={page.slug} />}
              />
            ))}
            {LEGAL_PAGES.map((page) => (
              <Route
                key={page.slug}
                path={page.path}
                element={<LegalPage slug={page.slug} />}
              />
            ))}
            {LEGAL_PAGES.map((page) => (
              <Route
                key={`en-${page.slug}`}
                path={`/en${page.path}`}
                element={<LegalPage slug={page.slug} />}
              />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BookingProvider>
      </div>
    </LocaleProvider>
  );
}

export default App;
