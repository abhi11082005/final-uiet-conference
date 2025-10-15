import { Link, NavLink } from "react-router-dom";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";
import FooterWithMarquee from "./Footermarquee";
import uietimage from "../../assets/uietimage.jpg";

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden mt-[55px] text-white">
      {/* Full width container */}
      <div className="relative w-full px-4 py-6 lg:py-8">
        {/* Background image */}
        <img
          src={uietimage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="relative z-10 w-full bg-[#1B305C]/80 px-8 py-6 flex flex-col justify-between rounded-lg">
          <div className="text-center space-y-2">
            <p className="text-xs md:text-sm">
              Copyright © ICSCIS 2026 - All Rights Reserved.
            </p>
            <p className="text-xs md:text-sm text-[#1B305C]">
               Designed by CSE Department UIET CSJMU Kanpur

            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}




// import React from 'react'

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-6">
//   <div className="container mx-auto px-4 text-center space-y-4 md:space-y-2">
//     <div className="flex flex-wrap justify-center space-x-4 space-y-2 md:space-y-0">
//       <a href="#terms" className="hover:underline text-sm md:text-base">Terms & Conditions</a>
//       <a href="#payment" className="hover:underline text-sm md:text-base">Payment Policy</a>
//       <a href="#refund" className="hover:underline text-sm md:text-base">Refund Policy</a>
//       <a href="#privacy" className="hover:underline text-sm md:text-base">Privacy Policy</a>
//       <a href="#publication" className="hover:underline text-sm md:text-base">Publication Policy</a>
//     </div>
//     <p className="text-xs md:text-sm">
//       Copyright © ICRAECCT 2025 - All Rights Reserved.
//     </p>
//     <p className="text-xs md:text-sm">
//       Designed & Maintained by CSE-Department UIET CSJM University.
//     </p>
//   </div>
// </footer>

//   )
// }

// export default Footer
