export default function AboutConference() {
  return (
    <div className="bg-gray-100 w-full py-10"> {/* Full-width gray background */}
      <div className="mx-auto max-w-7xl p-6 rounded-lg shadow-sm"> {/* Centered content */}
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          About the Conference
        </h2>

        {/* About Text */}
        <div className="text-gray-700 leading-7 text-justify space-y-4">
          <p>
            The{" "}
            <strong>
              International Conference on Sustainable Computing and Intelligent Systems (ICSCIS 2026)
            </strong>{" "}
            is a distinguished global forum dedicated to advancing research and
            innovation at the intersection of cutting-edge computing,
            communication technologies, and sustainability.
          </p>

          <p>
            Scheduled for{" "}
            <strong>
              17<sup>th</sup>–18<sup>th</sup> April 2026
            </strong>
            , this international conference aims to foster interdisciplinary
            collaboration to address urgent environmental, economic, and social
            challenges through sustainable technological solutions.
          </p>

          <p>
            In an era marked by rapid digital transformation and environmental
            concerns, the role of emerging computing and communication
            technologies in shaping a resilient and sustainable future is more
            critical than ever. <strong>ICSCIS 2026</strong> provides a
            platform for researchers, practitioners, industry leaders, and
            policymakers to share breakthrough ideas, promote green technology
            practices, and explore sustainable frameworks that minimize
            ecological footprints while maximizing societal benefits.
          </p>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Conference Objectives */}
        <h2 className="text-2xl font-bold text-center mb-4">
          Conference Objectives
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-justify space-y-2">
          <li>
            To catalyze innovation in computing and communication technologies
            that prioritize sustainability and environmental stewardship.
          </li>
          <li>
            To promote interdisciplinary research and collaboration that
            integrates sustainability principles into technological development.
          </li>
          <li>
            To highlight emerging solutions that support sustainable
            urbanization, resource efficiency, and climate resilience.
          </li>
          <li>
            To encourage knowledge exchange between academia, industry,
            government, and civil society for sustainable digital transformation.
          </li>
        </ul>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Key Themes */}
        <h2 className="text-2xl font-bold text-center mb-4">Key Themes</h2>
        <ul className="list-disc list-inside text-gray-700 text-justify space-y-2">
          <li>Sustainable Computing and Green ICT Innovations</li>
          <li>Energy-Efficient and Low-Carbon Communication Networks</li>
          <li>
            AI and Machine Learning for Environmental Monitoring and Management
          </li>
          <li>Internet of Things (IoT) for Smart, Sustainable Cities</li>
          <li>Cloud and Edge Computing with Reduced Environmental Impact</li>
          <li>Cybersecurity and Privacy in Sustainable Systems</li>
          <li>Blockchain for Transparent and Sustainable Supply Chains</li>
          <li>Big Data Analytics for Climate Change and Sustainability</li>
          <li>
            Human-Centered Computing for Inclusive and Equitable Technologies
          </li>
          <li>Intelligent Transportation Systems Supporting Carbon Reduction</li>
          <li>
            Technologies Enabling Achievement of United Nations Sustainable
            Development Goals (SDGs)
          </li>
        </ul>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Who Should Participate */}
        <h2 className="text-2xl font-bold text-center mb-4">
          Who Should Participate?
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-justify space-y-2">
          <li>
            Researchers and Academicians committed to sustainable technology
          </li>
          <li>Industry Experts driving green innovation</li>
          <li>
            Environmentalists leveraging technology for conservation
          </li>
          <li>
            Students and Early Career Researchers passionate about Sustainability
          </li>
        </ul>
      </div>
    </div>
  );
}
