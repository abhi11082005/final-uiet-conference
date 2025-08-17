import React from "react";
import commingsoon from "../../assets/publication/comingsoon.png";

const publications = [
  {
   
    title:
      "Recent Advances in Smart Communication Technologies for a Sustainable Future",
    authors:
      "Valentina Emilia Balas , Hari Pandey , Muhammad Anshari , Vineeta Singh , Alok Kumar ",
    release: "N/A",
    copyright: "© 2026",
    pages: "N/A",
    isbn13: "978337335414",
    eisbn13: "978337335438",
  },
  {
  
    title: "Ensuring Secure Connectivity Through AI-Powered Wireless Systems",
    authors:
      "Valentina Emilia Balas , Hari Pandey , Shilpa Mehta , Vineeta Singh , Kapil Joshi ",
    release: "N/A",
    copyright: "© 2026",
    pages: "N/A",
    isbn13: "978337335766",
    eisbn13: "978337335780",
  },
  {
 
    title: "AI-Driven Decision Making",
    authors:
      "Vineeta Singh , Valentina Emilia Balas , Hari Pandey , Alok Kumar  and Vandana Dixit Kaushik ",
    release: "N/A",
    copyright: "© 2026",
    pages: "N/A",

    visitLink: "https://benthambooks.com/future-books-by-subject/business-and-economics-and-finance-and-accounting/sub-category/business-technology-and-entrepreneurship/",
  },
];

const Homepagepublication = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 py-12 rounded-2xl px-4 ">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-10">
         Publications of ICRAECCT
      </h1>
        <div className="flex justify-center gap-4 mb-6">
        <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold">
          2025
        </button>
       
      </div>
      {/* Cards */}
      <div className="space-y-6 w-full max-w-3xl mx-auto">
        {publications.map((book, index) => (
          <div
            key={index}
            className="flex bg-white shadow-md rounded-lg p-4 gap-6 items-start"
          >
            {/* Image */}
            

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {book.title}
              </h2>
              <p className="text-sm text-gray-600 mb-3">{book.authors}</p>

              <div className="text-xs text-gray-500 space-y-1 mb-3">
                <p>
                  <strong>Release Date:</strong> {book.release} &nbsp; | &nbsp;
                  <strong>Copyright:</strong> {book.copyright} &nbsp; | &nbsp;
                  <strong>Pages:</strong> {book.pages}
                </p>
                <p>
                  <strong>ISBN13:</strong> {book.isbn13} &nbsp; | &nbsp;
                  <strong>EISBN13:</strong> {book.eisbn13}
                </p>
              </div>

              {/* Show Visit button only if visitLink exists */}
              {book.visitLink && (
                <a
                  href={book.visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
                >
                  Visit
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepagepublication;
