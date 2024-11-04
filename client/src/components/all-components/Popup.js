/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";

class Popup extends Component {
  close() {
    const { handler } = this.props;
    handler("");
  }

  render() {
    const { message, error } = this.props;

    if (message === "") return null;

    return (
      <div className="popup">
        <div className={`popup__content ${error ? "popup__error" : ""}`}>
          <span className="popup__message">{message}</span>
        </div>
      </div>
    );
  }
}

export default Popup;
