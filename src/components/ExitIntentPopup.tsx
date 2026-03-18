import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift } from 'lucide-react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Show popup if mouse leaves the top of the window
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsVisible(false)}
          className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-gray-900 border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
        >
          {/* Decorative background */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-indigo-600/20 to-purple-600/20"></div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 text-center pt-8">
            <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-indigo-500/30">
              <Gift className="w-8 h-8 text-indigo-400" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Wait! Don't Miss Out
            </h3>
            
            <p className="text-gray-300 mb-8">
              Get an exclusive <span className="text-white font-bold">10% extra discount</span> on the Masterclass Program. Valid only for the next 24 hours!
            </p>

            <div className="space-y-4">
              <a 
                href="#pricing"
                onClick={() => setIsVisible(false)}
                className="block w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-colors shadow-[0_0_20px_rgba(79,70,229,0.3)]"
              >
                Claim My Discount
              </a>
              <button 
                onClick={() => setIsVisible(false)}
                className="block w-full py-3 text-gray-400 hover:text-white font-medium transition-colors"
              >
                No thanks, I'll pay full price
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
