import React from "react";
import { Page } from "../../components/Page";
import labData from "../../../../../assets/images/lab0/exercise/lab-data.png";

export const LabData = () => {
  return (
    <Page>
      <Page.Header>
        <Page.Header.Title>Basic Lab Data</Page.Header.Title>
        <Page.Header.Description>
          Each lab has its own record in the <code>labs</code>. These records
          store metadata such as the lab&apos;s name, category, and description.
          Because our system is fully database-driven, these records can be
          updated at any time without needing to modify or commit code. Here are
          key fields that require special attention.
        </Page.Header.Description>
      </Page.Header>
      <Page.Body className={"tw-gap-y-0"}>
        <div className="tw-flex tw-justify-center tw-pb-9">
          <img src={labData} alt="Lab Data" />
        </div>
        <div>
          <ul className="tw-flex tw-flex-col tw-list-disc tw-list-inside tw-gap-y-3">
            <li>
              <b>about</b> – A plain text field rendered on the landing page of
              each lab (when visiting <code>/Lab/About</code>). It should
              explain what the lab is about, what learners will explore, and why
              the topic matters—all in a few clear and inviting sentences.
            </li>
            <li>
              <b>reading</b> – A structured JSON object that defines the main
              instructional content of the lab. This includes:
              <ul className="tw-list-disc tw-list-inside tw-pl-9">
                <li>
                  A <b>piechart</b> section with headers, captions, and data.
                </li>
                <li>
                  A <b>description</b> block for high-level exposition.
                </li>
                <li>
                  A <b>body</b> section composed of structured items (like
                  lists, case studies, or paragraphs).
                </li>
                <li>
                  A <b>footer</b> list of external resources and citations.
                </li>
              </ul>
              If you&apos;re unsure how to structure this field, examine the
              JSON used in existing labs and follow the same schema conventions.
            </li>
            <li>
              <b>reinforcement</b> – A list of YouTube videos in JSON format,
              where each entry includes a <code>title</code> and{" "}
              <code>link</code>. These videos are embedded in the reinforcement
              page and serve to reiterate important concepts, offer alternate
              explanations, and enhance retention—especially for younger
              learners.
            </li>
            <li>
              <b>quiz</b> – A list of quiz question objects stored as JSON. Each
              object should include:
              <ul className="tw-list-disc tw-list-inside tw-pl-9">
                <li>
                  The <code>question</code> string
                </li>
                <li>
                  A list of <code>answers</code>, with one or more marked as
                  correct using <code>val: 1</code>
                </li>
                <li>
                  Optional <code>explanation</code> and <code>source</code>{" "}
                  fields for feedback or citation
                </li>
              </ul>
              Questions should be aligned with the material covered and be
              age-appropriate for K–12 (or early college) learners.
            </li>
          </ul>
        </div>
      </Page.Body>
    </Page>
  );
};
