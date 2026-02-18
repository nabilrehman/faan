import { motion } from 'framer-motion';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Button } from '../components/ui/Button';
import { MetricCard } from '../components/ui/Cards';
import { QuoteBlock } from '../components/ui/Blocks';

export const CaseStudyDetail = () => {
  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">

      {/* 1. Breadcrumb & Meta */}
      <div className="max-w-[1000px] w-full mx-auto px-6 pt-16">
        <Breadcrumb items={[
          { label: 'Our Work', href: '/work' },
          { label: 'Humana' } // Example client
        ]} />
      </div>

      {/* 2. Article Header */}
      <section className="max-w-[1000px] mx-auto px-6 py-12 text-center">
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
          <div><span className="font-semibold text-text-secondary">Client:</span> Humana</div>
          <div><span className="font-semibold text-text-secondary">Industry:</span> Healthcare / Financial Services</div>
          <div><span className="font-semibold text-text-secondary">Services:</span> Data + Analytics, AI + ML</div>
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
          {/* Mock abstract graph rendering */}
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

      {/* 4. Outcomes (Metrics Grid) */}
      <section className="bg-bg-secondary py-16 border-y border-border-default">
        <div className="max-w-[1000px] mx-auto px-6">
          <h3 className="text-[12px] font-bold tracking-[0.1em] text-text-muted uppercase mb-8 text-center">Business Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MetricCard number="85%" label="Reduction in manual review" color="green" />
            <MetricCard number="48hrs" label="Faster claims resolution" color="blue" />
            <MetricCard number="$2.4M" label="Annual operational savings" color="green" />
          </div>
        </div>
      </section>

      {/* 5. Article Body */}
      <section className="max-w-[800px] mx-auto px-6 py-24 rich-text-content">
        <h2 className="text-3xl font-bold text-text-primary mb-6">The Challenge</h2>
        <p className="text-lg text-text-secondary leading-relaxed mb-8">
          The client was processing millions of medical claims and authorization requests annually. A significant portion of this workflow was entirely manual, requiring clinical staff to parse highly technical unstructured data from PDFs and faxes. This led to high overhead costs, slow response times for patients, and scaling bottlenecks during peak seasons.
        </p>

        <h2 className="text-3xl font-bold text-text-primary mt-12 mb-6">The Solution</h2>
        <p className="text-lg text-text-secondary leading-relaxed mb-6">
          FAAN architected a fully automated Document AI pipeline utilizing Google Cloud's Vertex AI and BigQuery. The solution ingested raw documents via Google Cloud Storage and applied a custom trained Vision + NLP model to extract critical clinical entities.
        </p>

        <ul className="space-y-4 mb-12">
          <li className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2.5 mr-4 shrink-0"></div>
            <p className="text-lg text-text-secondary"><strong className="text-text-primary">Data Engineering:</strong> Set up secure, HIPAA-compliant event streaming for un-structured data ingestion into enterprise data lakes.</p>
          </li>
          <li className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2.5 mr-4 shrink-0"></div>
            <p className="text-lg text-text-secondary"><strong className="text-text-primary">Model Development:</strong> Fine-tuned specialized BERT architectures on thousands of historical, anonymized claim documents to recognize custom clinical entities and prior authorization codes.</p>
          </li>
          <li className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2.5 mr-4 shrink-0"></div>
            <p className="text-lg text-text-secondary"><strong className="text-text-primary">Operationalization:</strong> Automated deployment pipelines (MLOps) ensuring continuous model evaluation and preventing data drift over time.</p>
          </li>
        </ul>

        {/* 6. Client Quote */}
        <QuoteBlock
          author="Sarah Jenkins"
          title="VP of Claims Operations"
          company="Humana"
        >
          The pipeline FAAN built didn't just automate a process; it completely transformed our ability to scale. Our clinical staff can now focus on complex edge cases instead of data entry, directly improving member care.
        </QuoteBlock>

        <h2 className="text-3xl font-bold text-text-primary mt-12 mb-6">Architecture & Tech Stack</h2>
        <div className="bg-[#161b22] border border-border-default rounded-lg p-6 font-mono text-sm text-text-secondary mb-12">
          <p className="mb-2"><span className="text-accent-blue">Storage:</span> Google Cloud Storage (GCS)</p>
          <p className="mb-2"><span className="text-accent-blue">Processing:</span> Cloud Run, Document AI</p>
          <p className="mb-2"><span className="text-accent-blue">Machine Learning:</span> Vertex AI Training & Prediction</p>
          <p className="mb-2"><span className="text-accent-blue">Data Warehouse:</span> BigQuery</p>
          <p><span className="text-accent-blue">Security:</span> VPC Service Controls, BeyondCorp</p>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="bg-[#161b22] py-32 border-t border-border-default text-center px-6">
        <h2 className="text-4xl font-bold text-text-primary mb-6">Solve similar challenges</h2>
        <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
          Let's discuss how we can apply these patterns to your specific data and operational workflows.
        </p>
        <Button variant="primary" size="lg" href="/contact">Schedule a Technical Discovery</Button>
      </section>

    </div>
  );
};
