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
            "tw-flex tw-flex-row tw-justify-center tw-align-middle tw-border-t-[.75rem] tw-border-r-[.75rem] tw-rounded-tr-lg tw-border-b-0 tw-border-l-0 tw-border-solid tw-border-primary-blue tw-bg-white"
          }
        >
          <div
            className={`tw-flex tw-flex-col lg:tw-flex-row lg:tw-gap-8 tw-justify-center tw-text-left xs:tw-w-full lg:tw-w-1/2 tw-p-6`}
          >
            <div
              className={
                "tw-flex tw-flex-col tw-items-center tw-w-full tw-justify-center"
              }
            >
              <h1
                className={
                  "tw-title-styling-name tw-text-center lg:tw-text-left tw-w-full tw-my-6 tw-font-poppins tw-leading-tight tw-flex-wrap"
                }
              >
                Interested in Getting Involved?
              </h1>
              <p
                className={
                  "tw-body-styling-name tw-w-full sm:tw-w-2/3 lg:tw-w-full"
                }
              >
                Whether you want to implement our labs in your course
                curriculum, join the Accessible Learning Labs development
                partners or anything in between, you can click here to learn
                more!
              </p>
            </div>
            <div
              className={
                "tw-h-full tw-flex tw-flex-col tw-justify-end tw-items-center lg:tw-items-end tw-py-5"
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
