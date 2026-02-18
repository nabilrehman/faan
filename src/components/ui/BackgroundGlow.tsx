import { motion } from 'framer-motion';

export const BackgroundGlow = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#0d1117]">
      {/* 
        Series C "Live" Background System 
        Inspired by Hume.ai (organic flow) & GitHub (deep colors)
      */}

      {/* 1. Deep Atmospheric Base (Static) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,17,23,0)_0%,#0d1117_100%)] opacity-80" />

      {/* 2. Animated Blob - Primary (Blue/Cyan) - Top Left Flow */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(6,182,212,0.4)_0%,transparent_70%)] blur-[60px] mix-blend-screen"
      />

      {/* 3. Animated Blob - Secondary (Purple/Violet) - Bottom Right Flow */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          delay: 2,
        }}
        style={{ willChange: "transform" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(139,92,246,0.3)_0%,transparent_70%)] blur-[60px] mix-blend-screen"
      />

      {/* 4. Animated Blob - Accent (Indigo) - Center/Floating */}
      <motion.div
        animate={{
          x: [-50, 50, -50],
          y: [-20, 20, -20],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          delay: 5,
        }}
        style={{ willChange: "transform" }}
        className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(59,130,246,0.3)_0%,transparent_70%)] blur-[60px] mix-blend-screen"
      />

      {/* 5. Noise Overlay for Texture (Hume.ai style) */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
    </div>
  );
};
