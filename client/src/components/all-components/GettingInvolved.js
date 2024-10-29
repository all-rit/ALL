import React from "react";
import ALLButton from "./ALLButton";
import { navigate } from "@reach/router";
const GettingInvolved = () => {
  const handleNav = () => {
    navigate("/#contact");
  };

  return (
    <div className={"tw-h-[25rem] tw-w-full tw-my-[5rem]"}>
      <div
        className={
          "tw-h-1/2 tw-border-t-[4rem] tw-border-r-[1.5rem] tw-border-b-0 tw-border-l-0 tw-border-solid tw-border-primary-yellow tw-bg-primary-yellow"
        }
      >
        <div
          className={
            "tw-h-full tw-flex tw-flex-row tw-justify-center tw-align-middle tw-border-t-[.75rem] tw-border-r-[.75rem] tw-rounded-tr-lg tw-border-b-0 tw-border-l-0 tw-border-solid tw-border-primary-blue tw-bg-white"
          }
        >
          <div
            className={`tw-flex tw-flex-row tw-text-left sm:tw-w-full md:tw-w-3/4 lg:tw-w-3/5 tw-p-6 tw-min-h-[10rem]`}
          >
            <div
              className={
                "tw-flex tw-flex-col tw-w-full tw-h-full tw-justify-center tw-m-[3rem]"
              }
            >
              <p
                className={
                  "tw-title-styling-name xxs:tw-text-sm md:tw-text-[1.25rem] lg:tw-text-[1.5rem] tw-my-6 tw-font-poppins xs:tw-w-full md:tw-w-3/4 tw-text-nowrap tw-leading-tight"
                }
              >
                {" "}
                Interested in Getting Involved?
              </p>
              <div
                className={
                  "tw-flex xs:tw-flex-col lg:tw-flex-row tw-items-center"
                }
              >
                <p
                  className={
                    "tw-font-calibri tw-font-medium sm:tw-text-sm lg:tw-text-[1.125rem] xs:tw-text-xs tw-text-justify tw-leading-normal"
                  }
                >
                  {" "}
                  Whether you want to implement our labs in your course
                  curriculum, join the Accessible Learning Labs development
                  partners or anything in between, you can click here to learn
                  more!
                </p>
              </div>
            </div>
            <div
              className={
                "tw-h-full tw-w-full tw-flex tw-flex-row tw-justify-end tw-py-5 tw-items-center"
              }
            >
              <ALLButton label={"Learn More"} onClick={handleNav}></ALLButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingInvolved;
