import React, { Component } from "react";
import {
  FILE_INCORRECT,
  FILE_INTRUSION,
  FILE_PROTECTED,
  THREAT_LEVEL_TEXT,
} from "../../../../constants/lab7";
import PropTypes from "prop-types";

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  /**
   * Toggle method for dropdown. No dropdown if no intrusions occurred.
   *
   * @param numOfIntrusions number of intrusions
   */
  handleClick = (numOfIntrusions) => {
    const { active } = this.state;
    if (numOfIntrusions > 0) this.setState({ active: !active });
  };

  render = () => {
    const { active } = this.state;
    const {
      result: { files, threatLvl },
      index,
    } = this.props;
    const intrusions = files.filter((file) => file.result === FILE_INTRUSION);
    const protectedFiles = files.filter(
      (file) => file.result === FILE_PROTECTED
    );
    const incorrectFiles = files.filter(
      (file) => file.result === FILE_INCORRECT
    );

    return (
      <div className={"tw-bg-[#EBE8E8] tw-shadow-xl"}>
        <button
          onClick={() => this.handleClick(intrusions.length)}
          className={
            "tw-border-none tw-flex tw-w-full tw-items-center tw-justify-around tw-justify-center tw-text-lg tw-py-3 tw-px-6"
          }
        >
          <p className={"tw-font-bold tw-text-xl tw-w-28"}>Round {index + 1}</p>
          <p className={"tw-font-semibold tw-text-left tw-w-44"}>
            Threat Level: {THREAT_LEVEL_TEXT[threatLvl]}
          </p>
          <p className={"tw-font-semibold tw-text-left tw-w-28"}>
            <span className={intrusions.length > 0 ? "tw-text-[#e31c3d]" : ""}>
              Intrusions: {intrusions.length}
            </span>
          </p>
          <p className={"tw-font-semibold tw-text-left tw-w-36"}>
            Protected (TP): {protectedFiles.length}
          </p>
          <p className={"tw-font-semibold tw-text-left tw-w-36"}>
            <span
              className={incorrectFiles.length > 0 ? "tw-text-brightRed" : ""}
            >
              Incorrect (FP): {incorrectFiles.length}
            </span>
          </p>
          <div className={"tw-w-3"}>{active ? "-" : "+"}</div>
        </button>
        {active && intrusions.length > 0 && (
          <div className={"tw-px-16"}>
            <div className={"tw-mt-6"}>
              <h3 className={"tw-font-bold"}>List of Intrusions</h3>
              <ul className={"tw-pb-9 tw-pt-3"}>
                {intrusions.map((file, index) => {
                  const className =
                    "tw-flex tw-text-left tw-py-3 tw-border-x-0 tw-border-b tw-border-solid ";
                  return (
                    <li
                      key={index}
                      className={
                        className +
                        (index === 0 ? "tw-border-t" : "tw-border-t-0")
                      }
                    >
                      <div className={"tw-flex-shrink-0 tw-w-64"}>
                        <p>
                          <span className={"tw-font-bold"}>Filename:</span>{" "}
                          {file.fileName}
                        </p>
                        <p>
                          <span className={"tw-font-bold"}>
                            Sensitivity Level:
                          </span>{" "}
                          {file.sensitivityLevel}
                        </p>
                        <p>
                          <span className={"tw-font-bold"}>Content:</span>{" "}
                          {file.content}
                        </p>
                      </div>
                      <div className={"tw-ml-3"}>
                        <p className={"tw-font-bold"}>Intrusion Message:</p>
                        <p>{file.message}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  };
}

export default Collapsible;

Collapsible.propTypes = {
  result: PropTypes.shape({
    threatLvl: PropTypes.number,
    files: PropTypes.arrayOf(
      PropTypes.shape({
        fileName: PropTypes.string,
        content: PropTypes.string,
        sensitivityLevel: PropTypes.number,
        decision: PropTypes.string,
        result: PropTypes.string,
        report: PropTypes.string,
        message: PropTypes.string,
      })
    ),
  }),
  index: PropTypes.number,
};
