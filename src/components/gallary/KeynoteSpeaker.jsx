import React from 'react'
import img1 from '../../assets/gallary/keynote sessions/keynote sessions-1.png'
import img2 from '../../assets/gallary/keynote sessions/keynote sessions 2.png'
import img3 from '../../assets/gallary/keynote sessions/keynote 3.png'
import img4 from '../../assets/gallary/keynote sessions/keynote 4.png'
import img5 from '../../assets/gallary/keynote sessions/keynote 5.png'
import img6 from '../../assets/gallary/keynote sessions/keynote 6.png'
import img7 from '../../assets/gallary/keynote sessions/keynote 7.png'
import img8 from '../../assets/gallary/keynote sessions/keynote 8.png'
import img9 from '../../assets/gallary/keynote sessions/keynote 9.png'
import img10 from '../../assets/gallary/keynote sessions/keynote 10.png'
import img11 from '../../assets/gallary/keynote sessions/keynote 11.png'


const KeynoteSpeaker = () => {
  const images = [
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img1,
    img8,
    img9,
    img10,
    img11,

  ];
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Gallery title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 tracking-wide uppercase">
          Keynote sessions 2025
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

export default KeynoteSpeaker
