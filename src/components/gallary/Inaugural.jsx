import React from "react";
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

const Inaugural = () => {
  const images = [
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
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Gallery title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 tracking-wide uppercase">
          Inaugural Gallery 2025
        </h1>
      </div>

      {/* Grid container for the images, using a responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          // Container for each image, with a shadow and rounded corners
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            {/* The image element with a smooth transition and a scale effect on hover */}
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inaugural;
