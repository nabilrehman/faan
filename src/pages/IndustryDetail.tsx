import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Button } from '../components/ui/Button';
import { CaseStudyCard } from '../components/ui/Cards';
import { ShieldCheck, TrendingUp, Scale } from 'lucide-react';

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

export const IndustryDetail = () => {
  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">

      {/* 1. Breadcrumb */}
      <div className="max-w-[1280px] w-full mx-auto px-6 pt-16">
        <Breadcrumb items={[
          { label: 'Industries', href: '/industries' },
          { label: 'Financial Services' }
        ]} />
      </div>

      {/* 2. Hero Component */}
      <section className="relative px-6 py-20 overflow-hidden hero-gradient">
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[12px] font-bold tracking-[0.1em] text-accent-purple uppercase mb-4 block">Industries</span>
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 tracking-tight">AI + Data for <br /> Financial Services</h1>
            <p className="text-xl text-text-muted leading-relaxed mb-10 max-w-3xl mx-auto">
              Drive competitive advantage through data-driven innovation, risk modeling, and personalized customer experiences on a highly secure Google Cloud foundation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button size="lg" variant="primary" href="/contact">Discuss Your Project</Button>
              <Button size="lg" variant="secondary" href="#case-studies">View Case Studies</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Challenges Section */}
      <section className="bg-[#161b22] py-24 border-y border-border-default">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">Challenges We Solve</h2>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInWhenVisible delay={0.1}>
              <div className="bg-bg-primary border border-border-default p-8 rounded-xl h-full">
                <ShieldCheck size={32} className="text-accent-green mb-6" />
                <h3 className="text-xl font-bold text-text-primary mb-4">Regulatory Compliance</h3>
                <p className="text-text-secondary leading-relaxed">Automate complex reporting pipelines and ensure data lineage to meet stringent regulatory frameworks securely.</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <div className="bg-bg-primary border border-border-default p-8 rounded-xl h-full">
                <TrendingUp size={32} className="text-accent-blue mb-6" />
                <h3 className="text-xl font-bold text-text-primary mb-4">Fraud Detection</h3>
                <p className="text-text-secondary leading-relaxed">Deploy low-latency machine learning models on Vertex AI to detect anomalies and flag fraudulent transactions in real-time.</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3}>
              <div className="bg-bg-primary border border-border-default p-8 rounded-xl h-full">
                <Scale size={32} className="text-accent-purple mb-6" />
                <h3 className="text-xl font-bold text-text-primary mb-4">Legacy Migration</h3>
                <p className="text-text-secondary leading-relaxed">Securely migrate on-premises mainframes and data lakes to GCP using Zero Trust architecture and Anthos.</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* 4. Relevant Services (River Layout) */}
      <section className="bg-bg-primary py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold text-text-primary mb-16 tracking-tight">How We Help FinServ</h2>
          </FadeInWhenVisible>

          {/* Block 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="lg:w-1/2">
              <FadeInWhenVisible>
                <div className="bg-bg-secondary border border-border-default rounded-xl p-8 shadow-lg aspect-video flex flex-col justify-center items-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(88,166,255,0.1)_0%,transparent_70%)]"></div>
                  {/* Abstract dashboard graphic */}
                  <div className="w-[80%] h-[60%] border border-border-default rounded-md bg-bg-primary flex flex-col p-2 shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500">
                    <div className="flex justify-between border-b border-border-default pb-2 mb-2">
                      <div className="h-2 w-16 bg-border-default rounded"></div>
                      <div className="h-2 w-8 bg-accent-blue/50 rounded"></div>
                    </div>
                    <div className="flex gap-2 h-full">
                      <div className="w-1/3 border border-border-default rounded-sm bg-bg-secondary flex items-end p-1">
                        <div className="w-full h-[70%] bg-accent-blue/20"></div>
                      </div>
                      <div className="w-2/3 border border-border-default rounded-sm bg-bg-secondary"></div>
                    </div>
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
            <div className="lg:w-1/2">
              <FadeInWhenVisible delay={0.2}>
                <h3 className="text-3xl font-bold text-text-primary mb-6">Modernizing the Data Core</h3>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  We build scalable, governed data warehouses on BigQuery. This enables financial institutions to move away from slow on-prem systems, providing a single source of truth for all transactional data.
                </p>
                <div className="bg-bg-secondary border-l-2 border-accent-blue p-4 text-sm text-text-muted font-mono mb-8">
                  &gt; Impact: Centralized 50TB of siloed banking data in under 4 months.
                </div>
                <Button variant="link" href="/services/data-warehouse" className="text-lg">Explore EDW Solutions</Button>
              </FadeInWhenVisible>
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <FadeInWhenVisible delay={0.2}>
                <h3 className="text-3xl font-bold text-text-primary mb-6">AI-Powered Risk Models</h3>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  Deploy custom ML models using Vertex AI to assess credit risk, monitor for AML compliance, and perform algorithmic stress testing with previously impossible speed and accuracy.
                </p>
                <div className="bg-bg-secondary border-l-2 border-accent-purple p-4 text-sm text-text-muted font-mono mb-8">
                  &gt; Impact: Reduced false-positive fraud alerts by 40%.
                </div>
                <Button variant="link" href="/services/mlops" className="text-lg">Explore MLOps</Button>
              </FadeInWhenVisible>
            </div>
            <div className="lg:w-1/2">
              <FadeInWhenVisible>
                <div className="bg-bg-secondary border border-border-default rounded-xl p-8 shadow-lg aspect-video flex flex-col justify-center items-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(188,140,255,0.1)_0%,transparent_70%)]"></div>
                  {/* Abstract ML Pipeline graphic */}
                  <div className="w-full max-w-sm flex items-center justify-between relative z-10 group-hover:scale-105 transition-transform duration-500">
                    <div className="w-12 h-12 rounded-full border-2 border-text-muted flex items-center justify-center bg-bg-primary z-10 shadow-[0_0_15px_rgba(139,148,158,0.3)]"></div>
                    <div className="h-1 bg-gradient-to-r from-text-muted to-accent-purple flex-1 -mx-2 relative">
                      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 w-2 h-2 rounded-full bg-accent-purple shadow-[0_0_10px_#bc8cff]"></div>
                    </div>
                    <div className="w-16 h-16 rounded-xl border-2 border-accent-purple flex items-center justify-center bg-bg-primary z-10 shadow-[0_0_20px_rgba(188,140,255,0.4)]"></div>
                    <div className="h-1 bg-gradient-to-r from-accent-purple to-accent-green flex-1 -mx-2 relative">
                      <div className="absolute top-1/2 -translate-y-1/2 left-2/3 w-2 h-2 rounded-full bg-accent-green shadow-[0_0_10px_#2dba4e]"></div>
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-accent-green flex items-center justify-center bg-bg-primary z-10 shadow-[0_0_15px_rgba(45,186,78,0.4)]"></div>
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Industry Case Studies */}
      <section id="case-studies" className="bg-bg-secondary py-24 border-t border-border-default scroll-mt-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-text-primary mb-12">Financial Services Success Stories</h2>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <FadeInWhenVisible delay={0.1}>
              <CaseStudyCard
                title="Migrating core banking workloads to Google Cloud"
                description="Securely transitioned a top 10 national bank to GCP, enabling real-time transaction analytics while adhering to strict compliance regulations."
                imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                tags={["Cloud Migration", "Security"]}
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <CaseStudyCard
                title="Building a generative AI assistant for wealth advisors"
                description="Deployed an enterprise RAG architecture allowing advisors to securely query client portfolios and market research in natural language."
                imageSrc="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800"
                tags={["Gen AI", "Vertex AI"]}
              />
            </FadeInWhenVisible>
          </div>
          <Button variant="link" href="/work">View all related case studies</Button>
        </div>
      </section>

      {/* 6. Inline Contact Form */}
      <section className="bg-bg-primary py-32 border-t border-border-default">
        <div className="max-w-[640px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-6 tracking-tight">Speak with an Industry Expert</h2>
          <p className="text-lg text-text-muted mb-10">Get advice on your specific regulatory, data, or AI challenges in the financial sector.</p>
          <form className="max-w-md mx-auto space-y-4 text-left">
            <input type="email" placeholder="Work email address" className="w-full bg-bg-secondary border border-border-default rounded-lg px-4 py-3 text-text-secondary focus:border-accent-blue focus:outline-none" />
            <Button variant="primary" className="w-full">Get Started</Button>
          </form>
        </div>
      </section>
    </div>
  );
};
