import React from "react";

const SubmissionGuideline = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto text-justify bg-gray-100 ">
      <h1 className="text-3xl font-bold mb-6 text-center">
        SUBMISSION GUIDELINES
      </h1>

      {/* Disclaimer from Author */}
      <h2 className="text-2xl font-semibold mb-4">Disclaimer from Author</h2>
      <p className="mb-4">
        In line with our dedication to promoting innovation and upholding the
        highest standards of academic integrity, we request adherence to the
        following guidelines regarding the use of AI-generated content in paper
        submissions:
      </p>
      <ol className="list-decimal pl-6 space-y-3">
        <li>
          <strong>Originality:</strong> Authors are responsible for ensuring
          that all AI-generated content in their submissions is original and
          respects intellectual property rights. Any use of AI tools or
          datasets must be properly attributed. Plagiarism (excluding
          references) must be below 10%, and AI Detection percentage must be 0%.
        </li>
        <li>
          <strong>Accuracy and Validity:</strong> AI-generated content must be carefully assessed for accuracy and reliability. Authors bear the responsibility for ensuring the correctness of any AI-generated data, analysis, or conclusions included in their papers.
        </li>
        <li>
          <strong>Transparency:</strong> The application of AI tools and techniques in developing the submission should be transparently disclosed. This includes specifying the AI methods, models, and datasets used, along with any known limitations or biases they may carry.
        </li>
        <li>
          <strong>Ethical Considerations:</strong> Do not use AI to fabricate
          data, mislead, or replicate work without attribution.
        </li>
        <li>
          <strong>Review Process:</strong> The conference reserves the right to
          examine AI-generated content. Improper use may lead to rejection. All
          papers undergo a double-blind review.
        </li>
        <li>
          <strong>Responsibility:</strong> Authors bear full responsibility for
          their submissions, including AI-generated parts.
        </li>
        <li>
          <strong>Length of Papers:</strong> Full papers: 12–15+ pages, Short
          papers: 8–12 pages. Minimum 6 pages required.
        </li>
      </ol>

      {/* Instructions to Authors */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Instructions to Authors
      </h2>
      <p>
        Manuscripts must be submitted electronically via CMT. At least one
        author must be a registered user. For issues, contact{" "}
        <a
          href="mailto:icraecctsf2026@csjmu.ac.in"
          className="text-blue-600 underline"
        >
          icraecctsf2026@csjmu.ac.in
        </a>
        .
      </p>

      {/* Formatting */}
      <h3 className="text-xl font-semibold mt-6 mb-2">
        Formatting and Page Length Requirements
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Submit original, unpublished work.</li>
        <li>Embed all fonts; non-English fonts not allowed.</li>
        <li>No password-protected files.</li>
        <li>No headers/footers in manuscript.</li>
        <li>Single column format only; IEEE format not allowed.</li>
        <li>Minimum 6 pages; follow acceptance guidelines.</li>
      </ul>

      {/* Types of Articles */}
      <h3 className="text-xl font-semibold mt-6 mb-2">Types of Articles</h3>
      <p>
        Authors can submit{" "}
        <strong>Original Papers</strong> or <strong>Review Papers</strong>{" "}
        within conference scope.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Original Paper:</strong> Presents authors' original work with
          research methodology, analysis, results, and conclusions.
        </li>
        <li>
          <strong>Review Paper:</strong> Summarizes and analyzes research on a
          specific topic.
        </li>
      </ul>

      {/* References */}
      <h3 className="text-xl font-semibold mt-6 mb-2">References</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Self-citations should be limited to 20–30%.</li>
        <li>
          Follow APA style; references must be numbered and cited consistently.
        </li>
      </ul>

      {/* After Acceptance */}
      <h3 className="text-xl font-semibold mt-6 mb-2">After Acceptance</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Submit final manuscript with suggested changes.</li>
        <li>Transfer copyright to the publisher electronically.</li>
        <li>Submit Camera Ready Copy (CRC) after approval.</li>
        <li>Changes post-acceptance must be under 20% of the content.</li>
      </ul>

      {/* Other Guidelines */}
      <h3 className="text-xl font-semibold mt-6 mb-2">Other Guidelines</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Avoid plagiarism and duplicate submissions.</li>
        <li>
          Co-author list cannot be changed post-acceptance except in rare cases.
        </li>
        <li>
          Corresponding Author is responsible for communication and co-author
          consent.
        </li>
        <li>No more than 3 heading levels in manuscript.</li>
        <li>
          Abbreviations must be defined on first use in both abstract and main
          text.
        </li>
        <li>
          Recommended flow: Title → Abstract → Keywords → Introduction →
          Literature Survey → Methodology → Experimental Work → Comparative
          Analysis → Conclusion → References → Acknowledgements.
        </li>
      </ul>

      <p className="mt-8">
        By submitting a paper to this conference, authors acknowledge and agree
        to comply with these guidelines. We appreciate your cooperation and
        look forward to your contributions.
      </p>
    </div>
  );
};

export default SubmissionGuideline;
