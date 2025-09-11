import React from "react";

const CMTAcknowledgement = () => {
  return (
    <div className="w-full bg-gray-100 py-10 mt-10 rounded-lg">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 border border-gray-200 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          CMT Acknowledgement
        </h2>
        
        <p className="text-gray-600 leading-relaxed">
          The Microsoft CMT service was used for managing the peer-reviewing
          process for this conference. This service was provided for free by{" "}
          Microsoft, and they
          bore all expenses, including costs for Azure cloud services as well as
          for software development and support.
        </p>
      </div>
    </div>
  );
};

export default CMTAcknowledgement;
