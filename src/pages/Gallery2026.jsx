import React from 'react'

import img1 from "../assets/gallary/inaugural2026/img1.jpeg";
import img2 from "../assets/gallary/inaugural2026/img2.jpeg";
import img3 from "../assets/gallary/inaugural2026/img3.jpeg";
import img4 from "../assets/gallary/inaugural2026/img4.jpeg";
import img5 from "../assets/gallary/inaugural2026/img5.jpeg";
import img6 from "../assets/gallary/inaugural2026/img6.jpeg";
import img7 from "../assets/gallary/inaugural2026/img7.jpeg";
import img8 from "../assets/gallary/inaugural2026/img8.jpeg";
import img9 from "../assets/gallary/inaugural2026/img9.jpeg";
import img10 from "../assets/gallary/inaugural2026/img10.jpeg";
import img11 from "../assets/gallary/inaugural2026/img11.jpeg";
import img12 from "../assets/gallary/inaugural2026/img12.jpeg";
import img13 from "../assets/gallary/inaugural2026/img13.jpeg";
import img14 from "../assets/gallary/inaugural2026/img14.jpeg";
import img15 from "../assets/gallary/inaugural2026/img15.jpeg";
import img16 from "../assets/gallary/inaugural2026/img16.jpeg";
import img17 from "../assets/gallary/inaugural2026/img17.jpeg";
import img18 from "../assets/gallary/inaugural2026/img18.jpeg";
import img19 from "../assets/gallary/inaugural2026/img19.jpeg";
import img20 from "../assets/gallary/inaugural2026/img20.jpeg";
import img21 from "../assets/gallary/inaugural2026/img21.jpeg";
import img22 from "../assets/gallary/inaugural2026/img22.jpeg";
import img23 from "../assets/gallary/inaugural2026/img23.jpeg";
import img24 from "../assets/gallary/inaugural2026/img24.jpeg";

const Gallery2026 = () => {
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
    img21,
    img22,
    img23,
    img24
];

  return (
    <div className="max-w-6xl mx-auto p-4 mt-4">
    <h1 className="text-4xl font-bold text-center text-third mb-8">
        GALLERY
      </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-md">
          <img
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-48 object-cover transform transition duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  </div>
  )
}

export default Gallery2026
