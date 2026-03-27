/* eslint-disable react/prop-types */
import React, { Component, Fragment } from "react";

import CongratulationMessage from "./CongratulationMessage";

class Countdown extends Component {
  render() {
    const { visible, time, message } = this.props;

    if (!visible) return null;

    return (
      <Fragment>
        <div className="exercise__countdown">{time}</div>
        <CongratulationMessage message={message} />
      </Fragment>
    );
  }
}

export default Countdown;
