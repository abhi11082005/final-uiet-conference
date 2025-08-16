import React from "react";
import img1 from "../../assets/imagespeakers/Prof-Alvaro-Rocha-aNHygu6H.png";

// Example speakers data
const speakers = [
  {
    img: img1,
    name: "Prof. Alvaro Rocha",
    title:
      "Professor of Information Systems, ISEG, University of Lisbon, Portugal",
    details: [
      "World's Top 1% Scientist, according to Stanford University and Elsevier",
      "ISEM's Book Series Scientific Manager at Springer Nature",
      "Chair of ITMA - Information and Technology Management Association",
      "Founder and Vice-Chair of IEEE SMC Portugal Chapter",
      "Invited Professor at University of Calabria, Italy",
      "CEO at AMARITS Consulting, Dubai",
    ],
  },
];

const Homepagespeaker = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl font-bold mb-8">
        Speakers of Previous ICRAECCT Conference
      </h1>

      {/* Flexbox for centering */}
      <div className="flex flex-wrap justify-center gap-6">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition duration-300 w-96"
          >
            <img
              src={speaker.img}
              alt={speaker.name}
              className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
            />
            <h2 className="font-bold text-xl mb-2 text-red-800">{speaker.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{speaker.title}</p>

            {/* Optional details */}
            <ul className="text-sm text-gray-500 text-left list-disc pl-5 space-y-1">
              {speaker.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepagespeaker;
