import React from "react";

const Registration = () => {
  return (
    <div className="mb-4 bg-gray-100 pt-10">
      <div className="max-w-4xl mx-auto mt-12 text-center px-4">
        <h1 className="text-4xl font-bold text-third mb-8">REGISTRATION</h1>

        {/* Registration Information */}
        <div className="text-left mb-6 ">
          <p className="mb-4 text-xl">
            <strong>Author/Co-Author Registration Fee Includes:</strong>
          </p>
          <p className="mt-4">
            Participation in the technical program, participation certificate to
            the presenter.
          </p>
          <div className="mt-4 text-left mb-6">
            <p className="text-xl ">
              <strong>Registration Process:</strong>
            </p>
            <p className="mt-2 font-bold">
              Once your paper is accepted, the registration process begins. You
              have to complete the following steps:
            </p>

            <div className="mt-4">
              <h2 className="text-md font-bold mb-2">
                Step 1 - Registration Fee
              </h2>
              <p className="mb-4">
                It is mandatory for at least one author of an accepted paper to
                register in order for the paper to appear in the proceedings and
                be included in the Technical Program. If an author has more than
                one accepted paper as first author, there will be a maximum
                discount of 5% of registration fees on additional paper
                registration.{" "}
                <span className="font-bold">
                  An author can appear for a maximum of 3 papers as first
                  author.
                </span>{" "}
                <span className="font-bold">
                  An author name not appearing at first position can appear on a
                  maximum of 5 papers.
                </span>{" "}
                Fee includes listing the papers online in Scopus indexed
                conference proceedings, lunch, and morning and evening snacks.
              </p>
            </div>
          </div>

          <ul className="list-disc ml-6 space-y-1">
            <li>Access to Keynote talks</li>
            <li>Access to paper presentation sessions</li>
            <li>Networking sessions</li>
            <li>Conference lunch and refreshment*</li>
            <li>Tea and Coffee Breaks*</li>
            <li>Conference kit*</li>
            <li>Participation Certificate</li>
          </ul>

          <p className="mt-4">
            <strong>Note:</strong> The conference will be in Hybrid Mode.
          </p>

          <p className="mt-4 font-bold">
            <strong>Refund Policy:</strong> Once a paper has been accepted for
            presentation and author has paid registration fees, under no
            circumstances registration fee will be refunded. Authors are advised
            to choose wisely before paying registration fees.
          </p>

          <p className="mt-4">
            <strong>Discount for Women Researchers:</strong><br /> <span className=" italic font-bold ">ICSCIS-2026 is
              committed to empowering women researchers. </span>If the paper includes a
            female author/coauthor, the paper is eligible for a 10% discount on
            total registration fees.
          </p>
        </div>

        {/* Registration Fee Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-center bg-white border-collapse shadow-lg">
            <thead className="bg-third text-white">
              <tr>
                <th className="px-2 py-3 sm:px-6 sm:py-4 text-base sm:text-lg font-semibold border border-gray-300">
                  CATEGORY
                </th>
                <th
                  colSpan={2}
                  className="px-2 py-3 sm:px-6 sm:py-4 text-base sm:text-lg font-semibold border border-gray-300"
                >
                  EARLY-BIRD-REGISTRATION
                </th>
                <th
                  colSpan={2}
                  className="px-2 py-3 sm:px-6 sm:py-4 text-base sm:text-lg font-semibold border border-gray-300"
                >
                  LATE-BIRD-REGISTRATION
                </th>
              </tr>
              <tr className="bg-gray-200 text-third">
                <th className=""></th>
                <th className="px-2 py-3 border border-gray-300">Offline</th>
                <th className="px-2 py-3 border border-gray-300">Online</th>
                <th className="px-2 py-3 border border-gray-300">Offline</th>
                <th className="px-2 py-3 border border-gray-300">Online</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 py-3 text-left border border-gray-300 text-sm sm:text-lg">
                  Industry Experts
                </td>
                <td className="border px-2 py-3">INR 10,500</td>
                <td className="border px-2 py-3">INR 8,500</td>
                <td className="border px-2 py-3">INR 12,500</td>
                <td className="border px-2 py-3">INR 10,500</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="px-2 py-3 text-left border border-gray-300 text-sm sm:text-lg">
                  Academician
                </td>
                <td className="border px-2 py-3">INR 8,500</td>
                <td className="border px-2 py-3">INR 6,500</td>
                <td className="border px-2 py-3">INR 10,500</td>
                <td className="border px-2 py-3">INR 8,500</td>
              </tr>
              <tr>
                <td className="px-2 py-3 text-left border border-gray-300 text-sm sm:text-lg">
                  Research Scholars / Students
                </td>
                <td className="border px-2 py-3">INR 7,500</td>
                <td className="border px-2 py-3">INR 5,500</td>
                <td className="border px-2 py-3">INR 9,500</td>
                <td className="border px-2 py-3">INR 7,500</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="px-2 py-3 text-left border border-gray-300 text-sm sm:text-lg">
                  Foreign Participant (Industry Expert / Academician)
                </td>
                <td className="border px-2 py-3">USD $300</td>
                <td className="border px-2 py-3">USD $200</td>
                <td className="border px-2 py-3">USD $350</td>
                <td className="border px-2 py-3">USD $250</td>
              </tr>
              <tr>
                <td className="px-2 py-3 text-left border border-gray-300 text-sm sm:text-lg">
                  Foreign Participant (Research Scholar / Student)
                </td>
                <td className="border px-2 py-3">USD $200</td>
                <td className="border px-2 py-3">USD $100</td>
                <td className="border px-2 py-3">USD $250</td>
                <td className="border px-2 py-3">USD $150</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Payment Link */}
        <div className="max-w-sm mx-auto bg-gray-100 border-4 border-third p-6 rounded-lg text-dark mt-10">
          <a
            href="https://p.ppsl.io/PYTMPS/e4Daqk"
            className="px-6 py-2 bg-third text-white font-semibold rounded-lg inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pay Your Registration Fee
          </a>

          <p className="mt-4 text-sm text-gray-500">
            * You will be redirected to the Paytm website to complete your payment.
          </p>
        </div>

        {/* Submit registration details */}
        <div className="mt-3">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScPqqEwDq4hxSIGoDFsYbNOx8_V7dyleCLK2jJVS2ZNiPDGgw/viewform?usp=publish-editor" className="text-xl text-blue-600 underline font-semibold cursor-pointer hover:text-blue-800">
            Click here to submit registration details
          </a>
        </div>


        {/* Registration Form Link */}
        <div>
          <a
            href="https://cmt3.research.microsoft.com/ICSCIS2026/Track/1/Submission/Create"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 mt-4  bg-blue-600 text-white font-semibold text-sm rounded-lg shadow hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform"
          >
            Submit Paper
          </a>
        </div>


      </div>
    </div>
  );
};

export default Registration;
