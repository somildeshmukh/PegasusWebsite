import { motion } from 'motion/react';
import { Code, BarChart3, PieChart, Brain, Network, Bot, Cpu, Briefcase } from 'lucide-react';

const curriculum = [
  {
    title: "Python for Data Science",
    description: "Master Python programming from scratch. Learn data structures, OOPs, and essential libraries.",
    icon: Code,
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    title: "Data Analysis (Pandas, NumPy)",
    description: "Clean, manipulate, and analyze complex datasets efficiently using industry-standard tools.",
    icon: BarChart3,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10"
  },
  {
    title: "Data Visualization",
    description: "Create stunning, interactive dashboards using Power BI, Tableau, and Matplotlib.",
    icon: PieChart,
    color: "text-orange-400",
    bg: "bg-orange-400/10"
  },
  {
    title: "Machine Learning",
    description: "Build predictive models using regression, classification, and clustering algorithms.",
    icon: Brain,
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    title: "Deep Learning Basics",
    description: "Understand neural networks, TensorFlow, and PyTorch for advanced AI applications.",
    icon: Network,
    color: "text-pink-400",
    bg: "bg-pink-400/10"
  },
  {
    title: "Generative AI & LLMs",
    description: "Work with ChatGPT APIs, LangChain, and build custom Large Language Models.",
    icon: Bot,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10"
  },
  {
    title: "Agentic AI Systems",
    description: "Design autonomous AI agents that can reason, plan, and execute complex tasks.",
    icon: Cpu,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10"
  },
  {
    title: "Real-world Projects",
    description: "Apply your skills to solve actual business problems and build a strong portfolio.",
    icon: Briefcase,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10"
  }
];

export default function Curriculum() {
  return (
    <section className="py-24 relative" id="curriculum">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What You Will <span className="text-gradient">Learn</span></h2>
          <p className="text-gray-400 text-lg">
            A comprehensive, industry-aligned curriculum designed to take you from beginner to job-ready professional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {curriculum.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.bg}`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
