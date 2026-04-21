import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-white/10 pt-16 pb-8" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
             <img src={`/pegasus-logo.jpg`} alt="Pegasus Technologies and Software Solutions" className="h-10 w-auto rounded-md" referrerPolicy="no-referrer" />
             <span className="text-2xl font-bold text-white">Pegasus Technologies and Software Solutions</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Empowering students and professionals with industry-leading training in Data Science, Analytics, and AI.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-sm font-medium text-gray-300 mb-1">Give us a call</span>
                  <a href="tel:+919764138488" className="hover:text-indigo-400 transition-colors">+91-9764138488</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-sm font-medium text-gray-300 mb-1">Message us</span>
                  <a href="mailto:contact@pegasustechnologies.org" className="hover:text-indigo-400 transition-colors">contact@pegasustechnologies.org</a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Location</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-sm font-medium text-gray-300 mb-1">Our location</span>
                  <span>Nandanvan, Nagpur, Maharashtra 440009</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Pegasus Technologies and Software Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
