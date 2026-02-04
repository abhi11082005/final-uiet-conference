import React from "react";
import pub1 from "../assets/publication/image.png";
import pub2 from "../assets/publication/pub2.jpg";
import pub3 from "../assets/publication/pub3.jpg";
<<<<<<< HEAD
import publication4 from "../assets/publication/publication4.png";
=======
import pub4 from "../assets/publication/pub4.jpg";

>>>>>>> 5606583d5ad5c1e434dcb0ae83c36f2d0c6f29dd

const Publication = () => {
  return (
    <div className="w-full bg-gray-100 py-10 mt-10 rounded-lg">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-2xl p-6 border border-gray-200 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          PUBLICATION OPPORTUNITIES:
        </h2>
        <p className="text-black leading-relaxed">
          1. High Quality, Technically sound articles backed up with Novelty and experimentation, successfully presented and registered papers after considerable extension may be published (post successful peer reviewed) in a special issue to following Q1 Scopus Indexed Journal (Fast Processing Open Access). Additional Article Processing Charges of the Journal has to be paid by the Authors separately, (500$ for Indian Authors and 1200$ for Foreign Authors per Article as per Journal Website).
        </p>
      </div>

      {/* link */}
      <div className="mt-8 text-xl">
        <a
          href="https://xlescience.org/index.php/IJASIS"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600 hover:text-blue-800"
        >
          https://xlescience.org/index.php/IJASIS
        </a>
      </div>


      {/* Insert Image Section */}

      <a href="https://xlescience.org/index.php/IJASIS">
        <div className="max-w-7xl mx-auto mb-8 mt-2 flex justify-center">
          <img
            src={publication4}
            alt="Publication Opportunities"
            className="rounded-xl shadow-md border border-gray-200 object-contain"
          />
        </div>
      </a>


      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-2xl p-6 border border-gray-200 text-center">
        <p className="text-black leading-relaxed">
          2. Selected High Quality Papers and successfully presented papers, backed up with strong technical content, will be published in SCITE Press Conference Proceedings (Scopus Indexed**) (Proposal Submitted).
        </p>
      </div>
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-2xl p-6 border border-gray-200 text-center mt-5">
        <p className="text-black leading-relaxed">
          3. Some of Selected Quality Extended Papers and Successfully Presented Papers may be published as Book Chapters in Scopus Indexed Edited Books with Renowned Publishers such as IGI Global Scientific Publishing/Bentham Science/Scrivener Wiley Publisher. (Minimum Page Length – 15 Pages)
        </p>
      </div>
      <div className="max-w-7xl mx-auto bg-yellow-50 shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 my-8">
        <p className="text-yellow-800 font-medium leading-relaxed">
          <strong>
            NOTE<span className="text-red-600">*</span> :
          </strong>{" "}
          ORGANIZERS WILL NOT BE RESPONSIBLE FOR ANY KIND OF QUALITY ISSUE REFLECTING IN THE MANUSCRIPT FROM AUTHOR SIDE. MERELY ACCEPTANCE FOR THE CONFERENCE PRESENTATION DOES NOT GAURANTEE THE PUBLICATION OF MANUSCRIPT. AUTHOR MUST ADHERE TO THE STRONG TECHNICAL QUALITY AND FORMATTING GUIDELINES OF THE PUBLISHER. FINAL PUBLICATION DECISION WILL BE OF THE PUBLISHER.
        </p>
        <p>** Scopus Indexing subject to the fulfilment of passing quality check by Scopus.</p>
      </div>
    </div>
  );
};

export default Publication;
