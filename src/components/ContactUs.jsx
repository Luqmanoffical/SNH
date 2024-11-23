import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-16"  style={{ fontFamily: "'Poppins', sans-serif" }} id="contact">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-lg mb-6">We’d love to help you with your real estate journey! Whether you’re ready to buy, sell, or just have questions, don’t hesitate to reach out.</p>
        <div className="space-y-4">
          <div><strong>Phone:</strong> [Phone Number]</div>
          <div><strong>Email:</strong> [Email Address]</div>
          <div><strong>Address:</strong> [Office Address]</div>
        </div>
        <form className="mt-8 max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-lg font-semibold">Name</label>
            <input type="text" className="w-full p-3 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold">Email</label>
            <input type="email" className="w-full p-3 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold">Message</label>
            <textarea className="w-full p-3 border rounded-lg"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
