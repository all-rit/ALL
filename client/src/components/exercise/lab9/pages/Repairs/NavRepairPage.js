import React from "react";
import PropTypes from "prop-types";
import Repair from "../../../../body/Repair/Repair";
import { HEADINGS, GAME_STATES, REPAIR } from "../../../../../constants/lab9";
import NavBarRepair from "../NavBarRepair";
import useDataService from "../hooks/useDataService";
import { navigate } from "@reach/router";
import  NavBarData  from "../../../../../constants/lab9/NavBarData";

/**
 * Nav Repair is a component that is responsible for passing logic into the universal
 * repair page component, what this allows us to do is call the re-useable repair component
 * with custom logic pertaining to that repair section.
 * @param {Object} user contains user id for data state and logging user input
 * @returns
 */

const NavRepairPage = ({ user }) => {
  const { data, functions } = useDataService(
    user,
    GAME_STATES.REPAIR_NAV_BAR,
    NavBarData.navItems
  );
  const { exercisePromptsState } = data;
  const { handleUserInputChange, checkInputValid, fetchRepair, postRepair } =
    functions;
  const handleNav = () => {
    navigate("/Lab9/Exercise/page");
  };
  return (
    <Repair
      fileName={"NavBar.js"}
      path={`${REPAIR}/${GAME_STATES.REPAIR_NAV_BAR}`}
      headingText={HEADINGS.REPAIR_NAV_HEADING}
      validateRepair={checkInputValid}
      fetchRepair={() => fetchRepair()}
      submitRepair={() => postRepair()}
      repairText={[
        "in this section you will be making changes to the repair data file below",
      ]}
      CodeImplementation={
        <NavBarRepair
          navItems={exercisePromptsState}
          userInput={handleUserInputChange}
        />
      }
      navigateNext={() => handleNav()}
    />
  );
};

NavRepairPage.propTypes = {
  user: PropTypes.object,
};
export default NavRepairPage;
