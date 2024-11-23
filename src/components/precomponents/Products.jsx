import React from 'react'
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

function Products() {
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
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
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
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Product 1 */}
            <div className="flex gap-6 items-center mb-16">
                <div className="w-[40%]">
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
                <div className="w-[60%]">
                    <h1 className="text-3xl font-semibold text-gray-950 mb-4">Club Drive</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Club Drive at Dubai Hills Estate, brought to life by Emaar Properties, is a captivating addition to Dubai’s thriving urban landscape. This development offers an array of 1, 2, and 3-bedroom apartments. Nestled in the Green heart of Dubai, these twin towers promise a life of luxury, providing residents with a serene oasis boasting open vistas and breathtaking golf course views.
                    </p>
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
            <div className="flex gap-6 items-center mb-16">
            <div className="w-[40%]">
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
                <div className="w-[60%]">
                    <h1 className="text-3xl font-semibold text-gray-950 mb-4">Haven</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Aldar’s first residential development, Haven is coming to Dubai. Make your home in a place where every moment has been curated to enhance your wellbeing; from the undulating landscape, to the community wellness centre, to the gently flowing stream, providing a rippling soundtrack to your everyday.
                    </p>
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
            <div className="flex gap-6 items-center mb-16">
            <div className="w-[40%]">
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
                <div className="w-[60%]">
                    <h1 className="text-3xl font-semibold text-gray-950 mb-4">Bugatti Residences</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        The World’s first Bugatti Residences in Dubai. Developed by Binghatti, this exceptional project in Business Bay introduces 171 luxurious mansions and 11 sky mansion penthouses, redefining the concept of opulent living.
                    </p>
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
