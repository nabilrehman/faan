import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Badge } from './Badge';
import { Button } from './Button';

const FEATURED_STUDIES = [
  {
    id: 1,
    title: "Healthcare Leader: Automated MLOps Platform",
    description: "Built a scalable, automated MLOps pipeline on Google Cloud, reducing model deployment time from weeks to days for a Fortune 500 healthcare provider.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    tags: ["AI", "MLOps", "Google Cloud"],
    stats: "50% Faster Time-to-Market",
    client: "Healthcare Leader",
    results: [
      "Reduced deployment time by 50%",
      "Automated compliance checks",
      "99.9% Pipeline Uptime"
    ]
  },
  {
    id: 2,
    title: "Scale-Up FinTech: 10TB Migration to BigQuery",
    description: "Migrated 10TB of legacy on-prem data to BigQuery, enabling real-time dashboards in Looker and reducing query costs by 40%.",
    imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
    tags: ["Data Analytics", "BigQuery"],
    stats: "40% Cost Reduction",
    client: "FinTech Scaleup",
    results: [
      "10TB+ Data Migrated",
      "Real-time (<1s) Dashboards",
      "40% Cost Reduction"
    ]
  },
  {
    id: 3,
    title: "E-commerce Giant: GenAI Customer Support",
    description: "Deployed customized LLMs on Vertex AI to assist agents, reducing average handle time by 30% and improving CSAT scores.",
    imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    tags: ["Gen AI", "Vertex AI"],
    stats: "30% Handle Time Reduction",
    client: "E-commerce Giant",
    results: [
      "30% Reduced Handle Time",
      "Custom LLM Fine-tuning",
      "CSAT +15% Improvement"
    ]
  }
];

export const CaseStudyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % FEATURED_STUDIES.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + FEATURED_STUDIES.length) % FEATURED_STUDIES.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[1600px] mx-auto px-4 py-20 group/carousel perspective-1000">

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-all backdrop-blur-md"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-all backdrop-blur-md"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="relative h-[600px] flex items-center justify-center">
        <AnimatePresence mode="popLayout" initial={false}>
          {FEATURED_STUDIES.map((study, idx) => {
            let offset = idx - activeIndex;
            if (offset < -1) offset += FEATURED_STUDIES.length;
            if (offset > 1) offset -= FEATURED_STUDIES.length;

            const isActive = offset === 0;
            const isPrev = offset === -1;
            const isNext = offset === 1;

            if (!isActive && !isPrev && !isNext) return null;

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isActive ? 1 : 0.3,
                  scale: isActive ? 1 : 0.85,
                  x: isActive ? '0%' : isPrev ? '-65%' : '65%',
                  zIndex: isActive ? 30 : 10,
                  filter: isActive ? 'blur(0px)' : 'blur(8px)',
                  rotateY: isActive ? 0 : isPrev ? 15 : -15,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute w-full max-w-6xl rounded-[32px] overflow-hidden bg-[#0d1117] border ${isActive ? 'border-border-default' : 'border-transparent'} shadow-2xl`}
                style={{
                  height: isActive ? '550px' : '500px',
                  transformOrigin: 'center center',
                }}
              >
                {isActive ? (
                  <div className="flex h-full flex-col md:flex-row">
                    <div className="w-full md:w-1/2 relative group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-40"></div>
                      <img src={study.imageSrc} alt={study.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute bottom-6 left-6 z-20">
                        <Badge variant="status-purple">{study.client}</Badge>
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 p-8 md:p-12 relative flex flex-col justify-center bg-[#0d1117]">
                      {/* Subtle Glow in Content Area */}
                      <div className="absolute top-0 right-0 w-80 h-80 bg-accent-blue/10 blur-[90px] rounded-full pointer-events-none mix-blend-screen"></div>
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/5 blur-[80px] rounded-full pointer-events-none mix-blend-screen"></div>

                      <div className="relative z-10">
                        <div className="flex flex-wrap gap-2 mb-8">
                          {study.tags.map(tag => (
                            <span key={tag} className="text-xs font-mono font-bold text-accent-blue tracking-wide uppercase bg-accent-blue/10 px-3 py-1.5 rounded-full border border-accent-blue/20">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                          {study.title}
                        </h3>

                        <p className="text-text-secondary mb-10 leading-relaxed text-lg max-w-xl">
                          {study.description}
                        </p>

                        <div className="grid grid-cols-1 gap-3 mb-10">
                          {study.results.map((result, i) => (
                            <div key={i} className="flex items-center text-text-primary group/item">
                              <CheckCircle2 className="w-5 h-5 text-accent-green mr-3 flex-shrink-0" />
                              <span className="text-base font-medium">{result}</span>
                            </div>
                          ))}
                        </div>

                        <Button variant="primary" className="w-fit rounded-full px-8" href={`/work/${study.id}`}>
                          Read success story <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Inactive State
                  <div className="w-full h-full relative cursor-pointer" onClick={() => (isPrev ? prevSlide() : nextSlide())}>
                    <img src={study.imageSrc} alt="Study" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#0d1117]/80"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
