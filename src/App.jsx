import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage"; // Import the Blog Page

function App() {
  return (
    <div className="bg-trWhite font-outfit">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} /> {/* Add Blog Page */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
