import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-16" id="why-choose">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Commitment to Excellence</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
            <p>Every client gets a custom-tailored approach.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
            <p>We know the market like no one else.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Transparency</h3>
            <p>We guide you with honesty and integrity.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
            <p>From inquiry to closing, we're with you every step of the way.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
