import { motion } from 'motion/react';

const weeks = [
  {
    week: "Week 1-2",
    title: "Python & Programming Basics",
    desc: "Setup environment, Python syntax, data structures, OOPs concepts, and basic algorithms."
  },
  {
    week: "Week 3-4",
    title: "Data Analysis & Visualization",
    desc: "Master Pandas, NumPy, SQL basics. Create interactive dashboards with Power BI/Tableau."
  },
  {
    week: "Week 5-6",
    title: "Machine Learning Models",
    desc: "Supervised & unsupervised learning, regression, classification, clustering, and model evaluation."
  },
  {
    week: "Week 7-8",
    title: "Generative AI & LLMs",
    desc: "Deep learning basics, NLP, working with OpenAI APIs, LangChain, and Agentic AI concepts."
  },
  {
    week: "Week 9-10",
    title: "Capstone Projects",
    desc: "End-to-end implementation of 4+ real-world projects. Deployment and portfolio building."
  },
  {
    week: "Week 11-12",
    title: "Placement Preparation",
    desc: "Resume building, LinkedIn optimization, mock interviews, and direct referrals."
  }
];

export default function Roadmap() {
  return (
    <section className="py-24 bg-gray-900/30 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Your 90-Day <span className="text-gradient">Roadmap</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A structured, step-by-step journey from absolute beginner to a confident, job-ready AI professional.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {weeks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-gray-950 transform -translate-x-[7px] md:-translate-x-1/2 mt-1.5 z-10 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>

                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                  <div className="glass-panel p-6 rounded-2xl inline-block w-full hover:border-indigo-500/30 transition-colors">
                    <span className="text-indigo-400 font-bold text-sm tracking-wider uppercase mb-2 block">{item.week}</span>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#pricing" className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold text-lg transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)]">
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
}
