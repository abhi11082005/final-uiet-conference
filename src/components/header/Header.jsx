import React from "react";
import aradlogo from "../../assets/aradlogo.png";
import fresnillologo from "../../assets/fresnillologo.jpg";
import icraecctlogo from "../../assets/icraecct.png";
import naaclogo from "../../assets/naaclogo.jpg";
import romanialogo from "../../assets/romanialogo.jpg";
import fullimage from "../../assets/fullimage.png";
import image from "../../assets/image.png";
import Submitpaper from "../submitpaper.jsx/Submitpaper";
import icraecctsf from "../../assets/icraecctsf.png";

const Header = () => {
  const logos = [

    
    fullimage,
  ];

  return (
    <header className=" header bg-white text-dark  px-4 pb-0">
      <div className="flex justify-center items-center gap-0 flex-wrap   ">
      {logos.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`logo-${index}`}
          draggable="false"
          className="h-24 w-auto object-contain px-4"
        />
      ))}
    </div>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">
          International Conference on Recent Advances in Emerging Computing and Communication Technologies <br/> for a Sustainable Future

          <br />
          <span className="text-[#1B305C]"> (ICRAECCTSF) - 2026 Hybrid Mode</span>
          <br />
        </h1>
        <div>
          {/* <h2 className="italic pb-4 text-purple-800 font-bold">
            <span className="text-lg">International Conference</span> <br />
             on 
             <br />
             <span className="text-lg">Recent Advances in Emerging Computing</span>
            <span className="text-lg">and Communication Technologies</span>
          </h2> */}

          <p className="font-semibold text-purple-700 text-lg">
            Jointly Organized By:
          </p>
          <ul className="list-none list-inside mt-4 text-gray-700 font-semibold">
            <li>Department of Computer Application</li>
            <li>Department of Computer Science & Engineering</li>
            <li>Department of Electronics and Communication Engineering</li>
            <li>
              <span className="text-2xl">
                School of Engineering and Technology (UIET)
              </span>
            </li>
          </ul>
          <div className="text-center px-4 pb-10">
            <h1 className="text-[#1B305C] font-bold text-xl sm:text-2xl md:text-3xl">
              
              Chhatrapati Shahu Ji Maharaj University,<br></br> Kanpur (Venue Partner)
            </h1>


            <div className="mt-4">
              <span className="bg-[#1B305C] text-white font-semibold px-4 py-2 rounded">
                UGC Category - I
              </span>
            </div>
            <p className="text-gray-700 text-base mt-1">
              Uttar Pradesh State University (Formerly Kanpur University,
              Kanpur, India)
            </p>

            <p className="text-[#1B305C] font-medium text-base mt-2">
              in association with
            </p>

            <h2 className="text-green-900 font-bold text-lg sm:text-xl md:text-2xl mt-1">
              Aurel Vlaicu University of Arad, Romania
            </h2>
            <h3 className="text-green-900 font-bold text-md sm:text-xl md:text-2xl mt-1">And</h3>
          <h2 className="text-green-900 font-bold text-xl sm:text-xl md:text-2xl mt-1 capitalize">
            Tecnm Instituto Tecnologico Superior De Fresnillo, Mexico

          </h2>

            <div className="mt-4">
              <span className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded">
                Conference Date: 11<sup>th</sup> - 13<sup>th</sup> April, 2026
              </span>
            </div>

          </div>
            <Submitpaper />
        </div>
      </div>
    </header>
  );
};

export default Header;
