import React from 'react';

const Services = () => {
  return (
    <section className="py-16" id="services">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Residential Sales</h3>
            <p>Find the perfect home for you and your family.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Commercial Properties</h3>
            <p>Businesses looking for space? We have options.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Rental Properties</h3>
            <p>Short-term or long-term rentals tailored to your needs.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Property Management</h3>
            <p>Let us manage your property for you.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Investment Advice</h3>
            <p>We offer guidance for investors looking to maximize returns.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
