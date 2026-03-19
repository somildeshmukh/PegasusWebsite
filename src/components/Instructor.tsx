import { motion } from 'motion/react';
import { Linkedin, Award, Briefcase, BookOpen } from 'lucide-react';
import somilImage from '../assets/somil-1.jpg';

export default function Instructor() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="glass-panel rounded-3xl p-8 md:p-12 max-w-5xl mx-auto relative z-10 border border-white/10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/3"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
                {/* Placeholder for Instructor Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700"></div>
                <img 
                  src={somilImage} 
                  alt="Somil Deshmukh" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0A66C2] text-white hover:bg-[#004182] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            <div className="w-full md:w-2/3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 font-semibold text-sm mb-4 border border-purple-500/20">
                  Lead Instructor
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white">Somil Deshmukh</h2>
                <p className="text-xl text-indigo-400 font-medium mb-6">Founder, Pegasus Technologies and Software Solutions | Java Architect & AI Expert</p>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  With over 18 years of experience building scalable enterprise systems and AI solutions for top multinational companies, I bring real-world industry practices directly into the classroom. My goal is to bridge the gap between academic learning and industry expectations.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                      <Briefcase className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">18+ Years Experience</h4>
                      <p className="text-sm text-gray-400">Top MNCs & Tech Giants</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                      <Award className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Industry Architect</h4>
                      <p className="text-sm text-gray-400">Designed scalable AI systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                      <BookOpen className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Passionate Educator</h4>
                      <p className="text-sm text-gray-400">Mentored 1000+ professionals</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
