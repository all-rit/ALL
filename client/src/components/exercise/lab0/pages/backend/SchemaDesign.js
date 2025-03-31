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
    style: { ...COLORS.PURPLE, opacity: 0.35 },
    type: "output",
  },
  {
    id: "6",
    position: { x: -225, y: 200 },
    data: { label: "schema.sql" },
    style: COLORS.WHITE,
    type: "output",
  },
  {
    id: "7",
    position: { x: -75, y: 200 },
    data: { label: "models" },
    style: COLORS.RED,
  },
  {
    id: "8",
    position: { x: -75, y: 300 },
    data: { label: "labX" },
    style: COLORS.BLUE,
    sourcePosition: "right",
  },
  {
    id: "9",
    position: { x: -225, y: 300 },
    data: { label: "Exercise.js" },
    style: COLORS.WHITE,
    type: "output",
    targetPosition: "right",
  },
  {
    id: "10",
    position: { x: 75, y: 300 },
    data: { label: "Repair.js" },
    style: COLORS.WHITE,
    type: "output",
    targetPosition: "left",
  },
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

export const SchemaDesign = () => {
  const [nodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);

  return (
    <Page>
      <Page.Header>
        <Page.Header.Title>
          Database Design &amp; Schema Models
        </Page.Header.Title>
        <Page.Header.Description>
          Each lab is backed by a well-defined schema using structured models in{" "}
          <code>Sequelize</code>. This ensures that all data stored in our{" "}
          <code>PSQL</code> database—such as labs, exercises, users, and quiz
          records—is organized, validated, and easy to interact with across the
          backend. This page walks through how schemas are defined and organized
          inside the <code>server/database</code> folder.
        </Page.Header.Description>
      </Page.Header>
      <Page.Body className={"tw-gap-y-0"}>
        <div
          className={
            "tw-flex tw-flex-col tw-h-[26rem] tw-mb-9 tw-border-solid tw-border-2 tw-rounded-md"
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
              <code>schema.sql</code> – This file holds raw SQL definitions that
              can be used to initialize a database. When onboarding a new schema
              model, you must define the table both in the file and in the{" "}
              <code>models/</code> folder. When adding a new lab, you must add
              the lab record to the file to ensure new databases are initialized
              with the most up-to-date data.
            </li>
            <li>
              <code>models/</code> – This folder contains all{" "}
              <code>Sequelize</code> model definitions. These models mirror the
              structure of tables in the database and define the types,
              constraints, and relationships between entities. Every backend
              data entity in the platform originates from here.
            </li>
            <li>
              <code>models/labX</code> – Each lab that requires custom data will
              have its own subfolder inside <code>models/</code>. For example,
              in almost all labs, there are specialized schema files like{" "}
              <code>Exercise.js</code> and <code>Repair.js</code> that are only
              relevant to that lab. This structure keeps lab-specific data clean
              and isolated. When designing models, ensure you consider the use
              cases of the lab and design the schema accordingly. Models are a
              usually a one-way door, because once data is inserted into the
              table, it can be very difficult to modify. For this reason,
              it&apos;s important to design the schema to be as flexible as
              possible.
            </li>
            <li>
              <code>Exercise.js</code> – This file defines the schema used to
              track user progress in a lab&apos;s exercises. For example, if a
              lab&apos;s exercise requires a user to play a game, the{" "}
              <code>Exercise.js</code> model may include fields like{" "}
              <code>score</code>, <code>timePlayed</code>, and{" "}
              <code>playthrough</code> to track the user&apos;s progress. Most
              labs will have multiple exercises, so ensure you properly model
              the schema to encapsulate all the data needed for each exercise.
            </li>
            <li>
              <code>Repair.js</code> – This schema stores the details of
              specific repairs submitted by users. Each lab will have its own
              repair schema, which will include fields relevant to the
              lab&apos;s repair section. For example, <code>lab9</code> has an
              address repair section, so the repair schema will include fields
              like <code>address</code>, <code>city</code>, <code>state</code>,
              and <code>zip</code>. Similar to the <code>Exercise.js</code>{" "}
              model, ensure you properly model the schema to encapsulate all the
              data needed for each repair section.
            </li>
          </ul>
        </div>
      </Page.Body>
    </Page>
  );
};
