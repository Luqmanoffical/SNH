import React from 'react';

const FeaturedListings = () => {
  return (
    <section className="py-16 bg-gray-100" id="properties">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Hot Properties for Sale</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="border rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold">[Property 1]</h3>
            <p className="mb-4">Description, price, etc.</p>
            <a href="#" className="text-blue-500 hover:underline">Schedule a Viewing</a>
          </div>
          <div className="border rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold">[Property 2]</h3>
            <p className="mb-4">Description, price, etc.</p>
            <a href="#" className="text-blue-500 hover:underline">Schedule a Viewing</a>
          </div>
          <div className="border rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold">[Property 3]</h3>
            <p className="mb-4">Description, price, etc.</p>
            <a href="#" className="text-blue-500 hover:underline">Schedule a Viewing</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
