import React from "react";
import pub1 from "../assets/publication/image.png";
import pub2 from "../assets/publication/pub2.jpg";
import pub3 from "../assets/publication/pub3.jpg";

const Publication = () => {
  return (
    <div className="w-full bg-gray-100 py-10 mt-10 rounded-lg">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-2xl p-6 border border-gray-200 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          PUBLICATION OPPORTUNITIES:
        </h2>
        <p className="text-black leading-relaxed">
          1. High Quality Selected Research Papers, Successfully presented and
          after considerable extension may be recommended to following Open
          Access, Scopus Indexed Journal (Additional Article Processing Charges
          have to be borne by Author). Journal will have their own additional
          round of reviews to satisfy the quality of manuscript.
        </p>
      </div>

      {/* Insert Image Section */}
      <div className="max-w-7xl mx-auto my-8 flex justify-center">
        <img
          src={pub1}
          alt="Publication Opportunities"
          className="rounded-xl shadow-md border border-gray-200 max-h-80 object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-2xl p-6 border border-gray-200 text-center">
        <p className="text-black leading-relaxed">
          2. Selected High Quality Papers and successfully presented papers,
          backed up with strong technical content, may appear in Scopus Indexed
          Springer LNNS (Proposal Submitted) ICRAECCTSF 2026 Conference
          Proceedings.
        </p>
      </div>  
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-2xl p-6 border border-gray-200 text-center mt-5">
        <p className="text-black leading-relaxed">
          3. Some of Selected Quality Extended Papers and Successfully Presented
          Papers may be published as Book Chapters in Scopus Indexed Edited
          Books with Renowned Publishers such as IGI Global Scientific
          Publishing/Bentham Science Publisher. (Minimum Page Length – 15 Pages)
        </p>
      </div>
      <div className="max-w-7xl mx-auto bg-yellow-50 shadow-md rounded-2xl p-6 border-l-4 border-yellow-500 my-8">
        <p className="text-yellow-800 font-medium leading-relaxed">
          <strong>
            NOTE<span className="text-red-600">*</span> :
          </strong>{" "}
          ORGANIZERS WILL NOT BE RESPONSIBLE FOR ANY KIND OF QUALITY ISSUE
          REFLECTING IN THE MANUSCRIPT FROM AUTHOR SIDE. MERELY ACCEPTANCE FOR
          THE CONFERENCE PRESENTATION DOES NOT GAURANTEE THE PUBLICATION OF
          MANUSCRIPT. AUTHOR MUST ADHERE TO THE STRONG TECHNICAL QUALITY AND
          FORMATTING GUIDELINES OF THE PUBLISHER. FINAL PUBLICATION DECISION
          WILL BE OF THE PUBLISHER.
        </p>
      </div>
    </div>
  );
};

export default Publication;
