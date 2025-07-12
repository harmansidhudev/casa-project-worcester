import React, { useState } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { 
    name: "Home", 
    href: "/" 
  },
  { 
    name: "About", 
    href: "/about",
    submenu: [
      { name: "About Us", href: "/about" },
      { name: "Meet our Team", href: "/team" },
      { name: "Meet our Board", href: "/board" },
      { name: "Newsletter", href: "/newsletter" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Employment Opportunities", href: "/careers" },
      { name: "Find a CASA Project near you", href: "/find-casa" }
    ]
  },
  { 
    name: "Volunteer", 
    href: "/volunteer",
    submenu: [
      { name: "Become a Volunteer", href: "/volunteer" },
      { name: "Volunteer Application", href: "/volunteer/application" },
      { name: "Resources for Volunteers", href: "/volunteer/resources" },
      { name: "Volunteer at a CASA Project near you", href: "/find-casa" }
    ]
  },
  { 
    name: "Events", 
    href: "/events" 
  },
  { 
    name: "News", 
    href: "/news" 
  },
  { 
    name: "Shop", 
    href: "/shop" 
  },
  { 
    name: "Blog", 
    href: "/blog" 
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-900">CASA Project</h1>
                <p className="text-xs text-gray-600">Worcester County</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(link => (
              link.submenu ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setActiveSubmenu(link.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    to={link.href}
                    className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center ${activeSubmenu === link.name ? "text-blue-700" : ""}`}
                  >
                    {link.name}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  {activeSubmenu === link.name && (
                    <div
                      className="absolute top-full left-0 -mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    >
                      {link.submenu.map(subItem => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center"
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link
              to="/donate"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              DONATE
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {NAV_LINKS.map(link => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200"
                    onClick={() => !link.submenu && setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.submenu.map(subItem => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/donate"
                className="block px-3 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                DONATE
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 