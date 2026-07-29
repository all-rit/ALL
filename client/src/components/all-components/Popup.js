/* eslint-disable react/prop-types */
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
      <div className="tw-w-full tw-flex tw-justify-center tw-py-3">
        <div
          className={`${error ? "tw-bg-error" : "tw-bg-success"} tw-w-1/2 tw-rounded-lg tw-shadow-lg`}
        >
          <p className="tw-text-white tw-font-poppins tw-p-6">{message}</p>
        </div>
      </div>
    );
  }
}

export default Popup;
