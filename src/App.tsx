/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Curriculum from './components/Curriculum';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';
import Roadmap from './components/Roadmap';
import Instructor from './components/Instructor';
import Testimonials from './components/Testimonials';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import DemoEnrollmentPopup from './components/DemoEnrollmentPopup';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-50 selection:bg-indigo-500/30">
      <Header />
      <Hero />
      <TrustBar />
      <Curriculum />
      <WhyChooseUs />
      <Projects />
      <Roadmap />
      <Instructor />
      <Testimonials />
      <LeadForm />
      <FAQ />
      <FinalCTA />
      <Footer />
      
      <WhatsAppButton />
      <DemoEnrollmentPopup />
    </div>
  );
}
