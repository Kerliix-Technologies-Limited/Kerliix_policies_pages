import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiSearch } from 'react-icons/fi';
import SearchBar from './SearchBar';

const policies = [
  { name: "Terms of Service", link: "/terms" },
  { name: "Privacy Policy", link: "/privacy" },
  { name: "Refund & Cancellation Policy", link: "/refund" },
  { name: "Cookie Policy", link: "/cookies" },
  { name: "Acceptable Use Policy", link: "/aup" },
  { name: "Security Policy", link: "/security" },
  { name: "Data Processing / GDPR Policy", link: "/gdpr" },
  { name: "DMCA / Copyright Policy", link: "/dmca" },
  { name: "Community Guidelines", link: "/community" },
  { name: "Accessibility Statement", link: "/accessibility" },
  { name: "Disclaimer", link: "/disclaimer" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isDesktopPoliciesOpen, setIsDesktopPoliciesOpen] = useState(false);
  const [isMobilePoliciesOpen, setIsMobilePoliciesOpen] = useState(false);

  const desktopDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close desktop/mobile dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target)
      ) {
        setIsDesktopPoliciesOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setIsMobilePoliciesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setIsDesktopPoliciesOpen(false);
        setIsMobilePoliciesOpen(false);
        setIsMenuOpen(false);
        setShowSearch(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-blue-900 to-gray-900 border-b border-white/20 text-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
                alt="Kerliix Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>

            {/* Desktop Policies Dropdown */}
            <div ref={desktopDropdownRef} className="relative">
              <button
                onClick={() =>
                  setIsDesktopPoliciesOpen((prev) => !prev)
                }
                aria-haspopup="true"
                aria-expanded={isDesktopPoliciesOpen}
                className="flex items-center gap-1 hover:text-blue-400 transition"
              >
                Policies
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    isDesktopPoliciesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out
                  ${isDesktopPoliciesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
              >
                {policies.map((policy, idx) => (
                  <Link
                    key={idx}
                    to={policy.link}
                    onClick={() => setIsDesktopPoliciesOpen(false)}
                    className="block px-4 py-2 text-sm hover:bg-gray-100/70 transition"
                  >
                    {policy.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/help" className="hover:text-blue-400 transition">Help</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
          </div>

          {/* Right: Search + Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowSearch((prev) => !prev)}
              className="text-white hover:text-blue-400 focus:outline-none"
              aria-label="Search"
            >
              <FiSearch size={22} />
            </button>

            <button
              className="md:hidden text-white hover:text-blue-400 focus:outline-none"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden mt-2 bg-gradient-to-br from-blue-900 to-gray-900 border-t border-white/20 px-4 py-3 space-y-3 text-sm font-medium overflow-hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
        >
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="block hover:text-blue-400 transition"
          >
            Home
          </Link>

          {/* Mobile Policies Collapsible */}
          <div>
            <button
              onClick={() =>
                setIsMobilePoliciesOpen((prev) => !prev)
              }
              className="flex justify-between w-full items-center hover:text-blue-400 transition"
            >
              Policies
              <FiChevronDown
                className={`transition-transform duration-300 ${
                  isMobilePoliciesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`mt-2 pl-4 overflow-hidden transition-all duration-300 ease-in-out
                ${isMobilePoliciesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
            >
              {policies.map((policy, idx) => (
                <Link
                  key={idx}
                  to={policy.link}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsMobilePoliciesOpen(false);
                  }}
                  className="block hover:text-blue-400 transition py-1"
                >
                  {policy.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/help"
            onClick={() => setIsMenuOpen(false)}
            className="block hover:text-blue-400 transition"
          >
            Help
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block hover:text-blue-400 transition"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Search Bar */}
      {showSearch && <SearchBar onClose={() => setShowSearch(false)} />}
    </>
  );
      }
