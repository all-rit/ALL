import React from "react";
import ALLButton from "./ALLButton";
import { navigate } from "@reach/router";
const GettingInvolved = () => {
  const handleNav = () => {
    navigate("/#contact");
  };

  return (
    <div className={"tw-h-[25rem] tw-w-full"}>
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
            className={`tw-flex tw-flex-row tw-text-left sm:tw-w-full lg:tw-w-1/2`}
          >
            <div
              className={
                "tw-flex tw-flex-col tw-w-full tw-h-full tw-justify-center tw-m-[3rem]"
              }
            >
              <p
                className={
                  "tw-title-styling-name xxs:tw-text-sm md:lg:tw-text-2xl tw-my-3 tw-font-poppins md:lg:tw-w-1/2"
                }
              >
                {" "}
                Interested in Getting Involved?
              </p>
              <div className={"tw-flex tw-flex-row  tw-items-center"}>
                <p
                  className={
                    "tw-font-calibri tw-font-medium sm:tw-text-sm xs:tw-text-xs"
                  }
                >
                  {" "}
                  Whether you want to implement our labs in your course
                  curriculum, join the Accessible Learning Labs development
                  partners or anything in between, you can click here to learn
                  more!
                </p>
                <div
                  className={
                    "tw-h-full tw-w-full tw-flex tw-flex-row tw-justify-end tw-py-5"
                  }
                >
                  <ALLButton
                    label={"Learn More"}
                    onClick={handleNav}
                  ></ALLButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingInvolved;
