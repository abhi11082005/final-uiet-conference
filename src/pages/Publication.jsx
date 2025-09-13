import React from "react";
import pub1 from "../assets/publication/pub1.jpg";
import pub2 from "../assets/publication/pub2.jpg";
import pub3 from "../assets/publication/pub3.jpg";

const Publication = () => {
  const journals = [
    {
      title: "Open Access, Scopus Indexed Journals",
      image: pub1,
      details: [
        "High quality selected research papers, successfully presented, may be recommended",
        "Additional Article Processing Charges borne by authors",
        "Independent review by the journal for final acceptance"
      ],
      visitlink: "https://www.scopus.com/sources",
    },
    {
      title: "Springer LNNS Conference Proceedings (ICRAECCTSF 2026)",
      image: pub2,
      details: [
        "Selected high-quality papers with strong technical content",
        "May appear in Scopus Indexed Springer LNNS Proceedings",
        "Proposal submitted for ICRAECCTSF 2026"
      ],
      visitlink: "https://link.springer.com/bookseries/15179",
    },
    {
      title: "Book Chapters in Edited Volumes",
      image: pub3,
      details: [
        "Extended and successfully presented papers",
        "Scopus Indexed Edited Books",
        "Renowned publishers: IGI Global, Bentham Science",
        "Minimum page length: 15 pages"
      ],
      visitlink: "https://www.igi-global.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Top heading */}
      <div className="mb-10 text-center">
        <h3 className="text-2xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide">
          Publication Opportunities
        </h3>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Selected high-quality research papers and extended manuscripts will be
          considered for publication in Scopus Indexed Journals, Springer LNNS
          Conference Proceedings, and Edited Books with renowned publishers.
        </p>
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
                Visit
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Note */}
      <div className="mt-12 bg-yellow-100 p-6 rounded-lg border border-yellow-300 max-w-4xl mx-auto">
        <p className="text-lg font-bold text-yellow-800 mb-2">Note:</p>
        <p className="text-md text-gray-700 font-bold  ">
          Organizers will not be responsible for any quality issues in the
          manuscript. Acceptance for conference presentation does not guarantee
          publication. Authors must follow strong technical and formatting
          guidelines of the publisher. Final publication decision rests with the
          publisher.
        </p>
      </div>
    </div>
  );
};

export default Publication;
