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
    type: "output",
    style: { ...COLORS.GREEN, opacity: 0.35 },
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
    style: { ...COLORS.GREEN, opacity: 0.35 },
    type: "output",
  },
  {
    id: "6",
    position: { x: 375, y: 100 },
    data: { label: "services" },
    style: COLORS.GREEN,
  },
  {
    id: "7",
    position: { x: 375, y: 200 },
    data: { label: "lab0" },
    style: COLORS.BLUE,
  },
  {
    id: "8",
    position: { x: 360 - 75, y: 300 },
    data: { label: "ExerciseService.js" },
    style: { ...COLORS.WHITE, width: "8rem" },
    type: "output",
  },
  {
    id: "9",
    position: { x: 360 + 75, y: 300 },
    data: { label: "RepairService.js" },
    style: { ...COLORS.WHITE, width: "8rem" },
    type: "output",
  },
];

const initialEdges = [
  createEdge("1", "2", false, "step"),
  createEdge("1", "3", false, "step"),
  createEdge("1", "4", false, "step"),
  createEdge("1", "5", false, "step"),
  createEdge("1", "6", false, "step"),
  createEdge("6", "7", false, "step"),
  createEdge("7", "8", false, "step"),
  createEdge("7", "9", false, "step"),
];

export const Integration = () => {
  const [nodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);

  return (
    <Page nextPage={ROUTES.SECTION_INTEGRATION_REPAIR} completed>
      <Page.Header>
        <Page.Header.Title>Backend Integration</Page.Header.Title>
        <Page.Header.Description>
          How does our frontend talk to the backend? Through special service
          files that act as friendly intermediaries. These files wrap up all the
          messy details of HTTP requests into simple, easy-to-use functions that
          our UI components can call. They handle everything from formatting the
          request data to catching and processing any errors that might pop up.
        </Page.Header.Description>
      </Page.Header>

      <Page.Body className={"tw-gap-y-0"}>
        <div
          className={
            "tw-flex tw-flex-col tw-h-[20rem] tw-mb-9 tw-border-solid tw-border-2 tw-rounded-md"
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
            At minimum, every lab needs two key services: one to manage exercise
            state and another for repair state. But depending on your lab&apos;s
            unique features, you might need additional services too. As the
            developer, you&apos;ll need to think about what services your
            specific lab requires and build them accordingly.
          </p>
          <ul className="tw-flex tw-flex-col tw-list-disc tw-list-inside tw-gap-y-3">
            <li>
              <code>ExerciseService.js</code> – Located in{" "}
              <code>src/services/labX/</code>, this is your lab&apos;s exercise
              command center. It provides friendly functions like{" "}
              <code>fetchExercise()</code>, <code>submitExercise()</code>, and{" "}
              <code>getProgress()</code> that your UI components can call.
              Behind the scenes, each function uses our shared <code>API</code>{" "}
              utility to make the actual backend calls. The beauty of this
              approach is that your UI components don&apos;t need to worry about
              HTTP details or data transformations - they just call these
              service methods and get back exactly what they need.
            </li>
            <li>
              <code>RepairService.js</code> – This service handles all the
              repair-related backend communication. Similar to the exercise
              service, it offers functions like <code>submitRepair()</code> and{" "}
              <code>getRepair()</code> for submitting and retrieving repair
              data. Having this separate service keeps your repair code neatly
              organized and easy to maintain.
            </li>
          </ul>
        </div>
      </Page.Body>
    </Page>
  );
};
