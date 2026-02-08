import React from "react";

import pub_partner1 from '../../assets/publication_partners/pub_partner1.jpeg';
import pub_partner2 from '../../assets/publication_partners/pub_partner2.jpeg';

const Homepagepublication2026 = () => {
  const logos = [pub_partner1, pub_partner2, pub_partner1, pub_partner2, pub_partner1, pub_partner2, pub_partner1, pub_partner2, pub_partner1, pub_partner2, pub_partner1, pub_partner2];

  return (
    <div className="w-full mt-4 py-10 bg-gray-100 flex flex-col items-center overflow-hidden mb-5 rounded-lg shadow-md">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Publication Partners
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

export default Homepagepublication2026;

