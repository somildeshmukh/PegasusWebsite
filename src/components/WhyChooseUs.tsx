import { motion } from 'motion/react';
import { UserCheck, Laptop, FileText, Target, Video, LineChart } from 'lucide-react';

const features = [
  {
    title: "Industry Expert Trainer",
    description: "Learn directly from an architect with 18+ years of experience in top MNCs.",
    icon: UserCheck
  },
  {
    title: "Hands-on Projects",
    description: "Stop watching tutorials. Start building real-world applications.",
    icon: Laptop
  },
  {
    title: "Resume & Interview Prep",
    description: "Get your resume shortlisted and crack tough technical interviews.",
    icon: FileText
  },
  {
    title: "Placement Assistance",
    description: "Dedicated support to connect you with top hiring companies.",
    icon: Target
  },
  {
    title: "Live + Recorded Sessions",
    description: "Never miss a class. Access recordings anytime, anywhere.",
    icon: Video
  },
  {
    title: "Real Case Studies",
    description: "Analyze actual business data and solve industry-level problems.",
    icon: LineChart
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-900/30 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose <span className="text-gradient">Us?</span></h2>
              <p className="text-gray-400 text-lg mb-8">
                We don't just teach theory. We prepare you for the real world with practical skills, mentorship, and career support that actually works.
              </p>
              <a href="#pricing" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                Secure Your Seat
              </a>
            </motion.div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 glass-panel rounded-2xl"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-indigo-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
