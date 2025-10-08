import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col text-slate-100">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}