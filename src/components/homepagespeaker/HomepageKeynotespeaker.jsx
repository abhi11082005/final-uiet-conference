import React from "react";
import img3 from "../../assets/imagespeakers/Dr-Hari-Mohan-Pandey-BiZjcQa4.png";
import img5 from "../../assets/imagespeakers/Dr-Rajeev-K-Shakya-Ce17I09D.jpg";
import img7 from "../../assets/imagespeakers/Dr-Akhila-Reddy-Yadulla-B2gPi2dG.jpg";
import img8 from "../../assets/imagespeakers/Er-Abhinav-Tripathi-H_Nq_82g.png";
import img23 from "../../assets/imagespeakers/KathyayanGoudMula-BJsR-Uv7.jpg";
import img1 from "../../assets/imagespeakers/Prof-Alvaro-Rocha-aNHygu6H.png";
import img2 from "../../assets/imagespeakers/Maksudul_Amin.jpeg"


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
   {
      img: img3,
      name: "Dr. Hari Mohan Pandey",
      title: "Associate Professor (Sr. Lecturer) Data Science and Artificial Intelligence, Bournemouth University, U.K.",
      details: [
        "Top 2% scientist (2022 World Ranking list by Stanford University)"
      ]
    },   {
          img: img23,
          name: "Kathyayan Goud Mula",
          title: "Technical lead manager",
          details: [
            "Chime, USA"
          ]
        }, {
      img: img7,
      name: "Dr. Akhila Reddy Yadulla",
      title: "Department of Information Technology",
      details: [
        "University of the Cumberlands, Williamsburg, Kentucky, USA"
      ]
    },{
      img: img8,
      name: "Er. Abhinav Tripathi",
      title: "Senior Director",
      details: [
        "Smarsh Inc., UK"
      ]
    },{
      img: img2,
      name: "Md. Maksudul Amin",
      title: "FCCA, CIA",
      details: [
        "Accounting, Data Analytics & Technologies at Pace University (Lubin School of Business) New York"
      ]
    },
  
];
const HomepageKeynotespeaker = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl font-bold mb-8">
        Keynote Speakers 
      </h1>
     

      {/* Speakers Grid */}
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
            <h2 className="font-bold text-xl mb-2 text-red-800">
              {speaker.name}
            </h2>
            <p className="text-sm text-gray-600 mb-2">{speaker.title}</p>

            {/* Consistent text alignment */}
            <ul className="text-sm text-gray-500 text-center space-y-1">
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

export default HomepageKeynotespeaker;
