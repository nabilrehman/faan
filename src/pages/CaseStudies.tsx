import { useState } from 'react';
import { motion } from 'framer-motion';
import { CaseStudyCard } from '../components/ui/Cards';
import { Badge } from '../components/ui/Badge';

const SOLUTION_BLUEPRINTS = [
  {
    id: '1',
    title: 'Migrating core banking workloads to Google Cloud',
    description: 'A reference architecture for securely transitioning banking workloads to GCP, enabling real-time transaction analytics while adhering to strict compliance regulations.',
    imageSrc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    tags: ['Cloud Migration', 'Security'],
    category: 'Cloud',
    industry: 'Financial Services'
  },
  {
    id: '2',
    title: 'Building a generative AI assistant for wealth advisors',
    description: 'An enterprise RAG architecture pattern allowing advisors to securely query portfolios and market research in natural language using Vertex AI.',
    imageSrc: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800',
    tags: ['Gen AI', 'Vertex AI'],
    category: 'AI',
    industry: 'Financial Services'
  },
  {
    id: '3',
    title: 'Modernizing legacy data for real-time analytics',
    description: 'A proven pattern for migrating large-scale on-prem data to BigQuery, enabling real-time dashboards in Looker for operational visibility.',
    imageSrc: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    tags: ['Data Analytics', 'BigQuery', 'Looker'],
    category: 'Data',
    industry: 'Retail'
  },
  {
    id: '4',
    title: '50% faster deployment with MLOps infrastructure',
    description: 'A scalable, automated MLOps pipeline blueprint on Google Cloud that reduces model deployment time from weeks to days.',
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['AI', 'MLOps', 'Google Cloud'],
    category: 'AI',
    industry: 'Telecommunications'
  },
  {
    id: '5',
    title: 'Document AI pipeline for claims processing',
    description: 'An automated Document AI architecture utilizing Vertex AI and BigQuery to extract clinical entities from unstructured documents at scale.',
    imageSrc: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    tags: ['Document AI', 'Vertex AI'],
    category: 'AI',
    industry: 'Healthcare'
  },
  {
    id: '6',
    title: 'Dynamic pricing engine using active ML models',
    description: 'An architecture on Vertex AI supporting daily retraining of dynamic pricing algorithms, designed to drive measurable margin improvements.',
    imageSrc: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&q=80&w=800',
    tags: ['Machine Learning', 'BigQuery'],
    category: 'Data',
    industry: 'Retail'
  }
];

export const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Cloud', 'Data', 'AI'];

  const filteredStudies = activeFilter === 'All'
    ? SOLUTION_BLUEPRINTS
    : SOLUTION_BLUEPRINTS.filter(study => study.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden hero-gradient text-center">
        <div className="max-w-[800px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="status-blue" className="mb-6 mx-auto tracking-widest px-4 py-1 text-accent-blue bg-accent-blue/10">SOLUTION BLUEPRINTS</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-text-primary mb-6 tracking-tight leading-[1.1]"
          >
            What we <br /> can build
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-text-muted leading-relaxed mx-auto max-w-2xl"
          >
            Reference architectures and proven patterns from our team's 10+ years of Google Cloud experience across 300+ enterprise engagements.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-bg-primary border-y border-border-default sticky top-16 z-40">
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-center space-x-2 md:space-x-4 overflow-x-auto hide-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${activeFilter === filter
                ? 'bg-text-primary text-bg-primary'
                : 'bg-bg-secondary text-text-secondary border border-border-default hover:border-text-muted hover:text-text-primary'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="bg-bg-primary py-24 pb-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredStudies.map((study) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={study.id}
              >
                <CaseStudyCard
                  title={study.title}
                  description={study.description}
                  imageSrc={study.imageSrc}
                  tags={study.tags}
                  href={`/work/blueprint-${study.id}`}
                />
              </motion.div>
            ))}
          </motion.div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-24">
              <p className="text-xl text-text-muted">No blueprints found for the selected category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
