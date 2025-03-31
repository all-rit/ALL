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
    style: COLORS.PURPLE,
    type: "output",
  },
  {
    id: "3",
    position: { x: -75, y: 100 },
    data: { label: "services" },
    style: COLORS.PURPLE,
    type: "output",
  },
  {
    id: "4",
    position: { x: 75, y: 100 },
    data: { label: "controllers" },
    style: COLORS.PURPLE,
    type: "output",
  },
  {
    id: "5",
    position: { x: 225, y: 100 },
    data: { label: "routes" },
    style: COLORS.PURPLE,
    type: "output",
  },
];

const initialEdges = [
  createEdge("1", "2", false, "step"),
  createEdge("1", "3", false, "step"),
  createEdge("1", "4", false, "step"),
  createEdge("1", "5", false, "step"),
];

export const BackendIntroduction = () => {
  const [nodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);

  return (
    <Page>
      <Page.Header>
        <Page.Header.Title>Backend Development</Page.Header.Title>
        <Page.Header.Description>
          At ALL, our entire platform is powered by a robust backend built using{" "}
          <code>Express.js</code> and a <code>PSQL</code> database. The backend
          code is organized within the <code>server/</code> folder and follows a
          clean, modular architecture designed around separation of concerns.
          Each lab can have its own set of backend features, which follow a
          consistent structure. This page introduces the four key parts of the
          backend codebase:
        </Page.Header.Description>
      </Page.Header>
      <Page.Body className={"tw-gap-y-0"}>
        <div
          className={
            "tw-flex tw-flex-col tw-h-[16rem] tw-mb-9 tw-border-solid tw-border-2 tw-rounded-md"
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
              <b>database</b> – This folder contains model definitions for all
              entities using <code>Sequelize</code>. Every record stored in the
              PSQL database—such as <code>labs</code>, <code>quizzes</code>,{" "}
              <code>users</code>, or <code>groups</code>—has its schema defined
              here. Lab-specific models are also placed in this folder. If
              you&apos;re trying to locate how a particular entity is stored or
              what fields it includes, this is your starting point.
            </li>
            <li>
              <b>services</b> – The service layer is where we perform queries
              and business logic. A service receives parameters from the
              controller, interacts with the database models, and applies any
              necessary logic before returning a result. Each lab typically has
              one or more services to handle specific tasks (e.g.,{" "}
              <code>submitRepair()</code>, <code>getExerciseState()</code>).
              Services should be domain-specific and follow best practices to
              ensure modularity and reusability.
            </li>
            <li>
              <b>controllers</b> – Controllers are invoked when an endpoint is
              hit. Their job is to prepare data (e.g., extract values from the{" "}
              <code>request body</code> or <code>session</code>), call the
              appropriate service, and format the response to send back to the
              frontend. Most of the time, each controller corresponds directly
              to a service. Keep logic minimal. Most of the heavy lifting should
              be done in services.
            </li>
            <li>
              <b>routes</b> – This folder contains all route declarations using{" "}
              <code>Express</code>. Routes connect HTTP actions (e.g.,{" "}
              <code>GET</code>, <code>POST</code>, <code>PUT</code>) and URL
              paths (e.g., <code>/lab0/exercise</code>) to specific controller
              functions. No logic belongs in these files—they simply act as a
              map between frontend requests and backend functionality. If an
              endpoint doesn&apos;t seem to be working:
              <ol className="tw-list-decimal tw-list-inside tw-pl-9">
                <li>
                  Double-check the method and path in the route definition
                  (e.g., <code>GET /lab0/exercise</code>)
                </li>
                <li>Verify the correct controller is assigned to the route.</li>
                <li>
                  Ensure you are hitting the correct port (<code>5005</code>).
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </Page.Body>
    </Page>
  );
};
