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

const Home = () => {
  return (
    <>

      <VideoHomepage />
      <Carousel />
      <div className="bg-gray-100 py-10  text-center text-black border-b shadow-sm rounded-lg">
        {/* Section: About the Conference */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            About the Conference
          </h2>
        
        <p className="max-w-4xl mx-auto text-justify leading-7">
          <span>
            The{" "}
            <strong>
              International Conference on Recent Advances in Emerging Computing
              and Communication Technologies for a Sustainable Future
              (ICRAECCTSF 2026)
            </strong>{" "}
            is a distinguished global forum dedicated to advancing research and
            innovation at the intersection of cutting-edge computing,
            communication technologies, and sustainability.{" "}
          </span>

          <span className="mt-4">
            Scheduled for{" "}
            <strong>
              17<sup>th</sup>–18<sup>th</sup> April 2026
            </strong>
            , this international conference aims to foster interdisciplinary
            collaboration to address urgent environmental, economic, and social
            challenges through sustainable technological solutions.
          </span>

          <span className="mt-4">
            In an era marked by rapid digital transformation and environmental
            concerns, the role of emerging computing and communication
            technologies in shaping a resilient and sustainable future is more
            critical than ever. <strong>ICRAECCTSF 2026</strong> provides a
            platform for researchers, practitioners, industry leaders, and
            policymakers to share breakthrough ideas, promote green technology
            practices, and explore sustainable frameworks that minimize
            ecological footprints while maximizing societal benefits.
          </span>
        </p>
      </div>
      <AboutUniversity />
      <div className=" ">
        <HomepageKeynotespeaker />
        <Homepageimg />
        <Homepagevideo />
        <Homepagekeynotesession />
        <HomepageSpeaker />
        <Homepagepublication />
        <CountryFlags />
      </div>
    </>
  );
};

export default Home;
