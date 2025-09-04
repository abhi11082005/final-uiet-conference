import React from "react";

const CMTAcknowledgement = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 py-12 mt-10 bg-gray-100 text-center flex flex-col items-center rounded-xl">
      {/* Title */}
      <h1 className="text-3xl font-bold  tracking-wide mb-6">
        CMT Acknowledgement
      </h1>

      {/* Divider Line */}
      <div className="h-1 w-20 bg-blue-600 rounded-full mb-8"></div>

      {/* Content Box */}
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl border border-gray-200 p-8">
        <p className="text-lg leading-relaxed text-justify">
          The Microsoft CMT service was
          used for managing the peer-reviewing process for this conference. This
          service was provided for free by Microsoft
          and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
        </p>
      </div>
    </div>
  );
};

export default CMTAcknowledgement;
