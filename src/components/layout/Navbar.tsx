import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      // If we're on the home page, scroll to the section
      if (location.pathname === '/') {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home page with hash
        window.location.href = '/' + href;
      }
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? 'bg-[#faf7f2]/90 backdrop-blur-md shadow-sm border-b border-border-default'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
          <span className="text-[26px] font-black text-text-primary tracking-tight group-hover:text-accent-green transition-colors">
            FAAN
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-black/5"
            >
              {link.name}
            </button>
          ))}
          <Link
            to="/contact"
            className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-black/5"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center flex-shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2 bg-accent-green hover:bg-accent-greenHover text-white font-bold text-sm rounded-full transition-all duration-200 green-glow"
          >
            <Phone size={16} />
            Book a Call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-text-secondary hover:text-text-primary focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#faf7f2] border-t border-border-default overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-3 text-lg font-semibold text-text-primary hover:bg-bg-secondary rounded-xl transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <Link
                to="/contact"
                className="block w-full text-left px-4 py-3 text-lg font-semibold text-text-primary hover:bg-bg-secondary rounded-xl transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-accent-green hover:bg-accent-greenHover text-white font-bold rounded-xl transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone size={18} />
                  Book a Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
