import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';



interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  href: string;
}

const ArticleCard = ({ title, excerpt, category, date, readTime, image, href }: ArticleCardProps) => (
  <a href={href} className="flex flex-col h-full bg-bg-secondary border border-border-default rounded-xl transition-all duration-300 hover:border-accent-blue hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] group overflow-hidden">
    <div className="pt-[50%] w-full relative bg-bg-primary overflow-hidden border-b border-border-default">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-luminosity group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-4 left-4">
        <Badge variant="status-purple">{category}</Badge>
      </div>
    </div>
    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center text-[13px] text-text-muted mb-3 font-mono">
        <span>{date}</span>
        <span className="mx-2">•</span>
        <span>{readTime}</span>
      </div>
      <h3 className="text-xl font-bold text-text-primary mb-3 leading-snug group-hover:text-accent-blue transition-colors line-clamp-2">{title}</h3>
      <p className="text-text-secondary line-clamp-3 mb-6 flex-1">{excerpt}</p>

      <div className="text-accent-blue font-medium flex items-center mt-auto">
        Read article <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 ml-1">&rarr;</span>
      </div>
    </div>
  </a>
);

// Mock Data
const ARTICLES = [
  {
    id: '1',
    title: 'Architecting for Agentic Workflows on Google Cloud',
    excerpt: 'A deep dive into building autonomous LLM agents using Vertex AI, LangChain, and BigQuery integration patterns.',
    category: 'Generative AI',
    date: 'Oct 12, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Migrating from Teradata to BigQuery: A Strategic Guide',
    excerpt: 'Learn the technical frameworks and operational models needed to ensure a zero-downtime migration for enterprise data warehouses.',
    category: 'Data Engineering',
    date: 'Sep 28, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Implementing Zero Trust Security in GCP Landing Zones',
    excerpt: 'Best practices for configuring VPC Service Controls, BeyondCorp, and IAM boundaries for highly regulated industries.',
    category: 'Cloud Architecture',
    date: 'Sep 15, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'The State of FinOps 2025',
    excerpt: 'Analyzing the latest trends in cloud cost optimization, allocation strategies, and automated scaling mechanisms.',
    category: 'FinOps',
    date: 'Aug 30, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    title: 'Building Real-time Dashboards with Looker Studio Pro',
    excerpt: 'How to utilize Looker Studio Pro connected to BigQuery streaming limits to achieve sub-second dashboard refreshes.',
    category: 'Analytics',
    date: 'Aug 14, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    title: 'Preventing Hallucinations in RAG Systems',
    excerpt: 'A technical review of prompt boundary constraints and context retrieval methods for production AI systems.',
    category: 'Generative AI',
    date: 'Jul 22, 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800'
  }
];

export const Hub = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Generative AI', 'Data Engineering', 'Cloud Architecture', 'Analytics'];

  const filteredArticles = activeTab === 'All'
    ? ARTICLES
    : ARTICLES.filter(art => art.category === activeTab);

  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. Hero Section */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-24 px-4 overflow-hidden hero-gradient">
        <div className="relative z-10 max-w-[800px] w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge variant="status-green" className="mb-6 mx-auto tracking-widest px-4 py-1">THE HUB</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-text-primary mb-6 tracking-tight"
          >
            Insights for the <br /> cloud era.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-text-muted leading-relaxed mx-auto max-w-2xl"
          >
            Technical deep dives, architectural patterns, and industry analysis from our engineering teams.
          </motion.p>
        </div>
      </section>

      {/* 2. Category Tabs */}
      <section className="bg-bg-primary border-y border-border-default sticky top-16 z-40 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-6 py-4 overflow-x-auto hide-scrollbar">
          <ul className="flex items-center space-x-2 md:space-x-6 min-w-max">
            {tabs.map(tab => (
              <li key={tab}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-colors whitespace-nowrap ${activeTab === tab
                    ? 'bg-text-primary text-bg-primary'
                    : 'text-text-secondary hover:text-text-primary'
                    }`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Featured Article (only show on 'All') */}
      <AnimatePresence>
        {activeTab === 'All' && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-bg-secondary py-16 border-b border-border-default overflow-hidden"
          >
            <div className="max-w-[1280px] mx-auto px-6">
              <a href="/hub/article-1" className="flex flex-col lg:flex-row bg-[#0d1117] border border-border-default rounded-xl overflow-hidden hover:border-accent-purple group transition-colors shadow-2xl">
                <div className="lg:w-1/2 relative bg-bg-primary min-h-[300px]">
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" alt="Featured Space" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-bg-primary to-transparent lg:block hidden"></div>
                </div>
                <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-bg-primary z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <Badge variant="status-purple">Generative AI</Badge>
                    <span className="text-sm font-mono text-text-muted">Featured Post</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 leading-tight group-hover:text-accent-blue transition-colors">Architecting for Agentic Workflows on Google Cloud</h2>
                  <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-xl">
                    A deep dive into building autonomous LLM agents using Vertex AI, LangChain, and BigQuery integration patterns to execute complex multi-step reasoning.
                  </p>
                  <div className="flex items-center text-accent-blue font-medium group-hover:-translate-y-1 transition-transform">
                    Read full article <span className="ml-2">&rarr;</span>
                  </div>
                </div>
              </a>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* 4. Article Grid */}
      <section className="bg-bg-primary py-24 pb-32 flex-grow">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredArticles.map((article) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={article.id}
                >
                  <ArticleCard
                    title={article.title}
                    excerpt={article.excerpt}
                    category={article.category}
                    date={article.date}
                    readTime={article.readTime}
                    image={article.image}
                    href={`/hub/article-${article.id}`}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bg-secondary border border-border-default mb-6 text-text-muted">
                🔍
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">No articles found</h3>
              <p className="text-text-muted max-w-md mx-auto">We haven't published any articles in this category yet. Check back soon or browse another topic.</p>
            </motion.div>
          )}

          {activeTab !== 'All' && filteredArticles.length > 0 && (
            <div className="mt-16 text-center">
              <Button variant="secondary" onClick={() => setActiveTab('All')}>View All Articles</Button>
            </div>
          )}
        </div>
      </section>

      {/* 5. Newsletter CTA */}
      <section className="bg-[#161b22] py-24 border-t border-border-default">
        <div className="max-w-[640px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4 tracking-tight">Never miss an update</h2>
          <p className="text-text-muted mb-8">Get the latest technical deep-dives and architectural patterns delivered to your inbox monthly.</p>
          <form className="flex w-full max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-bg-primary border border-border-default border-r-0 rounded-l-lg px-4 py-3 text-text-secondary placeholder:text-text-placeholder focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 z-10 relative"
              required
            />
            <button
              type="submit"
              className="bg-accent-blue hover:bg-[#318bf0] text-white font-medium px-6 py-3 rounded-r-lg transition-colors z-20"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};
