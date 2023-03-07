import React from "react";
import PropTypes from "prop-types";
import { AI_CORRECT, LOCKED_FILE } from "../../../../constants/lab7";
import LOCKED from "../../../../assets/images/lab7/lock.png";
import OPEN from "../../../../assets/images/lab7/unlock.png";

const File = ({ data }) => {
  const image = data.decision === LOCKED_FILE ? LOCKED : OPEN;
  const alt = `A .png image of ${
    data.decision === LOCKED_FILE ? "a locked" : "an unlocked"
  } lock.`;
  const reportClassName =
    data.report === AI_CORRECT ? "tw-text-[#2e8540]" : "tw-text-[#e31c3d]";

  return (
    <div className={"tw-flex tw-flex-col tw-items-center"}>
      <div
        className={"tw-space-y-3 tw-flex tw-flex-col tw-justify-center file"}
      >
        {data.report !== undefined && (
          <div>
            <img className={"tw-h-14 tw-w-14"} src={image} alt={alt} />
            <p className={"tw-mt-1.5 tw-font-bold"}>{data.decision} FILE</p>
          </div>
        )}
        <div>
          <p className={"tw-leading-tight"}>{data.fileName}</p>
          <p className={"tw-leading-tight tw-italic"}>
            Sensitivity Level {data.sensitivityLevel}
          </p>
        </div>
        <div>
          <p className={"tw-font-bold"}>{data.content}</p>
        </div>
      </div>
      {data.report !== undefined && (
        <div className={"tw-bg-[#DCDCDC] tw-mt-6 tw-px-10 tw-py-1.5"}>
          <span className={`tw-font-bold ${reportClassName}`}>
            {data.report}
          </span>
        </div>
      )}
    </div>
  );
};

export default File;

File.propTypes = {
  data: PropTypes.shape({
    fileName: PropTypes.string,
    content: PropTypes.string,
    sensitivityLevel: PropTypes.number,
    decision: PropTypes.string,
    result: PropTypes.string,
    report: PropTypes.string,
    message: PropTypes.string,
  }),
};
