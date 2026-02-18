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

export const Partners = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. Hero Section */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-24 px-4 overflow-hidden hero-gradient">
        <div className="relative z-10 max-w-[900px] w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge variant="status-purple" className="mb-6 mx-auto tracking-widest px-4 py-1">OUR PARTNERS</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-text-primary mb-6 tracking-tight leading-[1.1]"
          >
            Powered by the best <br /> in the industry.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-text-muted leading-relaxed mx-auto max-w-2xl"
          >
            We partner with leading cloud, data, and AI platforms to deliver robust, scalable solutions for our enterprise clients.
          </motion.p>
        </div>
      </section>

      {/* 2. Featured Partner: Google Cloud */}
      <section className="bg-bg-primary py-24 border-t border-border-default">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <FadeInWhenVisible>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center font-bold text-black border border-border-default p-2">
                    {/* Placeholder for GCP Logo */}
                    GCP
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-text-primary">Google Cloud</h2>
                    <p className="text-accent-green font-mono text-sm max-w-max mt-1">$ Premier Partner</p>
                  </div>
                </div>

                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  As a multiple-time Google Cloud Partner of the Year, we hold unparalleled expertise across the entire GCP stack. We've earned specializations in Data Analytics, Machine Learning, Cloud Migration, and Infrastructure.
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex justify-between items-center py-3 border-b border-border-default">
                    <span className="text-text-primary font-medium">Data Analytics Specialization</span>
                    <Badge variant="status-green">Achieved</Badge>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border-default">
                    <span className="text-text-primary font-medium">Machine Learning Specialization</span>
                    <Badge variant="status-green">Achieved</Badge>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border-default">
                    <span className="text-text-primary font-medium">Infrastructure Specialization</span>
                    <Badge variant="status-green">Achieved</Badge>
                  </div>
                </div>

                <Button variant="primary" href="/contact">Engage our GCP Experts</Button>
              </FadeInWhenVisible>
            </div>

            <div className="lg:w-1/2 w-full">
              <FadeInWhenVisible delay={0.2}>
                {/* Visual representing GCP Architecture */}
                <div className="w-full aspect-video bg-bg-secondary border border-border-default rounded-xl p-8 shadow-2xl relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#0d1117] bg-[radial-gradient(ellipse_at_center,rgba(45,186,78,0.1)_0%,transparent_100%)]"></div>
                  <div className="relative z-10 w-full h-full border border-border-muted bg-[#161b22] rounded-lg p-6 font-mono text-sm text-text-muted flex flex-col justify-between shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <div className="flex justify-between items-center border-b border-border-muted pb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#f85149]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#d29922]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#2dba4e]"></div>
                      </div>
                      <div className="text-xs">europe-west1-d</div>
                    </div>
                    <div className="space-y-4 mt-6 flex-grow">
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 rounded bg-bg-primary border border-border-default flex items-center justify-center">BQ</span>
                        <div className="h-1 bg-gradient-to-r from-accent-green to-accent-blue flex-grow rounded"></div>
                        <span className="w-16 h-8 rounded bg-bg-primary text-text-primary border border-accent-blue/50 shadow-[0_0_10px_rgba(88,166,255,0.2)] flex items-center justify-center">Vertex AI</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 rounded bg-bg-primary border border-border-default flex items-center justify-center text-text-muted">CS</span>
                        <div className="h-1 bg-border-default flex-grow rounded"></div>
                        <span className="w-8 h-8 rounded bg-bg-primary border border-border-default flex items-center justify-center text-text-muted">DF</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Partner Logo Grid */}
      <section className="bg-bg-secondary py-24 border-t border-border-default">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">Our Technology Ecosystem</h2>
          </FadeInWhenVisible>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FadeInWhenVisible delay={0.1}>
              <div className="bg-bg-primary border border-border-default h-32 rounded-xl flex items-center justify-center p-6 hover:border-accent-blue transition-colors cursor-pointer group">
                <div className="text-xl font-bold font-sans text-text-secondary group-hover:text-text-primary transition-colors">Looker</div>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <div className="bg-bg-primary border border-border-default h-32 rounded-xl flex items-center justify-center p-6 hover:border-accent-blue transition-colors cursor-pointer group">
                <div className="text-xl font-bold font-serif text-text-secondary group-hover:text-text-primary transition-colors italic">dbt</div>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3}>
              <div className="bg-bg-primary border border-border-default h-32 rounded-xl flex items-center justify-center p-6 hover:border-accent-blue transition-colors cursor-pointer group">
                <div className="text-xl font-bold font-mono text-text-secondary group-hover:text-text-primary transition-colors">Snowflake</div>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.4}>
              <div className="bg-bg-primary border border-border-default h-32 rounded-xl flex items-center justify-center p-6 hover:border-accent-blue transition-colors cursor-pointer group">
                <div className="text-xl font-bold font-sans text-text-secondary group-hover:text-text-primary transition-colors">Fivetran</div>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.5}>
              <div className="bg-bg-primary border border-border-default h-32 rounded-xl flex items-center justify-center p-6 hover:border-accent-blue transition-colors cursor-pointer group">
                <div className="text-xl font-bold font-sans text-text-secondary group-hover:text-text-primary transition-colors">Confluent</div>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.6}>
              <div className="bg-bg-primary border border-border-default h-32 rounded-xl flex items-center justify-center p-6 hover:border-accent-blue transition-colors cursor-pointer group">
                <div className="text-xl font-bold font-sans text-text-secondary group-hover:text-text-primary transition-colors">HashiCorp</div>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.7}>
              <div className="bg-bg-primary border border-border-default h-32 rounded-xl flex items-center justify-center p-6 hover:border-accent-blue transition-colors cursor-pointer group">
                <div className="text-xl font-bold font-sans text-text-secondary group-hover:text-text-primary transition-colors">Datadog</div>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.8}>
              <div className="bg-bg-primary border border-border-default h-32 rounded-xl flex items-center justify-center p-6 hover:border-accent-blue transition-colors cursor-pointer group">
                <div className="text-xl font-bold font-sans text-text-secondary group-hover:text-text-primary transition-colors">GitLab</div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="bg-bg-primary py-32 border-t border-border-default text-center px-6">
        <FadeInWhenVisible>
          <h2 className="text-4xl font-bold text-text-primary mb-6">Build with the best tools.</h2>
          <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
            Our engineers are certified experts across the modern data and AI stack. Let's architect your solution.
          </p>
          <Button variant="primary" size="lg" href="/contact">Start a Conversation</Button>
        </FadeInWhenVisible>
      </section>

    </div>
  );
};
