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
    <Page nextPage={ROUTES.SECTION_LAB_DATA} completed>
      <Page.Header>
        <Page.Header.Title>Backend Development</Page.Header.Title>
        <Page.Header.Description>
          Behind the scenes, our entire platform runs on a backend built with{" "}
          <code>Express.js</code> and a <code>PostgreSQL</code> database.
          Everything&apos;s organized in the <code>server/</code> folder where
          we&apos;ve set up a clean, modular system that keeps different
          responsibilities separate. Each lab has its own dedicated backend
          pieces that follow the same structure. Let&apos;s walk through the
          four main parts of our backend:
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
            preventScrolling={false}
            selectNodesOnDrag={false}
          >
            <Background />
          </ReactFlow>
        </div>
        <div>
          <ul className="tw-flex tw-flex-col tw-list-disc tw-list-inside tw-gap-y-3">
            <li>
              <b>database</b> – This is where we define what our data looks like
              using <code>Sequelize</code> (
              <a
                href="https://sequelize.org/docs/v6/core-concepts/model-basics/"
                target="_blank"
                rel="noreferrer"
                className="tw-text-primary-blue"
              >
                link to docs
              </a>
              ). Every piece of information we store, such as <code>labs</code>{" "}
              and <code>quizzes</code>, <code>users</code> and{" "}
              <code>groups</code>, has its structure defined here. If
              you&apos;re trying to figure out how something is stored or what
              fields it has, start here.
            </li>
            <li>
              <b>services</b> – Services handle the heavy lifting of database
              queries and business logic. When a controller needs information,
              it asks a service, which knows exactly how to fetch what&apos;s
              needed and process it. Each lab usually has dedicated services for
              specific tasks (like <code>submitRepair()</code> or{" "}
              <code>getExerciseState()</code>). We keep services focused on
              specific domains to make them easier to maintain and reuse.
            </li>
            <li>
              <b>controllers</b> – Controllers are the traffic directors of our
              backend. Their job is simple; grab what&apos;s needed from the
              request (like data from the <code>request body</code> or{" "}
              <code>session</code>), call the right service, and package up the
              response to send back. Controllers should be light on logic,
              they&apos;re just the middlemen between the frontend requests and
              our services.
            </li>
            <li>
              <b>routes</b> – Routes connect HTTP methods (like <code>GET</code>{" "}
              or <code>POST</code>) and URL paths (like{" "}
              <code>/lab0/exercise</code>) to the right controller functions.
              There&apos;s no logic here, routes just map incoming requests to
              the right handlers. If something&apos;s not working with an
              endpoint, check these three things:
              <ol className="tw-list-decimal tw-list-inside tw-pl-9">
                <li>
                  Is the path and method correct? (e.g.,{" "}
                  <code>GET /lab0/exercise</code>)
                </li>
                <li>Is it pointing to the right controller?</li>
                <li>
                  Are you hitting the right port? (should be <code>5005</code>)
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </Page.Body>
    </Page>
  );
};
