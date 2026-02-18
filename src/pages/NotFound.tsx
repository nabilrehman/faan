import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-bg-primary px-6 text-center hero-gradient relative overflow-hidden">

      {/* Background Graphic */}
      <div className="absolute inset-0 flexItems-center justify-center opacity-10 pointer-events-none">
        <div className="text-[300px] font-bold font-mono tracking-tighter text-accent-purple">404</div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-lg mx-auto"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-text-primary mb-6 tracking-tight font-mono text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-accent-blue to-accent-green">
          404
        </h1>
        <h2 className="text-3xl font-bold text-text-primary mb-6">Page not found</h2>
        <p className="text-lg text-text-secondary leading-relaxed mb-10">
          The requested resource could not be located. It may have been moved, deleted, or you may have typed the URL incorrectly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" href="/">Return to Homepage</Button>
          <Button variant="secondary" size="lg" href="/contact">Contact Support</Button>
        </div>
      </motion.div>
    </div>
  );
};
