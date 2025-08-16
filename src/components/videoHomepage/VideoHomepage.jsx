import React from "react";
import video from "../../assets/videocsjmu.mp4"; // Adjust the path as necessary
const VideoHomepage = () => {
  return (
    <div className="bg-white text-center text-black border-b shadow-sm rounded-lg">
      <div className="relative w-full h-screen overflow-hidden text-white">
        {/* Background YouTube Video */}
      <video
  className="absolute w-full h-full overflow-hidden object-cover"
  src={video}
  controls={false}
  autoPlay
  muted
  loop
/>

      </div>
    </div>
  );
};

export default VideoHomepage;
