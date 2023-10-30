import React from "react";
import { PropTypes } from "prop-types";
import Repair from "../../../../body/Repair/Repair";
import {
  EXERCISE_PATH,
  EXERCISE_STATES,
  REPAIR,
} from "../../../../../constants/lab11";
import useWordCountRepair from "../../hooks/useWordCountRepair";
import { navigate } from "@reach/router";
/**
 * WordCountRepair: is a Component responsible for passing in both logic and information
 * into the universal repair component. This allows for the ability to handle the custom routing
 * and custom implementation for the address repair for lab 9 localization.
 * @param {String} user contains user id for data state and logging user input
 * @returns Component to handle custom logic for the lab.
 */
const WordCountRepair = (user = "") => {
  // eslint-disable-next-line no-unused-vars
  const { data, functions } = useWordCountRepair(user);
  return (
    <Repair
      path={`${REPAIR}/${EXERCISE_STATES.REPAIR_WORD_COUNT}`}
      CodeImplementation={() => {}}
      navigateNext={() => {
        navigate(`${EXERCISE_PATH}/InformationLetterWordCount`);
      }}
      headingText={"Word Count Repair"}
      repairText={["Lorem ipsum dolor sit amet, consectetur adipiscing elit."]}
      fileName={"FogIndexCalculation.js"}
      validateRepair={() => {}}
    />
  );
};

WordCountRepair.propTypes = {
  user: PropTypes.object.isRequired,
};

export default WordCountRepair;
