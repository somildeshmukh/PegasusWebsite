import { motion } from 'motion/react';
import { Quote, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Data Scientist @ TCS",
    image: "https://i.pravatar.cc/150?img=11",
    text: "The Agentic AI module was a game-changer. I transitioned from a manual QA role to a Data Scientist with a 120% salary hike within 4 months of completing the course.",
    hike: "120% Hike"
  },
  {
    name: "Priya Patel",
    role: "AI Engineer @ Infosys",
    image: "https://i.pravatar.cc/150?img=5",
    text: "Somil sir's teaching methodology is incredibly practical. We didn't just learn algorithms; we built real systems. The resume prep sessions were spot on.",
    hike: "Placed in 45 Days"
  },
  {
    name: "Amit Kumar",
    role: "Data Analyst @ Accenture",
    image: "https://i.pravatar.cc/150?img=15",
    text: "As a fresh graduate, I was struggling to get interviews. The portfolio projects I built here got me 3 offers. Highly recommend this to anyone serious about AI.",
    hike: "3 Job Offers"
  },
  {
    name: "Sneha Reddy",
    role: "ML Engineer @ Startup",
    image: "https://i.pravatar.cc/150?img=9",
    text: "The depth of the curriculum is unmatched. From basic Python to deploying LLMs, everything is covered with a focus on industry standards.",
    hike: "Career Transition"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-900/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Success <span className="text-gradient">Stories</span></h2>
          <p className="text-gray-400 text-lg">
            Don't just take our word for it. See how our training has transformed the careers of our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full border-2 border-indigo-500/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-300 italic mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-sm font-semibold border border-emerald-500/20">
                <TrendingUp className="w-4 h-4" />
                {testimonial.hike}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
