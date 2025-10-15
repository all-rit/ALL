import React, { useState } from "react";
import { Page } from "../../components/Page";
import { COLORS, createEdge } from "../../../../all-components/Diagrams";
import { ReactFlow, Background } from "@xyflow/react";
import { ROUTES } from "../../../../../constants/lab0/index";
const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Reading" },
    style: COLORS.BLUE,
    type: "input",
    sourcePosition: "right",
  },
  {
    id: "2",
    position: { x: 150, y: 0 },
    data: { label: "Game Exercise" },
    style: { ...COLORS.BLUE, zIndex: 5 },
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "3",
    position: { x: 300, y: 0 },
    data: { label: "Game Repair" },
    style: { ...COLORS.BLUE, zIndex: 5 },
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "4",
    position: { x: 450, y: 0 },
    data: { label: "Reinforcement" },
    style: COLORS.BLUE,
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "5",
    position: { x: 600, y: 0 },
    data: { label: "Quiz" },
    style: COLORS.BLUE,
    type: "output",
    targetPosition: "left",
  },
];

const initialEdges = [
  createEdge(
    "1",
    "2",
    false,
    "default",
    { stroke: "#000000", strokeWidth: 2 },
    { type: "arrowclosed", color: "#000000" },
  ),
  createEdge(
    "2",
    "3",
    false,
    "default",
    { stroke: "#000000", strokeWidth: 2 },
    { type: "arrowclosed", color: "#000000" },
  ),
  createEdge(
    "3",
    "4",
    false,
    "default",
    { stroke: "#000000", strokeWidth: 2 },
    { type: "arrowclosed", color: "#000000" },
  ),
  createEdge(
    "4",
    "5",
    false,
    "default",
    { stroke: "#000000", strokeWidth: 2 },
    { type: "arrowclosed", color: "#000000" },
  ),
];

export const CoreLabPages = () => {
  const [nodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);

  return (
    <Page nextPage={ROUTES.SECTION_INTEGRATION} completed={true}>
      <Page.Header>
        <Page.Header.Title>Core Lab Pages</Page.Header.Title>
        <Page.Header.Description>
          Every lab follows the same familiar pattern with four key sections
          that students move through: <code>Reading</code>,{" "}
          <code>Exercise</code> (made up of the game exercise and repair parts),{" "}
          <code>Reinforcement</code>, and <code>Quiz</code>. This consistent
          structure helps students know what to expect as they navigate from one
          concept to the next, ensuring they learn, practice, review, and test
          their understanding in a logical sequence.
        </Page.Header.Description>
      </Page.Header>
      <Page.Body className={"tw-gap-y-0"}>
        <div
          className={
            "tw-flex tw-flex-col tw-h-[10rem] tw-mb-9 tw-border-solid tw-border-2 tw-rounded-md"
          }
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
            elementsSelectable={false}
            nodesDraggable={false}
            zoomOnScroll={false}
            panOnScroll={false}
            zoomOnDoubleClick={false}
            zoomOnPinch={false}
            panOnDrag={false}
            preventScrolling={true}
            selectNodesOnDrag={false}
          >
            <Background />
          </ReactFlow>
        </div>
        <div>
          <p className="tw-mb-3">
            Good news! Most of these components already exist for each lab, so
            you don&apos;t have to build them from scratch every time. All you
            need to do is insert the correct data into the database (we covered
            this in a previous section). Nevertheless, it&apos;s still important
            to understand how they fit together to create a complete learning
            experience:
          </p>
          <ul className="tw-flex tw-flex-col tw-list-disc tw-list-inside tw-gap-y-3">
            <li>
              <code>Reading</code> – This is where students first encounter the
              main topic. It has a structured layout with a pie chart
              visualization, explanatory text, and sometimes links to dig
              deeper. All the content comes directly from the{" "}
              <code>reading</code> field in the lab&apos;s database entry,
              formatted as JSON that our components know how to display.
            </li>
            <li>
              <code>Exercise</code> – The hands-on part where students interact
              with the concepts they just learned. This usually involves two
              parts: first a guided exercise or game, then a repair section
              where they fix broken examples to demonstrate understanding. As a
              developer, you need to implement the exercise for each lab. You
              can reference existing exercises as a guide to help you understand
              how to implement the exercise for your lab.
            </li>
            <li>
              <code>Reinforcement</code> – A collection of short YouTube videos
              that help cement the key ideas. Sometimes, seeing the same concept
              explained differently helps it stick. These videos come from the{" "}
              <code>reinforcement</code> field in the database, which stores a
              JSON array with each video&apos;s <code>title</code> and{" "}
              <code>link</code>.
            </li>
            <li>
              <code>Quiz</code> – The final check for understanding with
              multiple-choice questions that test what students have learned.
              The questions and answers come from the <code>quiz</code> field in
              the lab&apos;s database record, formatted as JSON that supports
              both single and multiple correct answers. The system automatically
              grades the quiz and can show explanations for why answers are
              right or wrong.
            </li>
          </ul>
        </div>
      </Page.Body>
    </Page>
  );
};
