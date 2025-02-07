import { Button } from "reactstrap";
import React from "react";

export const Frame = (content, nextOnClick) => {
  //Constant syling methods
  const avatarButton =
    "tw-w-[125px] tw-height-[50px] tw-text-center tw-text-[#22252a] tw-bg-white tw-border-0 tw-shadow-[2px_2px_5px_#22252a] tw-mb-[100px]";
  const blueLine =
    "tw-w-[35vw] tw-h-[5px] tw-bg-[#0045d5] tw-my-[15px] tw-mx-auto";
  const yellowLine =
    "tw-w-[5px] xs:tw-h-[375px] md:tw-h-[400px] xl:tw-h-[425px] 2xl:tw-h-[450px] tw-bg-[#ffc335] tw-my-[15px] tw-mx-auto";
  return (
    <>
      <div className={blueLine}></div>
      <div className="d-flex justify-content-center">
        <div className={yellowLine}></div>
        <div>{content}</div>
        <div className={yellowLine}></div>
      </div>
      <div className="d-flex">
        <Button className={avatarButton}>Previous</Button>
        <div className={blueLine}></div>
        <Button className={avatarButton} onClick={nextOnClick}>
          Next
        </Button>
      </div>
    </>
  );
};
