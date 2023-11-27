/* eslint-disable no-unused-vars */
import React from "react";
import { PropTypes } from "prop-types";
import Repair from "../../../../body/Repair/Repair";
import { GAME_STATES, REPAIR } from "../../../../../constants/lab9";
import useDataService from "../hooks/useDataService";
import { AddressRepairData } from "../../../../../constants/lab9/AddressRepairData";
import AddressRepairCodeBlock from "../AddressRepairCodeBlock";
/**
 * AddressRepair: is a Component responsible for passing in both logic and information
 * into the universal repair component. This allows for the ability to handle the custom routing
 * and custom implementation for the address repair for lab 9 localization.
 * @param {String} user contains user id for data state and logging user input
 * @returns Component to handle custom logic for the lab.
 */
const AddressRepair = ({ user }) => {
  const { data, functions } = useDataService(
    user,
    GAME_STATES.REPAIR_ADDRESS_FORM,
    AddressRepairData.countries
  );
  const { exercisePromptsState } = data;
  const { handleUserInputChange, checkInputValid, fetchRepair, postRepair } =
    functions;
  return (
    <Repair
      fileName={"AddressFormat.js"}
      path={`${REPAIR}/${GAME_STATES.REPAIR_ADDRESS_FORM}`}
      headingText={""}
      validateRepair={checkInputValid}
      fetchRepair={() => fetchRepair()}
      submitRepair={() => postRepair()}
      repairText={[
        "Let's localize the address for our newsletter subscription form. Click 'Repair' to make the appropriate changes.",
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
