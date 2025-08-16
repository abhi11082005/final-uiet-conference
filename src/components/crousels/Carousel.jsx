import "./Carousel.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

import img1 from "../../assets/Slideimg/IMG_9239.jpg";
import img2 from "../../assets/Slideimg/IMG_9250.jpg";
import img3 from "../../assets/Slideimg/IMG_9254.jpg";
import img4 from "../../assets/Slideimg/image.png";

const Carousel = () => {
  // Array with image and specific object position for each
  const slides = [
    { src: img1, position: "object-center" },
    { src: img4, position: "object-center" },
    { src: img3, position: "object-center" },
  ];

  return (
    <div className="w-full relative mt-4 rounded-2xl overflow-hidden">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "progressbar",
        }}
        modules={[Autoplay, Pagination]}
        className="progress-slide-carousel"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[500px] overflow-hidden rounded-2xl">
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className={`w-full h-full object-cover ${slide.position}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100"></div>
    </div>
  );
};

export default Carousel;
