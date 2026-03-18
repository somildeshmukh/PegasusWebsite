import { motion } from 'motion/react';
import { Check, Clock, Zap } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="py-24 relative" id="pricing">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Invest in Your <span className="text-gradient">Future</span></h2>
          <p className="text-gray-400 text-lg">
            Get premium, industry-grade training at a fraction of the cost of a traditional degree.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-3xl p-8 border-2 border-indigo-500/30 relative overflow-hidden"
          >
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
              Most Popular
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Masterclass Program</h3>
              <p className="text-gray-400 text-sm mb-6">Complete Data Science & AI Training</p>
              
              <div className="flex justify-center items-baseline gap-2 mb-2">
                <span className="text-gray-500 line-through text-xl">₹65,000</span>
                <span className="text-5xl font-bold text-white">₹40,000</span>
              </div>
              
              <div className="inline-flex items-center gap-1.5 text-orange-400 text-sm font-medium bg-orange-400/10 px-3 py-1 rounded-full mt-2 border border-orange-400/20">
                <Clock className="w-4 h-4" /> Offer Ends Soon
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "12 Weeks Live Interactive Classes",
                "Access to Class Recordings (Lifetime)",
                "6+ Real-world Industry Projects",
                "Agentic AI & LLM Specialization",
                "Resume & LinkedIn Optimization",
                "1-on-1 Mock Interviews",
                "100% Placement Assistance",
                "Certificate of Completion"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 bg-indigo-500/20 rounded-full p-1">
                    <Check className="w-4 h-4 text-indigo-400" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <a href="#lead-form" className="w-full block text-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]">
              Enroll Now & Save 45%
            </a>
            
            <p className="text-center text-gray-500 text-xs mt-4 flex items-center justify-center gap-1">
              <Zap className="w-3 h-3 text-yellow-500" /> Only 5 seats left in the upcoming batch
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
