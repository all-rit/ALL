import React, { Component } from "react";
import ProgressBarBar from "./ProgressBarBar";
import PropTypes from "prop-types";
class ProgressBar extends Component {
  render() {
    const { barData, labID, inTable, hasLabel } = this.props;
    const total = barData.length;

    function renderBars() {
      return barData.map((data, index) => {
        return (
          <ProgressBarBar
            key={index}
            data={data}
            index={index}
            labID={labID}
            hasLabel={hasLabel}
          />
        );
      });
    }

    if (total === 0) {
      return (
        <ul className="progressBarContainer">
          <li>
            <h3> No Labs Assigned </h3>
          </li>
        </ul>
      );
    } else {
      return (
        <ul
          className={`progressBarContainer ${inTable ? "tw-flex-row tw-justify-center tw-ml-[7%]" : "tw-absolute tw-top-9"}`}
        >
          <div className={`progressBar ${inTable ? "tw-w-full" : ""}`}>
            {renderBars()}
          </div>
        </ul>
      );
    }
  }
}

ProgressBar.propTypes = {
  barData: PropTypes.array,
  labID: PropTypes.number,
  inTable: PropTypes.bool,
  hasLabel: PropTypes.bool,
};
export default ProgressBar;
