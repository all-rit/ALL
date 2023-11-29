import React from "react";
import PropTypes from "prop-types";
import Repair from "../../../../body/Repair/Repair";
import {
  REPAIR_NAV_HEADING,
  GAME_STATES,
  REPAIR,
} from "../../../../../constants/lab9";
import NavBarRepair from "../NavBarRepair";
import useRepairNav from "../../hooks/useRepairNav";
/**
 * Nav Repair is a component that is responsible for passing logic into the universal
 * repair page component, what this allows us to do is call the re-useable repair component
 * with custom logic pertaining to that repair section.
 * @param {String} user contains user id for data state and logging user input
 * @returns
 */

const NavRepairPage = ({ user }) => {
  const { data, functions } = useRepairNav(user);
  const { exercisePromptsState } = data;
  const { handleUserInputChange, checkInputValid } = functions;
  return (
    <Repair
      fileName={"NavBar.js"}
      path={`${REPAIR}/${GAME_STATES.REPAIR_NAV_BAR}`}
      headingText={REPAIR_NAV_HEADING}
      validateRepair={checkInputValid}
      repairText={[
        "in this section you will be making changes to the repair data file below",
      ]}
      CodeImplementation={
        <NavBarRepair
          navItems={exercisePromptsState}
          userInput={handleUserInputChange}
        />
      }
      navigateNext={() => {}}
    />
  );
};

NavRepairPage.propTypes = {
  user: PropTypes.object,
};
export default NavRepairPage;
