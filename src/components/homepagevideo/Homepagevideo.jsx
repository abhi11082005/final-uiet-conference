import React from "react";

const videos = [
  {
    title: "ICCCNet-2024 Video 1",
    url: "blob:https://www.youtube.com/7aab866f-c5cb-47c7-a4d5-7ffeb695c325", // Replace with real embed link
  },
];

const VideoGallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl font-bold mb-6">Videos of ICRAECCT </h1>
      <div className="flex justify-center gap-4 mb-6">
        <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold">
          2025
        </button>
       
      </div>

      {/* Video Container */}
      <div className="flex justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2 overflow-hidden rounded-lg shadow-lg">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Jwg_MALcLrg?si=ltK8e7JP9c7iq7mq"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
