import React from "react";
import ALLButton from "src/components/all-components/ALLButton";

export const Frame = (content, nextOnClick, prevOnClick) => {
  //Constant syling methods
  const blueLine =
    "tw-w-[35vw] tw-h-[5px] tw-bg-[#0045d5] tw-my-[15px] tw-mx-auto";
  const yellowLine =
    "tw-w-[5px] xs:tw-h-[325px] sm:tw-h-[350px] md:tw-h-[350px] xl:tw-h-[400px] 2xl:tw-h-[425px] tw-bg-[#ffc335] tw-my-[15px] tw-mx-auto";
  return (
    <>
      <div className={blueLine}></div>
      <div className="d-flex justify-content-center">
        <div className={yellowLine}></div>
        <div>{content}</div>
        <div className={yellowLine}></div>
      </div>
      <div className={blueLine}></div>
      <div className="tw-flex tw-justify-center tw-space-x-[35vw] md:tw-pt-4 xl:tw-pt-3">
        <ALLButton onClick={prevOnClick} label="Previous" />
        <ALLButton onClick={nextOnClick} label="Next" />
      </div>
    </>
  );
};
