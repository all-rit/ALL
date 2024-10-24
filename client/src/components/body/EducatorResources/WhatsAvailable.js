import React from "react";
import ALLButton from "../../all-components/ALLButton";
// import { navigate } from "@reach/router";
const WhatsAvailable = () => {
  // const downloadPDF = () => {
  //
  // }

  return (
    <div className={"tw-h-[30rem] tw-w-full"}>
      <div
        className={
          "tw-h-full tw-border-t-[4rem] tw-border-r-[1.5rem] tw-border-b-0 tw-border-l-0 tw-border-solid tw-border-primary-yellow tw-bg-primary-yellow"
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
                "tw-flex tw-flex-col tw-w-full tw-h-full tw-justify-center tw-p-6"
              }
            >
              <p
                className={
                  "tw-title-styling-name xs:tw-text-[1.5rem]  md:tw-text-3xl tw-my-3 tw-font-poppins md:lg:tw-w-1/2"
                }
              >
                {" "}
                What is Available to Educators?
              </p>
              <div
                className={
                  "tw-flex xs:tw-flex-col md:tw-flex-row tw-items-center"
                }
              >
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
                    // onClick={handleNav}
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

export default WhatsAvailable;
