import React, { useContext, useState } from "react";
import lab0Context from "../../Lab0Context";
import LabButton from "../../../../all-components/LabButton";
import CodeBlock from "../../../../../assets/images/lab0/Lab0-CodeBlockComponent.PNG";
import HTTPRequest from "../../../../../assets/images/lab0/Lab0-HTTPRequestComponent.PNG";
import DragAndDrop from "../../../../../assets/images/lab0/Lab0-DragAndDropComponent.PNG";
import labButton from "../../../../../assets/images/lab0/Lab0-LabButtonComponent.PNG";
// import fauxFigma from "../../../../../assets/images/lab0/Lab0-FigmaComponent.PNG";
import { SECTION_STATUSES } from "../../../../../constants/lab0";
import StatusBanner from "../../../../all-components/StatusBanner";

const WireframeComponents = () => {
  const { handleNav } = useContext(lab0Context);
  const { section, updateSectionStatus } = useContext(lab0Context);

  const navigateNext = () => {
    updateSectionStatus(section, SECTION_STATUSES.SECTION_COMPLETED);
    handleNav("ScrumIntro");
  };

  const [selectedComponent, setSelectedComponent] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [message, setMessage] = useState("");
  const [scenario, setScenario] = useState(1);

  const handleSubmit = () => {
    switch (scenario) {
      case 1:
        if (selectedComponent.componentName === "Code Block Component") {
          setScenario(2);
          setMessage("");
          setSelectedComponent(null);
        } else {
          setMessage("Try again! " + selectedComponent.errorText);
        }
        break;
      case 2:
        if (selectedComponent.componentName === "Lab Button Component") {
          setScenario(3);
          setMessage("");
          setSelectedComponent(null);
        } else {
          setMessage("Try again! " + selectedComponent.errorText);
        }
        break;
      case 3:
        if (selectedComponent.componentName === "Drag and Drop Component") {
          setIsCorrect(true);
          setMessage("Good Job!");
          setSelectedComponent(null);
        } else {
          setMessage("Try again! " + selectedComponent.errorText);
        }
        break;
    }
  };

  // id is scenario number
  const answerOne = [
    {
      id: 1,
      componentName: "HTTP Request Component",
      altText: "HTTP Request Component Figma Design",
      src: HTTPRequest,
      errorText: "There is not an HTTP request being made in this scenario.",
    },
    {
      id: 2,
      componentName: "Code Block Component",
      altText: "Code Block Component Figma Design",
      src: CodeBlock,
      errorText: 'There is not any code being "edited" in this activity.',
    },
    {
      id: 3,
      componentName: "Drag and Drop Component",
      altText: "Drag and Drop Component Figma Design",
      src: DragAndDrop,
      errorText: "", // answer for scenario 3
    },
  ];

  const answerTwo = [
    {
      id: 1,
      componentName: "Code Block Component",
      altText: "Code Block Component Figma Design",
      src: CodeBlock,
      errorText: "", // answer for scenario 1
    },
    {
      id: 2,
      componentName: "Drag and Drop Component",
      altText: "Drag and Drop Component Figma Design",
      src: DragAndDrop,
      errorText:
        "This component would not be suitable for locating and submitting a form.",
    },
    {
      id: 3,
      componentName: "Lab Button Component",
      altText: "Lab Button Component Figma Design",
      src: labButton,
      errorText: "The Lab Button component does not support dynamic elements.",
    },
  ];

  const answerThree = [
    {
      id: 1,
      componentName: "Drag and Drop Component",
      altText: "Drag and Drop Component Figma Design",
      src: DragAndDrop,
      errorText:
        "Drag and Drop could be used but the scenario activity involves editing an HTML attribute.",
    },
    {
      id: 2,
      componentName: "Lab Button Component",
      altText: "Lab Button Component Figma Design",
      src: labButton,
      errorText: "", // answer for scenario 2
    },
    {
      id: 3,
      componentName: "HTTP Request Component",
      altText: "HTTP Request Component Figma Design",
      src: HTTPRequest,
      errorText: "There is no HTTP request being made in this scenario.",
    },
  ];

  const getButton = (component) => {
    return (
      <button
        className={
          "tw-flex tw-flex-col tw-justify-start tw-bg-white tw-w-1/3 tw-border-0 tw-rounded-2xl tw-p-4 " +
          (selectedComponent &&
          selectedComponent.componentName === component.componentName
            ? "tw-shadow-md tw-translate-y-1 tw-border-4 tw-border-solid tw-border-labBlue"
            : "tw-shadow-2xl hover:tw-shadow-[0_20px_40px_rgba(0,0,0,0.45)]") +
          " tw-transition tw-duration-200 tw-ease-in-out " +
          "focus:tw-outline-none focus-visible:tw-outline-none " +
          "focus-visible:tw-ring-4 focus-visible:tw-ring-gray-300 focus-visible:tw-ring-offset-2"
        }
        aria-pressed={
          selectedComponent &&
          selectedComponent.componentName === component.componentName
        }
        onClick={() => {
          setSelectedComponent(component);
        }}
      >
        <div className={"tw-font-bold tw-font-calibri tw-py-1"}>
          {component.componentName}
        </div>
        <img
          className={"tw-p-2 tw-object-contain tw-h-56 tw-w-full tw-mx-auto"}
          src={component.src}
          alt={component.altText}
        />
      </button>
    );
  };

  return (
    <div className={"tw-text-left"}>
      <p className={"tw-title"}>Component Selection</p>
      <p className={"tw-body-text tw-pt-2"}>
        When designing a lab it is important to consider which component is best
        suited for the exercise section. You must consider the topic, the
        exercise the user will be completing, and how a component ties into the
        overall experience.
      </p>
      <p className={"tw-body-text tw-pt-2"}>
        You have already learned about various components that already exist
        within ALL. Given the possible scenario for the{" "}
        <strong>Accessibility to Focus Order</strong> lab, pick which components
        would be best suited for the activities.
      </p>
      <p className={"tw-body-text tw-pt-2"}>
        <strong>Scenario {scenario}:</strong>
      </p>
      {scenario === 1 && (
        <div>
          <blockquote className="tw-p-4 tw-m-2 tw-font-semibold">
            A website requires the user to fill in a form that has two columns
            for two people. When navigating with the &quot;Tab&quot; key, the
            focus will typically jump between fields in each column. For
            example, &quot;First Name&quot; will be followed by &quot;Last
            Name&quot;, and so on. In this website, the focus jumps between
            &quot;First Name&quot; of the first person to &quot;First Name&quot;
            of the second person instead of moving sequentially down the fields
            for one person. This zigzag focus order is not accessible and
            disrupts logical navigation.
          </blockquote>
          <p className={"tw-body-text tw-pt-2"}>
            Which ALL Website Component would be most suited for an activity
            where a user must rectify the <code>tabindex</code> in the form to
            reorder the focus order to follow a logical sequence?
          </p>
        </div>
      )}
      {scenario === 2 && (
        <div>
          <blockquote className="tw-p-4 tw-m-2 tw-font-semibold">
            On a form, there are several buttons with different functions.
            However, only one button is labeled correctly with an accessible
            name and fulfills a specific task: &quot;Submit Feedback&quot;. A
            user with accessibility needs should be able to locate this button
            using keyboard-only navigation, relying on properly focusable
            elements and descriptive screen reader labels.
          </blockquote>
          <p className={"tw-body-text tw-pt-2"}>
            Which ALL component would be most suited for an activity where a
            user must search through the form, locate the &quot;Submit
            Feedback&quot; button, and submit the form, using only the keyboard?
          </p>
        </div>
      )}
      {scenario === 3 && (
        <div>
          <blockquote className="tw-p-4 tw-m-2 tw-font-semibold">
            The header of a webpage contains several interactive elements,
            including a Home link, a search bar, navigation links such as About,
            Services, and Contact Us, a Login button, and a Language Selector
            dropdown. However, these elements are currently arranged in an
            illogical focus order, making it difficult for keyboard-only users
            to navigate efficiently.
          </blockquote>
          <p className={"tw-body-text tw-pt-2"}>
            Which ALL component would be most suited for an activity where a
            user must reorder the header elements to follow logical navigation?
          </p>
        </div>
      )}

      <div className={"tw-w-full tw-flex tw-flex-col tw-justify-center tw-p-4"}>
        <div
          className={"tw-flex tw-flex-row tw-gap-4 tw-justify-center tw-my-2"}
        >
          {getButton(answerOne.find((element) => element.id === scenario))}

          {getButton(answerTwo.find((element) => element.id === scenario))}

          {getButton(answerThree.find((element) => element.id === scenario))}
        </div>
      </div>
      {message && (
        <StatusBanner style={`${!isCorrect ? "tw-bg-error" : "tw-bg-success"}`}>
          {message}
        </StatusBanner>
      )}
      <div className={"tw-flex tw-justify-center tw-py-6"}>
        <LabButton
          onClick={isCorrect ? navigateNext : handleSubmit}
          label={isCorrect ? "Next" : "Submit"}
        />
      </div>
    </div>
  );
};

export default WireframeComponents;
