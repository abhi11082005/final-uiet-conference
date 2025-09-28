import React from "react";
import video from "../../assets/videocsjmu.mp4"; // Adjust the path as necessary
import uietimage from "../../assets/uietimage.jpg"; // Adjust the path as necessary
const VideoHomepage = () => {
  return (
    <div className="bg-white text-center text-black border-b shadow-sm rounded-lg">
      <div className="relative w-full h-screen overflow-hidden text-white">
        {/* Background Video */}
        <video
          className="absolute w-full h-full overflow-hidden object-cover"
          src={video}
          controls={false}
          autoPlay
          muted
          loop
        />

        {/* Overlay Text */}
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 bg-white bg-clip-text text-transparent
"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            International Conference on Sustainable Computing and Intelligent Systems (ICSIS 2026)
          </h1>
          
          <p className="text-xl font-medium">
            Conference Date: 17
            <sup className="text-white">
              th
            </sup>{" "}
            - 18
            <sup className="text-white">
              th
            </sup>{" "}
            April, 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoHomepage;
