import React, { useState } from "react";
import { Page } from "../../components/Page";
import { COLORS, createEdge } from "../../../../all-components/Diagrams";
import { ReactFlow, Background } from "@xyflow/react";
import { ROUTES } from "../../../../../constants/lab0/index";
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
    <Page nextPage={ROUTES.SECTION_SERVICE_CONTROLLER_REPAIR} completed>
      <Page.Header>
        <Page.Header.Title>Service Layer &amp; Controllers</Page.Header.Title>
        <Page.Header.Description>
          We&apos;ve split our backend into two key parts that work
          hand-in-hand: services and controllers. Think of services as the
          brains that process data and handle complex operations, while
          controllers are like traffic cops that direct incoming requests to the
          right service. This separation of concerns keeps our code neat,
          focused, and easier to maintain as our labs grow in complexity.
        </Page.Header.Description>
      </Page.Header>
      <Page.Body className={"tw-gap-y-0"}>
        <div
          className={
            "tw-flex tw-flex-col tw-h-[30rem] tw-mb-9 tw-border-solid tw-border-2 tw-rounded-md"
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
              <code>services/labX</code> – Every lab gets its own folder inside
              the <code>services</code> directory. This is where we store all
              the specialized logic for that lab&apos;s features. These service
              files talk directly to the database and handle all the complex
              operations like saving exercise progress or processing repair
              submissions. By keeping each lab&apos;s services isolated, we
              avoid mixing up logic between different labs.
            </li>
            <li>
              <code>ExerciseService.js</code> – This file handles everything
              related to tracking and updating exercise progress. It provides
              helpful functions like <code>getExercise()</code> to check where a
              student left off, <code>postExercise()</code> to save their work,
              and <code>submitChange()</code> to update their exercise data.
              It&apos;s directly wired to the lab&apos;s <code>Exercise</code>{" "}
              model so it knows exactly how to store and retrieve the right
              information.
            </li>
            <li>
              <code>RepairService.js</code> – This service manages all the
              repair activities for a lab. When students submit fixes to broken
              code, this service processes that data with functions like{" "}
              <code>submitRepair()</code>, <code>getRepair()</code>, and{" "}
              <code>updateRepair()</code>. Like the exercise service, it talks
              directly to the <code>Repair</code> model.
            </li>
            <li>
              <code>controllers/labX</code> – Controllers are like the front
              desk of our API. Each lab has its own controller folder that
              houses the code for handling incoming requests. Controllers
              don&apos;t do any heavy lifting themselves; they just grab
              what&apos;s needed from the request (from <code>req.body</code>,
              <code>req.params</code>, or <code>req.session</code>), pass it to
              the right service function, and return the results. They should be
              simple and focused on request handling.
            </li>
            <li>
              <code>ExerciseController.js</code> – This controller handles all
              the HTTP requests related to exercises. For example, when someone
              hits <code>GET /labX/exercise</code> or{" "}
              <code>POST /labX/exercise/submit</code>, this controller springs
              into action, calls the corresponding service method, and formats
              the response to send back.
            </li>
            <li>
              <code>RepairController.js</code> – Similar to the exercise
              controller, but focused on repair submissions. When a student
              submits a repair, this controller unpacks the request data and
              hands it off to the <code>RepairService</code> for processing. It
              keeps our repair workflow organized and predictable.
            </li>
          </ul>
          <br />
          <br />
          <b>Note:</b> These are the main controllers and services for a lab.
          However, you may need to create additional controllers and services
          for specific features or requirements. As a developer, it is your
          responsibility to figure out if any additional ones are needed.
        </div>
      </Page.Body>
    </Page>
  );
};
