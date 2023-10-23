import React from "react";
import { PropTypes } from "prop-types";
import Repair from "../../../../body/Repair/Repair";
import { GAME_STATES, REPAIR } from "../../../../../constants/lab9";
/**
 * NavBarRepair() is a react component that is responsible for passing down
 * the visual information needed to render the repair page itself. This
 * component will integrate the individualized custom hook to handle custom logic.
 * @returns Repair Component to render to the browser.
 */
const NavBarRepair = () => {
  return (
    <Repair
      path={`${REPAIR}/${GAME_STATES.REPAIR_NAV_BAR}`}
      CodeImplementation={() => {}}
      navigateNext={() => {}}
    />
  );
};

NavBarRepair.propTypes = {
  user: PropTypes.string.isRequired,
};

export default NavBarRepair;
