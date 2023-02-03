import React, { Component } from "react";
import PropTypes from "prop-types";
import { AI_CORRECT, LOCKED_FILE } from "../../../../constants/lab7";
import LOCKED from "../../../../assets/images/lab7/lock.png";
import OPEN from "../../../../assets/images/lab7/unlock.png";

class File extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const image = data.decision === LOCKED_FILE ? LOCKED : OPEN;
    const alt = `A .png image of ${
      data.decision === LOCKED_FILE ? "a locked" : "an unlocked"
    } lock.`;
    const reportClassName =
      data.report === AI_CORRECT ? "tw-text-[#47E22E]" : "tw-text-[#FF0000]";

    return (
      <div className={"tw-flex tw-flex-col tw-items-center"}>
        <div className={"tw-space-y-1.5 file"}>
          <p className={"tw-font-bold"}>{data.fileName}</p>
          <img className={"tw-h-10 tw-w-10"} src={image} alt={alt} />
          <p className={"tw-italic"}>
            Sensitivity Level {data.sensitivityLevel}
          </p>
          <p className={"tw-font-bold"}>{data.content}</p>
        </div>
        {data.report !== undefined && (
          <div className={"tw-bg-[#DCDCDC] tw-mt-6 tw-px-10 tw-py-1.5"}>
            <span className={reportClassName}>{data.report}</span>
          </div>
        )}
      </div>
    );
  }
}

export default File;

File.propTypes = {
  data: PropTypes.shape({
    fileName: PropTypes.string,
    content: PropTypes.string,
    sensitivityLevel: PropTypes.number,
    accessStatus: PropTypes.string,
    decision: PropTypes.string,
    result: PropTypes.string,
    report: PropTypes.string,
    message: PropTypes.string,
  }),
};
