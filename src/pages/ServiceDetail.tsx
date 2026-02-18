import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Accordion } from '../components/ui/Accordion';
import { CaseStudyCard } from '../components/ui/Cards';
import { MetricCallout } from '../components/ui/Blocks';

// Example specific to "Generative AI", acts as a generic template 
export const ServiceDetail = () => {
  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">

      {/* 1. Breadcrumb */}
      <div className="max-w-[1280px] w-full mx-auto px-6 pt-16">
        <Breadcrumb items={[
          { label: 'Services', href: '/services' },
          { label: 'AI + Machine Learning', href: '/services#ai' },
          { label: 'Generative AI' }
        ]} />
      </div>

      {/* 2. Hero Component */}
      <section className="relative px-6 py-20 overflow-hidden hero-gradient">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-text-primary mb-6 tracking-tight"
            >
              Generative AI <br /> Development
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-text-muted leading-relaxed mb-10"
            >
              Move beyond chatbots. We build enterprise-grade Generative AI applications using Google Cloud's Vertex AI, securely integrating LLMs with your proprietary data.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <Button size="lg" variant="primary" href="/contact">Talk to an AI Architect</Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full h-full min-h-[400px] border border-border-default rounded-xl bg-bg-secondary flex items-center justify-center p-8 relative overflow-hidden"
          >
            {/* Abstract visual representing LLM / text processing */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(188,140,255,0.1)_0%,transparent_70%)]"></div>
            <div className="font-mono text-sm text-accent-purple/60 text-left w-full space-y-4">
              <div className="flex gap-2">
                <span className="text-accent-blue">USER:</span>
                <span className="text-text-secondary">Analyze quarterly financial statements for Q3.</span>
              </div>
              <div className="h-px w-full bg-border-default/50"></div>
              <div className="flex gap-2">
                <span className="text-accent-green">SYSTEM:</span>
                <span className="text-text-secondary">&gt; Connecting to BigQuery...</span>
              </div>
              <div className="flex gap-2">
                <span className="text-accent-green">SYSTEM:</span>
                <span className="text-text-secondary">&gt; Retrieving vectors via Vertex Vector Search...</span>
              </div>
              <div className="flex gap-2">
                <span className="text-accent-purple font-bold">FAAN_AI:</span>
                <span className="text-text-primary">Based on the Q3 metrics, revenue increased by 14% largely driven by the new Cloud division rollout.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="border-t border-border-default"></div>

      {/* 3. Article Body (Rich Text) */}
      <section className="max-w-[800px] mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-text-primary mb-8">Harnessing the Power of LLMs</h2>

        <p className="text-lg text-text-secondary leading-relaxed mb-6">
          Generative AI is transforming how enterprises operate, but the leap from a proof-of-concept to a production-ready system is complex. Security, hallucinations, latency, and cost all present significant hurdles to enterprise adoption.
        </p>

        <p className="text-lg text-text-secondary leading-relaxed mb-8">
          Our team specializes in building robust <strong className="text-text-primary">Retrieval-Augmented Generation (RAG)</strong> architectures using Google Cloud. By grounding foundation models in your organization's verified data, we ensure responses are accurate, compliant, and highly contextualized.
        </p>

        <MetricCallout>
          <div className="text-4xl font-bold font-mono text-accent-green mb-2">30%</div>
          <div className="text-base font-semibold text-text-primary mb-2">Reduction in Support Resolution Time</div>
          <div className="text-sm text-text-secondary">Achieved by deploying a custom Gemini-based agent for a leading telecommunications provider.</div>
        </MetricCallout>

        <h3 className="text-2xl font-bold text-text-primary mt-12 mb-6">Our Gen AI Capabilities</h3>

        <ul className="space-y-4 mb-12">
          <li className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2.5 mr-4 shrink-0"></div>
            <p className="text-lg text-text-secondary"><strong className="text-text-primary">RAG System Design:</strong> End-to-end architectures utilizing Vector Search, LangChain, and BigQuery to securely ground LLMs.</p>
          </li>
          <li className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2.5 mr-4 shrink-0"></div>
            <p className="text-lg text-text-secondary"><strong className="text-text-primary">Model Tuning & Distillation:</strong> Fine-tuning open-weight models and distilling large models for improved latency and performance on edge devices.</p>
          </li>
          <li className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2.5 mr-4 shrink-0"></div>
            <p className="text-lg text-text-secondary"><strong className="text-text-primary">Agentic Workflows:</strong> Building autonomous AI agents capable of executing multi-step tasks across your enterprise toolchain.</p>
          </li>
        </ul>
      </section>

      {/* 4. Related Case Studies */}
      <section className="bg-bg-secondary py-24 border-t border-border-default">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-text-primary mb-12">Related Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <CaseStudyCard
              title="Automating contract analysis for legal teams"
              description="Built a fine-tuned RAG system capable of extracting clauses with 99% accuracy."
              imageSrc="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
              tags={["Gen AI", "Legal"]}
            />
            <CaseStudyCard
              title="Personalized marketing at scale"
              description="Deployed Gemini to automatically generate personalized copy for millions of users."
              imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              tags={["Gen AI", "Retail"]}
            />
          </div>
          <Button variant="link" href="/work">View all case studies</Button>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="bg-bg-primary py-24 border-t border-border-default">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion
            items={[
              {
                question: "Is my data secure when using Google Cloud's Vertex AI?",
                answer: "Yes. Google Cloud does not use customer data (including your prompts, responses, or tuning data) to train its foundational models. Your data remains completely within your secure Google Cloud tenant, adhering to existing IAM and VPC Service Controls."
              },
              {
                question: "How do you prevent the AI from hallucinating?",
                answer: "We employ strictly controlled Retrieval-Augmented Generation (RAG) architectures. By forcing the LLM to only answer based on documents we retrieve from your verified knowledge base, and implementing prompt boundary constraints, we drastically reduce hallucinations."
              },
              {
                question: "How long does a Typical Gen AI engagement take?",
                answer: "A standard Proof of Concept (PoC) takes 4-6 weeks to validate the business case. Full production deployment usually spans 3-6 months depending on the complexity of your data ecosystem and security requirements."
              }
            ]}
          />
        </div>
      </section>

      {/* 6. Inline Contact Form CTA */}
      <section className="bg-[#161b22] py-32 border-t border-border-default">
        <div className="max-w-[640px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-6 tracking-tight">Ready to build?</h2>
          <p className="text-lg text-text-muted mb-10">Discuss your Gen AI use case with one of our specialized architects.</p>
          <form className="max-w-md mx-auto space-y-4 text-left">
            <input type="email" placeholder="Work email address" className="w-full bg-bg-primary border border-border-default rounded-lg px-4 py-3 text-text-secondary focus:border-accent-blue focus:outline-none" />
            <Button variant="primary" className="w-full">Get Started</Button>
          </form>
        </div>
      </section>
    </div>
  );
};
