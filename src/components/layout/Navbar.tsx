import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

const SERVICES_LINKS = [
  {
    title: 'AI Agents',
    links: [
      { name: 'AI Agent Development', href: '/services/ai-agent-development' },
    ]
  },
  {
    title: 'Data',
    links: [
      { name: 'AI-Ready Data Foundations', href: '/services/data-foundations' },
    ]
  },
  {
    title: 'Operations',
    links: [
      { name: 'Agent Ops & Maintenance', href: '/services/agent-ops' },
    ]
  }
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const location = useLocation();

  const handleMouseEnter = (menuId: string) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setActiveDropdown(menuId), 100);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-[1000] bg-[#0d1117]/80 backdrop-blur-md border-b border-border-default transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="relative w-[38px] h-[38px] overflow-hidden flex-shrink-0 rounded-[6px]">
            <img
              src="/branding/icon-faan.png"
              alt="Faan Logo"
              className="w-full h-full object-cover scale-[1.35] group-hover:scale-[1.4] transition-transform duration-200"
            />
          </div>
          <span className="text-[24px] font-extrabold text-text-primary tracking-[-0.02em] group-hover:text-accent-blue transition-colors">
            faan<span className="text-accent-blue font-extrabold">.ai</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 ml-10 flex-1 justify-center">

          {/* Services Megamenu */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/services"
              className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${location.pathname.includes('/services') ? 'text-text-primary border-[#f78166]' : 'text-text-secondary border-transparent hover:text-text-primary'}`}
            >
              Services <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </Link>

            <AnimatePresence>
              {activeDropdown === 'services' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[720px]"
                >
                  <div className="bg-[#161b22] border border-border-default rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.4)] overflow-hidden relative">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#161b22] border-t border-l border-border-default rotate-45"></div>

                    <div className="p-6 grid grid-cols-3 gap-6 relative bg-[#161b22] z-10">
                      {SERVICES_LINKS.map((section, idx) => (
                        <div key={idx} className={`${idx !== 2 ? 'border-r border-border-muted pr-6' : ''}`}>
                          <h4 className="text-[12px] font-bold text-text-muted uppercase tracking-[0.08em] mb-4">
                            {section.title}
                          </h4>
                          <ul className="space-y-3">
                            {section.links.map((link) => (
                              <li key={link.name}>
                                <Link to={link.href} className="text-sm text-text-secondary hover:text-accent-blue transition-colors block">
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="bg-bg-tertiary p-4 border-t border-border-default relative z-10 flex items-center justify-between group">
                      <div className="flex items-center text-sm font-semibold text-text-primary">
                        <span className="bg-accent-purple/20 p-1.5 rounded-md mr-3 text-accent-purple group-hover:scale-110 transition-transform">
                          <Sparkles size={16} />
                        </span>
                        New: AI Agent Development
                      </div>
                      <span className="text-accent-blue font-medium text-sm group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/work" className={`px-4 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${location.pathname.includes('/work') ? 'text-text-primary border-[#f78166]' : 'text-text-secondary border-transparent hover:text-text-primary'}`}>Our Work</Link>
          <Link to="/about" className={`px-4 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${location.pathname.includes('/about') ? 'text-text-primary border-[#f78166]' : 'text-text-secondary border-transparent hover:text-text-primary'}`}>About</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <Button variant="primary" size="sm" href="/contact">
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-text-secondary hover:text-text-primary focus:outline-none"
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
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-bg-primary border-t border-border-default overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-6">
              <div className="flex flex-col space-y-4 text-lg font-semibold">
                <Link to="/services" className="text-text-primary pb-2 border-b border-border-muted flex justify-between">Services <ChevronDown size={20} /></Link>
                <Link to="/work" className="text-text-primary pb-2 border-b border-border-muted">Our Work</Link>
                <Link to="/about" className="text-text-primary pb-2 border-b border-border-muted">About</Link>
              </div>
              <Button variant="primary" className="w-full" href="/contact">Let's Talk</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
