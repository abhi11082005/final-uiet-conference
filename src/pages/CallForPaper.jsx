import React from "react";

const CallForPaper = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-6 text-justify">
        <h1 className="text-3xl font-bold mb-6 text-center uppercase">
          Call for paper
        </h1>
        <div className="mb-6 flex justify-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 mb-4 bg-blue-600 text-white font-semibold text-sm rounded-lg shadow hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform"
          >
            Submit Paper
          </a>
        </div>

        <p className="mb-6">
          <strong>ICRAECCTSF 2026</strong> invites original research
          contributions under the following thematic tracks, reflecting the
          latest innovations in computing, communication, and sustainable
          technologies. Each track is aligned with relevant{" "}
          <strong>UN Sustainable Development Goals (SDGs) </strong> to promote
          responsible and impactful research.
        </p>

        {/* List of SDGs */}
        <h2 className="text-2xl font-semibold mb-4">List of the 17 SDGs</h2>
        <ol className="list-decimal ml-6 mb-6 space-y-1">
          <li>
            <span className="font-bold">No Poverty</span> – End poverty in all
            its forms everywhere
          </li>
          <li>
            <span className="font-bold">Zero Hunger</span> – End hunger, achieve
            food security, and promote sustainable agriculture
          </li>
          <li>
            <span className="font-bold">Good Health and Well-being</span> –
            Ensure healthy lives and promote well-being for all
          </li>
          <li>
            <span className="font-bold">Quality Education</span> – Ensure
            inclusive and equitable quality education
          </li>
          <li>
            <span className="font-bold">Gender Equality</span> – Achieve gender
            equality and empower all women and girls
          </li>
          <li>
            <span className="font-bold">Clean Water and Sanitation</span> –
            Ensure availability and sustainable management of water and
            sanitation
          </li>
          <li>
            <span className="font-bold">Affordable and Clean Energy</span> –
            Ensure access to sustainable and modern energy for all
          </li>
          <li>
            <span className="font-bold">Decent Work and Economic Growth</span> –
            Promote sustained, inclusive, and sustainable economic growth
          </li>
          <li>
            <span className="font-bold">
              Industry, Innovation, and Infrastructure
            </span>{" "}
            – Build resilient infrastructure, promote sustainable
            industrialization
          </li>
          <li>
            <span className="font-bold">Reduced Inequalities</span> – Reduce
            inequality within and among countries
          </li>
          <li>
            <span className="font-bold">Sustainable Cities and Communities</span>{" "}
            – Make cities inclusive, safe, resilient, and sustainable
          </li>
          <li>
            <span className="font-bold">
              Responsible Consumption and Production
            </span>{" "}
            – Ensure sustainable consumption and production patterns
          </li>
          <li>
            <span className="font-bold">Climate Action</span> – Take urgent
            action to combat climate change and its impacts
          </li>
          <li>
            <span className="font-bold">Life Below Water</span> – Conserve and
            sustainably use oceans, seas, and marine resources
          </li>
          <li>
            <span className="font-bold">Life on Land</span> – Protect, restore,
            and promote sustainable use of terrestrial ecosystems
          </li>
          <li>
            <span className="font-bold">
              Peace, Justice, and Strong Institutions
            </span>{" "}
            – Promote peaceful and inclusive societies
          </li>
          <li>
            <span className="font-bold">Partnerships for the Goals</span> –
            Strengthen implementation and global partnerships for sustainable
            development
          </li>
        </ol>

        {/* Conference Tracks */}
        <h2 className="text-2xl font-semibold mb-4">Conference Tracks</h2>

        <div className="space-y-6">
          {/* Track S1 */}
          <div>
            <h3 className="font-bold mb-2">
              Track S1: Sustainable Computing and Green IT
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Energy-efficient algorithms and architectures</li>
              <li>Carbon-aware computing practices</li>
              <li>Sustainable software engineering</li>
              <li>Life-cycle assessment of IT infrastructure</li>
              <li>Low-power systems and green data centers</li>
            </ul>
          </div>

          {/* Track S2 */}
          <div>
            <h3 className="font-bold mb-2">
              Track S2: Smart and Sustainable Cities
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>ICT for sustainable urban planning</li>
              <li>Smart mobility and intelligent transport systems</li>
              <li>Smart energy grids and resource management</li>
              <li>Waste and water management using IoT</li>
              <li>Digital twins for city-scale sustainability</li>
            </ul>
          </div>

          {/* Track S3 */}
          <div>
            <h3 className="font-bold mb-2">
              Track S3: ICT for Climate Action and Environmental Monitoring
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>AI/ML for climate prediction and adaptation</li>
              <li>Remote sensing for disaster management</li>
              <li>IoT-based air and water quality monitoring</li>
              <li>Real-time climate data processing and visualization</li>
              <li>Citizen science and participatory sensing</li>
            </ul>
          </div>

          {/* Track S4 */}
          <div>
            <h3 className="font-bold mb-2">
              Track S4: Sustainable Agriculture and Food Systems
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Precision agriculture using AI and IoT</li>
              <li>Smart irrigation and water conservation systems</li>
              <li>Agricultural robotics for reduced environmental impact</li>
              <li>Blockchain in supply chain transparency</li>
              <li>Data-driven approaches to food security</li>
            </ul>
          </div>

          {/* Track S5 */}
          <div>
            <h3 className="font-bold mb-2">
              Track S5: Renewable Energy Systems and Smart Grids
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>ICT for solar, wind, and bioenergy management</li>
              <li>Smart grid communication technologies</li>
              <li>Demand response and energy forecasting using AI</li>
              <li>Energy storage optimization</li>
              <li>Distributed energy resource management</li>
            </ul>
          </div>

          {/* Track S6 */}
          <div>
            <h3 className="font-bold mb-2">
              Track S6: Circular Economy and E-Waste Management
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Technologies for e-waste tracking and recycling</li>
              <li>Digital platforms for product life-cycle management</li>
              <li>AI/IoT for waste reduction and resource optimization</li>
              <li>Circular product design and smart remanufacturing</li>
              <li>Blockchain for supply chain transparency in recycling</li>
            </ul>
          </div>

          {/* Track S7 */}
          <div>
            <h3 className="font-bold mb-2">
              Track S7: Sustainable Development Goals (SDGs) and Digital
              Innovation
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Tech-enabled approaches to achieving UN SDGs</li>
              <li>ICT for health, education, and gender equality</li>
              <li>Socio-technical innovations for marginalized communities</li>
              <li>Platforms for participatory governance and civic tech</li>
              <li>Responsible AI and digital inclusion</li>
            </ul>
          </div>

          {/* Track S8 */}
          <div>
            <h3 className="font-bold mb-2">
              Track S8: Ethics, Policy, and Responsible Innovation for
              Sustainability
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Tech policy for environmental justice</li>
              <li>Ethical AI for sustainability</li>
              <li>Tech governance and digital rights</li>
              <li>Global collaboration frameworks for sustainable innovation</li>
              <li>Standards and certifications for green technologies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPaper;
