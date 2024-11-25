import React from 'react'; 
import video from "../assets/contact.mp4";  
import about from "../assets/about.png";  // Make sure this path is correct

const ContactUs = () => {   
  return (     
    <section 
      className="py-16" 
      style={{ 
        fontFamily: "'Poppins', sans-serif", 
        backgroundImage: `url(${about})`,  // Ensure the URL syntax is correct
        backgroundSize: 'contain', // Optional: make sure the image covers the entire section
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat'  // Optional: center the image
      }} 
      id="contact"
    >       
      <div className="container mx-auto text-center">         
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>         
        <p className="text-lg px-3 text-justify md:text-center mb-6">We’d love to help you with your real estate journey! Whether you’re ready to buy, sell, or just have questions, don’t hesitate to reach out.</p>          

        <div className="flex flex-col sm:flex-row px-2 md:px-7 gap-20">            
          {/* Form Section */}           
          <div className="w-full md:w-[75%]">             
            <form className="mt-8 mx-1 md:mx-8 lg:mx-16  p-8 rounded-lg shadow-md border bg-gray-50 border-gray-200">               
              <div className="mb-6">                 
                <label className="block text-start text-lg font-semibold text-gray-700">Name</label>                 
                <input                    
                  type="text"                    
                  className="w-full p-4 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0c54e] transition"                    
                  placeholder="Enter your name"                 
                />               
              </div>               
              <div className="mb-6">                 
                <label className="block text-lg text-start font-semibold text-gray-700">Email</label>                 
                <input                    
                  type="email"                    
                  className="w-full p-4 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0c54e] transition"                    
                  placeholder="Enter your email"                 
                />               
              </div>               
              <div className="mb-6">                 
                <label className="block text-lg text-start font-semibold text-gray-700">Message</label>                 
                <textarea                    
                  className="w-full p-4 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0c54e] transition"                    
                  rows="5"                    
                  placeholder="Your message"                 
                ></textarea>               
              </div>               
              <button                  
                type="submit"                  
                className=" bg-[#f0c54e] w-36 text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"               
              >                 
                Send Message               
              </button>             
            </form>           
          </div>            
          {/* Video Section */}           
          <div className="mt-2 md:mt-6 sm:mt-0">             
            <div className="relative overflow-hidden rounded-lg ">               
              <video                  
                src={video}                  
                className="w-full h-auto object-cover"  // Adjusted this line
                autoPlay                  
                loop                  
                muted                  
                playsInline                  
                style={{ 
                  maxWidth: '100%',  // Ensures it doesn't stretch out too wide
                  maxHeight: '600px',  // Limits the height of the video
                  objectFit: 'cover'   // Ensures it covers the container area without stretching
                }}               
              />             
            </div>           
          </div>         
        </div>       
      </div>     
    </section>   
  ); 
};

export default ContactUs;
