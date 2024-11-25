import React , {useEffect} from 'react';
import { MdPersonOutline, MdLocationOn } from 'react-icons/md';
import { AiOutlineFileProtect } from 'react-icons/ai';
import { RiCustomerServiceLine } from 'react-icons/ri';
import { GrMapLocation } from "react-icons/gr";
import { PiUsersThreeBold } from "react-icons/pi";
import 'aos/dist/aos.css';
import AOS from 'aos'; 

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({

    });
  }, []);
  return (
    <section className="py-4" style={{ fontFamily: "'Poppins', sans-serif" }} id="why-choose">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-black font-semibold mb-6">Our Commitment to Excellence</h2>
        <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Card 1 */}
          <div className="flex flex-col items-center p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <PiUsersThreeBold size={50} className="text-gray-950 mb-4" />
            <h3 className="text-xl font-semibold text-gray-950 mb-2">Personalized Service</h3>
            <p className="text-gray-600">Every client gets a custom-tailored approach.</p>
          </div>
          
          {/* Card 2 */}
          <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1500" className="flex flex-col items-center p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <GrMapLocation size={50} className="text-gray-950 mb-4" />
            <h3 className="text-xl font-semibold text-gray-950 mb-2">Local Expertise</h3>
            <p className="text-gray-600">We know the market like no one else.</p>
          </div>

          {/* Card 3 */}
          <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="2500" className="flex flex-col items-center p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <AiOutlineFileProtect size={50} className="text-gray-950 mb-4" />
            <h3 className="text-xl font-semibold text-gray-950 mb-2">Transparency</h3>
            <p className="text-gray-600">We guide you with honesty and integrity.</p>
          </div>

          {/* Card 4 */}
          <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="3000" className="flex flex-col items-center p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <RiCustomerServiceLine size={50} className="text-gray-950 mb-4" />
            <h3 className="text-xl font-semibold text-gray-950 mb-2">End-to-End Support</h3>
            <p className="text-gray-600">From inquiry to closing, we're with you every step of the way.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
