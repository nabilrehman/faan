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

export const About = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. Hero Section */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-24 px-4 overflow-hidden hero-gradient">
        <div className="relative z-10 max-w-[800px] w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge variant="status-green" className="mb-6 mx-auto tracking-widest px-4 py-1">ABOUT FAAN</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-text-primary mb-6 tracking-tight leading-[1.1]"
          >
            Built by a Google <br /> Cloud insider.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-text-muted leading-relaxed mx-auto max-w-2xl"
          >
            FAAN was founded to bring deep Google Cloud expertise directly to enterprises building production AI systems.
          </motion.p>
        </div>
      </section>

      {/* 2. Founder Story */}
      <section className="bg-bg-primary py-24 border-t border-border-default">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <FadeInWhenVisible>
                <div className="w-full max-w-md aspect-square bg-[#161b22] border border-border-default rounded-xl overflow-hidden relative mx-auto lg:mx-0">
                  <img
                    src="/team/nabil.jpg"
                    alt="Nabil Rehman, Founder"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-accent-blue to-accent-purple text-white text-6xl font-bold">
                    NR
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-40"></div>
                </div>
              </FadeInWhenVisible>
            </div>
            <div className="lg:w-1/2">
              <FadeInWhenVisible delay={0.1}>
                <h2 className="text-3xl font-bold text-text-primary mb-6">The Founder</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  FAAN is led by <strong className="text-text-primary">Nabil Rehman</strong>, a Google Cloud expert with over 10 years of experience helping enterprises adopt cloud, data, and AI technologies.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Over his career, Nabil has worked with 300+ enterprise customers across 20+ industries—guiding them through cloud migrations, data platform builds, and production AI deployments on Google Cloud.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  He founded FAAN to take that deep insider knowledge and apply it directly: building production AI agents for companies that want to move fast without the overhead of large consultancies.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#161b22] border border-border-default rounded-xl p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold font-mono text-accent-green mb-1">300+</div>
                    <div className="text-sm text-text-muted font-medium">Enterprise Customers</div>
                  </div>
                  <div className="bg-[#161b22] border border-border-default rounded-xl p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold font-mono text-accent-blue mb-1">10+ yrs</div>
                    <div className="text-sm text-text-muted font-medium">Google Cloud Experience</div>
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why FAAN */}
      <section className="bg-bg-secondary py-24 border-t border-border-default">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-text-primary mb-4 text-center">Why FAAN</h2>
            <p className="text-lg text-text-muted text-center mb-12 max-w-2xl mx-auto">What makes us different from the big consultancies.</p>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInWhenVisible delay={0.1}>
              <div className="bg-bg-primary border border-border-default rounded-xl p-8 h-full">
                <div className="text-accent-blue font-bold text-xl mb-4 font-mono">01.</div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Google Cloud Depth</h3>
                <p className="text-text-secondary leading-relaxed">Not a generalist shop. We focus exclusively on Google Cloud—Vertex AI, BigQuery, Gemini, Cloud Run. Deep expertise means faster, better outcomes.</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <div className="bg-bg-primary border border-border-default rounded-xl p-8 h-full">
                <div className="text-accent-green font-bold text-xl mb-4 font-mono">02.</div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Fixed Price, Fixed Timeline</h3>
                <p className="text-text-secondary leading-relaxed">No open-ended T&M engagements that balloon in scope. You get a clear proposal, fixed cost, and a production deployment in 6 weeks.</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3}>
              <div className="bg-bg-primary border border-border-default rounded-xl p-8 h-full">
                <div className="text-accent-purple font-bold text-xl mb-4 font-mono">03.</div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Founder-Led Delivery</h3>
                <p className="text-text-secondary leading-relaxed">You work directly with senior engineers, not junior staff. The founder is hands-on in every engagement—no bait-and-switch.</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* 4. Our Approach */}
      <section className="bg-bg-primary py-24 border-t border-border-default">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">How We Operate</h2>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInWhenVisible delay={0.1}>
              <div className="bg-[#161b22] border border-border-default rounded-xl p-8 h-full">
                <div className="text-accent-blue font-bold text-xl mb-4 font-mono">01.</div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Technical Ground Truth</h3>
                <p className="text-text-secondary leading-relaxed">We validate our architectures with code, benchmarks, and rigorous testing before recommending them to clients.</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <div className="bg-[#161b22] border border-border-default rounded-xl p-8 h-full">
                <div className="text-accent-green font-bold text-xl mb-4 font-mono">02.</div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Enablement over Dependence</h3>
                <p className="text-text-secondary leading-relaxed">Our goal is to build your internal capabilities. We co-develop alongside your teams and provide deep technical training.</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3}>
              <div className="bg-[#161b22] border border-border-default rounded-xl p-8 h-full">
                <div className="text-accent-purple font-bold text-xl mb-4 font-mono">03.</div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Security by Default</h3>
                <p className="text-text-secondary leading-relaxed">In an era of Gen AI, data governance is paramount. We bake zero-trust principles and tight IAM constraints into every layer.</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="bg-bg-secondary py-32 border-t border-border-default text-center px-6">
        <FadeInWhenVisible>
          <h2 className="text-4xl font-bold text-text-primary mb-6">Ready to build your AI agent?</h2>
          <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
            Let's discuss your use case and map the fastest path to production on Google Cloud.
          </p>
          <Button variant="primary" size="lg" href="/contact">Book a Discovery Call</Button>
        </FadeInWhenVisible>
      </section>

    </div>
  );
};
