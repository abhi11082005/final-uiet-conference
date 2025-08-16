import React from 'react'
import img1 from '../../assets/gallary/valedictory/closing cer 2.jpg'
import img2 from '../../assets/gallary/valedictory/closing cer 3.jpg'
import img3 from '../../assets/gallary/valedictory/closing cer 4.jpg'
import img4 from '../../assets/gallary/valedictory/closing cer 5.jpg'
import img5 from '../../assets/gallary/valedictory/closing cer 6.jpg'
import img6 from '../../assets/gallary/valedictory/closing cer 7.jpg'
import img7 from '../../assets/gallary/valedictory/closing cer 8.jpg'
import img8 from '../../assets/gallary/valedictory/closing cer 9.jpg'
import img9 from '../../assets/gallary/valedictory/closing cer 10.jpg'
import img10 from '../../assets/gallary/valedictory/closing cer 11.jpg'
import img11 from '../../assets/gallary/valedictory/closing cer 12.jpg'
import img12 from '../../assets/gallary/valedictory/closing cer 13.jpg'
import img13 from '../../assets/gallary/valedictory/closing cer 14.jpg'
import img14 from '../../assets/gallary/valedictory/closing cer 15.jpg'
import img15 from '../../assets/gallary/valedictory/closing cer 16.jpg'
import img16 from '../../assets/gallary/valedictory/closing cer 17.jpg'
import img17 from '../../assets/gallary/valedictory/closing cer 18.jpg'
import img18 from '../../assets/gallary/valedictory/closing cer 19.jpg'
import img19 from '../../assets/gallary/valedictory/closing cer 20.jpg'
import img20 from '../../assets/gallary/valedictory/closing cer 21.jpg'
import img21 from '../../assets/gallary/valedictory/closing cer 22.jpg'
import img22 from '../../assets/gallary/valedictory/closing cer 23.jpg'


const Valedictory = () => {
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
    img22
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Gallery title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 tracking-wide uppercase">
          valedictory Gallery 2025
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
  )
}

export default Valedictory
