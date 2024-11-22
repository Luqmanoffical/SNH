import React from 'react';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import FeaturedListings from './components/FeaturedListings';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Hero />
      <main>
        <AboutUs />
        <Services />
        <FeaturedListings />
        <WhyChooseUs />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
