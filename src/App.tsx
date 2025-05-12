import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import PopupOffer from './components/PopupOffer';
import Hero from './sections/Hero';
import Benefits from './sections/Benefits';
import Process from './sections/Process';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-800">
      <Navbar />
      <Banner />
      <PopupOffer />
      <Hero />
      <Benefits />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;