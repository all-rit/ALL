/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import ProgressBarBar from "./ProgressBarBar";
class ProgressBar extends Component {
  render() {
    const { barData, labID } = this.props;
    const total = barData.length;

    function renderBars() {
      return barData.map((data, index) => {
        try {
          console.log(data);
          return (
            <ProgressBarBar
              key={index}
              data={data}
              index={index}
              labID={labID}
            />
          );
        } catch (error) {
          console.log(error);
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
        <ul className="progressBarContainer">
          <ul className="progressBar">{renderBars()}</ul>
        </ul>
      );
    }
  }
}

export default ProgressBar;
