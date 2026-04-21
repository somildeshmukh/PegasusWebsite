import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function DemoEnrollmentPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenEnrollmentPopup', 'true');
  };

  const handleEnrollClick = () => {
    closePopup();
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
      leadForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-gray-950/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-[#030712] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            {/* Decorative background elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]"></div>

            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-20"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-10 p-8 sm:p-12">
              <div className="flex flex-col items-center text-center">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-500/20"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Free Live Session
                </motion.div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                  Master Data Science <br />
                  <span className="text-gradient">& Get Job Ready</span>
                </h2>

                <p className="text-gray-400 text-lg mb-8 max-w-md">
                  Join our next <span className="text-white font-semibold">Free Demo Class</span> and discover exactly how to land a high-paying AI role in 90 days.
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4 text-indigo-400" />
                    </div>
                    <span className="text-sm text-gray-300 text-left">Limited Batch Seats</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-sm text-gray-300 text-left">Direct Industry Insights</span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={handleEnrollClick}
                  className="group relative w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-xl transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)] flex items-center justify-center gap-3 overflow-hidden"
                >
                  <span className="relative z-10">Register for Demo Class</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
                  
                  {/* Subtle shine effect */}
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'linear', repeatDelay: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                  />
                </button>
                
                <p className="text-xs text-gray-500 mt-6">
                  No credit card required • Join 1000+ successful alumni
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
