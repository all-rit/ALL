import React, { useContext } from "react";
import LabButton from "../../../../all-components/LabButton";
import Lab0Context from "../../Lab0Context";

const DesignLabEnd = () => {
  const { handleNav } = useContext(Lab0Context);

  return (
    <div className={"p-3"}>
      <h2 className={"tw-title tw-text-left"}> Designing a Lab Complete</h2>
      <div className={"tw-py-6"}>
        <p className={"tw-body-text"}>
          <strong>Congratulations! </strong>
        </p>
        <p className={"tw-body-text tw-py-6"}>
          You have now completed all sections of the{" "}
          <strong>Designing a Lab</strong> section of this lab.
        </p>
        <p className={"tw-body-text"}>
          To return to the Lab 0 table of contents, click the{" "}
          <strong> Return to Lab Contents</strong> button. To move on to the
          next portion of the lab, <strong>Developing a Lab</strong>, click the{" "}
          <strong> Next Section </strong> button.
        </p>
      </div>
      <div className={"tw-flex tw-gap-x-4 tw-justify-center tw-py-6"}>
        <LabButton
          label={"Return to Lab Contents"}
          onClick={() => handleNav("/")}
        />
      </div>
    </div>
  );
};

export default DesignLabEnd;
