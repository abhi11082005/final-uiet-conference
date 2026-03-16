import React from "react";
import img3 from "../../assets/imagespeakers/Dr-Hari-Mohan-Pandey-BiZjcQa4.png";
import img5 from "../../assets/imagespeakers/Dr-Rajeev-K-Shakya-Ce17I09D.jpg";
import img7 from "../../assets/imagespeakers/Dr-Akhila-Reddy-Yadulla-B2gPi2dG.jpg";
import img8 from "../../assets/imagespeakers/Er-Abhinav-Tripathi-H_Nq_82g.png";
import img1 from "../../assets/imagespeakers/Prof-Alvaro-Rocha-aNHygu6H.png";
import img2 from "../../assets/imagespeakers/Maksudul_Amin.jpeg"
import img4 from "../../assets/imagespeakers/Anokh_Kishore.jpeg";
import img6 from "../../assets/imagespeakers/Harshendra_Gite.jpeg";
import img9 from "../../assets/imagespeakers/Virendra_Singh_Chawra.jpeg";
import img10 from "../../assets/imagespeakers/Divyaraj_Singh_Jatav.jpeg";
import img11 from "../../assets/imagespeakers/Faiz_Mulla.jpeg";
import img12 from "../../assets/imagespeakers/Sandeep_Bharadwaj_Mannapur.jpeg";
import img13 from "../../assets/imagespeakers/Shekar_Vollem.jpeg";
import img14 from "../../assets/imagespeakers/Mahamood_Hussain_Mirza.jpeg";
import img15 from "../../assets/imagespeakers/Sai_Kalyan_Kumar_Modini.jpeg";
import img16 from "../../assets/imagespeakers/Suneel_Kumar_Mogali.jpeg";
import img17 from "../../assets/imagespeakers/Shailesh_Sayarmal_Chaudhary.jpeg";
import img18 from "../../assets/imagespeakers/Noopur_sharma.jpeg";
import img19 from "../../assets/imagespeakers/Chandan-Malagalu-Nagaraju.jpeg";
import img20 from "../../assets/imagespeakers/Venkata_Jayadeep_Patibandla.jpeg";
import img21 from "../../assets/imagespeakers/Amol_M._Khadge.jpeg";
import img22 from "../../assets/imagespeakers/Mahatma_Reddy_Marri.jpeg";
import img23 from "../../assets/imagespeakers/KathyayanGoudMula-BJsR-Uv7.jpg";
import img24 from "../../assets/imagespeakers/Rakesh_Gahlot.jpeg";
import img25 from "../../assets/imagespeakers/Er-Himani-Fnu-Bo3oMtie.png";
import img26 from "../../assets/imagespeakers/Mahendrakumar_Kalal.jpeg"

const speakers = [
  {
    img: img1,
    name: "Prof. Alvaro Rocha",
    title:
      "Professor of Information Systems, ISEG, University of Lisbon, Portugal",
    details: [
      "World's Top 1% Scientist, according to Stanford University and Elsevier",
      "ISEM's Book Series Scientific Manager at Springer Nature",
      "Chair of ITMA - Information and Technology Management Association",
      "Founder and Vice-Chair of IEEE SMC Portugal Chapter",
      "Invited Professor at University of Calabria, Italy",
      "CEO at AMARITS Consulting, Dubai",
    ],
  },
  {
    img: img3,
    name: "Dr. Hari Mohan Pandey",
    title: "Associate Professor (Sr. Lecturer) Data Science and Artificial Intelligence, Bournemouth University, U.K.",
    details: [
      "Top 2% scientist (2022 World Ranking list by Stanford University)"
    ]
  }, {
    img: img23,
    name: "Kathyayan Goud Mula",
    title: "Technical lead manager",
    details: [
      "Chime, USA"
    ]
  }, {
    img: img7,
    name: "Dr. Akhila Reddy Yadulla",
    title: "Department of Information Technology",
    details: [
      "University of the Cumberlands, Williamsburg, Kentucky, USA"
    ]
  }, {
    img: img8,
    name: "Er. Abhinav Tripathi",
    title: "Senior Director",
    details: [
      "Smarsh Inc., UK"
    ]
  }, {
    img: img2,
    name: "Md. Maksudul Amin",
    title: "FCCA, CIA",
    details: [
      "Accounting, Data Analytics & Technologies at Pace University (Lubin School of Business) New York"
    ]
  }, {
    img: img4,
    name: "Anokh Kishore",
    title: "Senior Software Engineering Manager",
    details: [
      "Capital One Financial Services, USA"
    ]
  }, {
    img: img6,
    name: "Harshendra Gite",
    title: "Sr Director ",
    details: [
      "LTM LIMITED , USA"
    ]
  }, {
    img: img9,
    name: "Virendra Singh Chawra",
    title: "Senior Specialist",
    details: [
      "Deloitte Consulting LLP, USA"
    ]
  }, {
    img: img10,
    name: "Divyaraj Singh Jatav",
    title: "Supply Chain Planner 2",
    details: [
      "Westcliff University, USA"
    ]
  }, {
    img: img11,
    name: "Faiz Mulla",
    title: "Product Manager / Business Analyst",
    details: [
      "Virginia Department of Social Services (VDSS), USA"
    ]
  }, {
    img: img12,
    name: "Sandeep Bharadwaj Mannapur",
    title: "Lead AI&ML Engineer",
    details: [
      "ServiceNow, Inc., USA"
    ]
  }, {
    img: img13,
    name: "Shekar Vollem",
    title: "Software Engineer",
    details: [
      "Capital One Financial Corporation, USA"
    ]
  }, {
    img: img14,
    name: "Mahamood Hussain Mirza",
    title: "Software Engineer",
    details: [
      "Biztegy Analytics INC, USA"
    ]
  }, {
    img: img15,
    name: "Sai Kalyan Kumar Modini",
    title: "GCP Cloud Specialist, Sustainable AI Lead",
    details: [
      "HSBC, USA"
    ]
  }, {
    img: img16,
    name: "Suneel Kumar Mogali",
    title: "Lead Technical Consultant",
    details: [
      "USA"
    ]
  }, {
    img: img17,
    name: "Shailesh Sayarmal Chaudhary",
    title: "Software Engineer, Amazon Web Services",
    details: [
      "USA"
    ]
  }, {
    img: img18,
    name: "Noopur Sharma",
    title: "AI & Data Engineering Manager, Deloitte Consulting LLP",
    details: [
      "USA"
    ]
  }, {
    img: img19,
    name: "Chandan Malagalu Nagaraju",
    title: "University of Alabama at Birmingham A2Z Ozone Inc., Louisville , KY USA",
    details: [
      ""
    ]
  }, {
    img: img20,
    name: "Venkata Jayadeep Patibandla",
    title: "University of Louisville Context 4 Healthcare Chicago USA",
    details: [
      ""
    ]
  }, {
    img: img21,
    name: "Amol M. Khadge",
    title: "MSR Technology Group IL USA",
    details: [
      ""
    ]
  }, {
    img: img22,
    name: "Mahatma Reddy Marri",
    title: "Advanced systems administrator Texas, United states",
    details: [
      ""
    ]
  }, {
    img: img24,
    name: "Rakesh Gahlot",
    title: "Mphasis Corporation, USA",
    details: [
      ""
    ]
  },{
    img: img25,
    name: "Er. Himani Fnu",
    title: "Cloud solution architect",
    details: [
      "Wipro Ltd. USA"
    ]
  },
  {
    img: img26,
    name: "Mahendrakumar Kalal",
    title: "Senior SAP analyst, O.C.Tanner",
    details: [
      "Salt Lake City, Utah, USA"
    ]
  },


];
const HomepageKeynotespeaker = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl font-bold mb-8">
        Keynote Speakers
      </h1>


      {/* Speakers Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition duration-300 w-96"
          >
            <img
              src={speaker.img}
              alt={speaker.name}
              className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
            />
            <h2 className="font-bold text-xl mb-2 text-red-800">
              {speaker.name}
            </h2>
            <p className="text-sm text-gray-600 mb-2">{speaker.title}</p>

            {/* Consistent text alignment */}
            <ul className="text-sm text-gray-500 text-center space-y-1">
              {speaker.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepageKeynotespeaker;
