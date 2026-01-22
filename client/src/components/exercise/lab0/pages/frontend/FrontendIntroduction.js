import React, { useState } from "react";
import { Page } from "../../components/Page";
import { COLORS, createEdge } from "../../../../all-components/Diagrams";
import { ReactFlow, Background } from "@xyflow/react";
import { ROUTES } from "../../../../../constants/lab0/index";
const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "client" },
    style: COLORS.YELLOW,
    type: "input",
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "src" },
    style: COLORS.PURPLE,
  },
  {
    id: "3",
    position: { x: -300, y: 200 },
    data: { label: "assets" },
    style: COLORS.GREEN,
    type: "output",
  },
  {
    id: "4",
    position: { x: -150, y: 200 },
    data: { label: "components" },
    style: COLORS.GREEN,
    type: "output",
  },
  {
    id: "5",
    position: { x: 0, y: 200 },
    data: { label: "App.js" },
    style: COLORS.GREEN,
    type: "output",
  },
  {
    id: "6",
    position: { x: 150, y: 200 },
    data: { label: "constants" },
    style: COLORS.GREEN,
    type: "output",
  },
  {
    id: "7",
    position: { x: 300, y: 200 },
    data: { label: "services" },
    style: COLORS.GREEN,
    type: "output",
  },
];

const initialEdges = [
  createEdge("1", "2", false, "step"),
  createEdge("2", "3", false, "step"),
  createEdge("2", "4", false, "step"),
  createEdge("2", "5", false, "step"),
  createEdge("2", "6", false, "step"),
  createEdge("2", "7", false, "step"),
];

export const FrontendIntroduction = () => {
  const [nodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);

  return (
    <Page nextPage={ROUTES.SECTION_BOILERPLATE} completed>
      <Page.Header>
        <Page.Header.Title>Frontend Development</Page.Header.Title>
        <Page.Header.Description>
          Our frontend is like a well-organized toolbox where everything has its
          place. We&apos;ve set it up so different pieces work together smoothly
          while staying independent. You&apos;ll find images, reusable
          components, configuration values, and communication helpers all neatly
          sorted in their own spaces. Everything lives inside the{" "}
          <code>client/</code> folder and uses React for the UI (
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noreferrer"
            className="tw-text-primary-blue"
          >
            link to docs
          </a>
          ), Context for managing data (
          <a
            href="https://react.dev/reference/react/useContext"
            target="_blank"
            rel="noreferrer"
            className="tw-text-primary-blue"
          >
            link to docs
          </a>
          ), Tailwind for styling (
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noreferrer"
            className="tw-text-primary-blue"
          >
            link to docs
          </a>
          ), and smart routing in <code>App.js</code> to tie it all together.
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
            preventScrolling={true}
            selectNodesOnDrag={false}
          >
            <Background />
          </ReactFlow>
        </div>
        <div>
          <ul className="tw-flex tw-flex-col tw-list-disc tw-list-inside tw-gap-y-3">
            <li>
              <code>assets/</code> – This is our media library. It&apos;s where
              we store all the static files the site needs – images,
              stylesheets, fonts, and even sound files for exercises or
              accessibility features. Minimize the amount of items placed here
              because the size of the repository grows as the number of assets
              increases. We don&apos;t want our repository to get too big. If
              you are adding SVGs or icons, check if any of the existing
              libraries can fit your needs (<code>react-social-icons</code>,{" "}
              <code>@fortawesome/free-solid-svg-icons</code> or{" "}
              <code>@mui/icons-material</code>).
            </li>
            <li>
              <code>components/</code> – The heart of our frontend. Here
              you&apos;ll find all our UI building blocks – from shared pieces
              like buttons and modals (in <code>all-components/</code>) to
              common structural elements (like <code>header/</code> and{" "}
              <code>footer/</code>). Lab-specific pages live in the{" "}
              <code>exercise/</code> folder, with each lab getting its own space
              (like <code>components/exercise/lab5/</code>). This keeps
              everything organized and makes it easy to find the pieces specific
              to each lab.
            </li>
            <li>
              <code>App.js</code> – The conductor of our frontend orchestra.
              This file sets up all the routes using <code>@reach/router</code>{" "}
              (
              <a
                href="https://reach.tech/router/api/Router"
                target="_blank"
                rel="noreferrer"
                className="tw-text-primary-blue"
              >
                link to docs
              </a>
              ), puts the header and footer in place, and maps out paths to
              specific lab pages like <code>/Lab5/Reading</code> or{" "}
              <code>/Lab5/Exercise</code>.
            </li>
            <li>
              <code>constants/</code> – Our library of fixed values. Each lab
              has its own constants file (like{" "}
              <code>constants/lab5/index.js</code>) that defines important
              states and values the lab needs. For example, you might find{" "}
              <code>GAME_PLAYING</code> or <code>GAME_IDLE</code> states defined
              here. By keeping these values in one place, we avoid scattering
              magic numbers and strings throughout the code, making maintenance
              much easier.
            </li>
            <li>
              <code>services/</code> – The communication hub between frontend
              and backend. This folder contains modules that talk to our API.
              There are shared helpers like <code>API.js</code> that set up
              common HTTP behavior, and lab-specific services like{" "}
              <code>ExerciseService.js</code> that handle particular API calls.
              These files mirror the backend&apos;s organization and keep
              API-related code separate from the visual components.
            </li>
          </ul>
        </div>
      </Page.Body>
    </Page>
  );
};
