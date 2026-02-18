import { motion } from 'framer-motion';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Button } from '../components/ui/Button';
import { MetricCard } from '../components/ui/Cards';

export const CaseStudyDetail = () => {
  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">

      {/* 1. Breadcrumb & Meta */}
      <div className="max-w-[1000px] w-full mx-auto px-6 pt-16">
        <Breadcrumb items={[
          { label: 'Solution Blueprints', href: '/work' },
          { label: 'Claims Processing' }
        ]} />
      </div>

      {/* 2. Article Header */}
      <section className="max-w-[1000px] mx-auto px-6 py-12 text-center">
        <div className="text-xs font-mono text-accent-purple mb-6 uppercase tracking-wider">Solution Blueprint</div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-text-primary mb-8 tracking-tight"
        >
          Accelerating claims processing with ML-driven document extraction
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-text-muted"
        >
          <div><span className="font-semibold text-text-secondary">Industry:</span> Healthcare / Financial Services</div>
          <div><span className="font-semibold text-text-secondary">Services:</span> Data + Analytics, AI + ML</div>
          <div><span className="font-semibold text-text-secondary">Timeline:</span> 6–8 weeks</div>
        </motion.div>
      </section>

      {/* 3. Featured Full-Width Image */}
      <section className="w-full max-w-[1280px] mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full pt-[50%] relative rounded-2xl overflow-hidden border border-border-default shadow-2xl bg-[#0d1117]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(63,34,148,0.25)_0%,transparent_100%)]"></div>
          <div className="absolute inset-0 flex items-center justify-center font-mono opacity-50 mix-blend-screen overflow-hidden p-12">
            <div className="w-full h-full border border-accent-purple/30 rounded-lg relative">
              <div className="absolute bottom-0 w-[10%] bg-accent-blue/40 left-[10%] h-[30%]"></div>
              <div className="absolute bottom-0 w-[10%] bg-accent-blue/40 left-[25%] h-[50%]"></div>
              <div className="absolute bottom-0 w-[10%] bg-accent-blue/40 left-[40%] h-[20%]"></div>
              <div className="absolute bottom-0 w-[10%] bg-accent-green left-[55%] h-[80%] shadow-[0_0_20px_#2dba4e]"></div>
              <div className="absolute bottom-0 w-[10%] bg-accent-blue/40 left-[70%] h-[60%]"></div>
              <div className="absolute w-full border-t border-dashed border-accent-purple/50 top-[20%]"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. Target Outcomes (Metrics Grid) */}
      <section className="bg-bg-secondary py-16 border-y border-border-default">
        <div className="max-w-[1000px] mx-auto px-6">
          <h3 className="text-[12px] font-bold tracking-[0.1em] text-text-muted uppercase mb-8 text-center">Target Outcomes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MetricCard number="85%" label="Reduction in manual review" color="green" />
            <MetricCard number="48hrs" label="Faster claims resolution" color="blue" />
            <MetricCard number="$2.4M" label="Projected annual savings" color="green" />
          </div>
        </div>
      </section>

      {/* 5. Article Body */}
      <section className="max-w-[800px] mx-auto px-6 py-24 rich-text-content">
        <h2 className="text-3xl font-bold text-text-primary mb-6">The Challenge</h2>
        <p className="text-lg text-text-secondary leading-relaxed mb-8">
          Healthcare organizations process millions of medical claims and authorization requests annually. A significant portion of this workflow is entirely manual, requiring clinical staff to parse highly technical unstructured data from PDFs and faxes. This leads to high overhead costs, slow response times for patients, and scaling bottlenecks during peak seasons.
        </p>

        <h2 className="text-3xl font-bold text-text-primary mt-12 mb-6">The Solution Architecture</h2>
        <p className="text-lg text-text-secondary leading-relaxed mb-6">
          This blueprint details a fully automated Document AI pipeline utilizing Google Cloud's Vertex AI and BigQuery. The solution ingests raw documents via Google Cloud Storage and applies a custom trained Vision + NLP model to extract critical clinical entities.
        </p>

        <ul className="space-y-4 mb-12">
          <li className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2.5 mr-4 shrink-0"></div>
            <p className="text-lg text-text-secondary"><strong className="text-text-primary">Data Engineering:</strong> Secure, HIPAA-compliant event streaming for unstructured data ingestion into enterprise data lakes.</p>
          </li>
          <li className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2.5 mr-4 shrink-0"></div>
            <p className="text-lg text-text-secondary"><strong className="text-text-primary">Model Development:</strong> Fine-tuned specialized architectures on historical anonymized documents to recognize custom clinical entities and prior authorization codes.</p>
          </li>
          <li className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2.5 mr-4 shrink-0"></div>
            <p className="text-lg text-text-secondary"><strong className="text-text-primary">Operationalization:</strong> Automated deployment pipelines (MLOps) ensuring continuous model evaluation and preventing data drift over time.</p>
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-text-primary mt-12 mb-6">Architecture & Tech Stack</h2>
        <div className="bg-[#161b22] border border-border-default rounded-lg p-6 font-mono text-sm text-text-secondary mb-12">
          <p className="mb-2"><span className="text-accent-blue">Storage:</span> Google Cloud Storage (GCS)</p>
          <p className="mb-2"><span className="text-accent-blue">Processing:</span> Cloud Run, Document AI</p>
          <p className="mb-2"><span className="text-accent-blue">Machine Learning:</span> Vertex AI Training & Prediction</p>
          <p className="mb-2"><span className="text-accent-blue">Data Warehouse:</span> BigQuery</p>
          <p><span className="text-accent-blue">Security:</span> VPC Service Controls, BeyondCorp</p>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="bg-[#161b22] py-32 border-t border-border-default text-center px-6">
        <h2 className="text-4xl font-bold text-text-primary mb-6">Want to build something similar?</h2>
        <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
          Let's discuss how we can apply these patterns to your specific data and operational workflows.
        </p>
        <Button variant="primary" size="lg" href="/contact">Book a Discovery Call</Button>
      </section>

    </div>
  );
};
