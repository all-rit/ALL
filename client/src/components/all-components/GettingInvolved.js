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
            className={`tw-flex xs:tw-flex-col md:tw-flex-row tw-text-left xs:tw-w-full md:tw-w-1/2 tw-p-6 tw-min-h-[15rem]`}
          >
            <div
              className={
                "tw-flex tw-flex-col tw-w-1/2 tw-h-full tw-justify-center"
              }
            >
              <h1
                className={
                  "tw-title-styling-name tw-my-6 tw-font-poppins xs:tw-w-full md:tw-w-1/2 tw-text-nowrap tw-leading-tight "
                }
              >
                Interested in Getting Involved?
              </h1>
              <p
                className={
                  "tw-body-styling-name"
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
                "tw-h-full tw-w-4/5 tw-flex tw-flex-col tw-justify-end tw-items-end tw-py-5"
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
