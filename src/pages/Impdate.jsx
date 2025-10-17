import React from "react";

const Impdate = () => {
  return (
    <div className="mb-4">
      <div className="max-w-4xl mx-auto mt-4 text-center">
        <h1 className="text-4xl font-bold text-third mb-8">IMPORTANT DATES</h1>
        <table className="table-auto w-full text-left bg-white border-collapse shadow-lg">
          <thead className="bg-third text-white">
            <tr>
              <th className="px-6 py-4 text-xl font-semibold border border-gray-300">
                EVENTS
              </th>
              <th className="px-6 py-4 text-xl font-semibold border border-gray-300">
                DATE
              </th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td className="px-6 py-4 border border-gray-300 text-lg">
                Last date for final paper submission:{" "}
              </td>
              <td className="px-6 py-4 border border-gray-300 text-lg">
                <del>25 October 2025 </del>
                <ins className="text-red-800 no-underline ml-1">25 November 2025</ins>
              </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="px-6 py-4 border border-gray-300 text-lg">
                Notification of <span class="relative font-bold underline decoration-blue-400 decoration-1 text-gray-800 tracking-tight after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:border-b after:border-blue-400">acceptance</span>

 :
              </td>
              <td className="px-6 py-4 border border-gray-300 text-lg">
                15 December 2025
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-300 text-lg">
                Last date for <span class="relative font-bold underline decoration-blue-400 decoration-1 text-gray-800 tracking-tight after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:border-b after:border-blue-400">registration</span> :
              </td>
              <td className="px-6 py-4 border border-gray-300 text-lg">
                05 January 2026
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Impdate;
