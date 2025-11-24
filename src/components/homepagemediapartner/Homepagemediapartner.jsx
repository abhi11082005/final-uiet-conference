import React from "react";

import img1 from '../../assets/logoother/img1.jpg';
import img2 from '../../assets/logoother/img2.jpg';
import img3 from '../../assets/logoother/img3.jpg';
import img4 from '../../assets/logoother/img4.jpg';
import img5 from '../../assets/logoother/img5.jpg';
import img6 from '../../assets/logoother/img6.jpg';

const Homepagemediapartner = () => {
  const logos = [img1, img2, img3, img4, img5, img6,img1, img2, img3, img4, img5, img6,img1, img2, img3, img4, img5, img6,img1, img2, img3, img4, img5, img6,img1, img2, img3, img4, img5, img6,img1, img2, img3, img4, img5, img6];

  return (
    <div className="w-full mt-4 py-10 bg-gray-100 flex flex-col items-center overflow-hidden mb-5 rounded-lg shadow-md">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Media Partners
      </h1>

      {/* Marquee Container */}
      <div className="relative w-full max-w-[1400px] bg-white shadow-md rounded-xl py-6 overflow-hidden">

        <div className="flex animate-marquee whitespace-nowrap">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={"logo"}
              className="h-16 mx-10 object-contain inline-block"
            />
          ))}
        </div>

      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: inline-flex;
          animation: marquee 50s linear infinite;
        }
      `}</style>

    </div>
  );
};

export default Homepagemediapartner;
