import React from "react";
import img3 from "../../assets/imagespeakers/Dr-Hari-Mohan-Pandey-BiZjcQa4.png";
import img5 from "../../assets/imagespeakers/Dr-Rajeev-K-Shakya-Ce17I09D.jpg";
import img7 from "../../assets/imagespeakers/Dr-Akhila-Reddy-Yadulla-B2gPi2dG.jpg";
import img8 from "../../assets/imagespeakers/Er-Abhinav-Tripathi-H_Nq_82g.png";


const speakers = [
   {
      img: img3,
      name: "Dr. Hari Mohan Pandey",
      title: "Associate Professor (Sr. Lecturer) Data Science and Artificial Intelligence, Bournemouth University, U.K.",
      details: [
        "Top 2% scientist (2022 World Ranking list by Stanford University)"
      ]
    },   {
      img: img5,
      name: "Dr. Rajeev K Shakya",
      title: "Department of Electrical Engineering & Computing Engineering",
      details: [
        "Adama Science & Technology University, Adama Ethiopia"
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
    },
  
];
const HomepageKeynotespeaker = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl font-bold mb-8">
        Keynote Speakers of ICRAECCT
      </h1>
      <div className="flex justify-center gap-4 mb-6">
        <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold">
          2025
        </button>
      </div>

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
