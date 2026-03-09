import React from "react";

import img1 from "../../../assets/gallary/Indexing/dblp.png";
import img2 from "../../../assets/gallary/Indexing/scopus.png";
import img3 from "../../../assets/gallary/Indexing/Semantic_Scholar_logo.png";
import img4 from "../../../assets/gallary/Indexing/google_scholar.png";

const Indexing = () => {
  const images = [img1, img2, img3, img4];

  return (
    <section className="py-8 px-1">

      <div className="bg-gray-100 px-6 py-10 text-black rounded-lg">

        {/* marquee text */}
        <div className="overflow-hidden whitespace-nowrap mb-6">
          <marquee className="text-[18px] text-[#885f22] font-semibold">
            All accepted papers will be published in Scopus Indexed Proceedings, Scopus Indexed Edited Books and Scopus Indexed Journals.
          </marquee>
        </div>

        {/* heading */}
        <h2 className="text-3xl font-semibold mb-8">
          INDEXING**
        </h2>

        {/* logos */}
        <div className="flex flex-wrap justify-center items-center gap-10">
          {images.map((img, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={img}
                alt="indexing"
                className="h-[70px] object-contain hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Indexing;
