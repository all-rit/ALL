import React from "react";
import ALLButton from "src/components/all-components/ALLButton";

export const Frame = (content, nextOnClick, prevOnClick) => {
  //Constant syling methods
  const blueLine =
    "tw-w-[35vw] tw-h-[5px] tw-bg-[#0045d5] tw-my-[15px] tw-mx-auto border";
  const yellowLine =
    "tw-w-[5px] xs:tw-h-[325px] sm:tw-h-[350px] xl:tw-h-[400px] 2xl:tw-h-[425px] tw-bg-[#ffc335] tw-my-[15px] tw-mx-auto";

  //If the nextOnClick Function is null, no "Next" button will apear
  const nextButton =
    nextOnClick !== null ? (
      <ALLButton onClick={nextOnClick} label="Next" />
    ) : (
      <></>
    );

  //If the prevOnClick Function is null, no "Prev" button will apear
  const prevButton =
    prevOnClick !== null ? (
      <ALLButton onClick={prevOnClick} label="Previous" />
    ) : (
      <></>
    );

  return (
    <>
      <div className={blueLine}></div>
      <div className="d-flex justify-content-center">
        <div className={yellowLine}></div>
        <div className="xs:tw-w-[275px] sm:tw-w-[300px] xl:tw-w-[350px] 2xl:tw-w-[375px]">
          {content}
        </div>
        <div className={yellowLine}></div>
      </div>
      <div className={blueLine}></div>
      <div className="tw-flex tw-justify-center tw-space-x-[35vw] md:tw-pt-4 xl:tw-pt-3">
        {prevButton}
        {nextButton}
      </div>
    </>
  );
};
