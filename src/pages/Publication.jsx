import React from "react";
import pub1 from "../assets/publication/pub1.jpg";
import pub2 from "../assets/publication/pub2.jpg";
import pub3 from "../assets/publication/pub3.jpg";

const Publication = () => {
  const journals = [
    // {
    //   title: "CURRENT MEDICAL IMAGING",
    //   image: pub2,
    //   details: [
    //     "( ISSN / eISSN: 1573-4056 / 1875-6603 )",
    //     "( BENTHAM SCIENCE PUBLISHER )",
    //     "SCIE Indexed Journal"
    //   ],
    //   visitlink: "https://www.benthamscience.com/journal/33/indexing-agency",
    // },
    // {
    //   title: "CURRENT COMPUTER-AIDED DRUG DESIGN",
    //   image: pub1,
    //   details: [
    //     "( ISSN / eISSN: 1573-4089 / 1875-6997 )",
    //     "( BENTHAM SCIENCE PUBLISHER )",
    //     "SCIE Indexed Journal"
    //   ],
    //   visitlink: "https://www.benthamscience.com/journals/current-computer-aided-drug-design",
    // },
    // {
    //   title: "FRANKLIN OPEN",
    //   image: pub3,
    //   details: [
    //     "( ISSN / Print ISSN: 1879-2693 / 0016-0032 )",
    //     "( ELSEVIER PUBLISHER )",
    //     "Scopus Indexed Journal"
    //   ],
    //   visitlink: "https://www.sciencedirect.com/journal/journal-of-the-franklin-institute"
    // }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Top heading */}
      <div className="mb-10 text-center">
        <h3 className="text-xl md:text-3xl font-semibold text-gray-800 leading-tight max-w-3xl mx-auto uppercase">
          Publication
        </h3>
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 flex-wrap">
        {journals.map((journal, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center max-w-md w-full transform hover:scale-105"
          >
            {/* Image */}
            <img
              src={journal.image}
              alt={`${journal.title} cover`}
              className="w-56 h-auto rounded-md object-cover mb-6 shadow-md"
            />

            {/* Title */}
            <h3 className="font-bold text-center text-xl text-gray-900 mb-3 leading-tight">
              {journal.title}
            </h3>

            {/* Details */}
            <div className="text-base text-gray-600 text-center space-y-1 mb-8">
              {journal.details.map((detail, detailIndex) => (
                <p key={detailIndex}>{detail}</p>
              ))}
            </div>

            {/* Button */}
            {journal.visitlink && (
              <a
                href={journal.visitlink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-blue-700 transition-transform duration-300 hover:scale-110"
              >
                Visit Journal
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publication;
