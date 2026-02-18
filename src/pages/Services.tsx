import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Badge } from '../components/ui/Badge';
import { ServiceCard } from '../components/ui/Cards';
import { Button } from '../components/ui/Button';
import { Cloud, Database, Cpu, GraduationCap, Server, Shield, Network, LineChart, PieChart, Brain, Eye, UserCheck, PlayCircle, Code } from 'lucide-react';

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
  // Smooth scroll function for anchor links
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset by navbar height (64px) + some padding (32px)
      const y = element.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

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
            <Badge variant="status-purple" className="mb-6 mx-auto">Expertise</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-text-primary mb-6 tracking-tight"
          >
            End-to-End <br /> Transformation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-text-muted leading-relaxed mx-auto mb-12"
          >
            From migrating legacy workloads to deploying custom LLMs, we provide the specialized engineering talent required to succeed on Google Cloud.
          </motion.p>
        </div>
      </section>

      {/* 2. Anchor Navigation Strip */}
      <section className="sticky top-16 z-40 bg-bg-secondary/90 backdrop-blur-md border-y border-border-default shadow-lg">
        <div className="max-w-[1280px] mx-auto px-6 hide-scrollbar overflow-x-auto flex justify-center">
          <ul className="flex items-center space-x-8 py-4 min-w-max">
            <li><button onClick={() => scrollToSection('cloud')} className="text-sm font-medium text-text-secondary hover:text-accent-blue transition-colors">Cloud Foundations</button></li>
            <li><button onClick={() => scrollToSection('data')} className="text-sm font-medium text-text-secondary hover:text-accent-blue transition-colors">Modern Data Stack</button></li>
            <li><button onClick={() => scrollToSection('ai')} className="text-sm font-medium text-text-secondary hover:text-accent-blue transition-colors">AI + Machine Learning</button></li>
            <li><button onClick={() => scrollToSection('training')} className="text-sm font-medium text-text-secondary hover:text-accent-blue transition-colors">Training</button></li>
          </ul>
        </div>
      </section>

      {/* 3. Main Content Area */}
      <div className="bg-bg-primary pb-32">

        {/* Category: Cloud Architecture */}
        <section id="cloud" className="pt-24 max-w-[1280px] mx-auto px-6 scroll-mt-24">
          <FadeInWhenVisible>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Cloud className="text-accent-purple" size={32} />
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">Cloud Foundations</h2>
            </div>
            <p className="text-lg text-text-muted max-w-2xl mx-auto text-center mb-12">Building scalable, secure, and cost-efficient foundations on Google Cloud.</p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeInWhenVisible delay={0.1}>
              <ServiceCard
                icon={<Server size={20} />}
                title="Cloud Migration"
                description="Securely move legacy workloads to GCP with zero downtime using proven landing zones and automated pipelines."
                href="/services/cloud-migration"
                accentColor="blue"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <ServiceCard
                icon={<Network size={20} />}
                title="Infrastructure Optimization"
                description="Modernize your architecture with Kubernetes, serverless compute, and Infrastructure as Code."
                href="/services/infrastructure"
                accentColor="blue"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3}>
              <ServiceCard
                icon={<Shield size={20} />}
                title="FinOps & Security"
                description="Gain visibility into cloud spend and enforce Zero Trust security models across your environments."
                href="/services/finops"
                accentColor="blue"
              />
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Category: Data + Analytics */}
        <section id="data" className="pt-32 max-w-[1280px] mx-auto px-6 scroll-mt-24">
          <FadeInWhenVisible>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Database className="text-accent-blue" size={32} />
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">Modern Data Stack</h2>
            </div>
            <p className="text-lg text-text-muted max-w-2xl mx-auto text-center mb-12">Actionable insights powered by BigQuery, Looker, and modern data engineering.</p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeInWhenVisible delay={0.1}>
              <ServiceCard
                icon={<Database size={20} />}
                title="Enterprise Data Warehouse"
                description="Centralize your data siloes into highly performant BigQuery architectures."
                href="/services/data-warehouse"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <ServiceCard
                icon={<LineChart size={20} />}
                title="Analytics Engineering"
                description="Implement dbt and automated data modeling to create trusted, reusable data products."
                href="/services/analytics-engineering"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3}>
              <ServiceCard
                icon={<PieChart size={20} />}
                title="Enterprise Analytics (Looker)"
                description="Unify metrics and empower business users with governed self-service BI dashboards."
                href="/services/looker"
              />
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Category: AI + Machine Learning */}
        <section id="ai" className="pt-32 max-w-[1280px] mx-auto px-6 scroll-mt-24">
          <FadeInWhenVisible>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Cpu className="text-accent-green" size={32} />
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">AI + Machine Learning</h2>
            </div>
            <p className="text-lg text-text-muted max-w-2xl mx-auto text-center mb-12">From generative AI to custom predictive models, deployed securely to production.</p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeInWhenVisible delay={0.1}>
              <ServiceCard
                icon={<Brain size={20} />}
                title="Generative AI"
                description="Build custom RAG applications and LLM agents using Vertex AI and Gemini."
                href="/services/generative-ai"
                accentColor="purple"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <ServiceCard
                icon={<Code size={20} />}
                title="MLOps + LLMOps"
                description="Automate model training, evaluation, and deployment with robust CI/CD pipelines."
                href="/services/mlops"
                accentColor="purple"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3}>
              <ServiceCard
                icon={<Eye size={20} />}
                title="Computer Vision"
                description="Deploy intelligent edge and cloud vision systems for QA, safety, and operational efficiency."
                href="/services/computer-vision"
                accentColor="purple"
              />
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Category: Training */}
        <section id="training" className="pt-32 max-w-[1280px] mx-auto px-6 scroll-mt-24">
          <FadeInWhenVisible>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <GraduationCap className="text-text-primary" size={32} />
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">Training + Upskilling</h2>
            </div>
            <p className="text-lg text-text-muted max-w-2xl mx-auto text-center mb-12">Equip your team with the skills to maintain and scale your modern platform.</p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeInWhenVisible delay={0.1}>
              <ServiceCard
                icon={<PlayCircle size={20} />}
                title="Google Cloud Training"
                description="Official GCP curriculum tailored to your stack, delivered by certified instructors."
                href="/services/training-gcp"
                accentColor="blue"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <ServiceCard
                icon={<UserCheck size={20} />}
                title="AI/ML Workshops"
                description="Hands-on bootcamps for data scientists and engineers to master Vertex AI."
                href="/services/training-ai"
                accentColor="blue"
              />
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#161b22] py-24 relative overflow-hidden border-t border-border-default">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(63,34,148,0.15)_0%,transparent_70%)]"></div>
          <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
            <FadeInWhenVisible>
              <h2 className="text-3xl md:text-[48px] font-bold text-text-primary mb-6 leading-[1.1] tracking-tight">Ready to Modernize Your Stack?</h2>
              <p className="text-xl text-text-muted mb-10 leading-relaxed max-w-[600px] mx-auto">
                Whether you need a cloud foundation or a custom AI agent, we can help you build it.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <Button size="lg" variant="primary" href="/contact">Book a Consultation</Button>
                <Button size="lg" variant="secondary" href="/work">View Case Studies</Button>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

      </div>
    </div>
  );
};
