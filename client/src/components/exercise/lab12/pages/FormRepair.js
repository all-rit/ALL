import React, { useEffect } from "react";
import PropTypes from "prop-types";
import useDataService from "../../lab12/hooks/useDataService";
import Repair from "src/components/body/Repair/Repair";
import { navigate } from "@reach/router";
import {
  FORM_REPAIR_HEADING,
  EXERCISE_STATES,
  REPAIR,
  EXERCISE_PATH,
} from "src/constants/lab12/index";
import FormRepairImplementation from "./repairs/FormRepairImplementation";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";
import IdentityFormData from "../../../../constants/lab12/FormRepair";

const FormRepair = () => {
  const { actions, state } = useMainStateContext();
  const user = state.main.user;
  const { data, functions } = useDataService(
    user,
    EXERCISE_STATES.FORM_REPAIR,
    IdentityFormData.inputData,
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
      fileName={"IdentityForm.js"}
      path={`${REPAIR}/${EXERCISE_STATES.FORM_REPAIR}`}
      headingText={FORM_REPAIR_HEADING}
      validateRepair={checkInputValid}
      fetchRepair={fetchRepair}
      submitRepair={postRepair}
      repairText={[
        "In this section you will be making changes to the IdentityForm.js file that handles inputs in the previous form.",
      ]}
      CodeImplementation={
        <FormRepairImplementation
          userInput={handleUserInputChange}
          identityData={exercisePromptsState}
          isInputValid={isInputValid}
          isFirst={isFirst}
        />
      }
      navigateNext={() => {
        navigate(`${EXERCISE_PATH}/FixedForm`);
      }}
      repairComplete
    />
  );
};

FormRepair.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.object,
  state: PropTypes.object,
};

export default FormRepair;
