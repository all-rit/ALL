import React from "react";
import { useLab13 } from "../Lab13Context";
import Repair from "src/components/body/Repair/Repair";
import PropTypes from "prop-types";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";
import IDEExerciseImplementation from "./repairs/IDEExerciseImplementation";

const IDEExercise = () => {
  const {
    exercisePromptsState,
    validInputs,
    isFirst,
    handleUserInputChange,
    checkInputValid,
    fetchRepair,
    postRepair,
  } = useLab13();

  const handleContinue = () => {
    startExercise();
    navigate("/Lab13/Exercise/PanelswithIDEFixes");
  };

  const data = {
    exercisePromptsState,
    validInputs,
    isFirst,
  };

  const functions = {
    handleUserInputChange,
    checkInputValid,
    fetchRepair,
    postRepair,
  };

  return (
    <Repair
      data={data}
      functions={functions}
      headingText={"Disclaimers, Confidence Scores and Citations"}
      repairText={[
        "Fill in the blanks to add the disclaimers, confidence scores, and citations to the chatbot outputs.",
      ]}
      files={[
        {
          fileId: 0,
          fileName: "ALLIEChatbot.js",
          implementation: IDEExerciseImplementation,
        },
      ]}
      navigateNext={handleContinue}
    />
  );
};

IDEExercise.propTypes = {
  exercisePromptsState: PropTypes.object,
  validInputs: PropTypes.object,
  isFirst: PropTypes.bool,
};

export default IDEExercise;
