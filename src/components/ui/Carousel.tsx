import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
}

export const Carousel = ({ items, autoPlay = false, interval = 5000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideLeft = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const slideRight = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(slideRight, interval);
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative w-full overflow-hidden" style={{ height: '400px' }}>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-4 z-10 flex items-center">
          <button
            onClick={slideLeft}
            className="w-10 h-10 rounded-full bg-bg-secondary border border-border-default flex items-center justify-center text-text-secondary hover:border-accent-blue hover:text-text-primary transition-all focus:outline-none"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} />
          </button>
        </div>

        <div className="absolute inset-y-0 right-4 z-10 flex items-center">
          <button
            onClick={slideRight}
            className="w-10 h-10 rounded-full bg-bg-secondary border border-border-default flex items-center justify-center text-text-secondary hover:border-accent-blue hover:text-text-primary transition-all focus:outline-none"
            aria-label="Next Slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Slides */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 w-full h-full flex items-center justify-center px-20"
          >
            {items[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex space-x-2 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors duration-300 focus:outline-none ${index === currentIndex ? 'bg-accent-green' : 'bg-border-default hover:bg-text-placeholder'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
