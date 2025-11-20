import React, { useState } from "react";
import { Page } from "../../components/Page";
import { COLORS, createEdge } from "../../../../all-components/Diagrams";
import { ReactFlow, Background } from "@xyflow/react";
import { ROUTES } from "../../../../../constants/lab0/index";

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "src" },
    style: COLORS.PURPLE,
    type: "input",
  },
  {
    id: "2",
    position: { x: -225, y: 100 },
    data: { label: "assets" },
    style: { ...COLORS.GREEN, opacity: 0.35 },
    type: "output",
  },
  {
    id: "3",
    position: { x: -75, y: 100 },
    data: { label: "components" },
    style: COLORS.GREEN,
  },
  {
    id: "4",
    position: { x: 75, y: 100 },
    data: { label: "App.js" },
    style: { ...COLORS.GREEN, opacity: 0.35 },
    type: "output",
  },
  {
    id: "5",
    position: { x: 225, y: 100 },
    data: { label: "constants" },
    style: COLORS.GREEN,
  },
  {
    id: "6",
    position: { x: 375, y: 100 },
    data: { label: "services" },
    style: { ...COLORS.GREEN, opacity: 0.35 },
    type: "output",
  },
  {
    id: "7",
    position: { x: -75, y: 200 },
    data: { label: "exercise" },
    style: COLORS.RED,
  },
  {
    id: "8",
    position: { x: 225, y: 200 },
    data: { label: "lab0" },
    style: COLORS.BLUE,
  },
  {
    id: "9",
    position: { x: -75, y: 300 },
    data: { label: "lab0" },
    style: COLORS.BLUE,
  },
  {
    id: "10",
    position: { x: 225, y: 300 },
    data: { label: "index.js" },
    style: COLORS.WHITE,
    type: "output",
  },
  {
    id: "11",
    position: { x: -225, y: 400 },
    data: { label: "Main.js" },
    style: COLORS.WHITE,
    type: "output",
  },
  {
    id: "12",
    position: { x: -75, y: 400 },
    data: { label: "Context.js" },
    style: COLORS.WHITE,
    type: "output",
  },
  {
    id: "13",
    position: { x: 75, y: 400 },
    data: { label: "components" },
    style: COLORS.YELLOW,
    type: "output",
  },
  {
    id: "14",
    position: { x: 225, y: 400 },
    data: { label: "pages" },
    style: COLORS.YELLOW,
    type: "output",
  },
];

const initialEdges = [
  createEdge("1", "2", false, "step"),
  createEdge("1", "3", false, "step"),
  createEdge("1", "4", false, "step"),
  createEdge("1", "5", false, "step"),
  createEdge("1", "6", false, "step"),
  createEdge("3", "7", false, "step"),
  createEdge("5", "8", false, "step"),
  createEdge("7", "9", false, "step"),
  createEdge("8", "10", false, "step"),
  createEdge("9", "11", false, "step"),
  createEdge("9", "12", false, "step"),
  createEdge("9", "13", false, "step"),
  createEdge("9", "14", false, "step"),
];

export const Boilerplate = () => {
  const [nodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);

  return (
    <Page nextPage={ROUTES.SECTION_CORE_LAB_PAGES} completed>
      <Page.Header>
        <Page.Header.Title>Lab Boilerplate Setup</Page.Header.Title>
        <Page.Header.Description>
          When building a new lab, you don&apos;t have to start from scratch.
          We&apos;ve created a ready-made structure that gives you a head start.
          It&apos;s like a blueprint for organizing your code that keeps
          everything neat and consistent. UI components, configuration values,
          and API communication all have their designated spots, which makes it
          easier to build, maintain, and eventually hand off your lab to others.
        </Page.Header.Description>
      </Page.Header>
      <Page.Body className={"tw-gap-y-0"}>
        <div
          className={
            "tw-flex tw-flex-col tw-h-[26rem] tw-mb-9 tw-border-solid tw-border-2 tw-rounded-md"
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
            preventScrolling={false}
            selectNodesOnDrag={false}
          >
            <Background />
          </ReactFlow>
        </div>
        <div>
          <ul className="tw-flex tw-flex-col tw-list-disc tw-list-inside tw-gap-y-3">
            <li>
              <code>Main.js</code> – This is where everything begins, such as
              handling state, rendering the right components, and coordinating
              user interactions. Each lab has its own version that follows the
              same pattern, which means once you understand one, you&apos;ll
              know how they all work.
            </li>
            <li>
              <code>Context.js</code> – Think of this as your lab&apos;s memory
              bank. It uses React Context to create a central place for storing
              and managing state that any component in your lab can tap into. No
              more passing data through five levels of components – just grab
              what you need directly from the Context. This is where you&apos;ll
              track things like exercise progress and user interactions.
              <br />
              <b>Note: </b> Older labs leverage <code>react-redux</code> for
              state management. It is similar to our current state management,
              but different. Make sure that new labs leverage{" "}
              <code>react-context</code>.
            </li>
            <li>
              <code>components/</code> – Your lab&apos;s building blocks live
              here. These are the reusable UI elements specific to your lab,
              organized in a way that makes them easy to find and combine. The
              main <code>components/</code> folder at the project root has
              global pieces like headers and footers, while your lab-specific
              components get their own space. This keeps everything tidy and
              encourages reuse.
            </li>
            <li>
              <code>pages/</code> – These are the different screens and views in
              your lab. Each page pulls together multiple components and handles
              the overall layout and navigation flow. Pages get data from the
              Context and pass it down to the components that need it, acting as
              the glue that holds your UI together.
            </li>
            <li>
              <code>constants/</code> – Your lab&apos;s dictionary of important
              values. Instead of scattering numbers and strings throughout your
              code, we keep them all in one place (like{" "}
              <code>constants/lab0/index.js</code>). Need to define states like{" "}
              <code>GAME_PLAYING</code> or <code>GAME_IDLE</code>? This is where
              they go. It makes your code more readable and means you only have
              to update values in one spot if they change.
            </li>
          </ul>
        </div>
      </Page.Body>
    </Page>
  );
};
