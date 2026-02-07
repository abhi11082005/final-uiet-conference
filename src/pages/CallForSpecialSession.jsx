import React from 'react'
import Willbesoon from '../components/gallary/Willbesoon'



const CallForSpecialSession = () => {
  return (
    <div className="max-w-5xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md mt-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        CALL FOR SPECIAL SESSIONS – ICSCIS 2026
      </h1>

      <p className="mb-4 text-justify">
        ICSCIS 2026 invites proposals for <strong>Special Sessions</strong> that
        address focused, emerging, and interdisciplinary research themes aligned
        with the conference scope. Special Sessions aim to bring together
        researchers and practitioners working on niche or rapidly evolving
        topics within sustainable computing, artificial intelligence,
        intelligent systems, cybersecurity, smart infrastructure, and
        next-generation technologies.
      </p>

      <p className="mb-6 text-justify">
        Special Sessions will be organized as part of the main conference program
        and will undergo the same rigorous peer-review process as regular tracks.
        All accepted and presented papers will be published in
        <strong> Conference Proceedings / Edited Books (Scopus Indexed)</strong>.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-blue-600 text-left">
        Objectives of Special Sessions
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-1 text-left">
        <li>Highlight emerging and specialized research areas</li>
        <li>Encourage interdisciplinary collaboration</li>
        <li>Provide focused forums for state-of-the-art research and applications</li>
        <li>Bring together academia and industry on targeted themes</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-blue-600 text-left">
        Suggested Themes (But not limited to)
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-1 text-left">
        <li>Sustainable and Green Computing Systems</li>
        <li>Artificial Intelligence and Machine Learning for Smart Applications</li>
        <li>Intelligent Systems for Smart Cities and Infrastructure</li>
        <li>Secure and Trustworthy AI</li>
        <li>Cybersecurity and Privacy in Intelligent Systems</li>
        <li>Internet of Things (IoT) and Cyber-Physical Systems</li>
        <li>Edge, Cloud, and Fog Computing</li>
        <li>Next-Generation Communication Networks (5G/6G)</li>
        <li>Data Analytics and Big Data for Sustainability</li>
        <li>AR/VR, Metaverse, and Immersive Technologies</li>
        <li>Digital Twins and Smart Manufacturing (Industry 5.0)</li>
        <li>AI for Healthcare, Education, and Social Good</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-blue-600 text-left">
        Proposal Submission Guidelines
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-1 text-left">
        <li>Title of the Special Session</li>
        <li>Scope and Objectives (250–400 words)</li>
        <li>Relevance to ICSCIS 2026 themes</li>
        <li>List of potential topics</li>
        <li>Names, affiliations, and contact details of Session Chair(s)</li>
        <li>Brief biography of Session Chair(s)</li>
        <li>Tentative list of potential contributors (if available)</li>
      </ul>

      <p className="mb-4 text-left">
        Proposals should be submitted in <strong>PDF format</strong> to:
        <br />
        <a
          href="mailto:icscis2026@csjmu.ac.in"
          className="text-blue-600 font-medium underline"
        >
          icscis2026@csjmu.ac.in
        </a>
        <br />
        <span className="italic">
          Email Subject: Special Session Proposal Submission for ICSCIS2026
        </span>
      </p>

      {/* special session cfp template download */}
      <p className="mb-6 text-left">
        <div class="px-16 mt-2 flex gap-4 flex-wrap">

          <a href="/docs/Special_Session_CFP_Template_ICSCIS_2026.docx"
            download
            class="inline-block px-4 py-2 bg-third text-white rounded hover:bg-third-600 transition duration-300">
            <span class="flex items-center">
              Special Session CFP Template Download
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 ml-2">
                <path fill-rule="evenodd" d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm4.75 6.75a.75.75 0 0 1 1.5 0v2.546l.943-1.048a.75.75 0 0 1 1.114 1.004l-2.25 2.5a.75.75 0 0 1-1.114 0l-2.25-2.5a.75.75 0 1 1 1.114-1.004l.943 1.048V8.75Z" clip-rule="evenodd" />
              </svg>
            </span>
          </a>

        </div>
      </p>


      <h2 className="text-2xl font-semibold mb-3 text-blue-600 text-left">
        Important Dates
      </h2>
      <ul className="list-disc pl-6 space-y-1 text-left">
        <li>Special Session Proposal Submission Deadline: <strong>25 Feb 2026</strong></li>
        <li>Notification of Acceptance: <strong>1 March 2026</strong></li>
        <li>Paper Submission Deadline (Special Sessions): <strong>10 March 2026</strong></li>
        <li>Camera-Ready Submission: <strong>20 March 2025</strong></li>
      </ul>
    </div>
  );
}


export default CallForSpecialSession