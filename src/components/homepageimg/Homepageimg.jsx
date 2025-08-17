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
import img25 from '../../assets/gallary/valedictory/closing cer 2.jpg'
import img26 from '../../assets/gallary/valedictory/closing cer 3.jpg'
import img27 from '../../assets/gallary/valedictory/closing cer 4.jpg'
import img28 from '../../assets/gallary/valedictory/closing cer 5.jpg'
import img29 from '../../assets/gallary/valedictory/closing cer 6.jpg'
import img30 from '../../assets/gallary/valedictory/closing cer 7.jpg'
import img31 from '../../assets/gallary/valedictory/closing cer 8.jpg'
import img32 from '../../assets/gallary/valedictory/closing cer 9.jpg'
import img33 from '../../assets/gallary/valedictory/closing cer 10.jpg'
import img34 from '../../assets/gallary/valedictory/closing cer 11.jpg'
import img35 from '../../assets/gallary/valedictory/closing cer 12.jpg'
import img36 from '../../assets/gallary/valedictory/closing cer 13.jpg'
import img37 from '../../assets/gallary/valedictory/closing cer 14.jpg'
import img38 from '../../assets/gallary/valedictory/closing cer 15.jpg'
import img39 from '../../assets/gallary/valedictory/closing cer 16.jpg'
import img40 from '../../assets/gallary/valedictory/closing cer 17.jpg'
import img41 from '../../assets/gallary/valedictory/closing cer 18.jpg'
import img42 from '../../assets/gallary/valedictory/closing cer 19.jpg'
import img43 from '../../assets/gallary/valedictory/closing cer 20.jpg'
import img44 from '../../assets/gallary/valedictory/closing cer 21.jpg'
import img45 from '../../assets/gallary/valedictory/closing cer 22.jpg'
import img46 from '../../assets/gallary/valedictory/closing cer 23.jpg'


const photos = [
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
  "https://csjmu.ac.in/wp-content/uploads/2024/10/intl-conference.jpg",
  "https://csjmu.ac.in/wp-content/themes/csjmutheme/imgs-copyrighted/imgsirac/irac-5.jpeg",
  "https://csjmu.ac.in/wp-content/uploads/2024/08/nepal-irac.jpg",
  "https://csjmu.ac.in/wp-content/uploads/2024/08/spain-irac.jpg",
  "https://csjmu.ac.in/wp-content/themes/csjmutheme/imgs-copyrighted/imgsirac/irac-3.jpeg",
  "https://csjmu.ac.in/wp-content/uploads/2021/06/uiet-alumni-meet-1-1536x1061.jpeg",
  "https://csjmu.ac.in/wp-content/uploads/2021/06/uiet-alumni-meet-8-1536x1155.jpeg",
  "https://csjmu.ac.in/wp-content/uploads/2021/06/uiet-alumni-meet-9-1536x1155.jpeg",
  "https://csjmu.ac.in/wp-content/uploads/2021/06/uiet-seminars-2.jpeg",
  "https://csjmu.ac.in/wp-content/uploads/2021/06/g58.jpeg",
  "https://csjmu.ac.in/wp-content/themes/csjmutheme/imgs-copyrighted/imgsirac/irac-8.jpeg",
  "https://csjmu.ac.in/wp-content/uploads/2021/06/g52.jpeg",
  "https://csjmu.ac.in/wp-content/themes/csjmutheme/imgs-copyrighted/imgsirac/irac-2.jpeg",
  "https://csjmu.ac.in/wp-content/themes/csjmutheme/imgs-copyrighted/imgsirac/irac-7.jpeg",
  "https://csjmu.ac.in/wp-content/themes/csjmutheme/imgs-copyrighted/imgsirac/irac-1.jpeg",
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
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
