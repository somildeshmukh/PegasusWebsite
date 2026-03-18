import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src="/pegausus.jpg" alt="Pegasus Technologies and Software Solutions" className="h-10 w-auto rounded-md" />
            <div className="hidden sm:flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">
                PEGASUS
              </span>
              <span className="text-[10px] font-medium text-gray-400 tracking-widest uppercase mt-[-2px]">
                Technologies & Software Solutions
              </span>
            </div>
            <div className="sm:hidden flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                PEGASUS
              </span>
            </div>
          </div>
          <a href="#contact" className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
