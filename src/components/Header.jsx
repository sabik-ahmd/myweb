import { Link, NavLink } from 'react-router-dom'
import SocialIcons from './SocialIcons'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo with AS. */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-20 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 shadow-md 
                          flex items-center justify-center text-white font-bold text-xs sm:text-sm 
                          whitespace-nowrap hover:scale-110 transition-transform duration-300">
            AS. | Dev
          </div>
          <span className="font-semibold text-lg text-white">Ahammad Sabik</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-white px-3 py-2 rounded-md bg-white/10'
                : 'text-gray-300 px-3 py-2 rounded-md hover:bg-white/5 transition'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-white px-3 py-2 rounded-md bg-white/10'
                : 'text-gray-300 px-3 py-2 rounded-md hover:bg-white/5 transition'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? 'text-white px-3 py-2 rounded-md bg-white/10'
                : 'text-gray-300 px-3 py-2 rounded-md hover:bg-white/5 transition'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? 'text-white px-3 py-2 rounded-md bg-white/10'
                : 'text-gray-300 px-3 py-2 rounded-md hover:bg-white/5 transition'
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive
                ? 'text-white px-3 py-2 rounded-md bg-white/10'
                : 'text-gray-300 px-3 py-2 rounded-md hover:bg-white/5 transition'
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-white px-3 py-2 rounded-md bg-white/10'
                : 'text-gray-300 px-3 py-2 rounded-md hover:bg-white/5 transition'
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Social icons & mobile menu */}
        <div className="flex items-center gap-4">
          <SocialIcons />
          <div className="md:hidden">
            <button aria-label="open menu" className="px-3 py-2 bg-white/10 rounded-md hover:bg-white/20 transition">
              Menu
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
