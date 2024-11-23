import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-8"  style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <a href="#about" className="text-white hover:text-gray-300 mx-4">About</a>
          <a href="#services" className="text-white hover:text-gray-300 mx-4">Services</a>
          <a href="#properties" className="text-white hover:text-gray-300 mx-4">Properties</a>
          <a href="#contact" className="text-white hover:text-gray-300 mx-4">Contact</a>
        </div>
        <div className="text-sm">
          <p>&copy; 2024 [Your Real Estate Business Name]. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
