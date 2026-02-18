import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { MetricCard } from '../components/ui/Cards';
import { CaseStudyCarousel } from '../components/ui/CaseStudyCarousel';
import { BackgroundGlow } from '../components/ui/BackgroundGlow';
import { Search, Cpu, Rocket } from 'lucide-react';

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
              We Build Production AI Agents on Google Cloud
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-[20px] md:text-[24px] text-[#7d8590] mb-12 max-w-[600px] leading-relaxed mx-auto font-normal text-balance"
            >
              Custom AI agents on Vertex AI & Gemini. From concept to production in 6 weeks. Fixed price.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center"
            >
              <Button size="lg" variant="primary" href="/contact">Book a Discovery Call</Button>
              <Button size="lg" variant="secondary" href="/work">See Solution Blueprints</Button>
            </motion.div>
          </div>

          {/* Abstract floating graphic */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-50 mix-blend-screen overflow-hidden">
            <div className="absolute w-[600px] h-[600px] top-32 left-1/2 -translate-x-1/2 border border-border-default/30 rounded-full"></div>
            <div className="absolute w-[800px] h-[800px] top-16 left-1/2 -translate-x-1/2 border border-border-default/20 rounded-full border-dashed"></div>
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent top-1/2"></div>
          </div>
        </section>

        {/* 2. How It Works */}
        <section className="relative py-32 px-6 border-t border-border-default/50">
          <div className="max-w-[1280px] mx-auto relative z-10">
            <FadeInWhenVisible>
              <div className="text-center mb-16">
                <span className="text-[13px] font-bold tracking-[0.1em] text-accent-blue uppercase mb-4 block">How It Works</span>
                <h2 className="text-4xl md:text-[48px] font-bold text-text-primary mb-6 leading-[1.15] tracking-tight">From idea to production in three phases</h2>
              </div>
            </FadeInWhenVisible>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeInWhenVisible delay={0.1}>
                <div className="bg-[#161b22] border border-border-default rounded-xl p-8 h-full relative overflow-hidden group hover:border-accent-blue/50 transition-colors duration-500">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(88,166,255,0.06)_0%,transparent_100%)]"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mb-6">
                      <Search className="w-6 h-6 text-accent-blue" />
                    </div>
                    <div className="text-accent-blue font-bold text-sm font-mono mb-3">WEEK 1</div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">Discovery</h3>
                    <p className="text-text-secondary leading-relaxed">We map your workflows and identify the highest-impact agent opportunities. You get a clear scope, architecture plan, and fixed-price proposal.</p>
                  </div>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <div className="bg-[#161b22] border border-border-default rounded-xl p-8 h-full relative overflow-hidden group hover:border-accent-green/50 transition-colors duration-500">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(45,186,78,0.06)_0%,transparent_100%)]"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-accent-green/10 border border-accent-green/20 flex items-center justify-center mb-6">
                      <Cpu className="w-6 h-6 text-accent-green" />
                    </div>
                    <div className="text-accent-green font-bold text-sm font-mono mb-3">WEEKS 2–5</div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">Build & Test</h3>
                    <p className="text-text-secondary leading-relaxed">We build your custom AI agent on Vertex AI with iterative demos. RAG pipelines, tool integrations, and guardrails—tested against your real data.</p>
                  </div>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <div className="bg-[#161b22] border border-border-default rounded-xl p-8 h-full relative overflow-hidden group hover:border-accent-purple/50 transition-colors duration-500">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(188,140,255,0.06)_0%,transparent_100%)]"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center mb-6">
                      <Rocket className="w-6 h-6 text-accent-purple" />
                    </div>
                    <div className="text-accent-purple font-bold text-sm font-mono mb-3">WEEK 6+</div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">Deploy & Support</h3>
                    <p className="text-text-secondary leading-relaxed">Production deployment with monitoring, logging, and alerting. Optional ongoing maintenance to keep your agents performing at scale.</p>
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* 3. Services Overview (River Layout) */}
        <section className="relative">

          {/* River Block 1 */}
          <div className="flex flex-col lg:flex-row min-h-[600px] border-y border-border-default/50">
            <div className="lg:w-1/2 bg-[#0a0d14] p-12 lg:p-24 flex items-center justify-center border-r border-border-default/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(188,140,255,0.08)_0%,transparent_100%)]"></div>
              {/* Abstract AI agent network */}
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
                <h3 className="text-[40px] font-bold text-text-primary mb-6 leading-[1.1] tracking-tight">AI Agent Development</h3>
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
                  Custom autonomous agents built on Vertex AI Agent Engine & Gemini. Handle customer support, document processing, internal workflows, and more.
                </p>
                <Button variant="link" href="/services/ai-agent-development" className="text-lg">Explore AI Agents</Button>
              </FadeInWhenVisible>
            </div>
          </div>

          {/* River Block 2 */}
          <div className="flex flex-col-reverse lg:flex-row min-h-[600px] border-b border-border-default/50">
            <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-bg-secondary/50 backdrop-blur-sm">
              <FadeInWhenVisible>
                <h3 className="text-[40px] font-bold text-text-primary mb-6 leading-[1.1] tracking-tight">AI-Ready Data Foundations</h3>
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
                  Your agents need clean data. We build the BigQuery + data pipeline foundation that powers intelligent automation and real-time insights.
                </p>
                <Button variant="link" href="/services/data-foundations" className="text-lg">Explore Data Services</Button>
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
            <div className="lg:w-1/2 bg-[#0a0d14] p-12 lg:p-24 flex items-center justify-center border-r border-border-default/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(45,186,78,0.06)_0%,transparent_100%)]"></div>
              <div className="w-full max-w-md aspect-square rounded-2xl border border-border-default bg-bg-secondary shadow-2xl overflow-hidden relative group-hover:border-accent-green/50 transition-colors duration-500">
                <div className="h-12 border-b border-border-default flex items-center px-4 space-x-2 bg-bg-tertiary">
                  <div className="w-3 h-3 rounded-full bg-border-default"></div>
                  <div className="w-3 h-3 rounded-full bg-border-default"></div>
                  <div className="w-3 h-3 rounded-full bg-border-default"></div>
                </div>
                <div className="p-8 font-mono text-sm text-accent-green opacity-80">
                  <p className="mb-2">$ agent-ops status</p>
                  <p className="mb-2">&gt; all agents healthy ✓</p>
                  <p className="mb-2">&gt; latency: p99 &lt; 200ms</p>
                  <p className="mb-2">&gt; uptime: 99.97%</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-bg-primary/50 backdrop-blur-sm">
              <FadeInWhenVisible>
                <h3 className="text-[40px] font-bold text-text-primary mb-6 leading-[1.1] tracking-tight">Agent Ops & Maintenance</h3>
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
                  Production monitoring, retraining, scaling. We keep your agents performing with ongoing support, so your team can focus on the business.
                </p>
                <Button variant="link" href="/services/agent-ops" className="text-lg">Explore Agent Ops</Button>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* 4. Key Metrics */}
        <section className="bg-bg-secondary/30 backdrop-blur-md py-24 border-b border-border-default">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <FadeInWhenVisible delay={0.1}><MetricCard number="300+" label="Enterprise Customers Served" color="green" /></FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}><MetricCard number="6 Weeks" label="Average Deployment" color="blue" /></FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}><MetricCard number="10+ Years" label="Google Cloud Experience" color="green" /></FadeInWhenVisible>
              <FadeInWhenVisible delay={0.4}><MetricCard number="20+" label="Industries Served" color="blue" /></FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* 5. Solution Blueprints */}
        <section className="relative py-32">
          <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            <FadeInWhenVisible>
              <div className="mb-16">
                <span className="text-[13px] font-bold tracking-[0.1em] text-accent-purple uppercase mb-4 block">Solution Blueprints</span>
                <h2 className="text-4xl md:text-[48px] font-bold text-text-primary mb-6 leading-[1.15] tracking-tight">What We Can Build for You</h2>
                <p className="text-xl text-text-muted max-w-2xl leading-relaxed">Reference architectures and proven patterns from our team's 10+ years of Google Cloud experience.</p>
              </div>
            </FadeInWhenVisible>

            <div className="relative min-h-[700px]">
              <CaseStudyCarousel />
            </div>

            <div className="mt-8 text-center relative z-20">
              <Button variant="secondary" href="/work">View all blueprints</Button>
            </div>
          </div>
        </section>

        {/* 6. Bottom CTA Banner */}
        <section className="bg-[#161b22] py-32 relative overflow-hidden border-t border-border-default">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(63,34,148,0.15)_0%,transparent_70%)]"></div>

          <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
            <FadeInWhenVisible>
              <h2 className="text-4xl md:text-[56px] font-bold text-text-primary mb-6 leading-[1.1] tracking-tight">Ready to deploy your first AI agent?</h2>
              <p className="text-xl text-text-muted mb-10 leading-relaxed max-w-[600px] mx-auto">
                Tell us about your use case. We'll map the opportunity and give you a fixed-price proposal within a week.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <Button size="lg" variant="primary" href="/contact">Book a Discovery Call</Button>
                <Button size="lg" variant="secondary" href="/about">Learn About Our Team</Button>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

      </div >
    </div >
  );
};
