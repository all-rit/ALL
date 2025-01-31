import React from "react";
import LabButton from "../../all-components/LabButton";
import { navigate } from "@reach/router";

const SelectExercise = () => {
  const handleNav = (route) => {
    navigate(`/Lab0/Exercise/${route}`);
  };

  return (
    <div className={"tw-p-3"}>
      <div className={"tw-flex tw-flex-col"}>
        <h2 className={"tw-title tw-text-left"}>Select Exercise</h2>
        <p className={"tw-py-6 tw-body-text"}>
          You will now have the opportunity to learn how to build the lab from
          inception, ideation, and planning, all the way to development and
          becoming deeply familiar with our internal component library, best
          practices, and tech stack.
        </p>
        <p className={"tw-body-text"}>
          {" "}
          To learn more about writing and creating a lab, click the{" "}
          <strong>How to Write a Lab</strong> button.
        </p>
        <p className={"tw-body-text tw-py-6"}>
          To learn how to develop a lab for Accessible Learning Labs, click the{" "}
          <strong>How to Develop a Lab</strong> button.
        </p>
      </div>
      <div
        className={"tw-flex tw-flex-row tw-gap-x-3 tw-justify-center tw-py-6"}
      >
        <LabButton
          label={"How to Write a Lab"}
          onClick={() => handleNav("WriteLabIntro")}
        />
        <LabButton
          label={"How to Develop a Lab"}
          onClick={() => handleNav("DevelopLabIntro")}
        />
      </div>
    </div>
  );
};

export default SelectExercise;
