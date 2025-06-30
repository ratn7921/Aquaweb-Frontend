import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-cyan-900 via-blue-900 to-cyan-700 text-white border-t border-cyan-700/40 shadow-inner z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Navigation Links with icons */}
        <nav className="flex gap-8 mb-2 md:mb-0">
          <Link to="/dashboard-user" className="flex flex-col items-center hover:text-cyan-300 transition">
            <span className="text-xl md:text-2xl">⚓</span>
            <span className="text-xs font-semibold tracking-wide">Home</span>
          </Link>
          <Link to="/trip" className="flex flex-col items-center hover:text-cyan-300 transition">
            <span className="text-xl md:text-2xl">🗺️</span>
            <span className="text-xs font-semibold tracking-wide">Trip</span>
          </Link>
          <Link to="/report-sighting" className="flex flex-col items-center hover:text-cyan-300 transition">
            <span className="text-xl md:text-2xl">🐳</span>
            <span className="text-xs font-semibold tracking-wide"> Sighting</span>
          </Link>
          <Link to="/report-incident" className="flex flex-col items-center hover:text-cyan-300 transition">
            <span className="text-xl md:text-2xl">🚨</span>
            <span className="text-xs font-semibold tracking-wide">Incident</span>
          </Link>
        </nav>
        {/* Legal & Copyright */}
        <div className="text-xs text-cyan-100 text-center md:text-right">
          <div>
            © {new Date().getFullYear()} AquaWeb. All rights reserved.
          </div>
          <div>
            <Link to="/license" className="underline hover:text-cyan-300 transition">License</Link>
            {" | "}
            <Link to="/privacy" className="underline hover:text-cyan-300 transition">Privacy Policy</Link>
            {" | "}
            <Link to="/terms" className="underline hover:text-cyan-300 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer