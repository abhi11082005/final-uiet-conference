import funded_by from "../../assets/logoother/fundedBy.jpeg";

const FundedBy = () => {

  // const logos = [pub_partner1, pub_partner2, pub_partner1, pub_partner2, pub_partner1, pub_partner2, pub_partner1, pub_partner2, pub_partner1, pub_partner2, pub_partner1, pub_partner2];

  const logos = [
    {
      image: funded_by,
      link: "https://www.anrfonline.in/ANRF/HomePage",
    },
    {
      image: funded_by,
      link: "https://www.anrfonline.in/ANRF/HomePage",
    },
    {
      image: funded_by,
      link: "https://www.anrfonline.in/ANRF/HomePage",
    },
    {
      image: funded_by,
      link: "https://www.anrfonline.in/ANRF/HomePage",
    },
    {
      image: funded_by,
      link: "https://www.anrfonline.in/ANRF/HomePage",
    },
    {
      image: funded_by,
      link: "https://www.anrfonline.in/ANRF/HomePage",
    },
    {
      image: funded_by,
      link: "https://www.anrfonline.in/ANRF/HomePage",
    },
    {
      image: funded_by,
      link: "https://www.anrfonline.in/ANRF/HomePage",
    },
    {
      image: funded_by,
      link: "https://www.anrfonline.in/ANRF/HomePage",
    },
    {
      image: funded_by,
      link: "https://www.anrfonline.in/ANRF/HomePage",
    },
    {
      image: funded_by,
      link: "https://www.anrfonline.in/ANRF/HomePage",
    },
  ];


  return (
    <div className="w-full mt-4 py-10 bg-gray-100 flex flex-col items-center overflow-hidden mb-5 rounded-lg shadow-md">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Funded By
      </h1>

      {/* Marquee Container */}
      <div className="relative w-full max-w-[1400px] bg-white shadow-md rounded-xl py-6 overflow-hidden">
        <div className="flex w-max animate-[marquee_80s_linear_infinite]">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-10 flex items-center"
            >
              {logo.link ? (
                <a
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <img
                    src={logo.image}
                    alt="Publication Partner"
                    className="h-16 object-contain"
                  />
                </a>
              ) : (
                <img
                  src={logo.image}
                  alt="Publication Partner"
                  className="h-16 object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>


      {/* CSS Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: inline-flex;
          animation: marquee 80s linear infinite;
        }
      `}</style>

    </div>
  );
};

export default FundedBy;
