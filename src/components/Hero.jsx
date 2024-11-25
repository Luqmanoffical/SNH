import React , { useState } from 'react';
import Logo from "../assets/logo.jpg";
import hero1 from "../assets/h01.jpg";
import { motion } from 'framer-motion';
import { FaArrowDown } from "react-icons/fa";
import Products from "./precomponents/Products";

const Hero = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };
  return (
    <>
      <section
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${hero1})`, fontFamily: "'Poppins', sans-serif" }}
      >
        <div className='py-3'>

        </div>
        {/* Header Section */}
        <div className="max-w-screen-xl   mx-3 md:mx-9 lg:mx-12 xl:mx-16 flex justify-between rounded-2xl bg-[#fcf9f959] items-center py-2 px-3 md:px-10 md:py-4 relative z-10">
          <div className='flex flex-row items-center'>
          <img src={Logo} alt="logo" className="w-10 h-10 rounded-full" /> <span className='ml-2 text-white text-lg md:text-2xl font-semibold '> SNH Properties</span>
          </div> 
           <div className="space-x-6  hidden md:block text-white">
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
          <button 
        className="md:hidden text-white text-2xl" 
        onClick={toggleMenu}
      >
        &#9776; {/* This is the hamburger icon */}
      </button>
      <div 
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full right-0 bg-[#fcf9f9] w-full py-4 px-6 rounded-2xl z-60`}
      >
        <a 
          href="#contact" 
          className="block  text-lg font-medium text-gray-700 border-b border-gray-200 hover:text-gray-300 transition duration-300 py-2"
        >
          Contact Us
        </a>
        <a 
          href="#properties" 
          className="block text-lg font-medium text-gray-700 hover:text-gray-300 transition duration-300 py-2"
        >
          Search Properties
        </a>
      </div>
        </div>

        {/* Hero Image Section */}
        <div className="absolute inset-0 bg-black h-screen opacity-50"></div>
        <motion.div
          className="relative z-10 text-white text-center py-8  px-8 md:px-20 lg:px-36 md:py-10 lg:py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className={`text-xl md:text-4xl lg:text-5xl ${isMenuOpen ? 'text-transparent' : 'text-white'} font-bold leading-tight mb-4 md:mb-8`}>
            Discover the Pinnacle of Dubai Living
          </h1>
          <p className="sm:text-sm md:text-base lg:text-xl  text-justify md:text-center font-semibold mb-1 md:mb-8">
            Your gateway to Dubai’s finest properties. From breathtaking views to iconic villas, we turn your dream home into reality.
            Whether buying a sleek apartment in Downtown or investing in a Palm Jumeirah villa, we offer more than just listings we offer extraordinary experiences.
       
          </p>

          <div className="mb-0 md:mb-8">
            {/* <div className="flex space-x-6 justify-center">
              <motion.div
                className="card w-56  flex items-center justify-center py-6   bg-[#f0c54e8e] text-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
                whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl  font-semibold ">Curated Luxury</h3>
              </motion.div>
              <motion.div
                className="card w-56   bg-[#f0c54e8e] text-white flex items-center justify-center   rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
                whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold ">Iconic Locations</h3>
              </motion.div>
              <motion.div
                className="card w-56   bg-[#f0c54e8e] text-white rounded-lg shadow-lg flex items-center justify-center   hover:scale-105 transform transition duration-300 ease-in-out"
                whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold ">Expertise Like No Other</h3>
              </motion.div>
            </div> */}
          </div>

         

          <motion.a
            href="#start-journey"
            className="inline-block px-8 py-4 bg-dubai-sand text-white font-bold text-lg rounded-full transition duration-300 ease-in-out transform hover:bg-dubai-sand-dark hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h4 className='hidden md:block'>Start Your Journey</h4> 
            <button className='p-4 mt-4 rounded-full border-2'>
              <FaArrowDown />
            </button>
          </motion.a>
        </motion.div>

      </section>

      {/* Start Journey Section */}
      <motion.section
        id="start-journey"
        className="pt-24 pb-0 relative bg-dubai-sand-light text-center"
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
