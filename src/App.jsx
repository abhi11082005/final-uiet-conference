import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Committee from "./pages/Committee";
import AdvisoryCommittee from "./pages/AdvisoryCommittee";
import CallForPaper from "./pages/CallForPaper";
import Impdate from "./pages/Impdate";
import AuthorInfo from "./pages/AuthorInfo";
import Registration from "./pages/Registration";
import Publication from "./pages/Publication";
import Willbesoon from "./components/sections/about/Willbesoon";
import Contactus from "./pages/Contactus";
import Gallery from "./pages/Gallery";
import Markey from "./components/markey/Markey";
import TechnicalCommittee from "./pages/TechnicalCommittee";
import SteeringCommittee from "./pages/SteeringComittee";
import AboutConference from "./components/sections/about/AboutConference";
import Speakers from "./components/speakers/Speakers";
import Inaugural from "./components/gallary/Inaugural";
import Valedictory from "./components/gallary/Valedictory";
import OfflineSession from "./components/gallary/OfflineSession";
import OnlineSession from "./components/gallary/OnlineSession";
import KeynoteSpeakers from "./components/gallary/KeynoteSpeaker";
import SubmissionGuideline from "./pages/SubmissionGuideline";
import CallForSpecialSession from "./pages/CallForSpecialSession";
import CallForSponsorship from "./pages/CallForSponsorship";
import CMTAcknowledgement from "./pages/CMTAcknowledgement";
import PeerReviewPolicy from "./pages/PeerReviewPolicy";
import HomepageKeynotespeaker from "./components/homepagespeaker/HomepageKeynotespeaker";
import InAndAroundKanpur from "./pages/InAndAroundKanpur";
import Download from "./pages/Download";
import Gallery2026 from "./pages/Gallery2026";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  // const alertShown = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerElement = document.querySelector(".header");
      if (headerElement) {
        setIsSticky(window.scrollY > headerElement.offsetHeight);
      }
    };

    // if (!alertShown.current) {
    //   alert(
    //     "Important Message:\n\nDue to some unavoidable administrative circumstances, Conference dates are being shifted from 17th-18th April to 20th-21st April."
    //   );
    //   alertShown.current = true;
    // }

    // return () => window.removeEventListener("scroll", handleScroll);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <Router>
      {/* <DateAlerts /> */}
      <Header />
      <Markey />
      <Navbar isSticky={isSticky} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/committee" element={<Committee />} /> */}
        <Route path="/advisory-committee" element={<AdvisoryCommittee />} />
        <Route path="/technical-committee" element={<TechnicalCommittee />} />
        <Route path="/steering-committee" element={<SteeringCommittee />} />
        <Route path="/about" element={<AboutConference />} />
        <Route path="/call-for-papers" element={<CallForPaper />} />
        <Route path="/important-dates" element={<Impdate />} />
        <Route path="/author-info" element={<AuthorInfo />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/speakers" element={<HomepageKeynotespeaker />} />
        <Route path="/gallery" element={<Gallery2026 />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/submission-guidelines" element={<SubmissionGuideline />} />
        <Route path="/call-for-special-session" element={<CallForSpecialSession />} />
        <Route path="/call-for-sponsorship" element={<CallForSponsorship />} />
        <Route path="/kanpur" element={<InAndAroundKanpur />} />
        <Route path="/peer-review-policy" element={<PeerReviewPolicy />} />
        <Route path="/download" element={<Download />} />

        <Route path="/cmt-acknowledgement" element={<CMTAcknowledgement />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
