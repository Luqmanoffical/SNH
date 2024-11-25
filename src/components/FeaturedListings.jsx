import React, { useState, useEffect }  from 'react';
import P1 from "../assets/p1.1.jpg";
import P2 from "../assets/p2.1.jpg";
import P3 from "../assets/p3.1.jpg";
import P4 from "../assets/p4.1.jpg";
import P5 from "../assets/p5.1.jpg";
import P6 from "../assets/p6.1.jpg";
import 'aos/dist/aos.css';
import AOS from 'aos';
const FeaturedListings = () => {
  useEffect(() => {
    AOS.init({

    });
  }, []);
  return (
    <section className="py-16 bg-white overflow-x-hidden" id="properties"  style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Hot Properties for Sale</h2>

        <div className='flex flex-col lg:flex-row w-full '> {/* Added gap between flex items */}

          {/* Left Half of the Section */}
          <div className='w-full lg:w-1/2'>
            <div  data-aos="fade-right"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine" className="p-4 bg-white  relative group">
              <img src={P1} alt="P1" className="w-full h-[18rem] object-cover object-top  rounded-md" />
              {/* Button that appears when hovering over the image */}
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2      bg-[#8a8a8abb] border w-[9rem] border-white text-white font-semibold rounded-2xl shadow-md opacity-0 group-hover:opacity-100 transition duration-300   py-3">
                View Property
              </button>
            </div>
            <div className='flex w-full '
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            > {/* Added gap between image cards */}
              <div className="w-1/2 p-4 bg-white relative group">
                <img src={P2} alt="P2" className="w-full h-auto object-cover rounded-md" />
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2      bg-[#8a8a8abb] border w-[9rem] border-white text-white font-semibold rounded-2xl shadow-md opacity-0 group-hover:opacity-100 transition duration-300   py-3">
                  View Property
                </button>
              </div>
              <div className="w-1/2 p-4 bg-white relative group">
                <img src={P3} alt="P3" className="w-full h-auto object-cover rounded-md" />
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   bg-[#8a8a8abb] border w-[9rem] border-white text-white font-semibold rounded-2xl shadow-md opacity-0 group-hover:opacity-100 transition duration-300  py-3">
                  View Property
                </button>
              </div>
            </div>
          </div>

          {/* Right Half of the Section */}
          <div className='w-full lg:w-1/2'>
            <div className='flex w-full '  data-aos="fade-left"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine"> {/* Added gap between image cards */}
              <div className="w-1/2 p-4 bg-white relative group">
                <img src={P4} alt="P2" className="w-full h-auto object-cover rounded-md" />
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2      bg-[#8a8a8abb] border w-[9rem] border-white text-white font-semibold rounded-2xl shadow-md opacity-0 group-hover:opacity-100 transition duration-300   py-3">
                  View Property
                </button>
              </div>
              <div className="w-1/2 p-4 bg-white relative group">
                <img src={P5} alt="P3" className="w-full h-auto object-cover rounded-md" />
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2      bg-[#8a8a8abb] border w-[9rem] border-white text-white font-semibold rounded-2xl shadow-md opacity-0 group-hover:opacity-100 transition duration-300   py-3">
                  View Property
                </button>
              </div>
            </div>
            <div className="p-4 bg-white relative group"  data-aos="fade-left"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine" >
              <img src={P5} alt="P1" className="w-full h-[18rem] object-cover  rounded-md" />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2    bg-[#8a8a8abb] border w-[9rem] border-white text-white font-semibold rounded-2xl shadow-md opacity-0 group-hover:opacity-100 transition duration-300   py-3">
                View Property
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
