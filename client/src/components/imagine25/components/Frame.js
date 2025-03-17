import React from "react";
import ALLButton from "src/components/all-components/ALLButton";

//put null for any button you do not wish to use
export const Frame = (content, nextOnClick, prevOnClick) => {
  const prev =
    prevOnClick != null ? (
      <ALLButton onClick={prevOnClick} label="Previous" />
    ) : (
      <div></div>
    );
  const next =
    nextOnClick != null ? (
      <ALLButton onClick={nextOnClick} label="Next" />
    ) : (
      <div></div>
    );
  return (
    <div className="tw-flex tw-flex-col tw-items-center">
      <div className="d-flex justify-content-center tw-py-6">
        <div className="tw-h-auto">{content}</div>
      </div>
      <div className="tw-flex tw-justify-between tw-w-1/2 tw-absolute tw-bottom-10">
        {prev}
        {next}
      </div>
    </div>
  );
};
