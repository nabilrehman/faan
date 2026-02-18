import { type ReactNode, useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  delayShow?: number;
  delayHide?: number;
  position?: 'top' | 'bottom';
}

export const Tooltip = ({
  children,
  content,
  delayShow = 300,
  delayHide = 100,
  position = 'top'
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleMouseEnter = () => {
    clearTimeout(hideTimeoutRef.current);
    showTimeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delayShow);
  };

  const handleMouseLeave = () => {
    clearTimeout(showTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, delayHide);
  };

  useEffect(() => {
    return () => {
      clearTimeout(showTimeoutRef.current);
      clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative inline-flex items-center justify-center group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: position === 'top' ? 4 : -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: position === 'top' ? 4 : -4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`absolute z-50 pointer-events-none max-w-[240px] w-max whitespace-normal bg-bg-primary border border-border-default shadow-lg rounded-md px-3 py-1.5 text-sm text-text-secondary ${position === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'}`}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
