import React, { Component } from "react";
import { READ_TIME } from "../../../../constants/lab7";
import PropTypes from "prop-types";

class ProgressBar extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * Calculates the width of the progress bar, utilizing the current seconds, and the starting seconds.
   *
   * @returns {number} width of the progress bar
   */
  calculateWidth = () => {
    const { seconds } = this.props;
    return (((seconds - 1) * 1000) / (READ_TIME - 1000)) * 100;
  };

  render() {
    const { text, seconds } = this.props;
    return (
      <div className={"tw-mt-9"}>
        <div className={"tw-mb-9"}>
          <p className="tw-font-bold tw-text-xl">{text}</p>
        </div>
        <div>
          <div
            style={{ width: `${this.calculateWidth()}%` }}
            className={`tw-bg-[#7CB1FF] tw-rounded tw-py-3 tw-transition-all tw-ease-in-out tw-duration-500`}
          />
          <p className={"tw-font-bold tw-text-xl"}>{seconds - 1}</p>
        </div>
      </div>
    );
  }
}

export default ProgressBar;

ProgressBar.propTypes = {
  text: PropTypes.string,
  seconds: PropTypes.number,
};
