import React, { useContext, useState } from "react";
import lab0Context from "../../Lab0Context";
import LabButton from "../../../../all-components/LabButton";
import CodeBlock from "../../../../../assets/images/lab0/Lab0-CodeBlockComponent.PNG";
import HTTPRequest from "../../../../../assets/images/lab0/Lab0-HTTPRequestComponent.PNG";
import DragAndDrop from "../../../../../assets/images/lab0/Lab0-DragAndDropComponent.PNG";
import labButton from "../../../../../assets/images/lab0/Lab0-LabButtonComponent.PNG";
import fauxFigma from "../../../../../assets/images/lab0/Lab0-FigmaComponent.PNG";
import { SECTION_STATUSES } from "../../../../../constants/lab0";

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
        if (selectedComponent.componentName === "Code Block") {
          setScenario(2);
          setMessage("");
        } else {
          setMessage("Try again! " + selectedComponent.errorText);
        }
        break;
      case 2:
        if (selectedComponent.componentName === "Lab Button") {
          setScenario(3);
          setMessage("");
        } else {
          setMessage("Try again! " + selectedComponent.errorText);
        }
        break;
      case 3:
        if (selectedComponent.componentName === "Drag and Drop") {
          setIsCorrect(true);
          setMessage("Good Job!");
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
      componentName: "HTTP Request",
      altText: "HTTP Request Component Figma Design",
      src: HTTPRequest,
      errorText: "There is not an HTTP request being made in this scenario.",
    },
    {
      id: 2,
      componentName: "Code Block",
      altText: "Code Block Component Figma Design",
      src: CodeBlock,
      errorText: 'There is not any code being "edited" in this activity.',
    },
    {
      id: 3,
      componentName: "Drag and Drop",
      altText: "Drag and Drop Component Figma Design",
      src: DragAndDrop,
      errorText: "", // answer for scenario 3
    },
  ];

  const answerTwo = [
    {
      id: 1,
      componentName: "Code Block",
      altText: "Code Block Component Figma Design",
      src: CodeBlock,
      errorText: "", // answer for scenario 1
    },
    {
      id: 2,
      componentName: "Drag and Drop",
      altText: "Drag and Drop Component Figma Design",
      src: DragAndDrop,
      errorText:
        "This component would not be suitable for locating and submitting a form.",
    },
    {
      id: 3,
      componentName: "Faux Figma",
      altText: "Faux Figma Component Figma Design",
      src: fauxFigma,
      errorText: "The Faux Figma component does not support dynamic elements.",
    },
  ];

  const answerThree = [
    {
      id: 1,
      componentName: "Drag and Drop",
      altText: "Drag and Drop Component Figma Design",
      src: DragAndDrop,
      errorText:
        "Drag and Drop could be used but the scenario activity involves editing an HTML attribute.",
    },
    {
      id: 2,
      componentName: "Lab Button",
      altText: "Lab Button Component Figma Design",
      src: labButton,
      errorText: "", // answer for scenario 2
    },
    {
      id: 3,
      componentName: "HTTP Request",
      altText: "HTTP Request Component Figma Design",
      src: HTTPRequest,
      errorText: "There is no HTTP request being made in this scenario.",
    },
  ];

  const getButton = (component) => {
    return (
      <button
        className={
          "tw-flex tw-flex-col tw-justify-start tw-bg-white tw-w-1/3 tw-border-0 tw-rounded-2xl " +
          "focus:tw-border-4 focus:tw-border-solid focus:tw-border-labBlue"
        }
        onClick={() => {
          setSelectedComponent(component);
        }}
      >
        <div className={"tw-font-bold tw-font-calibri tw-py-1"}>
          {component.componentName}
        </div>
        <img
          className={"tw-flex tw-p-2 tw-object-contain"}
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
            A website form has two columns: one for Person 1 and another for
            Person 2. When navigating with the Tab key, the focus jumps between
            fields in each column (e.g., &quot;First Name&quot; of Person 1 to
            &quot;First Name&quot; of Person 2) instead of moving sequentially
            down the fields for one person. This zigzag focus order is not
            accessible and disrupts logical navigation.
          </blockquote>
          <p className={"tw-body-text tw-pt-2"}>
            Which component would be most suited for an activity where a user
            must rectify the <code>tabindex</code> in the form to reorder the
            focus order?
          </p>
        </div>
      )}
      {scenario === 2 && (
        <div>
          <blockquote className="tw-p-4 tw-m-2 tw-font-semibold">
            On a form, there are several buttons with different functions.
            However, only one button is labeled correctly with an accessible
            name and fulfills a specific task: &quot;Submit Feedback&quot; A
            user with accessibility needs must locate this button using
            keyboard-only navigation, ensuring they rely on proper focusable
            elements and screen reader hints.
          </blockquote>
          <p className={"tw-body-text tw-pt-2"}>
            Which component would be most suited for an activity where a user
            must search through the form, locate the &quot;Submit Feedback&quot;
            button, and submit the form, using only the keyboard?
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
            Which component would be most suited for an activity where a user
            must reorder the header elements to follow logical navigation?
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
        <p
          className={`${!isCorrect ? "tw-bg-error" : "tw-bg-success"} tw-text-center tw-w-1/2 tw-justify-self-center tw-p-4 tw-my-1 
            tw-text-white tw-rounded-md tw-mb-3`}
        >
          {message}
        </p>
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
