/* eslint-disable react/prop-types */
import React, { Component } from "react";

class AppInstructions extends Component {
  render() {
    const { visible } = this.props;

    if (!visible) return null;

    return (
      <p className="tw-body-text">
        <b>Goal:</b> Find the box with the treasure.
        <ul className="tw-body-text">
          <li className={"tw-py-6 "}>Opening the hint box costs 25 points.</li>
          <li>
            The quicker you find the box with the treasure, the more points you
            get.
          </li>
        </ul>
      </p>
    );
  }
}

export default AppInstructions;
