import { React } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";
import LabButton from "src/components/all-components/LabButton";

const IDEIntroduction = () => {
  const handleContinue = () => {
    startExercise();
    navigate("/Lab13/Exercise/IDEExercise");
  };

  return (
    <div className="tw-space-y-6 mx-auto tw-flex tw-flex-col">
      <h1 className="tw-text-left tw-font-bold">AI Cognitive Bias Repair</h1>
      <p className="tw-text-left">
        Let&apos;s tweak our AI chatbot to reduce the chances of a human
        experiencing cognitive biases.
      </p>
      <div className="tw-space-y-4">
        <p>
          Click <strong>&quot;Continue to Repair&quot;</strong> to proceed!
        </p>
        <LabButton onClick={handleContinue} label="Continue to Repair" />
      </div>
    </div>
  );
};

export default IDEIntroduction;
