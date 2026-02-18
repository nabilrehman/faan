import { motion } from 'framer-motion';

const LOGOS = [
  { name: 'Swedbank', url: '/logos/swedbank.svg' },
  { name: 'Länsförsäkringar', url: '/logos/lansforsakringar.svg' },
  { name: 'Maersk', url: '/logos/maersk.svg' },
  { name: 'reMarkable', url: '/logos/remarkable.svg' },
  { name: 'Athena Health', url: '/logos/athenahealth.svg' },
];

export const LogoBar = () => {
  return (
    <section className="relative py-16 border-b border-border-muted overflow-hidden bg-[#0d1117]">
      {/* Background Gradients/Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-500/5 blur-[100px] opacity-20"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <p className="text-center text-xs font-bold tracking-[0.2em] text-text-secondary uppercase mb-12 opacity-80">Trusted by Market Leaders</p>

        <div className="relative w-full overflow-hidden mask-fade-x">
          <div className="flex overflow-hidden fade-mask-x">
            <motion.div
              className="flex items-center"
              animate={{ x: "-50%" }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{ width: "fit-content", willChange: "transform" }}
            >
              {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center px-12 border-r border-white/10 last:border-r-0"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-all duration-300 brightness-0 invert"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
