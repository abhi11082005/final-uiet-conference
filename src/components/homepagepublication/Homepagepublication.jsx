import React from "react";
import commingsoon from "../../assets/publication/comingsoon.png";
import Recent_Advances_Cover from "../../assets/publication/Recent_Advances_in_Smart_Communication.jpeg"
import Ensuring_Secure_cover from "../../assets/publication/Ensuring_Secure_Connectivity_cover_page.jpeg"

const publications = [
  {
    title:
      "Recent Advances in Smart Communication Technologies for a Sustainable Future",
    authors:
      "Valentina E. Balas (Aurel Vlaicu University of Arad, Romania), Hari Mohan Pandey (Bournemouth University, UK), Mohd. Anshari Bin Ali (Universiti Brunei Darussalam, Brunei), Vineeta Singh (Chhatrapati Shahu Ji Maharaj University, Kanpur, India), and Alok Kumar (Chhatrapati Shahu Ji Maharaj University, Kanpur, India)",
    release: "November, 2025",
    copyright: "© 2026",
    pages: "508",

    coverImage: Recent_Advances_Cover,
    subheading: "Bibliographic Information",
    publicationStatus: "E-Book and Print Version Available for Purchase",
    isbn13: "9798337335414",
    isbn13_Softcover: "9798337335421",
    eisbn13: "9798337335438",
    DOI: "10.4018/979-8-3373-3541-4",
    booklink: "https://share.google/JD7cBfV1SAQ6XnrtH",
  },
  {
    title: "Ensuring Secure Connectivity Through AI-Powered Wireless Systems",
    authors:
      "Valentina E. Balas (Aurel Vlaicu University of Arad, Romania), Hari Mohan Pandey (Bournemouth University, UK), Shilpa Mehta (Independent Researcher, New Zealand), Vineeta Singh (Chhatrapati Shahu Ji Maharaj University, Kanpur, India), and Kapil Joshi (Uttaranchal University, India)",
    release: "December, 2025",
    copyright: "© 2026",
    pages: "520",

    coverImage: Ensuring_Secure_cover,
    subheading: "Bibliographic Information",
    publicationStatus: "E-Book and Print Version Available for Purchase",
    isbn13: "9798337335766",
    isbn13_Softcover: "9798337335773",
    eisbn13: "9798337335780",
    DOI: "10.4018/979-8-3373-3576-6",
    booklink: "https://share.google/6GWseY1JkxnqLjzvD",
  },
  {
    title: "AI-Driven Decision Making",
    authors:
      "Vineeta Singh (CSJM University Kanpur India), Valentina Emilia Balas (Aurel Vlaicu University of Arad Romania), Hari Pandey (Bournemouth University UK), Alok Kumar (CSJM University Kanpur India) and Vandana Dixit Kaushik (HBTU Kanpur India)",
    release: "N/A",
    copyright: "© 2026",
    pages: "N/A",

    visitLink:
      "https://benthambooks.com/future-books-by-subject/business-and-economics-and-finance-and-accounting/sub-category/business-technology-and-entrepreneurship/",
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
      className="bg-white shadow-md rounded-lg p-4 space-y-4"
    >
      {/* DIV 1 → Title + Authors */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          {book.title}
        </h2>

        <p className="text-sm text-gray-600">
          {book.authors
            .split(/, | and /)
            .map((author, i, arr) => {
              const [name, university] = author.split("(");
              return (
                <span key={i}>
                  <span className="font-bold">{name.trim()}</span>
                  {university && ` (${university.replace(")", "").trim()})`}
                  {i < arr.length - 1 && ", "}
                </span>
              );
            })}
        </p>
      </div>

      {/* DIV 2 → Image | Rest of Info */}
      <div className="flex gap-6 items-start">
        {/* Image */}
        {book.coverImage && (
          <div className="flex justify-center items-center">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-32 h-auto object-cover rounded-md"
          />
          </div>
        )}

        {/* Right Content */}
        <div className="flex-1">
          {book.subheading && (
            <p className="text-sm font-semibold text-gray-700 mb-1">
              {book.subheading}
            </p>
          )}

          {book.publicationStatus && (
            <p className="text-xs text-green-700 mb-3">
              {book.publicationStatus}
            </p>
          )}

          <div className="text-xs text-gray-500 space-y-1 mb-3">
            <p>
              <strong>Release:</strong> {book.release} &nbsp; | &nbsp;
              <strong>Copyright:</strong> {book.copyright} &nbsp; | &nbsp;
              <strong>Pages:</strong> {book.pages}
            </p>

            <p>
              <strong>ISBN13 (Hardcover):</strong> {book.isbn13}
            </p>

            {book.isbn13_Softcover && (
              <p>
                <strong>ISBN13 (Softcover):</strong>{" "}
                {book.isbn13_Softcover}
              </p>
            )}

            <p>
              <strong>EISBN13:</strong> {book.eisbn13}
            </p>

            {book.DOI && (
              <p>
                <strong>DOI:</strong> {book.DOI}
              </p>
            )}
          </div>

          {book.booklink && (
            <a
              href={book.booklink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
            >
              Visit
            </a>
          )}
        </div>
      </div>
    </div>
  ))}
</div>



    </div>
  );
};

export default Homepagepublication;
