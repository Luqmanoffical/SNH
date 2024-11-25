import React, { useState, useEffect } from 'react';
import P1 from  "../../assets/p1.1.jpg";
import P2 from  "../../assets/p1.2.jpg";
import P3 from  "../../assets/p1.3.jpg";
import P4 from  "../../assets/p1.4.jpg";
import P5 from  "../../assets/p1.5.jpg";
import P6 from  "../../assets/p1.6.jpg";
import P7 from  "../../assets/p2.1.jpg";
import P8 from "../../assets/p2.2.jpg";
import P9 from  "../../assets/p2.3.jpg";
import P10 from  "../../assets/p2.4.jpg";
import P11 from  "../../assets/p2.5.jpg";
import P12 from  "../../assets/p2.6.jpg";
import P13 from  "../../assets/p3.1.jpg";
import P14 from  "../../assets/p3.2.jpg";
import P15 from  "../../assets/p3.3.jpg";
import P16 from  "../../assets/p3.4.jpg";
import P17 from  "../../assets/p3.5.jpg";
import P18 from  "../../assets/p3.6.jpg";
import p37 from "../../assets/p3.7.jpg";
import p38 from "../../assets/p3.8.jpg";
import P19 from  "../../assets/p4.1.jpg";
import P20 from  "../../assets/p4-2.jpg";
import P21 from  "../../assets/p4.3.jpg";
import P22 from  "../../assets/p4.4.jpg";
import P23 from  "../../assets/p4.5.jpg";
import P24 from  "../../assets/p4.6.jpg";
import P25 from  "../../assets/p5.1.jpg";
import P26 from  "../../assets/p5.2.jpg";
import P27 from  "../../assets/p5.3.jpg";
import P28 from  "../../assets/p5.4.jpg";
import P29 from  "../../assets/p6.1.jpg";
import P30 from  "../../assets/p6.2.jpg";
import P31 from  "../../assets/p6.3.jpg";
import P32 from  "../../assets/p6.4.jpg";
// import P33 from " ../../assets/p6.5.jpg";
import P34 from  "../../assets/sp1.1.jpg";
import P35 from  "../../assets/sp1.2.jpg";
import P36 from  "../../assets/sp1.3.jpg";


import { motion } from 'framer-motion'; // Import framer-motion for animation
import { FaPhoneAlt } from "react-icons/fa";  
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

function Products() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
      }, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      };
    
    return (
        <div className="w-full md:max-w-7xl mx-2 md:mx-auto px-2 md:px-6 py-12">
            {/* Product 1 */}
            <div data-aos="fade-up" className="flex flex-col lg:flex-row  gap-6 items-center mb-16">
                <div className=" w-full md:w-[40%]">
                   <Slider {...settings}>
                        <motion.div
                            className="h-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={P1}
                                alt="p1"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            className="h-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={P2}
                                alt="p2"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            className="h-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={P3}
                                alt="p3"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            className="h-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={P4}
                                alt="p4"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            className="h-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={P5}
                                alt="p5"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            className="h-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={P6}
                                alt="p6"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                    </Slider>
                </div>
                <div className="w-full md:w-[60%]">
                    <h1 className="text-3xl font-semibold text-gray-950 mb-4">Club Drive</h1>
                    <p className="text-lg text-gray-600 mb-1">
                    Club Drive at Dubai Hills Estate by Emaar offers luxurious apartments with stunning golf course views in the heart of Dubai.                    </p>
                    <ul class="space-y-2 my-3 text-gray-700 ">
                        <li  class="flex items-start">
                        <span class="mr-4 text-primary font-bold">•</span> Central to Dubai’s top attractions and key areas.</li>
                        <li  class="flex items-start">
                        <span class="mr-4 text-primary font-bold">•</span> Panoramic golf course vistas from every apartment</li>
                        <li  class="flex items-start">
                        <span class="mr-4 text-primary font-bold">•</span> Spacious, modern homes with top-tier amenities.</li>
                    </ul>
                    <motion.button
                        className="px-0 py-3 w-[10rem] flex items-center justify-center bg-[#f0c54e] text-white font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className='px-2'><FaPhoneAlt /></span> Inquire Now
                    </motion.button>
                </div>
            </div>

            {/* Product 2 */}
            <div data-aos="fade-up" className="flex flex-col lg:flex-row  gap-6 items-center mb-16">
            <div className="w-full md:w-[40%]">
                   <Slider {...settings}>
                        <motion.div
                            className="h-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={P7}
                                alt="p1"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            className="h-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={P8}
                                alt="p2"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            className="h-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={P9}
                                alt="p3"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            className="h-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={P10}
                                alt="p4"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            className="h-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={P11}
                                alt="p5"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            className="h-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={P12}
                                alt="p6"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                    </Slider>
                </div>
                <div  className="w-full md:w-[60%]">
                    <h1 className="text-3xl font-semibold text-gray-950 mb-4">Haven</h1>
                    <p className="text-lg text-gray-600 mb-1">
                    Aldar’s first residential development, Haven, offers a serene and wellness-focused living experience in Dubai
                        </p>
                        <ul class="space-y-2 my-3 text-gray-700 ">
                            <li class="flex items-start">
                            <span class="mr-4 text-primary font-bold">•</span>Wellness-focused living with spaces designed to enhance well-being.</li>
                            <li class="flex items-start">
                            <span class="mr-4 text-primary font-bold">•</span>Serene landscapes and a flowing stream for a peaceful environment.</li>
                            <li class="flex items-start">
                            <span class="mr-4 text-primary font-bold">•</span>A vibrant community with a dedicated wellness centre for balanced living.</li>
                        </ul>
                    <motion.button
                        className="px-0 py-3 w-[10rem] flex items-center justify-center bg-[#f0c54e] text-white font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className='px-2'><FaPhoneAlt /></span> Inquire Now
                    </motion.button>
                </div>
            </div>

            {/* Product 3 */}
            <div data-aos="fade-up" className="flex flex-col lg:flex-row  gap-6 items-center mb-16">
            <div className="w-full md:w-[40%]">
                   <Slider {...settings}>
                        <motion.div
                            className="h-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={P13}
                                alt="p1"
                                className="w-full h-full object-cover object-bottom rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            className="h-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={P14}
                                alt="p2"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            className="h-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={P15}
                                alt="p3"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            className="h-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={P16}
                                alt="p4"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            className="h-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={P17}
                                alt="p5"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            className="h-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={P18}
                                alt="p6"
                                className="w-full h-full object-cover object-bottom rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            className="h-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={p37}
                                alt="p6"
                                className="w-full h-full object-cover object-bottom rounded-lg shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            className="h-64"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={p38}
                                alt="p6"
                                className="w-full h-full object-cover object-bottom rounded-lg shadow-lg"
                            />
                        </motion.div>

                    </Slider>
                </div>
                <div className="w-full md:w-[60%]">
                    <h1 className="text-3xl font-semibold text-gray-950 mb-4">Bugatti Residences</h1>
                    <p className="text-lg text-gray-700 mb-1">
                    Introducing the world’s first Bugatti Residences in Dubai, offering unparalleled luxury.   </p>
          
                    <ul class="space-y-2 my-3 text-gray-700 ">
            <li class="flex items-start">
                <span class="mr-4 text-primary font-bold">•</span> The world’s first Bugatti Residences, setting a new standard of luxury.
            </li>
            <li class="flex items-start">
                <span class="mr-4 text-primary font-bold">•</span> 171 mansions and 11 sky mansion penthouses for the ultimate in exclusivity.
            </li>
            <li class="flex items-start">
                <span class="mr-4 text-primary font-bold">•</span> Prime location in Business Bay, Dubai, offering unmatched prestige.
            </li>
        </ul>
          
                    <motion.button
                        className="px-0 py-3 w-[10rem] flex items-center justify-center bg-[#f0c54e] text-white font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className='px-2'><FaPhoneAlt /></span> Inquire Now
                    </motion.button>
                </div>
            </div>
        </div>
    );
}

export default Products;
