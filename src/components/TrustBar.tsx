import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const companies = [
  "TCS", "Infosys", "Accenture", "Wipro", "Cognizant", "Capgemini", "IBM", "Tech Mahindra"
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-gray-900/50 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
            ))}
          </div>
          <p className="text-lg font-medium text-gray-300">
            <span className="text-white font-bold">4.8/5</span> average rating from our alumni working at top tech companies
          </p>
        </div>
      </div>

      {/* Marquee effect for companies */}
      <div className="relative w-full flex overflow-x-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10"></div>
        
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20
          }}
          className="flex gap-16 items-center whitespace-nowrap px-8"
        >
          {[...companies, ...companies].map((company, index) => (
            <div key={index} className="text-2xl font-display font-bold text-gray-600 uppercase tracking-wider">
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
