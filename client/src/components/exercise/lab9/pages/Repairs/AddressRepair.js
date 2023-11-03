import React from "react";
import { PropTypes } from "prop-types";
import Repair from "../../../../body/Repair/Repair";
import { GAME_STATES, REPAIR } from "../../../../../constants/lab9";
import useRepairAddress from "../../hooks/useRepairAddress";
import AddressRepairCodeBlock from "../AddressRepairCodeBlock";
/**
 * AddressRepair: is a Component responsible for passing in both logic and information
 * into the universal repair component. This allows for the ability to handle the custom routing
 * and custom implementation for the address repair for lab 9 localization.
 * @param {String} user contains user id for data state and logging user input
 * @returns Component to handle custom logic for the lab.
 */
const AddressRepair = (user = "") => {
  // eslint-disable-next-line no-unused-vars
  const { data, functions } = useRepairAddress(user);
  const { exercisePromptsState } = data;
  const { handleUserInputChange, checkInputValid } = functions;
  return (
    <Repair
      fileName={"AddressForm.js"}
      path={`${REPAIR}/${GAME_STATES.REPAIR_ADDRESS_FORM}`}
      validateRepair={checkInputValid}
      repairText={[
        "In this section you will be making changes in the file below",
      ]}
      CodeImplementation={
        <AddressRepairCodeBlock
          addressForms={exercisePromptsState}
          userInput={handleUserInputChange}
        />
      }
      navigateNext={() => {}}
    />
  );
};

AddressRepair.propTypes = {
  user: PropTypes.string,
};

export default AddressRepair;
