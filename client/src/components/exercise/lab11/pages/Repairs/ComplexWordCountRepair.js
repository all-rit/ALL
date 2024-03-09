import React from "react";
import { PropTypes } from "prop-types";
import Repair from "../../../../body/Repair/Repair";
import {
  EXERCISE_PATH,
  EXERCISE_STATES,
  REPAIR,
} from "../../../../../constants/lab11";
import { navigate } from "@reach/router";
import { COMPLEX_WORD_COUNT_REPAIR_HEADING } from "../../../../../constants/lab11";
import useDataService from "../../hooks/useDataService";
import FogIndexCalculationData from "../../../../../constants/lab11/FogIndexCalculationData";
import ComplexWordCountRepairImplementation from "../RepairImpls/ComplexWordCountRepairImplementation";
/**
 * ComplexWordCountRepair: is a Component responsible for passing in both logic and information
 * into the universal repair component. This allows for the ability to handle the custom routing
 * and custom implementation for the complex word count repair for lab 11 literacy.
 * @param {Object} user contains user id for data state and logging user input
 * @returns Component to handle custom logic for the lab.
 */
const ComplexWordCountRepair = (props) => {
  const { user = null } = props;
  const { data, functions } = useDataService(
    user,
    EXERCISE_STATES.REPAIR_COMPLEX_WORDS,
    FogIndexCalculationData.complexWords
  );
  const { exercisePromptsState, isInputValid, isFirst } = data;
  const { handleUserInputChange, checkInputValid, fetchRepair, postRepair } =
    functions;
  return (
    <Repair
      fileName={"FogIndexCalculation.js"}
      path={`${REPAIR}/${EXERCISE_STATES.REPAIR_COMPLEX_WORDS}`}
      headingText={COMPLEX_WORD_COUNT_REPAIR_HEADING}
      validateRepair={checkInputValid}
      fetchRepair={fetchRepair}
      submitRepair={postRepair}
      repairText={[
        "In this section you will be making changes to the FogIndexCalculation.js file below to ensure the correct complex word count is being calculated.",
      ]}
      CodeImplementation={
        <ComplexWordCountRepairImplementation
          userInput={handleUserInputChange}
          fogIndexCalculationData={exercisePromptsState}
          isInputValid={isInputValid}
          isFirst={isFirst}
        />
      }
      navigateNext={() => {
        navigate(`${EXERCISE_PATH}/InformationLetterComplexWordCount`);
      }}
    />
  );
};

ComplexWordCountRepair.propTypes = {
  user: PropTypes.object,
};

export default ComplexWordCountRepair;
