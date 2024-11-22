import React from 'react';
import Logo from "../assets/logo.jpg";
import hero1 from "../assets/h2.jpeg";
import { motion } from 'framer-motion';
import { FaArrowDown } from "react-icons/fa";
import Products from "./precomponents/Products";
const Hero = () => {
  return (
    <>
      <section
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        {/* Header Section */}
        <div className="max-w-screen-xl mx-auto flex justify-between items-center p-6 md:p-8 relative z-10">
          <img src={Logo} alt="logo" className="w-10 h-10 rounded-full" />
          <div className="space-x-6 text-white">
            <a 
              href="#contact" 
              className="text-lg font-medium text-white hover:text-gray-300 transition duration-300"
              style={{ zIndex: 11 }}
            >
              Contact Us
            </a>
            <a 
              href="#properties" 
              className="text-lg font-medium text-white hover:text-gray-300 transition duration-300"
              style={{ zIndex: 11 }}
            >
              Search Properties
            </a>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          className="relative z-10 text-white text-center py-8 px-8 md:px-36 md:py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-8">
            Discover the Pinnacle of Dubai Living
          </h1>
          <p className="text-xl font-semibold mb-8">
            Your gateway to Dubai’s finest properties. From breathtaking views to iconic villas, we turn your dream home into reality.
            Whether buying a sleek apartment in Downtown or investing in a Palm Jumeirah villa, we offer more than just listings we offer extraordinary experiences.
       
          </p>

          <div className="mb-8">
            <div className="flex space-x-6 justify-center">
              <motion.div
                className="card w-56  flex items-center justify-center py-6   bg-[#b084148e] text-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
                whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl  font-semibold ">Curated Luxury</h3>
              </motion.div>
              <motion.div
                className="card w-56   bg-[#b084148e] text-white flex items-center justify-center   rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
                whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold ">Iconic Locations</h3>
              </motion.div>
              <motion.div
                className="card w-56   bg-[#b084148e] text-white rounded-lg shadow-lg flex items-center justify-center   hover:scale-105 transform transition duration-300 ease-in-out"
                whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold ">Expertise Like No Other</h3>
              </motion.div>
            </div>
          </div>

         

          <motion.a
            href="#start-journey"
            className="inline-block px-8 py-4 bg-dubai-sand text-white font-bold text-lg rounded-full transition duration-300 ease-in-out transform hover:bg-dubai-sand-dark hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h4>Start Your Journey</h4> 
            <button className='p-4 mt-4 rounded-full border-2'>
              <FaArrowDown />
            </button>
          </motion.a>
        </motion.div>

      </section>

      {/* Start Journey Section */}
      <motion.section
        id="start-journey"
        className="py-24 relative bg-dubai-sand-light text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-black mb-4">Let’s Find Your Dream Property</h2>
        <p className="text-lg text-gray-800">Explore our exclusive collection of luxury homes that match your vision.</p>
      </motion.section>
   <Products/>
    </>
  );
};

export default Hero;
