import React, { useContext } from "react";
import Lab0Context from "../Lab0Context";
import LabButton from "../../../all-components/LabButton";

const DesignLabIntroduction = () => {
  const { handleNav } = useContext(Lab0Context);

  const navigateToScrumIntro = () => {
    handleNav("ScrumIntro");
  };

  return (
    <div className={"tw-flex tw-flex-col tw-text-left tw-p-3"}>
      <h2 className={"tw-title"}> Designing a Lab Introduction </h2>
      <p className={"tw-py-6"}>
        To ensure a lab can go from inception to production, a number of steps
        must be taken to brainstorm lab ideas, plan development, and decide
        overall workload in order for the development process to go in a smooth
        and predictable manner.
      </p>
      <p className={""}>
        You will now have the opportunity to flush out ideas for a new lab, as
        well as plan a sprint schedule to while learning basic principles of
        SCRUM and Agile development.
      </p>
      <div className={"tw-py-6 tw-w-full tw-justify-center tw-flex tw-gap-x-3"}>
        <LabButton label={"Lab Ideation"} onClick={navigateToScrumIntro} />
        <LabButton label={"Sprint Planning"} onClick={navigateToScrumIntro} />
      </div>
    </div>
  );
};

export default DesignLabIntroduction;
