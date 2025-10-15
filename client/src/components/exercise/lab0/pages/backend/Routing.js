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
    style: { ...COLORS.PURPLE, opacity: 0.35 },
    type: "output",
  },
  {
    id: "4",
    position: { x: 75, y: 100 },
    data: { label: "controllers" },
    style: { ...COLORS.PURPLE, opacity: 0.35 },
    type: "output",
  },
  {
    id: "5",
    position: { x: 225, y: 100 },
    data: { label: "routes" },
    style: COLORS.PURPLE,
  },
  {
    id: "6",
    position: { x: 225, y: 200 },
    data: { label: "index.js" },
    style: COLORS.WHITE,
    type: "output",
  },
];

const initialEdges = [
  createEdge("1", "2", false, "step", { opacity: 0.35 }),
  createEdge("1", "3", false, "step", { opacity: 0.35 }),
  createEdge("1", "4", false, "step", { opacity: 0.35 }),
  createEdge("1", "5", false, "step"),
  createEdge("5", "6", false, "step"),
];

const initialNodes2 = [
  {
    id: "1",
    position: { x: 100, y: 0 },
    data: { label: "Request" },
    style: COLORS.GREEN,
    type: "input",
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "2",
    position: { x: 300, y: 0 },
    data: { label: "Router" },
    style: COLORS.YELLOW,
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "3",
    position: { x: 500, y: 0 },
    data: { label: "Controller" },
    style: COLORS.BLUE,
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "4",
    position: { x: 700, y: 0 },
    data: { label: "Service" },
    style: COLORS.PURPLE,
    sourcePosition: "right",
    targetPosition: "left",
    type: "output",
  },
];

const initialEdges2 = [
  createEdge(
    "1",
    "2",
    false,
    "default",
    {
      stroke: "#000000",
      strokeWidth: 2,
    },
    { type: "arrowclosed", color: "#000000" },
  ),
  createEdge(
    "2",
    "3",
    false,
    "default",
    {
      stroke: "#000000",
      strokeWidth: 2,
    },
    { type: "arrowclosed", color: "#000000" },
  ),
  createEdge(
    "3",
    "4",
    false,
    "default",
    {
      stroke: "#000000",
      strokeWidth: 2,
    },
    { type: "arrowclosed", color: "#000000" },
  ),
];

export const Routing = () => {
  const [nodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);
  const [nodes2] = useState(initialNodes2);
  const [edges2] = useState(initialEdges2);

  return (
    <Page nextPage={ROUTES.SECTION_ROUTING_REPAIR} completed>
      <Page.Header>
        <Page.Header.Title>API Endpoints &amp; Routing</Page.Header.Title>
        <Page.Header.Description>
          Routing is where we define all the doorways that the frontend can use
          to talk to our server. Each route connects an incoming request to the
          right controller, based on the URL path and HTTP method used. This
          organized approach keeps our code clean and makes it easy to find
          which piece handles which request. We follow RESTful conventions to
          make our API intuitive and predictable for anyone working with it.
        </Page.Header.Description>
      </Page.Header>
      <Page.Body className={"tw-gap-y-0"}>
        <div
          className={
            "tw-flex tw-flex-col tw-h-[18rem] tw-mb-9 tw-border-solid tw-border-2 tw-rounded-md"
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
              <code>routes/index.js</code> – This is the central hub for all our
              API routes. It&apos;s where we register every endpoint and connect
              them to their matching controller functions. This file
              doesn&apos;t contain any business logic - it&apos;s purely a
              traffic director that tells incoming requests where they need to
              go.
            </li>
          </ul>
        </div>
        <div className="tw-pt-3">
          <h2 className="tw-text-xl tw-font-bold">Backend Request Flow</h2>
          <div
            className={
              "tw-flex tw-flex-col tw-h-[18em] tw-my-9 tw-border-solid tw-border-2 tw-rounded-md"
            }
          >
            <ReactFlow
              nodes={nodes2}
              edges={edges2}
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
        </div>
        <div>
          <p className="tw-mb-3">
            Here&apos;s the journey a request takes from the moment it leaves
            the frontend until it gets a response:
          </p>
          <ol className="tw-flex tw-flex-col tw-list-decimal tw-list-inside tw-gap-y-3">
            <li>
              <strong>Request</strong> – The frontend kicks things off by
              sending an HTTP request to our server. Depending on what it&apos;s
              trying to do, this might include query parameters, route
              parameters, or a request body with data.
            </li>
            <li>
              <strong>Router</strong> – Our router looks at two things: the HTTP
              method (<code>GET</code>, <code>POST</code>, etc.) and the URL
              path (like <code>/lab3/exercise</code>). Based on these, it
              figures out which controller should handle this particular
              request.
            </li>
            <li>
              <strong>Controller</strong> – The controller unpacks the request,
              pulling out any important data from <code>req.body</code>,{" "}
              <code>req.params</code>, or <code>req.session</code>. Then it
              calls the right service method to do the actual work. Controllers
              are like the hosts of our API - they welcome guests but don&apos;t
              cook the meal themselves.
            </li>
            <li>
              <strong>Service</strong> – This is where the real work happens.
              Services contain all the business logic, including talking to the
              database and making decisions. Once they&apos;ve done their job,
              they pass the results back up the chain to the controller, which
              formats everything into a nice response for the frontend.
            </li>
          </ol>
        </div>
      </Page.Body>
    </Page>
  );
};
