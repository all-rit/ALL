import React from "react";
import Tab from "./Tab";
import { PropTypes } from "prop-types";

/**
 * MultiTab component to display multiple tabs.
 *
 * @param {object} props - The component's properties.
 * @param {number} props.numberOfTabs - The number of tabs to display.
 * @returns {JSX.Element} A React component that takes in the number of desired tabs and displays them.
 */

const MultiTab = ({ numberOfTabs }) => {
  const tabs = Array.from({ length: numberOfTabs }, (_, index) => (
    <Tab key={index} />
  ));
  return <div> {tabs} </div>;
};

MultiTab.propTypes = {
  numberOfTabs: PropTypes.number,
};

export default MultiTab;
