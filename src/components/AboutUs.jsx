import React from 'react';
import { FaUsers, FaChalkboardTeacher, FaCalendarAlt } from 'react-icons/fa';
import p2 from "../assets/p3.1.jpg"

const AboutUs = () => {
  return (
    <section className="p-8 flex flex-col sm:flex-row justify-between w-full text-center bg-gray-50"  style={{ fontFamily: "'Poppins', sans-serif" }} id="about">
      {/* Left Section: Who We Are with Image */}
      <div className="w-full sm:w-1/2 lg:w-1/2 mb-8 px-4 sm:px-16 flex flex-col items-center sm:items-start">
        {/* Image on the left side */}
        <img 
          src={p2} // Replace with your image URL
          alt="Real Estate Team" 
          className="w-4/5 sm:w-2/3 lg:w-full h-32 rounded-lg shadow-lg mb-6"
        />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
        <p className="text-xl text-justify text-gray-800 mb-6">
          At SNH, we are more than just a real estate agency — we are your trusted partner in navigating the complex world of property. Whether you're a first-time buyer looking to make your dream home a reality, an investor seeking profitable opportunities, or a seller aiming to get the best price for your property, our team of experienced professionals is here to guide you every step of the way.
        </p>
      </div>

      {/* Right Section: Rectangular and Square Blocks */}
      <div className="w-full sm:w-1/2 lg:w-1/2 flex flex-col gap-4">
        {/* Rectangular Section: Client-Centered Approach */}
        <div className="bg-[#dfdbdb31] border-2 border-gray-300 rounded-lg shadow-xl p-4 flex flex-col items-center justify-between transition-all transform hover:scale-105 hover:shadow-2xl">
          <div className="text-[#f0c54e] mb-4">
            <FaCalendarAlt size={35} />
          </div>
          <p className="text-lg font-semibold text-gray-800 mb-2">Client-Centered Approach</p>
          <p className="text-gray-700 text-base">
            At SNH, our clients are at the heart of everything we do. With over a decade of experience, we take the time to truly understand your unique needs and goals. Whether you're buying, selling, or investing, we customize our approach to ensure the best possible outcome.
          </p>
        </div>

        {/* Bottom Section: Two Square Blocks */}
        <div className="w-full flex sm:flex-row flex-col justify-between gap-4">
          {/* First Block: Client-Centered Approach */}
          <div className="flex-1 bg-[#dfdbdb31] border-2 border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center justify-between hover:shadow-2xl    transition-all transform hover:scale-105">
            <div className="text-[#f0c54e] mb-4">
              <FaUsers size={35} />
            </div>
            <p className="text-lg font-semibold text-gray-800 mb-2">Years of Experience</p>
            <p className="text-gray-600">10+ years</p>
          </div>

          {/* Second Block: Expert Agents */}
          <div className="flex-1 bg-white border-2 border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center justify-between hover:shadow-2xl    transition-all transform hover:scale-105">
            <div className="text-[#f0c54e] mb-4">
              <FaChalkboardTeacher size={35} />
            </div>
            <p className="text-lg font-semibold text-gray-800 mb-2">Expert Agents</p>
            <p className="text-gray-600">Dedicated, friendly, and knowledgeable</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
