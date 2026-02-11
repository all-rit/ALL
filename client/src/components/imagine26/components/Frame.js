import React from "react";

//put null for any button you do not wish to use
export const Frame = (content, nextOnClick, prevOnClick) => {
  const prev =
    prevOnClick != null ? (
      <button
        className="tw-body-text tw-text-center tw-border-solid tw-border-primary-yellow tw-pb-[0.3rem] tw-pl-[0.5rem] tw-w-[7rem] tw-h-[3rem]
        tw-border-[0.4rem] tw-border-r-0 tw-border-t-0 tw-rounded-bl-lg yellow-drop-shadow tw-bg-[white] tw-text-xl "
        onClick={prevOnClick}
      >
        Previous
      </button>
    ) : (
      <div></div>
    );

  const next =
    nextOnClick != null ? (
      <button
        className="tw-body-text tw-text-center tw-border-solid tw-border-primary-blue tw-pt-[0.3rem] tw-pr-[0.5rem] tw-w-[7rem] tw-h-[3rem]
        tw-border-[0.4rem] tw-border-l-0 tw-border-b-0 tw-rounded-tr-lg blue-drop-shadow tw-bg-[white] tw-text-xl"
        onClick={nextOnClick}
      >
        Next
      </button>
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
