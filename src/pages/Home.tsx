import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { MetricCard } from '../components/ui/Cards';
import { CaseStudyCarousel } from '../components/ui/CaseStudyCarousel';
import { LogoBar } from '../components/ui/LogoBar';
import { BackgroundGlow } from '../components/ui/BackgroundGlow';

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

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <BackgroundGlow />
      <div className="relative z-10 flex flex-col w-full">
        {/* 1. Hero Section */}
        <section className="relative flex items-center justify-center min-h-screen px-4 pt-20 overflow-hidden">
          <div className="relative z-10 max-w-[1280px] w-full mx-auto flex flex-col items-center text-center mt-[-10vh]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200 mb-8 hover:bg-blue-500/20 transition-colors cursor-pointer group">
                <span className="text-sm font-medium px-1">Google Cloud Partner</span>
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center group-hover:bg-blue-400 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[48px] md:text-[64px] font-normal text-white mb-8 tracking-[-0.04em] leading-[1.1] max-w-[900px] text-balance mx-auto"
              style={{
                fontVariationSettings: '"wdth" 100, "wght" 440',
                textShadow: 'none',
              }}
            >
              Your AI and Data Partner for the Agentic AI Era
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-[20px] md:text-[24px] text-[#7d8590] mb-12 max-w-[600px] leading-relaxed mx-auto font-normal text-balance"
            >
              We help enterprises transform with Google Cloud, AI, and data—from strategy to production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center"
            >
              <Button size="lg" variant="primary" href="/contact">Start Your AI Journey</Button>
              <Button size="lg" variant="secondary" href="/services">Explore Our Services</Button>
            </motion.div>
          </div>

          {/* Abstract floating graphic */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-50 mix-blend-screen overflow-hidden">
            {/* Creating a techy abstract grid structure to simulate nodes */}
            <div className="absolute w-[600px] h-[600px] top-32 left-1/2 -translate-x-1/2 border border-border-default/30 rounded-full"></div>
            <div className="absolute w-[800px] h-[800px] top-16 left-1/2 -translate-x-1/2 border border-border-default/20 rounded-full border-dashed"></div>
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent top-1/2"></div>
          </div>
        </section>

        {/* 2. Client Logo Bar */}
        <LogoBar />

        {/* 3. Introduction Statement */}
        {/* 3. Introduction Statement */}
        <section className="relative py-32 px-6">
          <div className="max-w-[900px] mx-auto text-center relative z-10">
            <FadeInWhenVisible>
              <h2 className="text-4xl md:text-[56px] font-bold text-text-primary mb-8 leading-[1.15] tracking-tight">Built for Enterprises Ready to Lead with AI</h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                FAAN transforms your data infrastructure into an AI-ready platform—combining Google Cloud expertise, advanced analytics, and machine learning to drive measurable business impact.
              </p>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* 4. Services Overview (River Layout) */}
        {/* 4. Services Overview (River Layout) */}
        <section className="relative">

          {/* River Block 1 */}
          <div className="flex flex-col lg:flex-row min-h-[600px] border-y border-border-default/50">
            <div className="lg:w-1/2 bg-[#0a0d14] p-12 lg:p-24 flex items-center justify-center border-r border-border-default/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(45,186,78,0.06)_0%,transparent_100%)]"></div>
              <div className="w-full max-w-md aspect-square rounded-2xl border border-border-default bg-bg-secondary shadow-2xl overflow-hidden relative group-hover:border-accent-green/50 transition-colors duration-500">
                <div className="h-12 border-b border-border-default flex items-center px-4 space-x-2 bg-bg-tertiary">
                  <div className="w-3 h-3 rounded-full bg-border-default"></div>
                  <div className="w-3 h-3 rounded-full bg-border-default"></div>
                  <div className="w-3 h-3 rounded-full bg-border-default"></div>
                </div>
                <div className="p-8 font-mono text-sm text-accent-green opacity-80">
                  <p className="mb-2">$ gcloud compute instances create</p>
                  <p className="mb-2">&gt; deploying infrastructure...</p>
                  <p className="mb-2">&gt; success: ai-ready platform live</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-bg-primary/50 backdrop-blur-sm">
              <FadeInWhenVisible>
                <h3 className="text-[40px] font-bold text-text-primary mb-6 leading-[1.1] tracking-tight">Cloud Foundations & Security</h3>
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
                  We architect secure, cost-optimized landing zones on Google Cloud—ensuring your infrastructure is built for scale and AI-readiness.
                </p>
                <Button variant="link" href="/services/cloud-architecture" className="text-lg">Explore Cloud Services</Button>
              </FadeInWhenVisible>
            </div>
          </div>

          {/* River Block 2 */}
          <div className="flex flex-col-reverse lg:flex-row min-h-[600px] border-b border-border-default/50">
            <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-bg-secondary/50 backdrop-blur-sm">
              <FadeInWhenVisible>
                <h3 className="text-[40px] font-bold text-text-primary mb-6 leading-[1.1] tracking-tight">Modern Data Stack</h3>
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
                  Eliminate silos with BigQuery and dbt. We build high-performance data warehouses that fuel real-time insights in Looker.
                </p>
                <Button variant="link" href="/services/data-analytics" className="text-lg">Explore Data Services</Button>
              </FadeInWhenVisible>
            </div>
            <div className="lg:w-1/2 bg-[#090b10] p-12 lg:p-24 flex items-center justify-center border-l border-border-default/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(88,166,255,0.08)_0%,transparent_100%)]"></div>
              <div className="w-full max-w-md aspect-video rounded-xl border border-border-default bg-bg-primary shadow-2xl overflow-hidden relative group-hover:border-accent-blue/50 transition-colors duration-500 flex items-end justify-between p-6">
                {/* Abstract Bar Chart */}
                <div className="w-[12%] h-[40%] bg-accent-blue/20 rounded-t-sm"></div>
                <div className="w-[12%] h-[60%] bg-accent-blue/40 rounded-t-sm"></div>
                <div className="w-[12%] h-[30%] bg-accent-blue/20 rounded-t-sm"></div>
                <div className="w-[12%] h-[80%] bg-accent-blue/60 rounded-t-sm"></div>
                <div className="w-[12%] h-[50%] bg-accent-blue/30 rounded-t-sm"></div>
                <div className="w-[12%] h-[100%] bg-accent-blue border border-accent-blue rounded-t-sm shadow-[0_0_15px_rgba(88,166,255,0.4)]"></div>
              </div>
            </div>
          </div>

          {/* River Block 3 */}
          <div className="flex flex-col lg:flex-row min-h-[600px] border-b border-border-default/50">
            <div className="lg:w-1/2 bg-[#0d0a14] p-12 lg:p-24 flex items-center justify-center border-r border-border-default/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(188,140,255,0.08)_0%,transparent_100%)]"></div>
              {/* Abstract ML node network */}
              <div className="w-full max-w-md aspect-square relative flex items-center justify-center">
                <div className="absolute w-4 h-4 rounded-full bg-accent-purple shadow-[0_0_15px_#bc8cff] z-10"></div>
                <div className="absolute w-full h-[1px] bg-accent-purple/20 rotate-45"></div>
                <div className="absolute w-full h-[1px] bg-accent-purple/20 -rotate-45"></div>
                <div className="absolute w-full h-[1px] bg-accent-purple/20"></div>
                <div className="absolute w-[1px] h-full bg-accent-purple/20"></div>
                <div className="w-16 h-16 rounded-full border border-accent-purple/40 absolute -top-4 right-12"></div>
                <div className="w-24 h-24 rounded-full border border-accent-purple/20 absolute bottom-12 left-4"></div>
              </div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-bg-primary/50 backdrop-blur-sm">
              <FadeInWhenVisible>
                <h3 className="text-[40px] font-bold text-text-primary mb-6 leading-[1.1] tracking-tight">Production-Grade AI & MLOps</h3>
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
                  From Generative AI agents to predictive models—we deploy secure, scalable AI solutions using Vertex AI and Gemini.
                </p>
                <Button variant="link" href="/services/ai" className="text-lg">Explore AI Services</Button>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* 5. Key Metrics */}
        <section className="bg-bg-secondary/30 backdrop-blur-md py-24 border-b border-border-default">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <FadeInWhenVisible delay={0.1}><MetricCard number="700+" label="Data + AI Projects Delivered" color="green" /></FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}><MetricCard number="200+" label="Cloud Certifications" color="blue" /></FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}><MetricCard number="20+" label="Industries Served" color="green" /></FadeInWhenVisible>
              <FadeInWhenVisible delay={0.4}><MetricCard number="95%" label="Client Satisfaction" color="blue" /></FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* 6. Featured Case Studies */}
        <section className="relative py-32">
          <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            <FadeInWhenVisible>
              <div className="mb-16">
                <span className="text-[13px] font-bold tracking-[0.1em] text-accent-purple uppercase mb-4 block">Our Work</span>
                <h2 className="text-4xl md:text-[48px] font-bold text-text-primary mb-6 leading-[1.15] tracking-tight">Real Impact for Real Businesses</h2>
                <p className="text-xl text-text-muted max-w-2xl leading-relaxed">See how we've helped organizations transform with cloud, data, and AI.</p>
              </div>
            </FadeInWhenVisible>

            <div className="relative min-h-[700px]">
              <CaseStudyCarousel />
            </div>

            <div className="mt-8 text-center relative z-20">
              <Button variant="secondary" href="/work">View all case studies</Button>
            </div>
          </div>
        </section>

        {/* 7. Bottom CTA Banner */}
        <section className="bg-[#161b22] py-32 relative overflow-hidden border-t border-border-default">
          {/* Subtle purple glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(63,34,148,0.15)_0%,transparent_70%)]"></div>

          <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
            <FadeInWhenVisible>
              <h2 className="text-4xl md:text-[56px] font-bold text-text-primary mb-6 leading-[1.1] tracking-tight">Ready to Transform with AI?</h2>
              <p className="text-xl text-text-muted mb-10 leading-relaxed max-w-[600px] mx-auto">
                From startups to enterprises, we help organizations unlock the power of Google Cloud, data, and AI.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <Button size="lg" variant="primary" href="/contact">Let's Talk</Button>
                <Button size="lg" variant="secondary" href="/services">View Our Services</Button>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

      </div >
    </div >
  );
};
