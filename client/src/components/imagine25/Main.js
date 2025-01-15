import React from "react";
import { Router } from "@reach/router";
import UpdateId from "./UpdateId";

const Main = () => {
  return (
    <>
      <div className={"tw-flex tw-h-full tw-w-full tw-mt-[10%]"}>
        <div
          className={
            "tw-grid tw-grid-cols-8 tw-grid-rows-6 tw-w-full tw-h-[40rem] tw-gap-y-6 tw-pl-6"
          }
        >
          <div
            className={
              "tw-row-span-2 tw-col-span-8 tw-bg-primary-yellow tw-rounded-bl-lg tw-flex"
            }
          />
          <div
            className={
              "tw-row-span-4 tw-col-span-8 tw-bg-primary-blue tw-rounded-bl-lg tw-flex"
            }
          />
        </div>
        <div
          className={
            "tw-absolute tw-top-1/8 tw-drop-shadow-xl tw-left-[15%] tw-bg-white tw-w-3/4 tw-h-[90%]"
          }
        >
          <Router>
            <UpdateId default path={"/"} />
          </Router>
        </div>
      </div>
    </>
  );
};

export default Main;
