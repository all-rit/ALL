import React from "react";
import { PropTypes } from "prop-types";
import useDataService from "../../lab9/hooks/useDataService";
import Repair from "src/components/body/Repair/Repair";
import { navigate } from "@reach/router";
import {
  IDENTITY_REPAIR_HEADING,
  EXERCISE_STATES,
  REPAIR,
  EXERCISE_PATH,
} from "src/constants/lab12/index";
import IdentityRepairImplementation from "./repairs/IdentityRepairImplementation";

const IdentityRepair = (props) => {
  const { user = null } = props;
  const { data, functions } = useDataService(
    user,
    EXERCISE_STATES.IDENTITY_REPAIR,
  );
  const { exercisePromptsState, isInputValid, isFirst } = data;
  const { handleUserInputChange, checkInputValid, fetchRepair, postRepair } =
    functions;

  return (
    <Repair
      fileName={"IdentityForm.js"}
      path={`${REPAIR}/${EXERCISE_STATES.IDENTITY_REPAIR}`}
      headingText={IDENTITY_REPAIR_HEADING}
      validateRepair={checkInputValid}
      fetchRepair={fetchRepair}
      submitRepair={postRepair}
      repairText={[
        "In this section you will be making changes to the IdentityForm.js file that handles inputs in the previous form.",
      ]}
      CodeImplementation={
        <IdentityRepairImplementation
          userInput={handleUserInputChange}
          identityData={exercisePromptsState}
          isInputValid={isInputValid}
          isFirst={isFirst}
        />
      }
      navigateNext={() => {
        navigate(`${EXERCISE_PATH}/FixedForm`);
      }}
    />
  );
};

IdentityRepair.propTypes = {
  user: PropTypes.object,
};

export default IdentityRepair;
