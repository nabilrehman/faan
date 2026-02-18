import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

const FadeInWhenVisible = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px 0px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 }
      }}
    >
      {children}
    </motion.div>
  );
};

export const Careers = () => {
  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">

      {/* 1. Hero */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden hero-gradient border-b border-border-default text-center">
        <div className="max-w-[800px] w-full mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="status-blue" className="mb-6 mx-auto tracking-widest px-4 py-1 bg-accent-blue/10 text-accent-blue">CAREERS</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-text-primary mb-6 tracking-tight leading-[1.1]"
          >
            Build what's next.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-text-muted leading-relaxed mx-auto max-w-2xl mb-10"
          >
            Join a collective of elite engineers solving the hard problems in data, cloud architecture, and applied AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button variant="primary" size="lg" href="#open-roles">See Open Roles</Button>
          </motion.div>
        </div>
      </section>

      {/* 2. Benefits */}
      <section className="py-24 max-w-[1280px] mx-auto px-6">
        <FadeInWhenVisible>
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">Why FAAN?</h2>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FadeInWhenVisible delay={0.1}>
            <div className="bg-bg-secondary border border-border-default rounded-xl p-6 h-full hover:border-[#8b949e] transition-colors">
              <div className="text-2xl mb-4">💻</div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Remote-First</h3>
              <p className="text-sm text-text-secondary">Work from anywhere. We provide a top-tier home office stipend and high-end hardware.</p>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.2}>
            <div className="bg-bg-secondary border border-border-default rounded-xl p-6 h-full hover:border-[#8b949e] transition-colors">
              <div className="text-2xl mb-4">🧠</div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Continuous Learning</h3>
              <p className="text-sm text-text-secondary">Generous educational stipends. We cover certification costs (Google Cloud, dbt, etc.) fully.</p>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.3}>
            <div className="bg-bg-secondary border border-border-default rounded-xl p-6 h-full hover:border-[#8b949e] transition-colors">
              <div className="text-2xl mb-4">🏥</div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Comprehensive Health</h3>
              <p className="text-sm text-text-secondary">Premium medical, dental, and vision coverage for you and your dependents with 0 deductible.</p>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.4}>
            <div className="bg-bg-secondary border border-border-default rounded-xl p-6 h-full hover:border-[#8b949e] transition-colors">
              <div className="text-2xl mb-4">📈</div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Equity & 401k</h3>
              <p className="text-sm text-text-secondary">Competitive base compensation, profit-sharing, and a 401(k) match up to 6%.</p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* 3. Open Roles */}
      <section id="open-roles" className="bg-bg-secondary py-24 border-t border-border-default scroll-mt-24">
        <div className="max-w-[1000px] mx-auto px-6">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-text-primary mb-12">Open Positions</h2>
          </FadeInWhenVisible>

          <div className="space-y-4">

            {/* Role Item */}
            <FadeInWhenVisible delay={0.1}>
              <a href="/contact" className="block bg-bg-primary border border-border-default rounded-xl p-6 hover:border-accent-blue hover:shadow-lg transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-blue transition-colors">Senior Lead AI Architect</h3>
                      <Badge variant="status-purple">New</Badge>
                    </div>
                    <div className="flex space-x-4 text-sm text-text-muted font-mono">
                      <span>Engineering</span>
                      <span>•</span>
                      <span>Remote (US)</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-accent-blue font-medium group-hover:translate-x-1 inline-block transition-transform">View Details &rarr;</span>
                  </div>
                </div>
              </a>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <a href="/contact" className="block bg-bg-primary border border-border-default rounded-xl p-6 hover:border-accent-blue hover:shadow-lg transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-blue transition-colors">Senior Data Engineer (BigQuery/dbt)</h3>
                    </div>
                    <div className="flex space-x-4 text-sm text-text-muted font-mono">
                      <span>Data + Analytics</span>
                      <span>•</span>
                      <span>Remote (EMEA)</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-accent-blue font-medium group-hover:translate-x-1 inline-block transition-transform">View Details &rarr;</span>
                  </div>
                </div>
              </a>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <a href="/contact" className="block bg-bg-primary border border-border-default rounded-xl p-6 hover:border-accent-blue hover:shadow-lg transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-blue transition-colors">Cloud Infrastructure Consultant</h3>
                    </div>
                    <div className="flex space-x-4 text-sm text-text-muted font-mono">
                      <span>Cloud Architecture</span>
                      <span>•</span>
                      <span>Remote (US/CAN)</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-accent-blue font-medium group-hover:translate-x-1 inline-block transition-transform">View Details &rarr;</span>
                  </div>
                </div>
              </a>
            </FadeInWhenVisible>

          </div>

          <FadeInWhenVisible delay={0.4}>
            <div className="mt-12 text-center p-8 border border-border-default border-dashed rounded-xl bg-bg-primary">
              <p className="text-text-secondary mb-4">Don't see your specific role? We're always interested in exceptional talent.</p>
              <Button variant="link" href="/contact">Send us a speculative application</Button>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

    </div>
  );
};
