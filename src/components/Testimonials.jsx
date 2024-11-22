// import React from 'react';

// const Testimonials = () => {
//   return (
//     <section className="py-16 bg-gray-100" id="testimonials">
//       <div className="container mx-auto text-center">
//         
//         <div className="space-y-8">
//           <div className="bg-white p-6 shadow-lg rounded-lg">
//             <p className="italic">“Working with [Your Real Estate Business Name] was a great experience. They helped us find our dream home in no time!”</p>
//             <p className="font-semibold mt-4">- [Client Name]</p>
//           </div>
//           <div className="bg-white p-6 shadow-lg rounded-lg">
//             <p className="italic">“I sold my property with ease thanks to their expert team. Highly recommend!”</p>
//             <p className="font-semibold mt-4">- [Client Name]</p>
//           </div>
//           <div className="bg-white p-6 shadow-lg rounded-lg">
//             <p className="italic">“As a first-time buyer, I was nervous, but their guidance made the whole process simple and stress-free.”</p>
//             <p className="font-semibold mt-4">- [Client Name]</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import { AnimatedTestimonials } from "./ui/animated-testimonials";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
};

export default Testimonials;
