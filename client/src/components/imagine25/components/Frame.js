import React from "react";
import ALLButton from "src/components/all-components/ALLButton";

export const Frame = (content, nextOnClick, prevOnClick) => {
  return (
    <div className={"tw-flex tw-flex-col tw-items-center"}>
      <div className="d-flex justify-content-center tw-py-6">
        <div>{content}</div>
      </div>
      <div className="tw-flex tw-justify-between tw-w-1/2 tw-absolute tw-bottom-10">
        <ALLButton onClick={prevOnClick} label="Previous" />
        <ALLButton onClick={nextOnClick} label="Next" />
      </div>
    </div>
  );
};
