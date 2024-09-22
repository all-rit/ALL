import useMainStateContext from "../../../../reducers/MainContext";
import useDataService from "../../lab12/hooks/useDataService";
import {
  DATABASE_REPAIR_HEADING,
  EXERCISE_PATH,
  EXERCISE_STATES,
  REPAIR,
} from "../../../../constants/lab12";
import React, { useEffect } from "react";
import { EXERCISE_PLAYING } from "../../../../constants";
import Repair from "../../../body/Repair/Repair";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";
import DatabaseRepairImplementation from "./repairs/DatabaseRepairImplementation";
import IdentityDatabaseData from "../../../../constants/lab12/DatabaseRepair";

/**
 * DatabaseRepair is a component that is responsible for passing logic into the universal
 * repair page component, what this allows us to do is call the re-useable repair component
 * with custom logic pertaining to that repair section.
 * @returns
 */

const DatabaseRepair = () => {
  const { actions, state } = useMainStateContext();
  const user = state.main.user;
  const { data, functions } = useDataService(
    user,
    EXERCISE_STATES.DATABASE_REPAIR,
    IdentityDatabaseData.inputData,
  );
  const { exercisePromptsState, isInputValid, isFirst } = data;
  const { handleUserInputChange, checkInputValid, fetchRepair, postRepair } =
    functions;

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
    console.warn(
      "Input Data array: ",
      exercisePromptsState,
      ", isInputValid: ",
      isInputValid,
    );
  }, []);

  return (
    <Repair
      fileName={"schema.sql"}
      path={`${REPAIR}/${EXERCISE_STATES.DATABASE_REPAIR}`}
      headingText={DATABASE_REPAIR_HEADING}
      validateRepair={checkInputValid}
      fetchRepair={fetchRepair}
      submitRepair={postRepair}
      repairText={[
        "In this section you will be making changes to the sql database file that  creates the table for our user's data.",
      ]}
      CodeImplementation={
        <DatabaseRepairImplementation
          userInput={handleUserInputChange}
          identityData={exercisePromptsState}
          isInputValid={isInputValid}
          isFirst={isFirst}
        />
      }
      navigateNext={() => {
        navigate(`${EXERCISE_PATH}/PreCorrect`);
      }}
      repairComplete
    />
  );
};

DatabaseRepair.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.object,
  state: PropTypes.object,
};

export default DatabaseRepair;
