import { useState } from 'react';
import { motion } from 'framer-motion';
import { CaseStudyCard } from '../components/ui/Cards';
import { Badge } from '../components/ui/Badge';



// Mock Data
const CASE_STUDIES = [
  {
    id: '1',
    title: 'Migrating core banking workloads to Google Cloud',
    description: 'Securely transitioned a top 10 national bank to GCP, enabling real-time transaction analytics while adhering to strict compliance regulations.',
    imageSrc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    tags: ['Cloud Migration', 'Security'],
    category: 'Cloud',
    industry: 'Financial Services'
  },
  {
    id: '2',
    title: 'Building a generative AI assistant for wealth advisors',
    description: 'Deployed an enterprise RAG architecture allowing advisors to securely query client portfolios and market research in natural language.',
    imageSrc: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800',
    tags: ['Gen AI', 'Vertex AI'],
    category: 'AI',
    industry: 'Financial Services'
  },
  {
    id: '3',
    title: 'Modernizing legacy data for real-time analytics',
    description: 'Migrated 10TB of legacy on-prem data to BigQuery, enabling real-time dashboards in Looker for immediate inventory tracking.',
    imageSrc: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    tags: ['Data Analytics', 'BigQuery', 'Looker'],
    category: 'Data',
    industry: 'Retail'
  },
  {
    id: '4',
    title: '50% faster deployment with MLOps infrastructure',
    description: 'Built a scalable, automated MLOps pipeline on Google Cloud reducing model deployment time from weeks to days for a global telecommunications provider.',
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['AI', 'MLOps', 'Google Cloud'],
    category: 'AI',
    industry: 'Telecommunications'
  },
  {
    id: '5',
    title: 'Serverless multiplayer backend on Spanner',
    description: 'Architected a highly available, globally distributed database backend causing zero downtime during peak load events.',
    imageSrc: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    tags: ['Cloud Spanner', 'Gaming'],
    category: 'Cloud',
    industry: 'Gaming'
  },
  {
    id: '6',
    title: 'Dynamic pricing engine using active ML models',
    description: 'Built an architecture on Vertex AI supporting daily retraining of dynamic pricing algorithms, driving an 8% increase in margin.',
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
    ? CASE_STUDIES
    : CASE_STUDIES.filter(study => study.category === activeFilter);

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
            <Badge variant="status-blue" className="mb-6 mx-auto tracking-widest px-4 py-1 text-accent-blue bg-accent-blue/10">OUR WORK</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-text-primary mb-6 tracking-tight leading-[1.1]"
          >
            Proven results for <br /> ambitious teams
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-text-muted leading-relaxed mx-auto max-w-2xl"
          >
            Explore how we've partnered with industry leaders to drive measurable transformation using Google Cloud and AI.
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
                  href={`/work/case-study-${study.id}`}
                />
              </motion.div>
            ))}
          </motion.div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-24">
              <p className="text-xl text-text-muted">No case studies found for the selected category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
