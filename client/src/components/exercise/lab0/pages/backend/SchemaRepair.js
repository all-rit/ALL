/* eslint-disable */

import { Background, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useState } from "react";
const initialNodes = [
  {
    id: "1",
    type: "input",
    position: { x: 0, y: -150 },
    data: { label: "server" },
  },
  { id: "2", position: { x: -300, y: 0 }, data: { label: "database" } },
  { id: "3", position: { x: -100, y: 0 }, data: { label: "services" } },
  { id: "4", position: { x: 100, y: 0 }, data: { label: "controllers" } },
  { id: "5", position: { x: 300, y: 0 }, data: { label: "routes" } },
];

const initialEdges = [
  { id: "1->2", source: "1", target: "2", animated: true },
  { id: "1->3", source: "1", target: "3", animated: true },
  { id: "1->4", source: "1", target: "4", animated: true },
  { id: "1->5", source: "1", target: "5", animated: true },
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
          // edgeTypes={edgeTypes}
          fitView
          panOnDrag={false}
          preventScrolling={true}
          zoomOnScroll={false}
          selectNodesOnDrag={false}
          style={{ backgroundColor: "transparent" }}
          grid={false}
        >
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};
