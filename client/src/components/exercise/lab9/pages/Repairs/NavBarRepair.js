import React from "react";
import { PropTypes } from "prop-types";
import Repair from "../../../../body/Repair/Repair";
import { HEADINGS, GAME_STATES, REPAIR } from "../../../../../constants/lab9";
import useDataService from "../hooks/useDataService";
import NavBarData from "../../../../../constants/lab9/NavBarData";
import NavRepairView from "../NavBarRepairView";
import { navigate } from "@reach/router";
/**
 * NavBarRepair() is a react component that is responsible for passing down
 * the visual information needed to render the repair page itself. This
 * component will integrate the individualized custom hook to handle custom logic.
 * @param {Object} user contains user id for data state and logging user input
 * @returns Repair Component to render to the browser.
 */
const NavBarRepair = ({ user }) => {
  const { data, functions } = useDataService(
    user,
    GAME_STATES.REPAIR_NAV_BAR,
    NavBarData.navItems
  );
  const { exercisePromptsState } = data;
  const { handleUserInputChange, checkInputValid, fetchRepair, postRepair } =
  functions;
  return (
    <Repair
      fileName={"NavFormat.js"}
      path={`${REPAIR}/${GAME_STATES.REPAIR_NAV_BAR}`}
      headingText={HEADINGS.REPAIR_ADDRESS_HEADING}
      validateRepair={checkInputValid}
      fetchRepair={() => fetchRepair()}
      submitRepair={() => postRepair()}
      repairText={[
        "in this section you will be making changes to the repair data file below",
      ]}
      CodeImplementation={
        <NavRepairView
          dateForms={exercisePromptsState}
          userInput={handleUserInputChange}
          repairError={checkInputValid}
        />
      }
      navigateNext={() => {
        navigate("/Lab9/Exercise/page");
      }}
    />
  );
};

NavBarRepair.propTypes = {
  user: PropTypes.object,
};

export default NavBarRepair;
