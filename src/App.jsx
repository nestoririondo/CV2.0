import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home";
import Blog from "./views/Blog";
import CV from "./views/CV";
import NotFound from "./views/NotFound";
import "./styles/app.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </>
  );
}

export default App;
