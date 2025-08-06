import React from "react";
import uietimage from "../../assets/uietimage.jpg";
import romanialogo from "../../assets/romanialogo.jpg";
import aradlogo from "../../assets/aradlogo.png";
import fresnillologo from "../../assets/fresnillologo.jpg";
import icraecct from "../../assets/icraecct.png";
const VideoHomepage = () => {
  return (
    <div className="bg-white text-center text-black border-b shadow-sm rounded-lg">
      <div className="relative w-full h-screen overflow-hidden text-white">
        {/* Background Video */}
        <img
          src={uietimage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
      </div>
    </div>
  );
};

export default VideoHomepage;
