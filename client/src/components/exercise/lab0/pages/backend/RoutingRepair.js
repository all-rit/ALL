/* eslint-disable */

import { Background, ReactFlow, Position } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useState } from "react";
import {
  createNode,
  createEdge,
  COLORS,
} from "../../../../all-components/Diagrams";

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
    style: { ...COLORS.PURPLE, opacity: 0.5 },
    type: "output",
  },
  {
    id: "3",
    position: { x: -75, y: 100 },
    data: { label: "services" },
    style: { ...COLORS.PURPLE, opacity: 0.5 },
    type: "output",
  },
  {
    id: "4",
    position: { x: 75, y: 100 },
    data: { label: "controllers" },
    style: { ...COLORS.PURPLE, opacity: 0.5 },
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
  createEdge("1", "2", false, "step", { opacity: 0.5 }),
  createEdge("1", "3", false, "step", { opacity: 0.5 }),
  createEdge("1", "4", false, "step", { opacity: 0.5 }),
  createEdge("1", "5", false, "step"),
  createEdge("5", "6", false, "step"),
];

const initialNodes2 = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Request" },
    style: COLORS.GREEN,
    type: "input",
  },
  {
    id: "2",
    position: { x: 150, y: 0 },
    data: { label: "Router" },
    style: COLORS.YELLOW,
    type: "output",
  },
  {
    id: "3",
    position: { x: 300, y: 0 },
    data: { label: "Controller" },
    style: COLORS.BLUE,
    type: "output",
  },
  {
    id: "4",
    position: { x: 450, y: 0 },
    data: { label: "Service" },
    style: COLORS.PURPLE,
  },
];

const initialEdges2 = [];

export const RoutingRepair = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const [nodes2, setNodes2] = useState(initialNodes2);
  const [edges2, setEdges2] = useState(initialEdges2);

  return (
    <div className={"tw-flex tw-flex-col tw-gap-y-6"}>
      <div className={"tw-flex tw-flex-col tw-h-[32rem]"}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          panOnDrag={false}
          preventScrolling={true}
          zoomOnScroll={false}
          selectNodesOnDrag={false}
        >
          <Background />
        </ReactFlow>
      </div>
      <div className={"tw-flex tw-flex-col tw-h-[32rem]"}>
        <ReactFlow
          nodes={nodes2}
          edges={edges2}
          fitView
          panOnDrag={false}
          preventScrolling={true}
          zoomOnScroll={false}
          selectNodesOnDrag={false}
        >
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};
