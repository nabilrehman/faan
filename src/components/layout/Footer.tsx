export const Footer = () => {
  return (
    <footer className="bg-bg-secondary border-t border-border-default py-12 mt-auto">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-black text-text-primary">FAAN</span>
            <span className="text-text-muted">·</span>
            <span className="text-sm text-text-muted">
              &copy; {new Date().getFullYear()} FAAN. All rights reserved.
            </span>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-4 text-sm text-text-muted">
            <a
              href="mailto:hello@faan.ai"
              className="hover:text-accent-green transition-colors"
            >
              hello@faan.ai
            </a>
          </div>

          {/* Fun lobster */}
          <div className="text-2xl" title="Powered by OpenClaw">
            🦞
          </div>
        </div>
      </div>
    </footer>
  );
};
