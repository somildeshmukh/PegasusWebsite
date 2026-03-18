import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Who can join this program?",
    answer: "This program is designed for 3rd/4th-year engineering students, fresh graduates, and working IT professionals (0-10 years experience) looking to switch to Data Science and AI careers. No prior coding experience is strictly required, though basic logic helps."
  },
  {
    question: "Do you provide placement guarantee?",
    answer: "We provide 100% placement assistance. This includes resume building, LinkedIn optimization, mock interviews, and direct referrals to our hiring partners. While we don't 'guarantee' a job (as it depends on your interview performance), our students have a very high placement rate."
  },
  {
    question: "Are the classes live or recorded?",
    answer: "The classes are 100% LIVE and interactive. However, all live sessions are recorded and provided to you with lifetime access so you can revise anytime or catch up if you miss a class."
  },
  {
    question: "What is the duration of the course?",
    answer: "The core training is 12 weeks (90 days) long, with classes held on weekends (or specific weekdays depending on the batch). This is followed by placement preparation and interviews."
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes, upon successful completion of the course and portfolio projects, you will receive an industry-recognized certificate of completion."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className="text-gray-400 text-lg">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-semibold text-white text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
