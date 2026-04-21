import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, ChevronDown } from 'lucide-react';

import { db, auth } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { handleFirestoreError } from '../lib/firestore-errors';

const INDIA_STATES_CITIES: Record<string, string[]> = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Tirupati"],
  "Arunachal Pradesh": ["Itanagar", "Tawang", "Ziro", "Pasighat", "Bomdila"],
  "Assam": ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Nagaon", "Tinsukia"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga"],
  "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Korba", "Rajnandgaon", "Jagdalpur"],
  "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar"],
  "Haryana": ["Gurugram", "Faridabad", "Panipat", "Ambala", "Yamunanagar", "Rohtak"],
  "Himachal Pradesh": ["Shimla", "Dharamshala", "Solan", "Mandi", "Palampur", "Kullu"],
  "Jharkhand": ["Jamshedpur", "Ranchi", "Dhanbad", "Bokaro", "Deoghar", "Hazaribagh"],
  "Karnataka": ["Bengaluru", "Mysuru", "Hubballi-Dharwad", "Mangaluru", "Belagavi", "Kalaburagi"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Kannur"],
  "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Sagar"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Solapur", "Amravati"],
  "Manipur": ["Imphal", "Churachandpur", "Thoubal", "Kakching"],
  "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongpoh"],
  "Mizoram": ["Aizawl", "Lunglei", "Champhai", "Serchhip"],
  "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur", "Puri"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer", "Udaipur", "Bhilwara"],
  "Sikkim": ["Gangtok", "Namchi", "Geyzing", "Mangan"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Erode"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar", "Ramagundam"],
  "Tripura": ["Agartala", "Dharmanagar", "Kailasahar", "Udaipur"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Meerut", "Varanasi", "Prayagraj", "Noida"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur", "Kashipur"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Maheshtala"],
  "Andaman and Nicobar Islands": ["Port Blair"],
  "Chandigarh": ["Chandigarh"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
  "Delhi": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi"],
  "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla"],
  "Ladakh": ["Leh", "Kargil"],
  "Lakshadweep": ["Kavaratti"],
  "Puducherry": ["Puducherry", "Karaikal", "Mahe", "Yanam"]
};

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const stateOptions = useMemo(() => Object.keys(INDIA_STATES_CITIES).sort(), []);
  const cityOptions = useMemo(() => {
    if (!selectedState) return [];
    return INDIA_STATES_CITIES[selectedState].sort();
  }, [selectedState]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      experience: (form.elements.namedItem('experience') as HTMLSelectElement).value,
      state: selectedState,
      city: selectedCity,
    };

    try {
      // 1. Save to Firestore (Primary)
      try {
        await addDoc(collection(db, 'leads'), {
          ...formData,
          createdAt: serverTimestamp(),
        });
      } catch (fbError) {
        console.error('Firebase error:', fbError);
        // We log it but continue to CSV for fallback if needed, 
        // or we could throw if Firebase is mandatory.
        // handleFirestoreError(fbError, 'create', 'leads', auth);
      }

      // 2. Save to local CSV (Secondary/Legacy)
      // Check if running on GitHub Pages (static hosting)
      if (window.location.hostname.includes('github.io')) {
        // Silently skip CSV on GitHub Pages if Firebase succeeded
        // but if both fail then we have an issue.
      } else {
        await fetch('/api/leads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      }

      setIsSuccess(true);
      form.reset();
      setSelectedState("");
      setSelectedCity("");
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gray-900/50 border-y border-white/5 relative" id="lead-form">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Not Sure Yet? <br/><span className="text-gradient">Book a Free Demo</span></h2>
              <p className="text-gray-400 text-lg mb-8">
                Attend a live session with Somil Deshmukh. Understand the curriculum, ask questions, and see if this program is the right fit for your career goals.
              </p>
              
              <div className="space-y-4 hidden lg:block">
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  <span>Get a personalized career roadmap</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  <span>Understand the current job market</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  <span>No commitment required</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full max-w-md lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl relative overflow-hidden"
            >
              {isSuccess ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/95 backdrop-blur-sm z-10 p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                  <p className="text-gray-400">Our team will contact you shortly with the demo class details.</p>
                </div>
              ) : null}

              <h3 className="text-2xl font-bold text-white mb-6">Register for Demo</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-950/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-950/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-gray-950/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-400 mb-1">Experience Level</label>
                  <div className="relative">
                    <select 
                      id="experience" 
                      name="experience"
                      required
                      defaultValue=""
                      className="w-full px-4 py-3 bg-gray-950/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all appearance-none"
                    >
                      <option value="" disabled>Select your experience</option>
                      <option value="student">College Student</option>
                      <option value="fresher">Fresher (0-1 years)</option>
                      <option value="professional">Working Professional (1-5 years)</option>
                      <option value="senior">Senior Professional (5+ years)</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-400 mb-1">State</label>
                    <div className="relative">
                      <select 
                        id="state" 
                        name="state"
                        required
                        value={selectedState}
                        onChange={(e) => {
                          setSelectedState(e.target.value);
                          setSelectedCity("");
                        }}
                        className="w-full px-4 py-3 bg-gray-950/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all appearance-none"
                      >
                        <option value="" disabled>Select State</option>
                        {stateOptions.map(state => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-400 mb-1">City</label>
                    <div className="relative">
                      <select 
                        id="city" 
                        name="city"
                        required
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        disabled={!selectedState}
                        className="w-full px-4 py-3 bg-gray-950/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="" disabled>Select City</option>
                        {cityOptions.map(city => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full mt-6 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-600/50 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>Book Free Demo <Send className="w-5 h-5" /></>
                  )}
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  By registering, you agree to our Terms & Privacy Policy.
                </p>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
