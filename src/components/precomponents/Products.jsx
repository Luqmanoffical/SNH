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

function Products() {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Product 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="w-full h-full">
            <img src={P1} alt="p1" className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Club Drive</h1>
            <p className="text-lg text-gray-600 mb-6">
              Club Drive at Dubai Hills Estate, brought to life by Emaar Properties, is a captivating addition to Dubai’s thriving urban landscape. This development offers an array of 1, 2, and 3-bedroom apartments. Nestled in the Green heart of Dubai, these twin towers promise a life of luxury, providing residents with a serene oasis boasting open vistas and breathtaking golf course views.
            </p>
            <button className="px-6 py-3 bg-[#b08414] text-white font-semibold rounded-lg shadow-lg   transition duration-300 ease-in-out">
              Inquire Now
            </button>
          </div>
        </div>
  
        {/* Product 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="w-full h-full">
            <img src={P7} alt="p7" className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Haven</h1>
            <p className="text-lg text-gray-600 mb-6">
              Aldar’s first residential development, Haven is coming to Dubai. Make your home in a place where every moment has been curated to enhance your wellbeing; from the undulating landscape, to the community wellness centre, to the gently flowing stream, providing a rippling soundtrack to your everyday.
            </p>
            <button className="px-6 py-3 bg-[#b08414] text-white font-semibold rounded-lg shadow-lg   transition duration-300 ease-in-out">
              Inquire Now
            </button>
          </div>
        </div>
  
        {/* Product 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="w-full h-full">
            <img src={P13} alt="p13" className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Bugatti Residences</h1>
            <p className="text-lg text-gray-600 mb-6">
              The World’s first Bugatti Residences in Dubai. Developed by Binghatti, this exceptional project in Business Bay introduces 171 luxurious mansions and 11 sky mansion penthouses, redefining the concept of opulent living.
            </p>
            <button className="px-6 py-3 bg-[#b08414] text-white font-semibold rounded-lg shadow-lg   transition duration-300 ease-in-out">
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Products;
  