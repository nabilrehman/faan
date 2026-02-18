import { Link } from 'react-router-dom';


export const Footer = () => {
  return (
    <footer className="bg-[#010409] border-t border-border-muted pt-20 pb-8 mt-auto">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

          {/* Col 1: Newsletter */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6 group">
              <div className="flex items-center gap-3">
                <div className="relative w-[38px] h-[38px] overflow-hidden flex-shrink-0 rounded-[6px]">
                  <img
                    src="/branding/icon-faan.png"
                    alt="Faan Logo"
                    className="w-full h-full object-cover scale-[1.35]"
                  />
                </div>
                <span className="text-[24px] font-extrabold text-text-primary tracking-[-0.02em] group-hover:text-accent-blue transition-colors">
                  faan<span className="text-accent-blue font-extrabold">.ai</span>
                </span>
              </div>
            </Link>
            <h3 className="text-base font-semibold text-text-primary mb-2">Subscribe to our newsletter</h3>
            <p className="text-sm text-text-muted mb-6 max-w-sm">Get insights on cloud, data, and AI delivered monthly.</p>

            <form className="flex w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-bg-primary border border-border-default border-r-0 rounded-l-lg px-4 py-2.5 text-text-secondary placeholder:text-text-placeholder focus:outline-none focus:border-accent-blue z-10 relative"
                required
              />
              <button
                type="submit"
                className="bg-accent-green hover:bg-accent-greenHover text-white font-medium px-4 py-2.5 rounded-r-lg transition-colors z-20"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-8 flex items-center space-x-6">
              <div className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity">
                {/* Google Cloud Partner Badge Placeholder - using text for now until SVG provided */}
                <div className="text-xs font-semibold text-text-secondary border border-border-default px-2 py-1 rounded bg-bg-tertiary">
                  Google Cloud Partner
                </div>
              </div>
              <div className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity">
                <div className="text-xs font-semibold text-text-secondary border border-border-default px-2 py-1 rounded bg-bg-tertiary">
                  SOC 2 Type II
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-[12px] font-bold text-text-muted uppercase tracking-[0.08em] mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/cloud" className="text-sm text-text-muted hover:text-text-primary transition-colors">Cloud Architecture</Link></li>
              <li><Link to="/services/data" className="text-sm text-text-muted hover:text-text-primary transition-colors">Data + Analytics</Link></li>
              <li><Link to="/services/ai" className="text-sm text-text-muted hover:text-text-primary transition-colors">AI + Machine Learning</Link></li>
              <li><Link to="/services/training" className="text-sm text-text-muted hover:text-text-primary transition-colors">Training</Link></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-[12px] font-bold text-text-muted uppercase tracking-[0.08em] mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-text-muted hover:text-text-primary transition-colors">About FAAN</Link></li>
              <li><Link to="/careers" className="text-sm text-text-muted hover:text-text-primary transition-colors">Careers</Link></li>
              <li><Link to="/partners" className="text-sm text-text-muted hover:text-text-primary transition-colors">Partners</Link></li>
              <li><Link to="/contact" className="text-sm text-text-muted hover:text-text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div>
            <h4 className="text-[12px] font-bold text-text-muted uppercase tracking-[0.08em] mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/work" className="text-sm text-text-muted hover:text-text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/docs" className="text-sm text-text-muted hover:text-text-primary transition-colors">Documentation</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-muted pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center text-xs text-text-placeholder">
            <span>&copy; {new Date().getFullYear()} FAAN. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/terms" className="text-xs text-text-placeholder hover:text-text-muted transition-colors">Terms</Link>
            <Link to="/privacy" className="text-xs text-text-placeholder hover:text-text-muted transition-colors">Privacy</Link>
            <button className="text-xs text-text-placeholder hover:text-text-muted transition-colors">Cookie Settings</button>
            <Link to="/sitemap" className="text-xs text-text-placeholder hover:text-text-muted transition-colors">Sitemap</Link>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-text-placeholder hover:text-text-primary transition-colors" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="text-text-placeholder hover:text-text-primary transition-colors" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" className="text-text-placeholder hover:text-text-primary transition-colors" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
