import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Badge } from '../components/ui/Badge';
import { ServiceCard } from '../components/ui/Cards';
import { Button } from '../components/ui/Button';
import { Brain, Database, Shield, Cpu } from 'lucide-react';

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

export const Services = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. Services Hero */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden hero-gradient">
        <div className="relative z-10 max-w-[800px] w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge variant="status-purple" className="mb-6 mx-auto">What We Build</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-text-primary mb-6 tracking-tight"
          >
            AI Agents. <br /> Data Platforms. <br /> Production Systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-text-muted leading-relaxed mx-auto mb-12"
          >
            Three focused offerings built on 10+ years of Google Cloud expertise. From discovery to production in 6 weeks.
          </motion.p>
        </div>
      </section>

      {/* 2. Core Services */}
      <div className="bg-bg-primary pb-32">

        <section className="pt-24 max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInWhenVisible delay={0.1}>
              <ServiceCard
                icon={<Brain size={20} />}
                title="AI Agent Development"
                description="Custom autonomous agents built on Vertex AI Agent Engine & Gemini. Handle customer support, document processing, internal workflows, and more."
                href="/services/ai-agent-development"
                accentColor="purple"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <ServiceCard
                icon={<Database size={20} />}
                title="AI-Ready Data Foundations"
                description="Your agents need clean data. We build the BigQuery + data pipeline foundation that powers intelligent automation and real-time insights."
                href="/services/data-foundations"
                accentColor="blue"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3}>
              <ServiceCard
                icon={<Shield size={20} />}
                title="Agent Ops & Maintenance"
                description="Production monitoring, retraining, scaling. We keep your agents performing with ongoing support, so your team can focus on the business."
                href="/services/agent-ops"
                accentColor="blue"
              />
            </FadeInWhenVisible>
          </div>
        </section>

        {/* How We Deliver */}
        <section className="pt-32 max-w-[1280px] mx-auto px-6">
          <FadeInWhenVisible>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Cpu className="text-accent-green" size={32} />
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">How We Deliver</h2>
            </div>
            <p className="text-lg text-text-muted max-w-2xl mx-auto text-center mb-12">Every engagement follows the same proven process.</p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInWhenVisible delay={0.1}>
              <div className="bg-[#161b22] border border-border-default rounded-xl p-8 h-full">
                <div className="text-accent-blue font-bold text-xl mb-4 font-mono">Week 1</div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Discovery</h3>
                <p className="text-text-secondary leading-relaxed">We map your workflows, identify agent opportunities, and deliver a fixed-price proposal with clear architecture and scope.</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <div className="bg-[#161b22] border border-border-default rounded-xl p-8 h-full">
                <div className="text-accent-green font-bold text-xl mb-4 font-mono">Weeks 2–5</div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Build & Test</h3>
                <p className="text-text-secondary leading-relaxed">Iterative development with weekly demos. RAG pipelines, tool integrations, and guardrails—tested against your real data.</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3}>
              <div className="bg-[#161b22] border border-border-default rounded-xl p-8 h-full">
                <div className="text-accent-purple font-bold text-xl mb-4 font-mono">Week 6+</div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Deploy & Support</h3>
                <p className="text-text-secondary leading-relaxed">Production deployment with monitoring and alerting. Optional ongoing Agent Ops to keep your systems performing at scale.</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-32 bg-[#161b22] py-24 relative overflow-hidden border-t border-border-default">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(63,34,148,0.15)_0%,transparent_70%)]"></div>
          <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-[48px] font-bold text-text-primary mb-6 leading-[1.1] tracking-tight">Ready to deploy your first AI agent?</h2>
              <p className="text-xl text-text-muted mb-10 leading-relaxed max-w-[600px] mx-auto">
                Tell us about your use case and get a fixed-price proposal within a week.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <Button size="lg" variant="primary" href="/contact">Book a Discovery Call</Button>
                <Button size="lg" variant="secondary" href="/work">View Solution Blueprints</Button>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

      </div>
    </div>
  );
};
