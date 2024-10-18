import React, { Component } from "react";
import ProgressBarBar from "./ProgressBarBar";
import PropTypes from "prop-types";
class ProgressBar extends Component {
  render() {
    const { barData, labID, inTable, studentProgress } = this.props;
    const total = barData.length;

    console.log(barData);

    function renderBars() {
      return barData.map((data, index) => {
        try {
          return studentProgress ? (
            <div className={"tw-m-3"}>
              <p className={"tw-text-xs"}>{data[0]}</p>
              <ProgressBarBar
                key={index}
                data={data}
                index={index}
                labID={labID}
              />
            </div>
          ) : (
            <ProgressBarBar
              key={index}
              data={data}
              index={index}
              labID={labID}
            />
          );
        } catch (error) {
          return studentProgress ? (
            <div className={"tw-m-3"}>
              <p className={"tw-text-xs"}>{data[0]}</p>
              {null}
            </div>
          ) : (
            <>{null}</>
          );
        }
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
          className={`progressBarContainer tw-absolute tw-left-[-4.5rem] ${inTable ? "tw-top-[25%]" : "tw-top-9"}`}
        >
          <ul className="progressBar">{renderBars()}</ul>
        </ul>
      );
    }
  }
}

ProgressBar.propTypes = {
  barData: PropTypes.array,
  labID: PropTypes.number,
  inTable: PropTypes.bool,
  studentProgress: PropTypes.bool,
};
export default ProgressBar;
