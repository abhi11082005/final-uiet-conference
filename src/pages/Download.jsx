import React from "react";

const Download = () => {
  return (
    <div className="bg-gray-100 text-left p-6 md:p-12 lg:p-16">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-third mb-8 underline">
        DOWNLOADS
      </h1>

      {/* Content */}
      <div className="space-y-8">
        <section>
          <ul className="space-y-6 list-disc pl-5">
            
            {/* Paper Presentation Schedule */}
            {/* <li>
              <a
                href="files/Technical_schedule-Website-Upload-8-April-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-gray-800 underline hover:text-blue-600 transition"
              >
                PAPER PRESENTATION SCHEDULE
              </a>
            </li> */}

            {/* Template */}
            <li>
              <a
                href="/docs/ICSCIS_2026_TEMPLATE_FOR_PAPER_PRESENTATION.pptx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-gray-800 underline hover:text-blue-600 transition"
              >
                PAPER PRESENTATION TEMPLATE FORMAT
              </a>
            </li>

          </ul>
        </section>
      </div>
    </div>
  );
};

export default Download;
