import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, Info } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastProps {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  onClose: (id: string) => void;
  duration?: number;
}

export const Toast = ({ id, type, title, message, onClose, duration = 5000 }: ToastProps) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => onClose(id), duration);
      return () => clearTimeout(timer);
    }
  }, [id, duration, onClose]);

  const variants = {
    success: { border: 'border-l-accent-green', icon: <CheckCircle2 size={20} className="text-accent-green" /> },
    error: { border: 'border-l-[#f85149]', icon: <AlertCircle size={20} className="text-[#f85149]" /> },
    info: { border: 'border-l-accent-blue', icon: <Info size={20} className="text-accent-blue" /> },
  };

  const { border, icon } = variants[type];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 20, scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`bg-bg-secondary border border-border-default ${border} border-l-4 rounded-lg p-4 shadow-2xl max-w-md w-full relative flex items-start space-x-3 mb-3 shrink-0`}
    >
      <div className="shrink-0 mt-0.5">{icon}</div>
      <div className="flex-1 pr-6">
        {title && <h4 className="text-sm font-semibold text-text-primary mb-1">{title}</h4>}
        <p className="text-sm text-text-secondary">{message}</p>
      </div>
      <button
        onClick={() => onClose(id)}
        className="absolute top-4 right-3 text-text-muted hover:text-text-primary transition-colors focus:outline-none"
        aria-label="Close"
      >
        <X size={16} />
      </button>
    </motion.div>
  );
};
