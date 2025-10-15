import React from "react";
import { Page } from "../../components/Page";
import labData from "../../../../../assets/images/lab0/exercise/lab-data.png";
import { ROUTES } from "../../../../../constants/lab0/index";

export const LabData = () => {
  return (
    <Page nextPage={ROUTES.SECTION_LAB_DATA_REPAIR} completed>
      <Page.Header>
        <Page.Header.Title>Basic Lab Data</Page.Header.Title>
        <Page.Header.Description>
          Every lab has its own entry in the <code>labs</code> database table.
          This is where we store all the important details like the lab&apos;s
          name, what category it belongs to, and its description. The cool thing
          is that since everything is database-driven, we can change these
          details anytime without touching the codebase. Let&apos;s look at the
          key fields that you&apos;ll need to pay attention to.
        </Page.Header.Description>
      </Page.Header>
      <Page.Body className={"tw-gap-y-0"}>
        <div className="tw-flex tw-justify-center tw-pb-9">
          <img src={labData} alt="Lab Data" />
        </div>
        <div>
          <ul className="tw-flex tw-flex-col tw-list-disc tw-list-inside tw-gap-y-3">
            <li>
              <b>about</b> – This is the plain text introduction that shows up
              on each lab&apos;s landing page (when someone visits{" "}
              <code>/Lab/About</code>). Think of it as the lab&apos;s elevator
              pitch; it should explain what the lab covers, what students will
              learn, and why they should care about the topic. Keep it clear,
              inviting, and not too long.
            </li>
            <li>
              <b>reading</b> – This is where the main educational content lives,
              stored as a JSON object with several parts:
              <ul className="tw-list-disc tw-list-inside tw-pl-9">
                <li>
                  A <b>piechart</b> section with headers, captions, and
                  visualization data (
                  <a
                    href="https://react-chartjs-2.js.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="tw-text-primary-blue"
                  >
                    link to react-chartjs-2.js docs
                  </a>
                  )
                </li>
                <li>
                  A <b>description</b> section that gives a high-level overview
                </li>
                <li>
                  A <b>body</b> section with the meat of the content - could be
                  lists, case studies, paragraphs, etc.
                </li>
                <li>
                  A <b>footer</b> with links to external resources and citations
                </li>
              </ul>
              If you&apos;re not sure how to structure this, take a look at
              existing labs to see how they do it. Follow the same patterns to
              keep things consistent. Otherwise, the data will not properly
              display on the frontend.
            </li>
            <li>
              <b>reinforcement</b> – This is our video playlist, stored as a
              JSON list. Each entry has a <code>title</code> and a{" "}
              <code>link</code> to the <b>embedded</b> YouTube video. These
              videos show up on the reinforcement page and help drive home
              important concepts in different ways. They&apos;re especially
              helpful for younger learners who might benefit from seeing the
              same idea explained from different angles.
              <br />
              <br />
              <b>Note:</b> The link should look like this:{" "}
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
                className="tw-text-primary-blue"
              >
                https://www.youtube.com/embed/dQw4w9WgXcQ
              </a>
              <br />
              <br />
              If the link is not an embedded video, it will show up as a link to
              the video on YouTube.
            </li>
            <li>
              <b>quiz</b> – Our question bank, stored as a JSON list of question
              objects. Each question needs:
              <ul className="tw-list-disc tw-list-inside tw-pl-9">
                <li>
                  The actual <code>question</code> text
                </li>
                <li>
                  A list of possible <code>answers</code>, with the correct ones
                  marked by <code>val: 1</code>
                </li>
                <li>
                  Optional <code>explanation</code> text for when students
                  answer, and <code>source</code> info if you&apos;re citing
                  something
                </li>
              </ul>
              Make sure your questions match what&apos;s covered in the lab and
              are appropriate for K-12 or early college students. A good mix of
              difficulty helps keep everyone engaged. Once again, if you&apos;re
              not sure how to structure this, take a look at existing labs to
              see how they do it. Follow the same patterns to keep things
              consistent.
              <br />
              <br />
              <b>Note:</b> A skill that you, as a developer, will need to
              develop is the ability to do your own research (figuring things
              out on your own). This is a crucial skill that will come in handy
              as you continue to work on projects throughout your career.
              Don&apos;t be afraid to ask questions, but always try to figure
              things out on your own first. As a guide, try to spend about 30
              minutes on a problem before you ask for help.
            </li>
          </ul>
        </div>
      </Page.Body>
    </Page>
  );
};
