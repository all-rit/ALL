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
  createNode("1", { x: 0, y: -150 }, "server", COLORS.YELLOW, "input"),
  createNode("2", { x: -300, y: 0 }, "database", COLORS.PURPLE, "output"),
  createNode("3", { x: -100, y: 0 }, "services", COLORS.PURPLE),
  createNode("4", { x: 100, y: 0 }, "controllers", COLORS.PURPLE),
  createNode("5", { x: 300, y: 0 }, "routes", COLORS.PURPLE, "output"),
  createNode("6", { x: -100, y: 150 }, "lab0", COLORS.BLUE),
  createNode("7", { x: 100, y: 150 }, "lab1", COLORS.BLUE),
  createNode(
    "8",
    { x: -200, y: 300 },
    "ExerciseService.js",
    COLORS.WHITE,
    "output",
    Position.Right,
  ),
  createNode(
    "9",
    { x: -200, y: 450 },
    "RepairService.js",
    COLORS.WHITE,
    "output",
    Position.Right,
  ),
  createNode(
    "10",
    { x: 200, y: 300 },
    "ExerciseService.js",
    COLORS.WHITE,
    "output",
    Position.Left,
  ),
  createNode(
    "11",
    { x: 200, y: 450 },
    "RepairService.js",
    COLORS.WHITE,
    "output",
    Position.Left,
  ),
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

export const ServiceControllerRepair = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div>
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
