import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ transparent = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cpaDropdownOpen, setCpaDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const BOOKING_URL = 'https://fantastical.app/mattlafleur/forest-city-cpa';

  const cpaSubLinks = [
    { name: 'Nonprofit', path: '/cpa/nonprofit' },
    { name: 'Tax Planning', path: '/cpa/tax-planning' },
    { name: 'Individual Taxes', path: '/individual-tax-preparation' },
    { name: 'Financial Health', path: '/cpa/financial-health' },
    { name: 'Health Check', path: '/cpa/financial-visibility-check' },
  ];

  const navLinks = [
    { name: 'AI', path: '/ai' },
    { name: 'CPA', path: '/cpa', sub: cpaSubLinks },
    { name: 'Consulting', path: '/consulting' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // When transparent + scrolled, give the header a solid dark background so headings never render on top of nav.
  const solidOnScroll = transparent && scrolled;
  const headerBg = solidOnScroll
    ? 'bg-[#0F1820]/95 backdrop-blur-md border-b border-white/10'
    : transparent
      ? 'bg-transparent'
      : 'bg-white border-b border-border';
  const textColor = transparent && !solidOnScroll ? 'text-white' : transparent ? 'text-white' : 'text-foreground';

  return (
    <header className={`absolute md:fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <span className={`serif-heading text-3xl sm:text-2xl ${textColor}`}>Forest City</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) =>
              link.sub ? (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setCpaDropdownOpen(true)}
                  onMouseLeave={() => setCpaDropdownOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`text-sm lg:text-base font-medium transition-all duration-200 inline-flex items-center gap-1 pb-1 ${
                      isActive(link.path) || cpaDropdownOpen
                        ? transparent ? 'text-white border-b-2 border-white' : 'text-[#477956] border-b-2 border-[#477956]'
                        : transparent ? 'text-white/80 hover:text-white' : 'text-foreground/70 hover:text-foreground'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </Link>
                  <AnimatePresence>
                    {cpaDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full pt-3 w-56"
                      >
                        <div className="bg-white shadow-xl border border-border py-2">
                          {link.sub.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className="block px-5 py-2.5 text-sm text-foreground/80 hover:text-[#477956] hover:bg-[#F9F6F0] transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm lg:text-base font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? transparent ? 'text-white border-b-2 border-white' : 'text-[#477956] border-b-2 border-[#477956]'
                      : transparent ? 'text-white/80 hover:text-white' : 'text-foreground/70 hover:text-foreground'
                  } pb-1`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <a href={BOOKING_URL} target="_blank" rel="noreferrer">
              <span className={`px-5 lg:px-6 py-2 lg:py-2.5 text-sm font-medium transition-all duration-200 inline-block text-center border-2 rounded-full ${
                transparent
                  ? 'border-white text-white hover:bg-white hover:text-[#0F1820]'
                  : 'border-[#477956] text-[#477956] hover:bg-[#477956] hover:text-white'
              }`}>
                Book a Clarity Call
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden flex-shrink-0 ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-8 h-8 sm:w-6 sm:h-6" /> : <Menu className="w-8 h-8 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border absolute w-full left-0 top-24 sm:top-20 shadow-xl"
          >
            <div className="px-8 sm:px-6 py-8 sm:py-6 space-y-6 sm:space-y-4 bg-white">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-xl sm:text-base font-medium transition-colors ${
                  isActive('/') ? 'text-[#477956]' : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 text-xl sm:text-base font-medium transition-colors ${
                      isActive(link.path) ? 'text-[#477956]' : 'text-foreground/70 hover:text-foreground'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.sub && (
                    <div className="pl-5 mt-2 space-y-3 border-l-2 border-[#477956]/20 ml-1">
                      {link.sub.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 text-base sm:text-sm text-foreground/60 hover:text-[#477956] transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6 sm:pt-4 border-t border-border/50">
                <a href={BOOKING_URL} target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)} className="block w-full">
                  <span className="w-full px-8 py-4 sm:px-6 sm:py-2.5 font-medium transition-all duration-200 inline-block text-center border-2 border-[#477956] text-[#477956] hover:bg-[#477956] hover:text-white text-lg sm:text-base rounded-full">
                    Book a Clarity Call
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
