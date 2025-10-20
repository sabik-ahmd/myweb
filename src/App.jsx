import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import ReactTips from "./pages/blogPosts/ReactTips";
import Accessibility from "./pages/blogPosts/Accessibility";
import ModernCSS from "./pages/blogPosts/ModernCSS";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-slate-100">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/react-tips" element={<ReactTips />} />
          <Route path="/blog/accessibility-web-design" element={<Accessibility />} />
          <Route path="/blog/modern-css-glassmorphism" element={<ModernCSS />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
