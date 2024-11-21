import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100" id="testimonials">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">What Our Clients Say</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="italic">“Working with [Your Real Estate Business Name] was a great experience. They helped us find our dream home in no time!”</p>
            <p className="font-semibold mt-4">- [Client Name]</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="italic">“I sold my property with ease thanks to their expert team. Highly recommend!”</p>
            <p className="font-semibold mt-4">- [Client Name]</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="italic">“As a first-time buyer, I was nervous, but their guidance made the whole process simple and stress-free.”</p>
            <p className="font-semibold mt-4">- [Client Name]</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
