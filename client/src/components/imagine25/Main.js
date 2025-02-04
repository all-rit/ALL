import React from "react";
import { Router } from "@reach/router";
import UpdateId from "./UpdateId";
import Survey from "./Survey";

const Main = () => {
  return (
    <>
      <div className={"tw-flex tw-h-full tw-w-full tw-mt-[10%]"}>
        <div
          className={
            "tw-grid tw-grid-cols-8 tw-grid-rows-9 tw-w-full tw-h-[40rem] tw-gap-y-6 tw-pl-6"
          }
        >
          <div
            className={
              "tw-row-span-3 tw-col-span-8 tw-bg-primary-yellow tw-rounded-bl-lg tw-flex shadow"
            }
          />
          <div
            className={
              "tw-row-span-5 tw-col-span-8 tw-bg-primary-blue tw-rounded-bl-lg tw-flex shadow"
            }
          />
        </div>
        <div
          className={
            "tw-absolute tw-top-[15%] tw-left-[15%] tw-bg-white tw-w-3/4 tw-h-[80%] shadow tw-rounded-xl tw-p-6"
          }
        >
          <Router>
            <UpdateId default path={"/"} />
            <Survey path={`/PreSurvey`} />
          
          
            
          </Router>
        </div>
      </div>
    </>
  );
};

export default Main;
