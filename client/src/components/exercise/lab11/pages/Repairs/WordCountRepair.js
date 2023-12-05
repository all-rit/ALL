import React from "react";
import { PropTypes } from "prop-types";
import Repair from "../../../../body/Repair/Repair";
import {
  EXERCISE_PATH,
  EXERCISE_STATES,
  REPAIR,
} from "../../../../../constants/lab11";
import { navigate } from "@reach/router";
import { WORD_COUNT_REPAIR_HEADING } from "../../../../../constants/lab11";
import useDataService from "../../hooks/useDataService";
import WordCountRepairImplementation from "../RepairImpls/WordCountRepairImplementation";
import FogIndexCalculationData from "../../../../../constants/lab11/FogIndexCalculationData";
/**
 * WordCountRepair: is a Component responsible for passing in both logic and information
 * into the universal repair component. This allows for the ability to handle the custom routing
 * and custom implementation for the word count repair for lab 11 literacy.
 * @param {Object} user contains user id for data state and logging user input
 * @returns Component to handle custom logic for the lab.
 */
const WordCountRepair = (props) => {
  const { user = null } = props;
  const { data, functions } = useDataService(
    user,
    EXERCISE_STATES.REPAIR_WORD_COUNT,
    FogIndexCalculationData.words
  );
  const { exercisePromptsState } = data;
  const { handleUserInputChange, checkInputValid, fetchRepair, postRepair } =
    functions;
  return (
    <Repair
      fileName={"FogIndexCalculation.js"}
      path={`${REPAIR}/${EXERCISE_STATES.REPAIR_WORD_COUNT}`}
      headingText={WORD_COUNT_REPAIR_HEADING}
      validateRepair={checkInputValid}
      fetchRepair={() => fetchRepair()}
      submitRepair={() => postRepair()}
      repairText={[
        "In this section you will be making changes to the FogIndexCalculation.js file below to ensure the correct word count is being calculated.",
      ]}
      CodeImplementation={
        <WordCountRepairImplementation
          userInput={handleUserInputChange}
          fogIndexCalculationData={exercisePromptsState}
        />
      }
      navigateNext={() => {
        navigate(`${EXERCISE_PATH}/InformationLetterWordCount`);
      }}
    />
  );
};

WordCountRepair.propTypes = {
  user: PropTypes.object,
};

export default WordCountRepair;
