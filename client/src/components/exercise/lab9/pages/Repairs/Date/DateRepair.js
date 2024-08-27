import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Repair from "../../../../../body/Repair/Repair";
import DateFormData from "../../../../../../constants/lab9/DateFormData";
import {
  HEADINGS,
  EXERCISE_STATES,
  REPAIR,
} from "../../../../../../constants/lab9";
import DateFormRepair from "./DateFormRepair";
import useDataService from "../../../hooks/useDataService";
import { navigate } from "@reach/router";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

/**
 * Date Repair is a component that is responsible for passing logic into the universal
 * repair page component, what this allows us to do is call the re-useable repair component
 * with custom logic pertaining to that repair section.
 * @param {Object} user contains user id for data state and logging user input
 * @returns
 */

const DateRepair = (props) => {
  const { user } = props;
  const { actions } = useMainStateContext();
  const { data, functions } = useDataService(
    user,
    EXERCISE_STATES.REPAIR_DATE_REPAIR,
    DateFormData.countries,
  );

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleNav = () => {
    navigate("/Lab9/Exercise/page");
  };
  const { exercisePromptsState, isInputValid, isFirst } = data;
  const { handleUserInputChange, checkInputValid, fetchRepair, postRepair } =
    functions;
  return (
    <Repair
      fileName={"DateFormat.js"}
      path={`${REPAIR}/${EXERCISE_STATES.REPAIR_DATE_REPAIR}`}
      headingText={HEADINGS.REPAIR_DATE_REPAIR_HEADING}
      validateRepair={checkInputValid}
      fetchRepair={fetchRepair}
      submitRepair={postRepair}
      repairText={[
        "In this section you will be making changes to the repair data file below",
      ]}
      CodeImplementation={
        <DateFormRepair
          dateForms={exercisePromptsState}
          userInput={handleUserInputChange}
          isInputValid={isInputValid}
          isFirst={isFirst}
        />
      }
      navigateNext={() => handleNav()}
    />
  );
};

DateRepair.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.object,
};
export default DateRepair;
