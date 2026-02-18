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
                <div className="text-xs font-semibold text-text-secondary border border-border-default px-2 py-1 rounded bg-bg-tertiary">
                  Google Cloud Partner
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-[12px] font-bold text-text-muted uppercase tracking-[0.08em] mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/ai-agent-development" className="text-sm text-text-muted hover:text-text-primary transition-colors">AI Agent Development</Link></li>
              <li><Link to="/services/data-foundations" className="text-sm text-text-muted hover:text-text-primary transition-colors">AI-Ready Data Foundations</Link></li>
              <li><Link to="/services/agent-ops" className="text-sm text-text-muted hover:text-text-primary transition-colors">Agent Ops & Maintenance</Link></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-[12px] font-bold text-text-muted uppercase tracking-[0.08em] mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-text-muted hover:text-text-primary transition-colors">About FAAN</Link></li>
              <li><Link to="/contact" className="text-sm text-text-muted hover:text-text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div>
            <h4 className="text-[12px] font-bold text-text-muted uppercase tracking-[0.08em] mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/work" className="text-sm text-text-muted hover:text-text-primary transition-colors">Solution Blueprints</Link></li>
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

        </div>

      </div>
    </footer>
  );
};
