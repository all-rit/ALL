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
    <Page nextPage={ROUTES.SECTION_SCHEMA_DESIGN_REPAIR} completed>
      <Page.Header>
        <Page.Header.Title>
          Database Design &amp; Schema Models
        </Page.Header.Title>
        <Page.Header.Description>
          Every lab needs a solid data foundation, and that&apos;s where our
          schemas come in. We use <code>Sequelize</code> (
          <a
            href="https://sequelize.org/docs/v6/core-concepts/model-basics/"
            target="_blank"
            rel="noreferrer"
            className="tw-text-primary-blue"
          >
            link to docs
          </a>
          ) to create well-structured models for all our data in the{" "}
          <code>PostgreSQL</code> database. This includes everything from labs
          and exercises to users and quiz records. Having good schemas means our
          data stays organized, validated, and easy to work with throughout the
          backend. Let&apos;s explore how we set up these schemas in the{" "}
          <code>server/database</code> folder.
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
            preventScrolling={false}
            selectNodesOnDrag={false}
          >
            <Background />
          </ReactFlow>
        </div>
        <div>
          <ul className="tw-flex tw-flex-col tw-list-disc tw-list-inside tw-gap-y-3">
            <li>
              <code>schema.sql</code> – Think of this as our database&apos;s
              initialization script. It contains the raw SQL that creates all
              our tables from scratch. Whenever you add a new data model,
              you&apos;ll need to define it both here and in the{" "}
              <code>models/</code> folder. If you&apos;re creating a new lab,
              make sure to add its record here too, so new database setups will
              include it automatically.
            </li>
            <li>
              <code>models/</code> – This is where the magic happens for our
              data structures. Each file in this folder defines a{" "}
              <code>Sequelize</code> model that mirrors a database table. These
              models don&apos;t just describe the data&apos;s shape; they also
              establish the rules, constraints, and relationships to other
              models. Every piece of data in the project is defined here.
            </li>
            <li>
              <code>models/labX</code> – Each lab gets its own corner in the
              models folder when it needs custom data. For instance, most labs
              have their own versions of <code>Exercise.js</code> and{" "}
              <code>Repair.js</code> tailored to that lab&apos;s specific needs.
              This keeps things tidy and prevents labs from stepping on each
              other&apos;s toes. When designing these models, think carefully
              about what your lab will need to store. Setting schemas are a
              one-way door decision, meaning once the schema is set, it&apos;s
              hard to change. So aim for flexibility in your design from the
              start.
            </li>
            <li>
              <code>Exercise.js</code> – This is where we track how students are
              doing in each lab exercise. For example, if your lab has a game
              component, you might track things like <code>score</code>,{" "}
              <code>timePlayed</code>, and which <code>playthrough</code>{" "}
              attempt they&apos;re on. Most labs have multiple exercises, so
              your schema should accommodate for all the different data points
              you need to track progress.
            </li>
            <li>
              <code>Repair.js</code> – This is our repository for all the repair
              submissions students make. Each lab has its own repair
              requirements, so these schemas vary quite a bit. For example,{" "}
              <code>lab9</code> focuses on address validation, so its repair
              schema includes fields like <code>address</code>,{" "}
              <code>city</code>, <code>state</code>, and <code>zip</code>. Like
              with the Exercise models, make sure you capture all the data
              points you&apos;ll need to properly evaluate and track repairs.
            </li>
          </ul>
        </div>
      </Page.Body>
    </Page>
  );
};
