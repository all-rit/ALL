import React, { useContext, useState } from "react";
import lab0Context from "../../Lab0Context";
import LabButton from "../../../../all-components/LabButton";
import CodeBlock from "../../../../../assets/images/lab0/Lab0-CodeBlockComponent.PNG";
import HTTPRequest from "../../../../../assets/images/lab0/Lab0-HTTPRequestComponent.PNG";
import DragAndDrop from "../../../../../assets/images/lab0/Lab0-DragAndDropComponent.PNG";

const WireframeComponents = () => {
  const { handleNav } = useContext(lab0Context);

  const navigateNext = () => {
    handleNav("WireframeFirstGlance");
  };

  const [selectedComponent, setSelectedComponent] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (selectedComponent === "CodeBlock") {
      setIsCorrect(true);
      setMessage("Correct! Well done!");
    } else {
      setMessage("Try again!");
    }
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
        <strong>Accessibility to Focus Order</strong> lab, pick which component
        would be best suited for the activity.
      </p>
      <blockquote className="tw-p-4 tw-m-2 tw-font-semibold">
        A website form has two columns: one for Person 1 and another for Person
        2. When navigating with the Tab key, the focus jumps between fields in
        each column (e.g., &quot;First Name&quot; of Person 1 to &quot;First
        Name&quot; of Person 2) instead of moving sequentially down the fields
        for one person. This zigzag focus order is not accessible and disrupts
        logical navigation.
      </blockquote>
      <p className={"tw-body-text tw-pt-2"}>
        Which component would be most suited for an activity where a user must
        rectify the <code>tabindex</code> in the form to reorder the focus
        order?
      </p>

      <div className={"tw-w-full tw-flex tw-flex-col tw-justify-center tw-p-4"}>
        <div
          className={"tw-flex tw-flex-row tw-gap-4 tw-justify-center tw-my-2"}
        >
          <button
            className={
              "tw-flex tw-flex-col tw-justify-start tw-bg-white tw-w-1/3 tw-border-0 tw-rounded-2xl " +
              "focus:tw-border-4 focus:tw-border-solid focus:tw-border-labBlue"
            }
            onClick={() => {
              setSelectedComponent("HTTP");
            }}
          >
            <div className={"tw-font-bold tw-font-calibri tw-py-1"}>
              HTTP Request
            </div>
            <img
              className={"tw-flex tw-p-2 tw-object-contain"}
              src={HTTPRequest}
              alt={"HTTP Request Component Figma Design"}
            />
          </button>
          <button
            className={
              "tw-flex tw-flex-col tw-justify-start tw-bg-white tw-w-1/3 tw-border-0 tw-rounded-2xl " +
              "focus:tw-border-4 focus:tw-border-solid focus:tw-border-labBlue"
            }
            onClick={() => {
              setSelectedComponent("CodeBlock");
            }}
          >
            <div className={"tw-font-bold tw-font-calibri tw-py-1"}>
              Code Block
            </div>
            <img
              className={"tw-flex tw-p-2 tw-object-contain"}
              src={CodeBlock}
              alt={"Code Block Component Figma Design"}
            />
          </button>
          <button
            className={
              "tw-flex tw-flex-col tw-justify-start tw-bg-white tw-w-1/3 tw-border-0 tw-rounded-2xl " +
              "focus:tw-border-4 focus:tw-border-solid focus:tw-border-labBlue"
            }
            onClick={() => {
              setSelectedComponent("DragAndDrop");
            }}
          >
            <div className={"tw-font-bold tw-font-calibri tw-py-1"}>
              Drag and Drop
            </div>
            <img
              className={"tw-flex tw-p-2 tw-object-contain"}
              src={DragAndDrop}
              alt={"Drag and Drop Component Figma Design"}
            />
          </button>
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
