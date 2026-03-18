import { motion } from 'motion/react';
import { ShieldAlert, TrendingUp, MessageSquare, FileSearch, ThumbsUp } from 'lucide-react';

const projects = [
  {
    title: "Fraud Detection System",
    problem: "Financial institutions lose billions to fraudulent transactions.",
    solution: "Built a Machine Learning classification model to detect anomalies in real-time.",
    tools: ["Python", "Scikit-Learn", "Pandas", "XGBoost"],
    icon: ShieldAlert,
    color: "from-red-500/20 to-orange-500/20",
    iconColor: "text-red-400"
  },
  {
    title: "Sales Forecasting",
    problem: "Retailers struggle to optimize inventory without accurate demand prediction.",
    solution: "Developed a Time Series forecasting model using historical sales data.",
    tools: ["Python", "Prophet", "Statsmodels", "Power BI"],
    icon: TrendingUp,
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400"
  },
  {
    title: "ChatGPT-like AI Assistant",
    problem: "Businesses need automated, intelligent customer support 24/7.",
    solution: "Created a custom conversational AI agent using LLMs and RAG architecture.",
    tools: ["LangChain", "OpenAI API", "Vector DB", "Streamlit"],
    icon: MessageSquare,
    color: "from-indigo-500/20 to-blue-500/20",
    iconColor: "text-indigo-400"
  },
  {
    title: "Resume Screening AI",
    problem: "HR teams spend countless hours manually reviewing thousands of resumes.",
    solution: "Built an NLP-powered tool to parse resumes and match them with job descriptions.",
    tools: ["Spacy", "NLTK", "Transformers", "FastAPI"],
    icon: FileSearch,
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400"
  },
  {
    title: "Recommendation System",
    problem: "E-commerce platforms need to personalize product suggestions to increase sales.",
    solution: "Implemented a collaborative filtering recommendation engine.",
    tools: ["Python", "Surprise", "Matrix Factorization", "Flask"],
    icon: ThumbsUp,
    color: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-400"
  }
];

export default function Projects() {
  return (
    <section className="py-24 relative" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 font-semibold text-sm mb-4 border border-indigo-500/20"
          >
            Portfolio Builder
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Build <span className="text-gradient">Real Projects</span></h2>
          <p className="text-gray-400 text-lg">
            Employers don't just want certificates; they want to see what you can build. You will complete these industry-grade projects during the program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden flex flex-col h-full group"
            >
              <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                <project.icon className={`w-12 h-12 ${project.iconColor} relative z-10 transform group-hover:scale-110 transition-transform duration-500`} />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                
                <div className="mb-4 flex-grow">
                  <div className="mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">Problem</span>
                    <p className="text-sm text-gray-300">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-1">Solution</span>
                    <p className="text-sm text-gray-300">{project.solution}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-md border border-white/10">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
