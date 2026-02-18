import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Accordion } from '../components/ui/Accordion';
import { MetricCallout } from '../components/ui/Blocks';

const SERVICE_DATA: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  breadcrumbParent: string;
  breadcrumbParentHref: string;
  terminalLines: { role: string; color: string; text: string }[];
  articleTitle: string;
  articleIntro: string[];
  metricNumber: string;
  metricTitle: string;
  metricDescription: string;
  capabilities: { name: string; description: string }[];
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaDescription: string;
}> = {
  'ai-agent-development': {
    title: 'AI Agent\nDevelopment',
    subtitle: 'Custom autonomous agents built on Vertex AI Agent Engine & Gemini. Handle customer support, document processing, internal workflows, and more.',
    description: 'Move beyond chatbots. We build enterprise-grade AI agents that take actions, not just answer questions.',
    breadcrumbParent: 'AI + Machine Learning',
    breadcrumbParentHref: '/services#ai',
    terminalLines: [
      { role: 'USER', color: 'text-accent-blue', text: 'Analyze quarterly financial statements for Q3.' },
      { role: 'SYSTEM', color: 'text-accent-green', text: '> Connecting to BigQuery...' },
      { role: 'SYSTEM', color: 'text-accent-green', text: '> Retrieving vectors via Vertex Vector Search...' },
      { role: 'AGENT', color: 'text-accent-purple', text: 'Based on the Q3 metrics, revenue increased by 14% largely driven by the new Cloud division rollout.' },
    ],
    articleTitle: 'Building Autonomous AI Agents',
    articleIntro: [
      'AI agents go beyond simple chat interfaces. They can reason, plan, use tools, and execute multi-step workflows autonomously. But the leap from a proof-of-concept to a production-ready agent system is complex.',
      'Our team specializes in building robust AI agents on Google Cloud. Using Vertex AI Agent Engine, Gemini, and enterprise-grade RAG architectures, we ensure your agents are accurate, secure, and highly contextualized to your business.',
    ],
    metricNumber: '30%',
    metricTitle: 'Reduction in Support Resolution Time',
    metricDescription: 'Typical outcome from deploying a custom Gemini-based agent for enterprise support workflows.',
    capabilities: [
      { name: 'RAG System Design', description: 'End-to-end architectures utilizing Vector Search, LangChain, and BigQuery to securely ground LLMs.' },
      { name: 'Model Tuning & Distillation', description: 'Fine-tuning open-weight models and distilling large models for improved latency and performance.' },
      { name: 'Agentic Workflows', description: 'Building autonomous AI agents capable of executing multi-step tasks across your enterprise toolchain.' },
    ],
    faqs: [
      { question: 'Is my data secure when using Google Cloud\'s Vertex AI?', answer: 'Yes. Google Cloud does not use customer data (including your prompts, responses, or tuning data) to train its foundational models. Your data remains completely within your secure Google Cloud tenant.' },
      { question: 'How do you prevent the AI from hallucinating?', answer: 'We employ strictly controlled Retrieval-Augmented Generation (RAG) architectures. By forcing the LLM to only answer based on documents we retrieve from your verified knowledge base, we drastically reduce hallucinations.' },
      { question: 'How long does a typical AI agent engagement take?', answer: 'A standard engagement takes 6 weeks from discovery to production deployment. Complex multi-agent systems may take 8-12 weeks depending on integration requirements.' },
    ],
    ctaTitle: 'Ready to build your AI agent?',
    ctaDescription: 'Discuss your use case with one of our specialized architects.',
  },
  'data-foundations': {
    title: 'AI-Ready Data\nFoundations',
    subtitle: 'Your agents need clean data. We build the BigQuery + data pipeline foundation that powers intelligent automation.',
    description: 'Modern data platforms built for AI—not just analytics.',
    breadcrumbParent: 'Data + Analytics',
    breadcrumbParentHref: '/services#data',
    terminalLines: [
      { role: 'USER', color: 'text-accent-blue', text: 'Run daily pipeline health check.' },
      { role: 'SYSTEM', color: 'text-accent-green', text: '> Checking 47 BigQuery datasets...' },
      { role: 'SYSTEM', color: 'text-accent-green', text: '> All pipelines healthy. 0 failures in 24h.' },
      { role: 'AGENT', color: 'text-accent-purple', text: 'Data freshness: 99.8%. Ready for agent consumption.' },
    ],
    articleTitle: 'Building the Data Layer for AI',
    articleIntro: [
      'AI agents are only as good as the data they have access to. Fragmented data, stale pipelines, and poor governance create blind spots that lead to unreliable AI outputs.',
      'We build modern data platforms on Google Cloud that are purpose-built for AI consumption. BigQuery as the analytical backbone, Cloud Composer for orchestration, and Dataform for transformation—all governed with proper lineage and access controls.',
    ],
    metricNumber: '40%',
    metricTitle: 'Reduction in Query Costs',
    metricDescription: 'Typical outcome from migrating legacy data systems to an optimized BigQuery architecture.',
    capabilities: [
      { name: 'Data Warehouse Modernization', description: 'Migration from legacy systems to BigQuery with optimized partitioning, clustering, and cost controls.' },
      { name: 'Real-Time Pipelines', description: 'Streaming data architectures using Pub/Sub and Dataflow for sub-second data freshness.' },
      { name: 'Data Governance', description: 'Dataplex-based governance with automated data quality checks, lineage tracking, and access policies.' },
    ],
    faqs: [
      { question: 'How long does a typical data migration take?', answer: 'It depends on the volume and complexity. A 10TB migration from on-prem to BigQuery typically takes 4-8 weeks including validation and testing.' },
      { question: 'Do you work with existing data tools like dbt?', answer: 'Yes. We integrate with your existing toolchain including dbt, Airflow, Fivetran, and others. We recommend the best tools for your specific needs.' },
      { question: 'Can you help with data that needs to feed AI models?', answer: 'Absolutely—that is our specialty. We design data pipelines specifically optimized for AI consumption, including vector embeddings and feature stores on Vertex AI.' },
    ],
    ctaTitle: 'Ready to build your data foundation?',
    ctaDescription: 'Let us assess your current data architecture and map the path forward.',
  },
  'agent-ops': {
    title: 'Agent Ops &\nMaintenance',
    subtitle: 'Production monitoring, retraining, scaling. We keep your agents performing so your team can focus on the business.',
    description: 'Because deploying an agent is just the beginning.',
    breadcrumbParent: 'Operations',
    breadcrumbParentHref: '/services',
    terminalLines: [
      { role: 'MONITOR', color: 'text-accent-blue', text: 'Agent health check: all systems nominal.' },
      { role: 'SYSTEM', color: 'text-accent-green', text: '> Latency p99: 180ms ✓' },
      { role: 'SYSTEM', color: 'text-accent-green', text: '> Accuracy: 96.2% (above 95% threshold) ✓' },
      { role: 'ALERT', color: 'text-accent-purple', text: 'Model drift detected. Auto-retraining scheduled.' },
    ],
    articleTitle: 'Keeping AI Agents in Production',
    articleIntro: [
      'Deploying an AI agent is just the first step. In production, agents face data drift, changing user patterns, edge cases, and scaling challenges that can degrade performance over time.',
      'Our Agent Ops service provides ongoing monitoring, maintenance, and optimization. We track key metrics, detect drift early, retrain models proactively, and scale infrastructure as your usage grows.',
    ],
    metricNumber: '99.9%',
    metricTitle: 'Agent Uptime SLA',
    metricDescription: 'Our standard uptime commitment for production AI agents under maintenance contracts.',
    capabilities: [
      { name: 'Production Monitoring', description: 'Real-time dashboards tracking latency, accuracy, cost, and user satisfaction for every deployed agent.' },
      { name: 'Model Retraining', description: 'Automated drift detection and scheduled retraining pipelines to keep agent responses accurate over time.' },
      { name: 'Scaling & Cost Optimization', description: 'Auto-scaling infrastructure with cost guardrails to handle traffic spikes without budget surprises.' },
    ],
    faqs: [
      { question: 'What does the Agent Ops service include?', answer: 'Monitoring, alerting, model retraining, infrastructure scaling, security patching, and monthly performance reviews. We act as an extension of your engineering team.' },
      { question: 'Can we handle ops ourselves after deployment?', answer: 'Absolutely. We design all systems with handoff in mind and provide full documentation and training. Agent Ops is optional for teams that prefer self-management.' },
      { question: 'What are the typical costs?', answer: 'Agent Ops is priced as a monthly retainer based on the number of agents and their complexity. Contact us for a custom quote.' },
    ],
    ctaTitle: 'Need help keeping your agents running?',
    ctaDescription: 'Let us take care of operations so your team can focus on building.',
  },
};

// Fallback for legacy slugs
const SLUG_ALIASES: Record<string, string> = {
  'generative-ai': 'ai-agent-development',
  'cloud-architecture': 'ai-agent-development',
  'data-analytics': 'data-foundations',
  'ai': 'ai-agent-development',
  'cloud-migration': 'ai-agent-development',
  'infrastructure': 'ai-agent-development',
  'finops': 'ai-agent-development',
  'data-warehouse': 'data-foundations',
  'analytics-engineering': 'data-foundations',
  'looker': 'data-foundations',
  'data-mesh': 'data-foundations',
  'mlops': 'agent-ops',
  'computer-vision': 'ai-agent-development',
  'responsible-ai': 'ai-agent-development',
  'training-gcp': 'ai-agent-development',
  'training-ai': 'ai-agent-development',
};

export const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const resolvedSlug = slug && SLUG_ALIASES[slug] ? SLUG_ALIASES[slug] : slug;
  const service = resolvedSlug ? SERVICE_DATA[resolvedSlug] : undefined;

  // Fallback to AI Agent Development if slug not found
  const data = service || SERVICE_DATA['ai-agent-development'];

  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">

      {/* 1. Breadcrumb */}
      <div className="max-w-[1280px] w-full mx-auto px-6 pt-16">
        <Breadcrumb items={[
          { label: 'Services', href: '/services' },
          { label: data.breadcrumbParent, href: data.breadcrumbParentHref },
          { label: data.title.replace('\n', ' ') }
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
              className="text-5xl md:text-6xl font-bold text-text-primary mb-6 tracking-tight whitespace-pre-line"
            >
              {data.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-text-muted leading-relaxed mb-10"
            >
              {data.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <Button size="lg" variant="primary" href="/contact">Book a Discovery Call</Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full h-full min-h-[400px] border border-border-default rounded-xl bg-bg-secondary flex items-center justify-center p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(188,140,255,0.1)_0%,transparent_70%)]"></div>
            <div className="font-mono text-sm text-accent-purple/60 text-left w-full space-y-4">
              {data.terminalLines.map((line, i) => (
                <div key={i}>
                  {i > 0 && i === 1 && <div className="h-px w-full bg-border-default/50 my-2"></div>}
                  <div className="flex gap-2">
                    <span className={`${line.color} ${line.role === 'AGENT' || line.role === 'ALERT' ? 'font-bold' : ''}`}>{line.role}:</span>
                    <span className={line.role === 'AGENT' || line.role === 'ALERT' ? 'text-text-primary' : 'text-text-secondary'}>{line.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="border-t border-border-default"></div>

      {/* 3. Article Body */}
      <section className="max-w-[800px] mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-text-primary mb-8">{data.articleTitle}</h2>

        {data.articleIntro.map((para, i) => (
          <p key={i} className="text-lg text-text-secondary leading-relaxed mb-6">
            {para}
          </p>
        ))}

        <MetricCallout>
          <div className="text-4xl font-bold font-mono text-accent-green mb-2">{data.metricNumber}</div>
          <div className="text-base font-semibold text-text-primary mb-2">{data.metricTitle}</div>
          <div className="text-sm text-text-secondary">{data.metricDescription}</div>
        </MetricCallout>

        <h3 className="text-2xl font-bold text-text-primary mt-12 mb-6">Our Capabilities</h3>

        <ul className="space-y-4 mb-12">
          {data.capabilities.map((cap, i) => (
            <li key={i} className="flex items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2.5 mr-4 shrink-0"></div>
              <p className="text-lg text-text-secondary"><strong className="text-text-primary">{cap.name}:</strong> {cap.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. FAQs */}
      <section className="bg-bg-primary py-24 border-t border-border-default">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion items={data.faqs} />
        </div>
      </section>

      {/* 5. CTA */}
      <section className="bg-[#161b22] py-32 border-t border-border-default">
        <div className="max-w-[640px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-6 tracking-tight">{data.ctaTitle}</h2>
          <p className="text-lg text-text-muted mb-10">{data.ctaDescription}</p>
          <Button variant="primary" size="lg" href="/contact">Book a Discovery Call</Button>
        </div>
      </section>
    </div>
  );
};
