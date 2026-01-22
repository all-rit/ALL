import React, { useContext } from "react";
import lab0Context from "../../Lab0Context";
import LabButton from "../../../../all-components/LabButton";

const WireframeIntro = () => {
  const { handleNav } = useContext(lab0Context);

  const navigateNext = () => {
    handleNav("WireframeFirstGlance");
  };

  return (
    <div>
      <p className={"tw-title tw-text-left"}>Wireframing and UI/UX Design</p>
      <p className={"tw-body-text tw-py-6"}>
        Now that we have chosen an effective, experiential exercise that will
        help the user gain a better understanding of Focus Order and its
        importance in accessible software design, we now need to build what the
        user will actually see.
      </p>
      <p className={"tw-body-text"}>
        Accessible Learning Labs uses{" "}
        <a
          className={"tw-font-bold tw-text-primary-blue"}
          href={"https://www.figma.com/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Figma
        </a>
        , a highly advanced and easy to use UI/UX (User Interface/User
        Experience) wireframing tool, to develop and store our designs for labs,
        style guide, and other major projects under the Accessible Learning Labs
        umbrella.
      </p>
      <p className={"tw-body-text tw-py-6"}>
        The most important part of a lab is building a cohesive, story-like
        experience for the user throughout the lab, from the{" "}
        <strong>About</strong> and <strong>Reading</strong> sections, to the
        experiential <strong>Exercise</strong>, and wrapping up with the{" "}
        <strong>Reinforcement</strong> and <strong>Quiz</strong> sections.
      </p>
      <p className={"tw-body-text"}>
        To get started on designing the UI of the{" "}
        <strong>Accessibility to Focus Order</strong> lab, click the
        <strong> Next</strong> button below.
      </p>
      <div className={"tw-flex tw-justify-center tw-py-6"}>
        <LabButton label={"Next"} onClick={navigateNext} />
      </div>
    </div>
  );
};

export default WireframeIntro;
