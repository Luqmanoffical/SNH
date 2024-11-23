import React from 'react';
import v1 from '../assets/Vector1.png';
import v2 from '../assets/Vector2.png';
import v3 from '../assets/Vector3.png';
import vector4 from '../assets/Vector4.png';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const Services = () => {
  return (
    <section className="py-16 text-gray-900 bg-[#f0c54e]"  style={{ fontFamily: "'Poppins', sans-serif" }} id="services">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-3">What We Offer</h2>
        <p className='mb-8 text-gray-800 '>
        We offer a wide range of real estate services, from buying and selling to investment advice, ensuring you find the perfect property.
        </p>
        <div className="flex justify-between gap-6">
          <div className="p-4    w-1/5     ">
            <div  className='flex justify-center items-center'>
              <img src={v1} alt="v1" className='w-14 h-[57px]' />
            </div>
            <h3 className="text-lg font-semibold    mb-2" >Residential Sales</h3>
            <p className='text-sm '>Find the perfect home for you and your family.</p>
          </div>
          <div className="py-4    w-1/5    ">
            <div className='flex justify-center items-center'>
            <HiOutlineBuildingOffice2 size={60}/>
            </div>
            <h3 className="text-lg font-semibold    mb-2" >Commercial Properties</h3>
            <p className='text-sm'>Businesses looking for space? We have options.</p>
          </div>
          <div className="py-4 px-0 w-1/5     ">
          <div className='flex justify-center items-center'>
              <img src={v2} alt="v1" className='w-14 h-[57px]' />
            </div>
            <h3 className="text-lg font-semibold    mb-2" >Rental Properties</h3>
            <p className='text-sm'>Short-term or long-term rentals tailored to your needs.</p>
          </div>
          <div className="py-4 px-0    w-1/5     ">
          <div className='flex justify-center items-center'>
              <img src={vector4} alt="v4" className='w-14 h-[57px]'  />
            </div>
            <h3 className="text-lg font-semibold    mb-2" >Property Management</h3>
            <p className='text-sm'>Let us manage your property for you.</p>
          </div>
          <div className="p-4  w-1/5   ">
          <div  className='flex justify-center items-center'>
              <img src={v3} alt="v3" className='w-14 h-[57px]'/>
            </div>
            <h3 className="text-lg font-semibold    mb-2" >Investment Advice</h3>
            <p className='text-sm'>We offer guidance for investors looking to maximize returns.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
