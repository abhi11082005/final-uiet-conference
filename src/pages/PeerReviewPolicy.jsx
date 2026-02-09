const PeerReviewPolicy = () => {
  return (
    <section className="max-w-6xl mx-auto my-10 bg-gray-50 rounded-lg px-10 py-12">
      {/* Page Title */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-blue-900 tracking-wide mb-10">
        REVIEW PROCESS POLICY
      </h1>

      <p className="text-gray-800 text-base leading-relaxed mb-6 text-justify">
        ICSCIS 2026 is committed to upholding the highest standards of academic
        integrity, transparency, and ethical conduct in the evaluation and
        selection of manuscripts submitted for presentation and publication.
        The conference has established a rigorous and impartial peer review
        framework to ensure fairness, objectivity, and scholarly excellence.
      </p>

      {/* Section 1 */}
      <h2 className="text-xl font-semibold text-blue-900 mt-8 mb-3 text-left">
        1. Peer Review Model
      </h2>
      <p className="text-gray-800 text-base leading-relaxed text-justify">
        All manuscripts submitted to ICSCIS 2026 shall be subjected to a
        double-blind peer review process, wherein the identities of authors
        and reviewers are withheld from each other throughout the review
        period. This process is designed to eliminate bias and ensure that
        submissions are evaluated solely on academic merit.
      </p>

      {/* Section 2 */}
      <h2 className="text-xl font-semibold text-blue-900 mt-8 mb-3 text-left">
        2. Reviewer Appointment and Responsibilities
      </h2>
      <p className="text-gray-800 text-base leading-relaxed text-justify">
        Reviewers are appointed based on demonstrated subject-matter expertise,
        academic qualifications, and research experience relevant to the
        manuscript’s domain. Each submission shall be reviewed by at least
        2–3 independent reviewers who are required to provide objective,
        constructive, and timely evaluations in accordance with the
        conference’s review guidelines.
      </p>

      {/* Section 3 */}
      <h2 className="text-xl font-semibold text-blue-900 mt-8 mb-3 text-left">
        3. Review Criteria
      </h2>
      <ul className="list-disc list-inside text-gray-800 space-y-2 text-left">
        <li>Originality and contribution to the field</li>
        <li>Technical quality and methodological rigor</li>
        <li>Relevance to the scope and themes of the conference</li>
        <li>Clarity, coherence, and organization of content</li>
        <li>Validity of results and conclusions</li>
      </ul>

      {/* Section 4 */}
      <h2 className="text-xl font-semibold text-blue-900 mt-8 mb-3 text-left">
        4. Conflict of Interest
      </h2>
      <p className="text-gray-800 text-base leading-relaxed text-justify">
        All reviewers are obligated to disclose any actual, potential, or
        perceived conflicts of interest prior to accepting a review
        assignment. In the event that a conflict is identified, the manuscript
        shall be reassigned to an alternate reviewer to preserve the integrity
        of the review process.
      </p>

      {/* Section 5 */}
      <h2 className="text-xl font-semibold text-blue-900 mt-8 mb-3 text-left">
        5. Confidentiality
      </h2>
      <p className="text-gray-800 text-base leading-relaxed text-justify">
        Submitted manuscripts and associated review materials shall be treated
        as confidential documents. Reviewers and committee members are
        prohibited from disclosing, reproducing, or using the content of
        submissions for any purpose other than evaluation within the scope of
        the review process.
      </p>

      {/* Section 6 */}
      <h2 className="text-xl font-semibold text-blue-900 mt-8 mb-3 text-left">
        6. Decision-Making Process
      </h2>
      <p className="text-gray-800 text-base leading-relaxed text-justify">
        Acceptance and rejection decisions are made by the Technical Program
        Committee / Editorial Committee based on reviewer reports, evaluation
        scores, and compliance with conference quality standards. While
        reviewer recommendations are given substantial weight, the organizing
        committee retains the authority to make final decisions.
      </p>

      {/* Ethics Title */}
      <h1 className="text-center text-3xl font-bold text-blue-900 tracking-wide mt-14 mb-8">
        PUBLICATION ETHICS & MALPRACTICE STATEMENT
      </h1>

      {/* Ethics Sections */}
      <h2 className="text-xl font-semibold text-blue-900 mb-3 text-left">
        1. Author Responsibilities
      </h2>
      <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6 text-left">
        <li>The work is original and has not been published or submitted elsewhere</li>
        <li>All sources are properly cited and acknowledged</li>
        <li>All listed authors have made significant contributions</li>
        <li>The manuscript contains no plagiarized or fabricated content</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-900 mb-3 text-left">
        2. Plagiarism and Misconduct
      </h2>
      <p className="text-gray-800 text-base leading-relaxed text-justify mb-6">
        All submissions may be screened using plagiarism detection software.
        Manuscripts found to contain plagiarism, excessive similarity, data
        manipulation, or unethical research practices shall be rejected and
        may result in further action.
      </p>

      <h2 className="text-xl font-semibold text-blue-900 mb-3 text-left">
        3. Ethical Oversight
      </h2>
      <p className="text-gray-800 text-base leading-relaxed text-justify mb-6">
        Any allegation of misconduct shall be investigated by the organizing
        committee, and appropriate corrective measures shall be taken in
        accordance with ethical publishing standards.
      </p>

      <h2 className="text-xl font-semibold text-blue-900 mb-3 text-left">
        4. Retraction and Corrections
      </h2>
      <p className="text-gray-800 text-base leading-relaxed text-justify">
        In cases where ethical violations are identified after acceptance or
        publication, the conference reserves the right to withdraw the paper,
        revoke acceptance, or issue corrections or retractions.
      </p>

      <p className="text-gray-700 text-sm mt-10 italic text-center">
        This policy is binding for all authors, reviewers, and committee members
        participating in ICSCIS 2026.
      </p>
    </section>
  );
};

export default PeerReviewPolicy;

