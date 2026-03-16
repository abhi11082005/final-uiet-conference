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
            {/* Row 1 */}
            <tr>
              <td className="px-6 py-4 border border-gray-300 text-lg">
                Last date for final paper submission:
              </td>
              <td className="px-6 py-4 border border-gray-300 text-lg">
                <del className="text-[#5a8aac]">25 October 2025</del>
                <del className="text-[#5a8aac] ml-2">25 November 2025</del>
                <del className="text-black ml-2">25 December 2025</del>
                <del className="text-black ml-2">25 January 2026</del>
                <del className="text-black ml-2">28 February 2026</del>
                <del className="text-black ml-2">5 March 2026</del>

                <span className="text-red-600 font-semibold ml-2">
                  10 March 2026
                </span>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="bg-gray-100">
              <td className="px-6 py-4 border border-gray-300 text-lg">
                Notification of{" "}
                <span className="font-bold underline decoration-blue-400 decoration-1">
                  acceptance
                </span>
                :
              </td>
              <td className="px-6 py-4 border border-gray-300 text-lg">
                <del className="text-[#5a8aac]">15 December 2025</del>
                <del className="text-black ml-2">15 January 2026</del>
                <del className="text-black ml-2">25 February 2026</del>
                <del className="text-black ml-2">15 March 2026</del>
                <del className="text-black ml-2">20 March 2026</del>
                <span className="text-red-600 font-semibold ml-2">
                  26 March 2026
                </span>
              </td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td className="px-6 py-4 border border-gray-300 text-lg">
                Last date for{" "}
                <span className="font-bold underline decoration-blue-400 decoration-1">
                  registration
                </span>
                :
              </td>
              <td className="px-6 py-4 border border-gray-300 text-lg">
                <del className="text-[#5a8aac]">05 January 2026</del>
                <del className="text-black ml-2">25 January 2026</del>
                <del className="text-black ml-2">25 March 2026</del>
                <del className="text-black ml-2">05 April 2026</del>

                <span className="text-red-600 font-semibold ml-2">
                  10 April 2026
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Impdate;
