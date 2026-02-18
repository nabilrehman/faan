import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Badge } from './Badge';

const FEATURED_STUDIES = [
  {
    id: 1,
    title: "50% faster deployment with MLOps infrastructure",
    description: "Built a scalable, automated MLOps pipeline on Google Cloud reducing model deployment time from weeks to days for a Fortune 500 healthcare provider.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    tags: ["AI", "MLOps", "Google Cloud"],
    stats: "50% Faster",
    client: "Healthcare Provider",
    results: [
      "Reduced deployment time by 50%",
      "Automated compliance checks",
      "99.9% Pipeline Uptime"
    ]
  },
  {
    id: 2,
    title: "Modernizing legacy data for real-time analytics",
    description: "Migrated 10TB of legacy on-prem data to BigQuery, enabling real-time dashboards in Looker and reducing query costs by 40%.",
    imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
    tags: ["Data Analytics", "BigQuery"],
    stats: "10TB Migrated",
    client: "FinTech Scaleup",
    results: [
      "10TB+ Data Migrated",
      "Real-time Dashboarding",
      "40% Cost Reduction"
    ]
  },
  {
    id: 3,
    title: "Generative AI for customer service operations",
    description: "Deployed customized LLMs on Vertex AI to assist agents, reducing average handle time by 30% and improving CSAT scores.",
    imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    tags: ["Gen AI", "Vertex AI"],
    stats: "30% Efficiency",
    client: "E-commerce Giant",
    results: [
      "30% Reduced Handle Time",
      "Custom LLM Fine-tuning",
      "Standardized Responses"
    ]
  }
];

export const FeaturedCarousel = () => {
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
    <div className="relative w-full max-w-[1400px] mx-auto px-4 py-12 group/carousel">
      {/* Navigation Buttons - Visible on Hover */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-[#161b22]/80 border border-[#30363d] text-text-secondary hover:text-white hover:border-accent-blue transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 backdrop-blur-sm"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-[#161b22]/80 border border-[#30363d] text-text-secondary hover:text-white hover:border-accent-blue transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 backdrop-blur-sm"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="relative h-[650px] flex items-center justify-center fade-mask-x select-none">
        <AnimatePresence mode="popLayout" initial={false}>
          {FEATURED_STUDIES.map((study, idx) => {
            // Calculate relative position based on active index
            // We want active index in center (0), others shifted left/right
            let offset = idx - activeIndex;
            // Handle wrap-around logic for 3 items
            if (offset < -1) offset += FEATURED_STUDIES.length;
            if (offset > 1) offset -= FEATURED_STUDIES.length;

            const isActive = offset === 0;
            const isPrev = offset === -1;
            const isNext = offset === 1;

            // Only render active, prev, and next
            if (!isActive && !isPrev && !isNext) return null;

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isActive ? 1 : 0.4,
                  scale: isActive ? 1 : 0.85,
                  x: isActive ? '0%' : isPrev ? '-70%' : '70%', // Push them further out
                  zIndex: isActive ? 30 : 10,
                  filter: isActive ? 'blur(0px)' : 'blur(4px) grayscale(80%) brightness(0.7)', // Heavier blur and dimming
                  cursor: isActive ? 'default' : 'pointer'
                }}
                onClick={() => {
                  if (isPrev) prevSlide();
                  if (isNext) nextSlide();
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Spring-like ease
                className={`absolute w-full max-w-6xl rounded-2xl overflow-hidden border ${isActive ? 'border-[#30363d] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)]' : 'border-transparent'} bg-[#161b22]`}
                style={{
                  display: isActive ? 'flex' : 'block',
                  flexDirection: 'row',
                  height: isActive ? '550px' : '480px',
                  left: '50%',
                  transform: 'translateX(-50%)', // Centered by default, x offset handled by framer
                }}
              >
                {/* Active Card Layout (Horizontal) */}
                {isActive && (
                  <>
                    <div className="w-[55%] h-full relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#161b22] via-[#161b22]/20 to-transparent z-10"></div>
                      <img
                        src={study.imageSrc}
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="w-[45%] p-10 md:p-14 flex flex-col justify-center relative bg-[#161b22]">
                      {/* Stats Banner */}
                      <div className="absolute top-0 right-0">
                        <div className="bg-[#21262d] px-6 py-3 rounded-bl-2xl text-accent-blue font-mono font-bold text-sm border-l border-b border-[#30363d]">
                          {study.stats}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.tags.map(tag => (
                          <Badge key={tag} variant="tag">{tag}</Badge>
                        ))}
                      </div>

                      <h3 className="text-3xl md:text-[40px] font-bold text-text-primary mb-6 leading-[1.1] tracking-tight">
                        {study.title}
                      </h3>

                      <p className="text-text-secondary text-lg mb-8 leading-relaxed line-clamp-3">
                        {study.description}
                      </p>

                      <div className="space-y-3 mb-10">
                        {study.results.map((result, i) => (
                          <div key={i} className="flex items-center text-text-primary/90">
                            <CheckCircle2 className="w-5 h-5 text-accent-green mr-3 flex-shrink-0" />
                            <span className="text-base font-medium">{result}</span>
                          </div>
                        ))}
                      </div>

                      <button className="flex items-center text-white font-semibold group/btn w-fit px-6 py-3 rounded-md bg-[#238636] hover:bg-[#2ea043] transition-all hover:shadow-[0_0_20px_rgba(35,134,54,0.4)]">
                        <span className="text-base">Read Success Story</span>
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </>
                )}

                {/* Inactive Card Layout (Blurred/Simplified) */}
                {!isActive && (
                  <div className="w-full h-full relative">
                    <img
                      src={study.imageSrc}
                      alt={study.title}
                      className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-[#0d1117]/50 mix-blend-multiply"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-[#161b22] border border-[#30363d] text-text-secondary hover:text-white hover:border-accent-blue transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-[#161b22] border border-[#30363d] text-text-secondary hover:text-white hover:border-accent-blue transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
