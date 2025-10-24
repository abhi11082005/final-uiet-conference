import React from "react";

const contacts = [
  {
    sr: 1,
    name: "Prof. Rabins Porwal",
    email: "Rabins@csjmu.ac.in",
    phone: "+91 936 988 4977",
  },
  {
    sr: 2,
    name: "Dr. Deepak Kumar Verma",
    email: "deepak@csjmu.ac.in",
    phone: "+91 98391 05362",
  },
  {
    sr: 3,
    name: "Dr. Ajeet Kumar Srivastava",
    email: "ajeet@csjmu.ac.in",
    phone: "+91 831 632 2800",
  },
];

const ContactUs = () => {   
  return (
    <div className="bg-[#f9f9f9] py-12 px-4 md:px-12">
      <h2 className="text-center text-3xl font-bold text-[#0b2340] mb-8">
        CONTACT US
      </h2>

      <p className="text-center text-lg mb-8">
        Conference Email:{" "}
        <a
          href="mailto:icraecct@csjmu.ac.in"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          icscis2026@csjmu.ac.in
        </a>
      </p>

      <div className="overflow-x-auto max-w-4xl mx-auto">
        <table className="w-full border border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-[#0b2340] text-white">
            <tr>
              <th className="py-3 px-4 text-left font-semibold">S. No.</th>
              <th className="py-3 px-4 text-left font-semibold">Name</th>
              <th className="py-3 px-4 text-left font-semibold">Email</th>
              <th className="py-3 px-4 text-left font-semibold">Phone</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((person, index) => (
              <tr
                key={person.sr}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100 transition`}
              >
                <td className="py-3 px-4">{person.sr}</td>
                <td className="py-3 px-4 font-medium text-gray-900">
                  {person.name}
                </td>
                <td className="py-3 px-4">
                  <a
                    href={`mailto:${person.email}`}
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    {person.email}
                  </a>
                </td>
                <td className="py-3 px-4">
                  <a
                    href={`tel:${person.phone}`}
                    className="text-gray-700 hover:text-gray-900 text-nowrap"
                  >
                    {person.phone}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactUs;
