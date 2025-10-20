import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SocialIcons from "./SocialIcons";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/blog", name: "Blog" },
    { path: "/resume", name: "Resume" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
          <div className="w-20 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-[0_0_10px_rgba(147,51,234,0.6)] animate-blink">
            AS. | Dev
          </div>
          <span className="font-semibold text-lg text-white group-hover:text-indigo-300 transition">
            Ahammad Sabik
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-white px-3 py-2 rounded-md bg-white/10"
                  : "text-gray-300 px-3 py-2 rounded-md hover:bg-white/5 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Social Icons + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <SocialIcons />
          <button
            aria-label="Toggle menu"
            onClick={toggleMenu}
            className="md:hidden p-2 bg-white/10 rounded-md hover:bg-white/20 transition"
          >
            {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/80 border-t border-white/10 backdrop-blur-lg overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center space-y-2 text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-white px-4 py-2 rounded-md bg-white/10 w-40 text-center transition"
                  : "text-gray-300 px-4 py-2 rounded-md hover:bg-white/5 transition w-40 text-center"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
