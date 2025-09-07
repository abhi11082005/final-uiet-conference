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
            <span className="font-bold">
              Sustainable Cities and Communities
            </span>{" "}
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
          {/* Track 1 */}
          <div>
            <h3 className="font-bold mb-2">
              TRACK1: Artificial Intelligence and Machine Learning for
              Sustainable Development
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>AI/ML applications in healthcare</li>
              <li>AI/ML applications in agriculture</li>
              <li>AI/ML applications in energy</li>
              <li>AI/ML for climate modeling</li>
              <li>AI/ML applications in smart cities</li>
            </ul>
          </div>

          {/* Track 2 */}
          <div>
            <h3 className="font-bold mb-2">
              TRACK2: Green and Sustainable Communication Networks
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>5G/6G</li>
              <li>IoT</li>
              <li>Low-power communication</li>
              <li>Spectrum efficiency</li>
              <li>Energy-aware wireless technologies</li>
            </ul>
          </div>

          {/* Track 3 */}
          <div>
            <h3 className="font-bold mb-2">
              TRACK3: Cloud, Edge, and Quantum Computing for Next-Gen
              Applications
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Sustainable cloud/edge infrastructures</li>
              <li>Quantum computing for optimization</li>
              <li>Quantum computing for security</li>
            </ul>
          </div>

          {/* Track 4 */}
          <div>
            <h3 className="font-bold mb-2">
              TRACK4: Cybersecurity, Privacy, and Blockchain for Trustworthy
              Systems
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Secure communication</li>
              <li>Blockchain for sustainability</li>
              <li>Cryptography</li>
              <li>AI in cybersecurity</li>
            </ul>
          </div>

          {/* Track 5 */}
          <div>
            <h3 className="font-bold mb-2">
              TRACK5: Smart Grids, Renewable Energy, and Sustainable IoT
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>IoT-enabled smart grids</li>
              <li>Energy-efficient systems</li>
              <li>Sensors for environmental monitoring</li>
            </ul>
          </div>

          {/* Track 6 */}
          <div>
            <h3 className="font-bold mb-2">
              TRACK6: Big Data Analytics and Intelligent Decision Support
              Systems
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Sustainable data centers</li>
              <li>Green analytics</li>
              <li>Decision-making for climate and resource management</li>
            </ul>
          </div>

          {/* Track 7 */}
          <div>
            <h3 className="font-bold mb-2">
              TRACK7: Human-Centered Computing and Sustainable Digital
              Transformation
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>HCI</li>
              <li>E-governance</li>
              <li>Education technologies</li>
              <li>Digital inclusion</li>
              <li>Sustainable e-services</li>
            </ul>
          </div>

          {/* Track 8 */}
          <div>
            <h3 className="font-bold mb-2">
              TRACK8: Emerging Trends in Electronics, VLSI, and Embedded Systems
              for Sustainability
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Low-power chips</li>
              <li>Green electronics</li>
              <li>Embedded AI</li>
              <li>Sustainable hardware design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPaper;
