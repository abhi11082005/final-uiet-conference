import React from "react";

// Imported images
import img1 from "../../assets/gallary/inaugural2025/audience.jpg";
import img2 from "../../assets/gallary/inaugural2025/audience2.jpg";
import img3 from "../../assets/gallary/inaugural2025/img3.jpg";
import img4 from "../../assets/gallary/inaugural2025/img4.jpg";
import img5 from "../../assets/gallary/inaugural2025/img5.jpg";
import img6 from "../../assets/gallary/inaugural2025/img6.jpg";
import img7 from "../../assets/gallary/inaugural2025/img7.jpg";
import img8 from "../../assets/gallary/inaugural2025/img8.jpg";
import img9 from "../../assets/gallary/inaugural2025/img9.jpg";
import img10 from "../../assets/gallary/inaugural2025/img10.jpg";
import img11 from "../../assets/gallary/inaugural2025/img11.jpg";
import img12 from "../../assets/gallary/inaugural2025/img12.jpg";
import img13 from "../../assets/gallary/inaugural2025/img13.jpg";
import img14 from "../../assets/gallary/inaugural2025/img14.jpg";
import img15 from "../../assets/gallary/inaugural2025/img15.jpg";
import img16 from "../../assets/gallary/inaugural2025/img16.jpg";
import img17 from "../../assets/gallary/inaugural2025/img17.jpg";
import img18 from "../../assets/gallary/inaugural2025/img18.jpg";
import img19 from "../../assets/gallary/inaugural2025/img19.jpg";
import img20 from "../../assets/gallary/inaugural2025/img20.jpg";
import img21 from "../../assets/gallary/inaugural2025/img21.jpg";

const photos = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21
];

const PhotoGallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl font-bold mb-6">Photos of ICRAECCT </h1>

      {/* Year Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold">
          2025
        </button>
       
      </div>

      {/* Marquee Section */}
      <div className="overflow-hidden relative w-full">
        <div className="flex w-max animate-marquee gap-6">
          {[...photos, ...photos].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`photo-${index}`}
              className="h-60 w-auto rounded-lg shadow-md object-cover transform transition-transform duration-500 hover:scale-110"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
