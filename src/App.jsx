import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SiteBackground from './common/SiteBackground';
import CustomCursor from './common/CustomCursor';
import { BookingProvider } from './common/BookingContext';
import { trackPageview } from './lib/analytics';

function App() {
  useEffect(() => {
    trackPageview();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-trWhite font-outfit text-darkBlue antialiased">
      <SiteBackground />
      <CustomCursor />
      <BookingProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </BookingProvider>
    </div>
  );
}

export default App;
