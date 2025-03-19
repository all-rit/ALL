import React, { useContext } from "react";
import lab0Context from "../../Lab0Context";
import LabButton from "../../../../all-components/LabButton";

const WireframeExercise = () => {
  const { handleNav } = useContext(lab0Context);

  const navigateNext = () => {
    handleNav("WireframeReinforceQuiz");
  };

  return (
    <div className={"tw-text-left"}>
      <h3 className="tw-text-2xl tw-font-bold tw-pt-4">Exercise</h3>
      <p className={"tw-body-text tw-pt-2"}>
        The <strong>Exercise</strong> section is a interactive activity that
        invites the user to apply the concepts they have learned throughout the
        lab. This can involve the user being prompted to enter information
        through text boxes, carry out an action, or interact with one of the
        multiple components that ALL provides.
      </p>

      <p className={"tw-body-text tw-pt-2"}>
        Take a look at the component library that ALL has to offer for various
        exercises:
      </p>
      <div
        className={
          "tw-text-center tw-content-center tw-font-bold tw-bg-primary-yellow tw-mx-16 tw-h-36 tw-my-16"
        }
      >
        BENTO BOX
      </div>
      <p className="tw-body-text tw-justify-center">
        Click the <strong> Next</strong> button to continue.
      </p>
      <div className={"tw-flex tw-justify-center tw-py-6"}>
        <LabButton label={"Next"} onClick={navigateNext} />
      </div>
    </div>
  );
};

export default WireframeExercise;
