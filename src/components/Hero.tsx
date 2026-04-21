import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Star, Users, Briefcase, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium text-indigo-300 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Next Batch Starts Soon - Limited Seats
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            Become a Job-Ready <br className="hidden md:block" />
            <span className="text-gradient">Data Scientist in 90 Days</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Learn Data Science, Analytics & Agentic AI from Industry Experts at <strong className="text-white">Pegasus Technologies and Software Solutions</strong>. Fast-track your career with real projects, hands-on training, and 100% placement assistance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="#pricing" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]">
              Enroll Now <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#lead-form" className="w-full sm:w-auto px-8 py-4 glass-panel hover:bg-white/10 text-white rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2">
              Book Free Demo
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10"
          >
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Users className="w-6 h-6 text-indigo-400" />
              <span className="font-medium">1000+ Students Trained</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Briefcase className="w-6 h-6 text-indigo-400" />
              <span className="font-medium">Top MNC Experience</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Award className="w-6 h-6 text-indigo-400" />
              <span className="font-medium">Placement Support</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
