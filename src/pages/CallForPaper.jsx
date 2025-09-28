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
            href="https://cmt3.research.microsoft.com/ICRAECCTSF2026/Submission/Index"
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
              Track 1: Sustainable Computing Architectures and Systems
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Quantum computing for sustainable problem-solving</li>
              <li>
                Bio-inspired and nature-inspired computing for energy efficiency
              </li>
              <li>
                3D/heterogeneous integration technologies for green systems
              </li>
              <li>Energy-efficient high-performance computing (HPC)</li>
              <li>
                Sustainable software engineering and green coding practices
              </li>
              <li>
                Lifecycle assessment of computing systems and hardware recycling
              </li>
              <li>Carbon-neutral cloud and data center design</li>
            </ul>
          </div>

          {/* Track 2 */}
          <div>
            <h3 className="font-bold mb-2">
              Track 2: Artificial Intelligence and Machine Learning for
              Sustainability
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Generative AI for climate change simulation and impact modeling
              </li>
              <li>Adaptive AI systems for energy-aware computing</li>
              <li>
                AI for renewable energy optimization (solar, wind, hydro,
                bioenergy)
              </li>
              <li>
                Sustainable training pipelines for foundation models (Green AI)
              </li>
              <li>
                Multimodal AI for environmental and societal sustainability
              </li>
              <li>
                Transfer learning and domain adaptation in low-resource eco
                applications
              </li>
              <li>
                AI-driven policy modeling and decision support for
                sustainability governance
              </li>
            </ul>
          </div>

          {/* Track 3 */}
          <div>
            <h3 className="font-bold mb-2">
              Track 3: Intelligent IoT and Cyber-Physical Systems for
              Sustainability
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Energy harvesting IoT devices for self-sustainable ecosystems
              </li>
              <li>AIoT (AI + IoT) for circular economy applications</li>
              <li>Smart waste management systems powered by IoT</li>
              <li>Digital agriculture with IoT, UAVs, and robotics</li>
              <li>Cyber-physical energy systems for renewable microgrids</li>
              <li>IoT for sustainable smart buildings and green homes</li>
              <li>
                Fog/edge computing for sustainability in real-time applications
              </li>
            </ul>
          </div>

          {/* Track 4 */}
          <div>
            <h3 className="font-bold mb-2">
              Track 4: Security, Privacy, and Trust in Sustainable Intelligent
              Systems
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Energy-efficient blockchain for green supply chain management
              </li>
              <li>Sustainable governance models for AI ethics and trust</li>
              <li>Privacy-preserving AI for medical and environmental data</li>
              <li>
                Secure interoperability in cross-border sustainable IoT systems
              </li>
              <li>Sustainability-aware cyber resilience frameworks</li>
              <li>
                Threat modeling in renewable energy cyber-physical systems
              </li>
              <li>
                Human-centric trust models for sustainable intelligent
                infrastructures
              </li>
            </ul>
          </div>

          {/* Track 5 */}
          <div>
            <h3 className="font-bold mb-2">
              Track 5: Applications and Case Studies in Sustainable Intelligent
              Systems
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Sustainable fintech and digital banking with blockchain & AI
              </li>
              <li>AI-powered sustainable urban planning and mobility</li>
              <li>Climate-smart agriculture with drones and AI analytics</li>
              <li>
                AI/ML in biodiversity conservation and ecosystem restoration
              </li>
              <li>
                AI for United Nations Sustainable Development Goals (SDGs)
              </li>
              <li>Robotics for ocean cleaning and marine life protection</li>
              <li>
                Case studies: Smart cities, net-zero campuses, smart villages
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPaper;
