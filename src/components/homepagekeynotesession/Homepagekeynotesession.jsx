import React from "react";
import img1 from "../../assets/gallary/keynote sessions/keynote sessions-1.png";
import img2 from "../../assets/gallary/keynote sessions/keynote sessions 2.png";
import img3 from "../../assets/gallary/keynote sessions/keynote 3.png";
import img4 from "../../assets/gallary/keynote sessions/keynote 4.png";
import img5 from "../../assets/gallary/keynote sessions/keynote 5.png";
import img6 from "../../assets/gallary/keynote sessions/keynote 6.png";
import img7 from "../../assets/gallary/keynote sessions/keynote 7.png";
import img8 from "../../assets/gallary/keynote sessions/keynote 8.png";
import img9 from "../../assets/gallary/keynote sessions/keynote 9.png";
import img10 from "../../assets/gallary/keynote sessions/keynote 10.png";
import img11 from "../../assets/gallary/keynote sessions/keynote 11.png";

const Homepagekeynotesession = () => {
  const photos = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];

  return ( 
    <div className="max-w-6xl mx-auto px-4 py-10 text-center flex flex-col items-center">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 tracking-wide mb-6">
        Keynote Sessions of ICRAECCT
      </h1>

      {/* Year Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold">
          2025
        </button>
      </div>

      {/* Marquee Section */}
      <div className="overflow-hidden relative w-full">
        <div className="flex w-max animate-marqueekeynotesession gap-10 items-center">
          {[...photos, ...photos].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`photo-${index}`}
              className="h-80 w-auto rounded-lg shadow-md object-cover transform transition-transform duration-500 hover:scale-110"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepagekeynotesession;
