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
    true,
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
    true,
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
    true,
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
    <Page>
      <Page.Header>
        <Page.Header.Title>API Endpoints &amp; Routing</Page.Header.Title>
        <Page.Header.Description>
          The routing layer defines all API endpoints that clients can access to
          communicate with the server. Routes direct incoming HTTP requests to
          the appropriate controller based on the URL path and HTTP method. This
          structured approach enables clean separation of concerns and maintains
          the application&apos;s organization. Routing follows RESTful
          conventions and ensures that all backend functionality is accessible
          through a clearly defined API surface.
        </Page.Header.Description>
      </Page.Header>
      <Page.Body className={"tw-gap-y-0"}>
        <div
          className={
            "tw-flex tw-flex-col tw-h-[18rem] tw-mb-9 tw-border-solid tw-border-2 tw-border-gray-200 tw-rounded-md"
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
              <code>routes/index.js</code> – This file serves as the central
              routing hub for the backend. It registers all API routes and maps
              them to their appropriate controller logic. All controllers are
              mounted here and mapped to their respective routes. No business
              logic should be included here—it exists only to delegate.
            </li>
          </ul>
        </div>
        <div className="tw-pt-3">
          <h2 className="tw-text-xl tw-font-bold">Backend Request Flow</h2>
          <div
            className={
              "tw-flex tw-flex-col tw-h-[18em] tw-my-9 tw-border-solid tw-border-2 tw-border-gray-200 tw-rounded-md"
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
              preventScrolling={true}
              selectNodesOnDrag={false}
            >
              <Background />
            </ReactFlow>
          </div>
        </div>
        <div>
          <p className="tw-mb-3">
            The diagram above illustrates the full request lifecycle when a
            frontend client makes an API call:
          </p>
          <ol className="tw-flex tw-flex-col tw-list-decimal tw-list-inside tw-gap-y-3">
            <li>
              <strong>Request</strong> – An HTTP request is initiated by the
              client application. This may include query parameters, route
              parameters, or a request body depending on the endpoint.
            </li>
            <li>
              <strong>Router</strong> – The router layer examines the request
              method (<code>GET</code>, <code>POST</code>, etc.) and path (e.g.,{" "}
              <code>/lab3/exercise</code>) and determines the appropriate
              controller to handle it.
            </li>
            <li>
              <strong>Controller</strong> – The controller extracts relevant
              data from the request (e.g., <code>req.body</code>,{" "}
              <code>req.params</code>, <code>req.session</code>) and invokes the
              correct service method. It is responsible for orchestrating
              request flow but should remain logic-light.
            </li>
            <li>
              <strong>Service</strong> – Services handle all business logic,
              including database access and decision-making. Once completed, the
              result is passed back to the controller and returned to the client
              as a structured response.
            </li>
          </ol>
        </div>
      </Page.Body>
    </Page>
  );
};
