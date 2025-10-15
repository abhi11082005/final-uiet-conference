import React from "react";

const SubmissionGuideline = () => {
  return (
    <div className="bg-gray-100 text-left p-6 md:p-12 lg:p-16 ">
      <h1 className="text-3xl font-bold mb-6 text-center">
        SUBMISSION GUIDELINES
      </h1>

      {/* Disclaimer from Author */}
      <h2 className="text-2xl font-semibold mb-4">Disclaimer from Author</h2>
      <p className="mb-4 italic">
        In line with our dedication to promoting innovation and upholding the
        highest standards of academic integrity, we request adherence to the
        following guidelines regarding the use of AI-generated content in paper
        submissions:
      </p>
      <ol className="list-decimal pl-6 space-y-3">
        <li>
          <strong>Originality:</strong> Authors are responsible for ensuring
          that all AI-generated content in their submissions is original and
          respects intellectual property rights. Any use of AI tools or datasets
          must be properly attributed. Plagiarism (excluding references) must be
          below 10%, and AI Detection percentage must be 0%.
        </li>
        <li>
          <strong>Accuracy and Validity:</strong> AI-generated content must be
          carefully assessed for accuracy and reliability. Authors bear the
          responsibility for ensuring the correctness of any AI-generated data,
          analysis, or conclusions included in their papers.
        </li>
        <li>
          <strong>Transparency:</strong> The application of AI tools and
          techniques in developing the submission should be transparently
          disclosed. This includes specifying the AI methods, models, and
          datasets used, along with any known limitations or biases they may
          carry.
        </li>
        <li>
          <strong>Ethical Considerations:</strong> Authors are expected to
          follow ethical guidelines in their use of AI. This includes refraining
          from using AI to fabricate data, create misleading information, or
          replicate existing work without proper attribution.
        </li>
        <li>
          <strong>Review Process:</strong> The conference organizers reserve the
          right to closely examine AI-generated content during the review
          process. Submissions containing unverified or improperly attributed
          AI-generated material may face rejection. All submitted papers to the
          conference will undergo a double-blind review process to ensure fair
          review process.
        </li>
        <li>
          <strong>Responsibility:</strong> Authors bear full responsibility for
          the content of their submissions, including any AI-generated elements.
          The conference organizers and reviewers hold no liability for any
          issues stemming from the use of AI in submitted papers.
        </li>
        <li>
          <strong>Length of Papers:</strong> The most common types of papers
          accepted for publication are full papers (12–15+ pages) and short
          papers (8-12 pages), where a page constitutes 300-400 words. Only
          papers of significant scientific content will be accepted. <strong>Very short
          papers (less than 6 pages) are not allowed.</strong>
        </li>
      </ol>

      <p className="my-4 italic font-bold">
        By submitting a paper to this conference, authors acknowledge and agree
        to comply with these guidelines. We appreciate your cooperation and look
        forward to your contributions.
      </p>

      {/* Instructions to Authors */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Instructions to Authors
      </h2>
      <p>
        Manuscripts, referred to as submissions / articles / papers, represent
        significant contributions to academic writing. For ICSCIS-2026,
        manuscripts will <strong>ONLY</strong> be accepted in electronic format via CMT. To
        submit a paper, at least one author must be a registered user on CMT.
        Authors who are not registered should first create an account on the CMT
        platform.
        <br /> Any issues with online submission should be directed to the
        organizing team. <br />
        Queries can be mailed to
        <a
          href="mailto:icraecctsf2026@csjmu.ac.in"
          className="text-blue-600 underline font-bold "
        >
          {" "}
          icraecctsf2026@csjmu.ac.in{" "}
        </a>
        .
      </p>

      {/* Formatting */}
      <h3 className="text-xl font-semibold mt-6 mb-2">
        Formatting and Page Length Requirements
      </h3>
      <ul className="list-disc pl-6 space-y-2 font-bold">
        <li>
          {" "}
          Authors must submit original and unpublished work to ICSCIS-2026.
        </li>
        <li> All fonts must be embedded in the file.</li>
        <li>Fonts requiring non-English language support are not permitted.</li>
        <li>The document must not be password protected.</li>
        <li> Avoid including headers and footers in the manuscript.</li>
        <li>
          Ideal length of manuscript should not be less than 6 pages, authors
          must follow the guidelines, in case paper is accepted.
        </li>
      </ul>
      <h4 className="text-xl font-semibold mt-6 mb-2">Note to Authors</h4>
      <p className="mb-4">
        Authors are encouraged to carefully review the submission guidelines and
        ensure their manuscripts adhere to all formatting and content
        requirements. Failure to comply with these guidelines may result in desk
        rejection or delays in the review process.
      </p>
      <strong className="block mt-4 mb-6">
        The decision for publication is solely at the discretion of the
        publisher, contingent upon meeting their quality criteria and standards.
      </strong>
      {/* Types of Articles */}
      <h3 className="text-xl font-semibold mt-6 mb-2">Types of Articles</h3>
      <p>
        Authors submitting to ICSCIS– 2026 can choose from various article types that align with the conference scope. These include, but are not limited to:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Original Paper:</strong> This type presents the authors' original work in the form of an electronic manuscript. It may encompass an abstract, keywords, introduction, problem statement, objectives, approach, significance, research questions, limitations, definitions of terms, related work, methodology, in-depth technical investigation, details of experimental analysis, results and / or conclusions, future work scope, and references relevant to the research work presented in the paper aligned with ICSCIS– 2026 theme supported by figures, tables, datasets, pictorial/graphical representations, and video links.
        </li>
        <li>
          <strong>Review Paper:</strong> This consists of a comprehensive compilation and concise summary of research conducted on a topic within the scope of ICSCIS– 2026. It should be presented as an electronic manuscript and may contain an abstract, keywords, introduction, problem statement or justification, objectives, approach, significance, research questions, limitations, definitions of terms, related work, in-depth technical investigation or comparison, conclusions, advantages and disadvantages, proposed future work, and references. Additional materials may also include figures, tables, datasets, pictorial/graphical representations, and video links.
        </li>
      </ul>

      {/* References */}
      <h3 className="text-xl font-semibold mt-6 mb-2">References</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Self-citations</strong> To comply with ethical standards as well as to provide appropriate context for published work, citations of the author’s own articles should be restricted to 20-30% of total references.</li>
        <li>
          <strong>Citation Style: </strong> The reference list should include only those works that are cited in the text and have been published or accepted for publication. Personal communications and unpublished works should be mentioned only within the text. Footnotes or endnotes should not be used as substitutes for the reference list. References must be numbered consecutively and cited in numerical order, with in-text citations adhering to the same citation style throughout, preferably APA.
        </li>
      </ul>

      {/* After Acceptance */}
      <h3 className="text-xl font-semibold mt-6 mb-2">After Acceptance</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Final Manuscript: </strong> Following the acceptance of the manuscript, the corresponding author is required to submit the final version, incorporating any suggested changes outlined in the acceptance notification email.</li>
        <li><strong>Copyright Transfer: </strong> Authors will be required to transfer the copyright of their manuscript to the publisher. This is a mandatory process and will be conducted electronically. Authors will receive an email notification regarding the e-copyright transfer process. This measure is intended to ensure the broadest possible protection and dissemination of information under copyright laws. Should authors encounter any difficulties during the copyright transfer process, they must contact the conference organizers for assistance.</li>
        <li><strong>Camera Ready Copy (CRC): </strong> The camera-ready paper, referred to as CRC, will represent the final version of the manuscript for ICSCIS– 2026. The CRC versions of eligible manuscripts will be forwarded to the publisher. The organizing team for ICSCIS– 2026 will notify the corresponding author(s) via email to seek their consent for the final version of the manuscript. Authors may also suggest any changes, corrections, typos, or spelling mistakes as needed by replying to the email.</li>
        <li><strong>Update in Manuscript:  </strong> Once the manuscript is accepted, any suggested changes noted in the acceptance notification or otherwise must be incorporated by the author(s) without altering the fundamental essence of the accepted version. These changes should be limited to no more than 20% of the manuscript.</li>
      </ul>

      {/* Other Guidelines */}
      <h3 className="text-xl font-semibold mt-6 mb-2">Other Guidelines</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Ethics: </strong>The originality of the submitted manuscript is the sole responsibility of the author(s). They must avoid duplicate submissions and publications, as well as instances of plagiarism and self-plagiarism. All manuscript submissions will be screened using Turnitin/Ithenticate.</li>
        <li><strong>Co-Author Guidelines:  </strong>When an article is submitted, it is understood that the manuscript has received approval from all author(s) and co-author(s). Additionally, changes to the co-author list will not be allowed after the manuscript has been accepted, except in exceptional cases, which may be considered by the Editor.</li>
        <li><strong>Corresponding Author Guidelines: </strong>The Corresponding Author refers to the individual responsible for email correspondence with ICSCIS– 2026, regardless of their position in the author sequence. The manuscript must clearly indicate the Corresponding Author's name and email address, marked with an asterisk (*). In addition to the manuscript's content, the Corresponding Author is solely responsible for including the names and details of all other authors and co-authors in the submission. The conference committee assumes that all authors and co-authors have contributed to the submission and that their consent has been obtained by the Corresponding Author or first author to include their names in the submission.</li>

        <li><strong>Headings: </strong>Please refrain from using more than three levels of displayed headings.</li>
        <li><strong>Abbreviations: </strong>Abbreviations should be introduced with their definitions upon first mention and used consistently thereafter. If an abbreviation is first used in the abstract, it must be defined both in the abstract and upon its initial appearance in the main text to maintain clarity and consistency.</li>
        <li><strong>Flow of the Manuscript:  </strong>A manuscript in general should start with Title, abstract, keywords, Introduction, Literature Survey, Proposed Methodology, Experimental Work and Simulation Details, Comparative Analysis, Performance Metrics and end up with Conclusion with Limiations and Future Scope keeping References at end. Funding Statement/Acknowledgement/Data Availability Statement should be included after the Conclusion and before the References.</li> 
        <li><strong>Notifications:  </strong>Authors of manuscripts submitted to ICSCIS – 2026 will receive notifications solely via email. Please be aware that ICSCIS – 2026 cannot be held liable for any lapses in email communication, including non-receipt of messages or emails being directed to junk/spam folders, or any other technical issues. We appreciate your understanding regarding this matter.</li>

      </ul>

      
    </div>
  );
};

export default SubmissionGuideline;
