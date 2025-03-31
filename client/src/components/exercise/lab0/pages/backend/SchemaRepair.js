/* eslint-disable */

import { Background, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useState } from "react";
import {
  createNode,
  createEdge,
  COLORS,
} from "../../../../all-components/Diagrams";

const initialNodes = [
  createNode("1", { x: 0, y: -150 }, "server", COLORS.YELLOW, "input"),
  createNode("2", { x: -300, y: 0 }, "database", COLORS.PURPLE),
  createNode("3", { x: -100, y: 0 }, "services", COLORS.PURPLE, "output"),
  createNode("4", { x: 100, y: 0 }, "controllers", COLORS.PURPLE, "output"),
  createNode("5", { x: 300, y: 0 }, "routes", COLORS.PURPLE, "output"),
  createNode("6", { x: -300, y: 150 }, "schema.sql", COLORS.WHITE, "output"),
  createNode("7", { x: -100, y: 150 }, "models", COLORS.RED),
  createNode("8", { x: -100, y: 300 }, "lab0", COLORS.BLUE),
  createNode("9", { x: -200, y: 450 }, "Exercise.js", COLORS.WHITE, "output"),
  createNode("10", { x: 0, y: 450 }, "Repair.js", COLORS.WHITE, "output"),
];

const initialEdges = [
  createEdge("1", "2", false, "step"),
  createEdge("1", "3", false, "step"),
  createEdge("1", "4", false, "step"),
  createEdge("1", "5", false, "step"),
  createEdge("2", "6", false, "step"),
  createEdge("2", "7", false, "step"),
  createEdge("7", "8", false, "step"),
  createEdge("8", "9", false, "step"),
  createEdge("8", "10", false, "step"),
];

export const SchemaRepair = () => {
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
