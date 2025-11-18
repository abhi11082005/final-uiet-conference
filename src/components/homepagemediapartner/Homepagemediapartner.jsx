import React from "react";

import img1 from '../../assets/logoother/img1.jpg';
import img2 from '../../assets/logoother/img2.jpg';
import img3 from '../../assets/logoother/img3.jpg';
import img4 from '../../assets/logoother/img4.jpg';
import img5 from '../../assets/logoother/img5.jpg';
import img6 from '../../assets/logoother/img6.jpg';

const Homepagemediapartner = () => {

  const logos = [
    { src: img1, alt: "Logo 1" },
    { src: img2, alt: "Logo 2" },
    { src: img3, alt: "Logo 3" },
    { src: img4, alt: "Logo 4" },
    { src: img5, alt: "Logo 5" },
    { src: img6, alt: "Logo 6" },
  ];

  return (
    <div className="w-full py-10 bg-gray-100 flex flex-col items-center">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Media Partners
      </h1>

      {/* Logos Container */}
      <div className="flex items-center justify-between gap-10 bg-white shadow-md rounded-xl px-10 py-6 max-w-[1400px] w-full">

        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-16 object-contain"
          />
        ))}

      </div>
    </div>
  );
};

export default Homepagemediapartner;
