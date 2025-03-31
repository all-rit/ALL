import React, { useState } from "react";
import { Page } from "../../components/Page";
import { COLORS, createEdge } from "../../../../all-components/Diagrams";
import { ReactFlow, Background } from "@xyflow/react";

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "server" },
    style: COLORS.YELLOW,
    type: "input",
  },
  {
    id: "2",
    position: { x: -225, y: 100 },
    data: { label: "database" },
    style: { ...COLORS.PURPLE, opacity: 0.35 },
    type: "output",
  },
  {
    id: "3",
    position: { x: -75, y: 100 },
    data: { label: "services" },
    style: COLORS.PURPLE,
  },
  {
    id: "4",
    position: { x: 75, y: 100 },
    data: { label: "controllers" },
    style: COLORS.PURPLE,
  },
  {
    id: "5",
    position: { x: 225, y: 100 },
    data: { label: "routes" },
    style: { ...COLORS.PURPLE, opacity: 0.35 },
    type: "output",
  },
  {
    id: "6",
    position: { x: -75, y: 200 },
    data: { label: "labX" },
    style: COLORS.BLUE,
  },
  {
    id: "7",
    position: { x: 75, y: 200 },
    data: { label: "labX" },
    style: COLORS.BLUE,
  },
  {
    id: "8",
    position: { x: -225, y: 300 },
    data: { label: "ExerciseService.js" },
    style: { ...COLORS.WHITE, width: "8rem" },
    type: "output",
  },
  {
    id: "9",
    position: { x: -75, y: 300 },
    data: { label: "RepairService.js" },
    style: { ...COLORS.WHITE, width: "8rem" },
    type: "output",
  },
  {
    id: "10",
    position: { x: 75, y: 300 },
    data: { label: "ExerciseController.js" },
    style: { ...COLORS.WHITE, width: "8rem" },
    type: "output",
  },
  {
    id: "11",
    position: { x: 225, y: 300 },
    data: { label: "RepairController.js" },
    style: { ...COLORS.WHITE, width: "8rem" },
    type: "output",
  },
];

const initialEdges = [
  createEdge("1", "2", false, "step"),
  createEdge("1", "3", false, "step"),
  createEdge("1", "4", false, "step"),
  createEdge("1", "5", false, "step"),
  createEdge("3", "6", false, "step"),
  createEdge("4", "7", false, "step"),
  createEdge("6", "8", false, "step"),
  createEdge("6", "9", false, "step"),
  createEdge("7", "10", false, "step"),
  createEdge("7", "11", false, "step"),
];

export const ServiceController = () => {
  const [nodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);

  return (
    <Page>
      <Page.Header>
        <Page.Header.Title>Service Layer &amp; Controllers</Page.Header.Title>
        <Page.Header.Description>
          The service layer and controller architecture separates backend logic
          into two distinct concerns: services handle data processing and core
          functionality, while controllers manage HTTP request handling. This
          design keeps logic modular, and easy to maintain across labs.
        </Page.Header.Description>
      </Page.Header>
      <Page.Body className={"tw-gap-y-0"}>
        <div
          className={
            "tw-flex tw-flex-col tw-h-[30rem] tw-mb-9 tw-border-solid tw-border-2 tw-border-gray-200 tw-rounded-md"
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
          <ul className="tw-flex tw-flex-col tw-list-disc tw-list-inside tw-gap-y-3">
            <li>
              <code>services/labX</code> – Each lab has its own folder inside
              the <code>services</code> directory to hold domain-specific logic.
              These services interact with the database models and encapsulate
              logic related to lab-specific features, such as exercise tracking
              or repair submissions. Grouping services by lab ensures that logic
              remains isolated and modular.
            </li>
            <li>
              <code>ExerciseService.js</code> – Contains logic for managing
              exercise state and completion. This service defines functions like{" "}
              <code>getExercise()</code>, <code>postExercise()</code>, and{" "}
              <code>submitChange()</code> to retrieve progress, store answer
              attempts, and update user session data. It communicates directly
              with the lab&apos;s <code>Exercise</code> model.
            </li>
            <li>
              <code>RepairService.js</code> – Manages repair workflow data for a
              lab. Functions like <code>submitRepair()</code>,{" "}
              <code>getRepair()</code>, and <code>updateRepair()</code> allow us
              to store, retrieve, and track repair-related activity. It
              communicates directly with the lab&apos;s <code>Repair</code>{" "}
              model.
            </li>
            <li>
              <code>controllers/labX</code> – Controllers are the entry point
              for each API route. They extract input values from{" "}
              <code>req.body</code>, <code>req.params</code>, or{" "}
              <code>req.session</code> and pass that data to the appropriate
              service functions. Controllers should be thin and never contain
              business logic.
            </li>
            <li>
              <code>ExerciseController.js</code> – Handles all HTTP actions
              related to the lab’s exercise flow. For example, it might receive
              a request to <code>GET /labX/exercise</code> or{" "}
              <code>POST /labX/exercise/submit</code>, then call corresponding
              service methods and return a structured response.
            </li>
            <li>
              <code>RepairController.js</code> – Handles repair submission
              requests. It parses the repair input from the client, then
              delegates processing to <code>RepairService</code>.
            </li>
          </ul>
        </div>
      </Page.Body>
    </Page>
  );
};
