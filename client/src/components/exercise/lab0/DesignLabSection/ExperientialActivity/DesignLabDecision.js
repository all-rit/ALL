import React, { useContext } from "react";
import LabButton from "../../../../all-components/LabButton";
import Lab0Context from "../../Lab0Context";

const DesignLabDecision = () => {
  const { handleNav } = useContext(Lab0Context);

  const navToExperientialIntro = () => {
    handleNav("ExperientialIntro");
  };

  return (
    <div className={"tw-flex tw-flex-col tw-text-left tw-body-text"}>
      <h2 className={"tw-title"}> New Lab Decision </h2>
      <p className={"tw-py-6"}>
        After meetings with the Accessible Learning Labs principle investigators
        and the team of accessibility specialists, they have chosen to move
        forward with your idea of the{" "}
        <strong>Accessibility to Focus Order</strong> lab!
      </p>
      <p>
        Click the <strong>Next</strong> button below to move on to the next
        section where you will learn how to brainstorm and create an
        experiential exercise for the accepted lab.
      </p>
      <div className={"tw-flex tw-justify-center tw-py-6"}>
        <LabButton label={"Next"} onClick={navToExperientialIntro} />
      </div>
    </div>
  );
};

export default DesignLabDecision;
