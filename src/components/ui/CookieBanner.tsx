import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted or rejected cookies
    const cookieConsent = localStorage.getItem('faan_cookie_consent');
    if (!cookieConsent) {
      // Small delay so it slides up after initial load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('faan_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('faan_cookie_consent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="fixed bottom-0 left-0 right-0 z-[5000] flex justify-center w-full bg-bg-secondary border-t border-border-default shadow-[0_-4px_16px_rgba(0,0,0,0.3)]"
        >
          <div className="max-w-[1280px] w-full px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-text-secondary leading-relaxed">
                We use cookies to analyze web traffic, personalize content, and improve our website's performance.
                By clicking "Accept all", you agree to the storing of cookies on your device.
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <Button variant="link" size="sm" onClick={handleReject} className="text-text-muted hover:text-text-secondary pr-4">
                Manage preferences
              </Button>
              <Button variant="secondary" size="sm" onClick={handleReject}>
                Reject non-essential
              </Button>
              <Button variant="primary" size="sm" onClick={handleAccept}>
                Accept all
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
