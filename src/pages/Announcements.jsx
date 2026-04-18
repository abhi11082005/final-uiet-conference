import { useState, useEffect } from "react";

export default function Announcements() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <>
      {/* Floating Button */}

      {/* <button
        onClick={() => setOpen(true)}
        className=""
      >
        <div className="fixed left-3 top-1/3 transform -translate-y-1/2 rotate-90 origin-left 
        px-4 py-2 bg-third text-white font-semibold rounded-r-lg shadow-md 
        hover:bg-third transition z-10">Announcements </div>
      </button> */}
      <button onClick={() => setOpen(true)} className="">
        {/* Announcements (reference position) */}
        <div
          className="fixed left-3 top-1/2 transform -translate-y-1/2 -rotate-90 origin-left
    px-4 py-2 bg-third text-white font-semibold rounded-r-lg 
    hover:bg-third transition z-10"
        >
          Announcements
        </div>

        {/* Technical Presentation Schedule (centered relative to above) */}
        <div
          className="fixed left-3 top-1/2 transform translate-y-1/2 -rotate-90 origin-left ml-10
          "
        >
          Technical Presentation Schedule
        </div>
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

          <div className="bg-white p-6 rounded-lg shadow-lg max-w-6xl w-full 
            sm:max-w-lg md:max-w-2xl lg:max-w-4xl max-h-[80vh] overflow-y-auto">

            {/* Header */}
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-lg sm:text-xl font-semibold">
                Announcements
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-lg"
              >
                ✖
              </button>
            </div>

            {/* Content */}
            <div className="mt-4 text-gray-700 text-left text-sm sm:text-base">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Technical Presentation Schedule available under <span className="font-semibold">Downloads</span> section.
                </li>
                <li>
                  ICSCIS 2026 PPT template available under <span className="font-semibold">Downloads</span> section.
                </li>
              </ul>
            </div>

            {/* Footer */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-third text-white rounded-lg hover:bg-gray-600 transition text-sm sm:text-base"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

{/* <button
        onClick={() => setOpen(true)}
        className="fixed left-3 top-1/3 transform -translate-y-1/2 rotate-90 origin-left 
        px-4 py-2 bg-third text-white font-semibold rounded-r-lg shadow-md 
        hover:bg-third transition z-10"
      >
        Announcements
      </button> */}
