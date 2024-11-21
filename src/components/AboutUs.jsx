import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-100 text-center" id="about">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
        <p className="text-xl mb-6">At [Your Real Estate Business Name], we are passionate about helping you find the perfect property. Whether you're a first-time buyer, an investor, or looking to sell, our team of experienced professionals is here to guide you through the process with ease.</p>
        <div className="flex justify-center gap-12">
          <div>
            <p className="text-lg font-semibold">Years of Experience</p>
            <p>10 years</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Expert Agents</p>
            <p>Dedicated, friendly, and knowledgeable</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Client-Centered Approach</p>
            <p>Your goals are our priority</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
