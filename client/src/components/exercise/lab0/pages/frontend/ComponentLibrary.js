import React, { useState } from "react";
import { Page } from "../../components/Page";
import { COLORS, createEdge } from "../../../../all-components/Diagrams";
import { ReactFlow, Background } from "@xyflow/react";
import { ROUTES } from "../../../../../constants/lab0/index";

const initialNodes = [
  {
    id: "1",
    position: { x: 370, y: 240 },
    data: { label: "all-components" },
    style: { ...COLORS.YELLOW, width: "8rem" },
    sourcePosition: "left",
    targetPosition: "bottom",
  },
  {
    id: "2",
    position: { x: 275, y: 120 },
    data: { label: "ALLModal" },
    style: { ...COLORS.BLUE, width: "6rem" },
    sourcePosition: "bottom",
    targetPosition: "bottom",
  },
  {
    id: "3",
    position: { x: 500, y: 120 },
    data: { label: "Avatar" },
    style: { ...COLORS.BLUE, width: "6rem" },
    targetPosition: "bottom",
  },
  {
    id: "4",
    position: { x: 170, y: 240 },
    data: { label: "ProgressBar" },
    style: { ...COLORS.BLUE, width: "6rem" },
    sourcePosition: "right",
    targetPosition: "right",
  },
  {
    id: "5",
    position: { x: 570, y: 240 },
    data: { label: "LabButton" },
    style: { ...COLORS.BLUE, width: "6rem" },
    sourcePosition: "left",
    targetPosition: "left",
  },
  {
    id: "6",
    position: { x: 275, y: 360 },
    data: { label: "ALLButton" },
    style: { ...COLORS.BLUE, width: "6rem" },
    sourcePosition: "top",
    targetPosition: "top",
  },
  {
    id: "7",
    position: { x: 500, y: 360 },
    data: { label: "ALLSnackbar" },
    style: { ...COLORS.BLUE, width: "6rem" },
    sourcePosition: "top",
    targetPosition: "top",
  },
  {
    id: "8",
    position: { x: 370, y: 240 },
    data: { label: "all-components" },
    style: { ...COLORS.YELLOW, width: "8rem" },
    sourcePosition: "bottom",
    targetPosition: "bottom",
  },
  {
    id: "9",
    position: { x: 370, y: 240 },
    data: { label: "all-components" },
    style: { ...COLORS.YELLOW, width: "8rem" },
    sourcePosition: "top",
    targetPosition: "bottom",
  },
];

const initialEdges = [
  createEdge("9", "2", false, "step"),
  createEdge("9", "3", false, "step"),
  createEdge("1", "4", false, "step"),
  createEdge("1", "5", false, "step"),
  createEdge("8", "6", false, "step"),
  createEdge("8", "7", false, "step"),
];

export const ComponentLibrary = () => {
  const [nodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);

  return (
    <Page nextPage={ROUTES.SECTION_FRONTEND_TIPS_TRICKS} completed>
      <Page.Header>
        <Page.Header.Title>Component Library</Page.Header.Title>
        <Page.Header.Description>
          Our component library is where all the UI magic happens. It&apos;s a
          collection of ready-to-use interface elements we&apos;ve created to
          keep everything looking consistent and working smoothly across the
          site. Think of it like LEGO blocks for our website - snap them
          together to build more complex layouts without reinventing the wheel
          each time.
        </Page.Header.Description>
      </Page.Header>

      <Page.Body className={"tw-gap-y-0"}>
        <div
          className={
            "tw-flex tw-flex-col tw-h-[20rem] tw-mb-9 tw-border-solid tw-border-2 tw-rounded-md"
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

        <h3 className="tw-text-lg tw-font-semibold tw-mb-3">Core Components</h3>
        <p className="tw-mb-4">
          All our shared UI elements live in{" "}
          <code>src/components/all-components</code>. This is where we keep the
          building blocks that make up our interfaces. Instead of writing the
          same buttons and popups over and over in different parts of the site,
          we&apos;ve built them once, made them customizable, and made sure they
          work everywhere. They&apos;re designed with accessibility in mind and
          styled with Tailwind CSS for consistency.
        </p>

        <ul className="tw-flex tw-flex-col tw-list-disc tw-list-inside tw-gap-y-3 tw-mb-8">
          <li>
            <code>Popup</code>, <code>ALLSnackbar</code> – These are our quick
            message components. <code>Popup</code> gives you simple customizable
            banners for success or error states, while <code>ALLSnackbar</code>{" "}
            creates those temporary notifications that appear at the bottom left
            of the screen with color-coded feedback (green for success, red for
            errors).
          </li>
          <li>
            <code>ALLModal</code> – Our flexible dialog box that takes over the
            screen when you need the user&apos;s full attention. It handles
            everything from confirmation messages to complex multi-step forms.
            You can customize the header, body and footer, or provide completely
            custom content. It supports status icons, auto-timeout, and keyboard
            accessibility.
          </li>
          <li>
            <code>ALLButton</code>, <code>LabButton</code> – Two flavors of
            buttons for different contexts. <code>ALLButton</code> has our
            signature blue and yellow bordered corners for site-wide actions,
            while <code>LabButton</code> is a yellow, more traditional button
            designed specifically for lab exercises with hover effects and
            built-in accessibility features.
          </li>
          <li>
            <code>ProgressBar</code> – A smooth, animated indicator that shows
            how much time is left for an action. It counts down smoothly,
            triggers callbacks when complete, and can show either just a visual
            bar or include a numeric countdown. Perfect for timed exercises or
            indicating background processes.
          </li>
          <li>
            <code>Avatar</code> – Shows a user&apos;s profile picture or
            placeholder throughout the site. This creates consistency in how we
            represent users across profiles, comments, or any feature involving
            user identity.
          </li>
        </ul>

        <h3 className="tw-text-lg tw-font-semibold tw-my-4">
          Design Principles & Best Practices
        </h3>
        <p className="tw-mb-4">
          When building or using these components, here are some guidelines to
          keep in mind:
        </p>

        <ul className="tw-flex tw-flex-col tw-list-disc tw-list-inside tw-gap-y-3">
          <li>
            <strong>Keep it focused</strong> – Each component should do one
            thing really well. Don&apos;t try to make a button that&apos;s also
            a dropdown and a modal trigger. Components shouldn&apos;t mess with
            external state unless that&apos;s their explicit purpose. Document
            what props they need with <code>PropTypes</code> (this helps the
            next developer understand how to use them).
          </li>
          <li>
            <strong>Think in building blocks</strong> – Great components work
            well together. For example, our <code>ALLModal</code> is designed to
            let you put anything inside it - forms, buttons, custom content.
            Always ask yourself: &quot;Can someone else combine this with other
            components easily?&quot;
          </li>
          <li>
            <strong>Make it work out-of-the-box</strong> – A good component
            should have sensible defaults but let you customize when needed.
            Nobody should have to read through the entire implementation to use
            a button. At the same time, provide escape hatches for when the
            default behavior isn&apos;t quite what&apos;s needed.
          </li>
          <li>
            <strong>Style with Tailwind</strong> – We use Tailwind utility
            classes for all our styling. This keeps styles self-contained and
            prevents unexpected style conflicts. Avoid adding external CSS files
            or overriding styles from outside the component.
          </li>
          <li>
            <strong>Make it accessible</strong> – Our name is <b>Accessible</b>{" "}
            Learning Labs, so everything we produce should be accessible. Use
            proper HTML elements (real <code>buttons</code> instead of styled{" "}
            <code>div</code>s), ensure keyboard navigation works, and include
            appropriate <code>ARIA</code> labels. If a modal opens, make sure
            focus is trapped inside it until it closes.
          </li>
          <li>
            <strong>Know where things belong</strong> – If a component will be
            used across the entire app, put it in <code>all-components</code>.
            If it&apos;s specific to Lab 1, keep it in the Lab 1 folder. This
            helps us avoid cluttering the shared component space with
            specialized code.
          </li>
        </ul>

        <h3 className="tw-text-lg tw-font-semibold tw-my-4">
          When to Create a New Component
        </h3>
        <p className="tw-mb-4">
          Before you start building something new, take a quick look around.
          Someone might have already solved your problem. If you find yourself
          copying and pasting the same UI pattern in multiple places,
          that&apos;s usually a good sign it should be a shared component.
        </p>
        <p className="tw-mb-4">
          Start by thinking about what props your component will need and what
          it should return. Make sure it handles edge cases gracefully (what if
          someone forgets a required prop?). And finally, add some inline
          documentation so the next person knows how to use what you&apos;ve
          built.
        </p>
      </Page.Body>
    </Page>
  );
};
