import React from "react";
import img1 from "../../assets/imagespeakers/Prof-Alvaro-Rocha-aNHygu6H.png";
import img2 from "../../assets/imagespeakers/Prof-Sergei-Levashkin-CqfCX1Mu.png";
import img3 from "../../assets/imagespeakers/Dr-Hari-Mohan-Pandey-BiZjcQa4.png";
import img4 from "../../assets/imagespeakers/Dr-Govind-P-Gupta-B0xyVofz.png";
import img5 from "../../assets/imagespeakers/Dr-Rajeev-K-Shakya-Ce17I09D.jpg";
import img6 from "../../assets/imagespeakers/Vinay-Kumar-Kasula-CETA7eQT.jpg";
import img7 from "../../assets/imagespeakers/Dr-Akhila-Reddy-Yadulla-B2gPi2dG.jpg";
import img8 from "../../assets/imagespeakers/Er-Abhinav-Tripathi-H_Nq_82g.png";
import img9 from "../../assets/imagespeakers/Er-Anupama-Aggarwal-BRLArrQT.png";
import img10 from "../../assets/imagespeakers/Er-Himani-Fnu-Bo3oMtie.png";
import img11 from "../../assets/imagespeakers/Er-Nirav-Narendra-kumar-Modh-Dtkxy-3A.png";
import img12 from "../../assets/imagespeakers/Amit-Singh-DTgtaVu0.jpg";
import img13 from "../../assets/imagespeakers/Faiz-Gouri-BNtMO50q.jpg";
import img14 from "../../assets/imagespeakers/sudhirkolla-Bf-eL4_H.jpg";
import img15 from "../../assets/imagespeakers/saivinod-B21xSlv4.jpg";
import img16 from "../../assets/imagespeakers/ummerkhan-CuqVjdcQ.jpg";
import img17 from "../../assets/imagespeakers/vishnuvardhan-D65hG09Y.jpg";
import img18 from "../../assets/imagespeakers/jyotirmayjena-tvBpUxns.jpg";
import img19 from "../../assets/imagespeakers/niranjan-CFUX3Xal.jpg";
import img20 from "../../assets/imagespeakers/Ratnadeep_Simhadri-CTFiZZTP.jpg";
import img21 from "../../assets/imagespeakers/Dr_Seleznev_Tim-BoIHWjZN.jpg";
import img22 from "../../assets/imagespeakers/DrBhargaviKonda-BQlimB7x.jpg";
import img23 from "../../assets/imagespeakers/KathyayanGoudMula-BJsR-Uv7.jpg";
import img24 from "../../assets/imagespeakers/Raviteja-Yalamanchili-B2QEfoV6.jpg";


const speakersData = [
  
  {
    img: img2,
    name: "Prof. Sergei Levashkin",
    title: "Professor",
    details: [
      "Director at Artificial Intelligence Lab, Russia"
    ]
  },
  {
    img: img3,
    name: "Dr. Hari Mohan Pandey",
    title: "Associate Professor (Sr. Lecturer) Data Science and Artificial Intelligence, Bournemouth University, U.K.",
    details: [
      "Top 2% scientist (2022 World Ranking list by Stanford University)"
    ]
  },
  {
    img: img4,
    name: "Dr. Govind P Gupta",
    title: "NIT Raipur",
    details: [
      "Enlisted in Global AD (Alper-Doger) Scientific Index 2024 list.",
      "Ranked within the 'Top 2% Global Scientists/Researchers in the World'",
      "(Published by Elsevier, on October 4, 2023)"
    ]
  },
  {
    img: img5,
    name: "Dr. Rajeev K Shakya",
    title: "Department of Electrical Engineering & Computing Engineering",
    details: [
      "Adama Science & Technology University, Adama Ethiopia"
    ]
  },
  {
    img: img6,
    name: "Dr. Vinay Kumar Kasula",
    title: "Sr. Systems Application Analyst",
    details: [
      "Visa Inc, Ashburn, Virginia, USA"
    ]
  },
  {
    img: img7,
    name: "Dr. Akhila Reddy Yadulla",
    title: "Department of Information Technology",
    details: [
      "University of the Cumberlands, Williamsburg, Kentucky, USA"
    ]
  },
  {
    img: img8,
    name: "Er. Abhinav Tripathi",
    title: "Senior Director",
    details: [
      "Smarsh Inc., UK"
    ]
  },
  {
    img: img9,
    name: "Er. Anupama Aggarwal",
    title: "Lead Data Scientist / Product Owner",
    details: [
      "ZeroG Lufthansa Group, Germany"
    ]
  },
  {
    img: img10,
    name: "Er. Himani Fnu",
    title: "Cloud solution architect",
    details: [
      "Wipro Ltd. USA"
    ]
  },
  {
    img: img11,
    name: "Er. Nirav Narendra kumar Modh",
    title: "Consultant",
    details: [
      "Infosys Limited, USA"
    ]
  },
  {
    img: img12,
    name: "Amit Singh",
    title: "Lead Architect, Secure Networking",
    details: [
      "Cisco Systems Inc. USA"
    ]
  },
  {
    img: img13,
    name: "Faiz Gouri",
    title: "Lead Software Engineer",
    details: [
      "Microsoft, Seattle, USA"
    ]
  },
  {
    img: img14,
    name: "Sudheer Kolla",
    title: "Database Administrator",
    details: [
      "Unisoft Technology Inc, Texas, USA"
    ]
  },
  {
    img: img15,
    name: "Sai Vinod Vangavolu",
    title: "Sr. Software Engineer",
    details: [
      "CVS Health, TX, USA"
    ]
  },
  {
    img: img16,
    name: "Ummer khan Asif",
    title: "Associate General Manager, HCL",
    details: [
      "Tech, New Jersey, USA"
    ]
  },
  {
    img: img17,
    name: "Vishnuvardhan Reddy Goli",
    title: "Lead Mobile Developer",
    details: [
      "UHG(Optum), MN, USA"
    ]
  },
  {
    img: img18,
    name: "Jyotirmay Jena",
    title: "Sr Cyber Security Architect",
    details: [
      "HCLTech, Frisco, USA"
    ]
  },
  {
    img: img19,
    name: "Niranjan Reddy Kotha",
    title: "Sr. Cloud Infrastructure Security Engineer",
    details: [
      "Cod Cores Inc, Englewood, CO"
    ]
  },
  {
    img: img20,
    name: "Ratnadeep Simhadri",
    title: "Software Engineer",
    details: [
      "PayPal, USA"
    ]
  },
  {
    img: img21,
    name: "Prof. Seleznev Tim",
    title: "AI and Robotics Lab",
    details: [
      "Far Eastern Federal University, Russia"
    ]
  },
  {
    img: img22,
    name: "Dr. Bhargavi Konda",
    title: "Senior Systems Analyst",
    details: [
      "HRIS, Atrius Health, USA"
    ]
  },
  {
    img: img23,
    name: "Kathyayan Goud Mula",
    title: "Technical lead manager",
    details: [
      "Chime, USA"
    ]
  },
  {
    img: img24,
    name: "Raviteja Yalamanchili",
    title: "Lead Software Engineer",
    details: [
      "Microsoft, USA"
    ]
  }
];


const Speakers = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-8xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8  uppercase ">
          Keynote Speakers
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakersData.map((speaker, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 text-center">
              <img
                src={speaker.img}
                alt={speaker.name}
                className="w-24 h-24 mx-auto rounded-full object-cover"
              />
              <h3 className="text-lg font-bold text-primary mt-4">{speaker.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{speaker.title}</p>
              <div className="mt-2">
                {speaker.details.map((detail, i) => (
                  <p key={i} className="text-gray-500 text-xs mt-2">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Speakers;
