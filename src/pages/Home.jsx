import React from "react";
import Carousel from '../components/crousels/Carousel'
import AboutUniversity from "../components/sections/about/AboutUniversity";
import AboutConference from "../components/sections/about/AboutConference";
import VideoHomepage from "../components/videoHomepage/VideoHomepage";
import CountryFlags from "../components/countryflags/Countryflag";
import Homepageimg from "../components/homepageimg/Homepageimg";
import Homepagevideo from "../components/homepagevideo/Homepagevideo";
import HomepageSpeaker from "../components/homepagespeaker/Homepagespeaker";
import Homepagepublication from "../components/homepagepublication/Homepagepublication";
import Homepagekeynotesession from "../components/homepagekeynotesession/Homepagekeynotesession";
import HomepageKeynotespeaker from "../components/homepagespeaker/HomepageKeynotespeaker";
import Homepagemediapartner from "../components/homepagemediapartner/Homepagemediapartner";
import Homepagepublication2026 from "../components/homepagepublication/Homepagepublication2026";
// import Homepagepublication from "../components/homepagepublication/Homepagepublication";
import Indexing from "../components/sections/about/Indexing";
import FundedBy from "../components/sections/FundedBy";
import Announcements from "./Announcements";
import Homepageimg2026 from "../components/homepageimg/Homepageimg2026";
import HomepagefloatingKeynotesspeaker from "../components/homepagespeaker/HomepagefloatingKeynotesspeaker";

const Home = () => {
  return (
    <>
      <div className="relative">

      {/* Floating Left Button */}
      <Announcements />

    </div>

      <VideoHomepage />
      <Carousel />
      <Homepagepublication2026 />
      <Homepagemediapartner />
      <FundedBy />
      <Indexing />
      <div className="bg-gray-100 py-10  text-center text-black border-b shadow-lg rounded-lg">
        {/* Section: About the Conference */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            About the Conference
          </h2>
        
        <p className="max-w-4xl mx-auto text-justify leading-7">
          <span>
            The{" "}
            <strong>
              International Conference on Sustainable Computing and Intelligent Systems (ICSCIS 2026)
            </strong>{" "}
            is a distinguished global forum dedicated to advancing research and
            innovation at the intersection of cutting-edge computing,
            communication technologies, and sustainability.{" "}
          </span>

          <span className="mt-4">
            Scheduled for{" "}
            <strong>
              {/* 17<sup>th</sup>–18<sup>th</sup> April 2026 */}
              20<sup>th</sup>–21<sup>st</sup> April 2026
            </strong>
            , this international conference aims to foster interdisciplinary
            collaboration to address urgent environmental, economic, and social
            challenges through sustainable technological solutions.
          </span>
 
          <span className="mt-4">
            In an era marked by rapid digital transformation and environmental
            concerns, the role of emerging computing and communication
            technologies in shaping a resilient and sustainable future is more
            critical than ever. <strong>ICSCIS 2026</strong> provides a
            platform for researchers, practitioners, industry leaders, and
            policymakers to share breakthrough ideas, promote green technology
            practices, and explore sustainable frameworks that minimize
            ecological footprints while maximizing societal benefits.
          </span>
        </p>
      </div>
      <AboutUniversity />
      <div className=" ">
        {/* <HomepageKeynotespeaker /> */}
        <HomepagefloatingKeynotesspeaker />

        <Homepagepublication />
        <Homepageimg2026 />
        <Homepageimg />
        {/* 
        <Homepagevideo />
        <Homepagekeynotesession />
        <HomepageSpeaker />
        <CountryFlags /> */}
      </div>
    </>
  );
};

export default Home;
