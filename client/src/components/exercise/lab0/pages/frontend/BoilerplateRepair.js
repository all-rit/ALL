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
    data: { label: "src" },
    style: COLORS.PURPLE,
    type: "input",
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "App.js" },
    style: { ...COLORS.GREEN, opacity: 0.5 },
    type: "output",
  },
  {
    id: "3",
    position: { x: -150, y: 100 },
    data: { label: "components" },
    style: COLORS.GREEN,
  },
  {
    id: "4",
    position: { x: 150, y: 100 },
    data: { label: "constants" },
    style: COLORS.GREEN,
  },
  {
    id: "5",
    position: { x: -300, y: 100 },
    data: { label: "assets" },
    style: { ...COLORS.GREEN, opacity: 0.5 },
    type: "output",
  },
  {
    id: "6",
    position: { x: 300, y: 100 },
    data: { label: "services" },
    style: { ...COLORS.GREEN, opacity: 0.5 },
    type: "output",
  },
  {
    id: "7",
    position: { x: -75, y: 200 },
    data: { label: "exercise" },
    style: COLORS.RED,
    targetPosition: Position.Left,
  },
  {
    id: "8",
    position: { x: 0, y: 300 },
    data: { label: "lab0" },
    style: COLORS.BLUE,
    targetPosition: Position.Left,
  },
  {
    id: "9",
    position: { x: -75, y: 400 },
    data: { label: "Context.js" },
    style: COLORS.WHITE,
    type: "output",
  },
  {
    id: "10",
    position: { x: -225, y: 400 },
    data: { label: "Main.js" },
    style: COLORS.WHITE,
    type: "output",
  },
  {
    id: "11",
    position: { x: 75, y: 400 },
    data: { label: "components" },
    style: COLORS.YELLOW,
    type: "output",
  },
  {
    id: "12",
    position: { x: 225, y: 400 },
    data: { label: "pages" },
    style: COLORS.YELLOW,
    type: "output",
  },
  {
    id: "13",
    position: { x: 225, y: 200 },
    data: { label: "lab0" },
    style: COLORS.BLUE,
    targetPosition: Position.Left,
  },
  {
    id: "14",
    position: { x: 300, y: 300 },
    data: { label: "index.js" },
    style: COLORS.WHITE,
    type: "output",
    targetPosition: Position.Left,
  },
];

const initialEdges = [
  createEdge("1", "2", false, "step", { opacity: 0.5 }),
  createEdge("1", "3", false, "step"),
  createEdge("1", "4", false, "step"),
  createEdge("1", "5", false, "step", { opacity: 0.5 }),
  createEdge("1", "6", false, "step", { opacity: 0.5 }),
  createEdge("3", "7", false, "step"),
  createEdge("7", "8", false, "step"),
  createEdge("8", "9", false, "step"),
  createEdge("8", "10", false, "step"),
  createEdge("8", "11", false, "step"),
  createEdge("8", "12", false, "step"),
  createEdge("4", "13", false, "step"),
  createEdge("13", "14", false, "step"),
];

export const BoilerplateRepair = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

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
    </div>
  );
};
