import React, { useRef } from "react";
import ALLButton from "./ALLButton";
import { navigate } from "@reach/router";
const AboutUs = () => {
  const yellowBlock = useRef(null);

  const handleNav = () => {
    navigate("/aboutus");
  };

  return (
    <div className={"tw-h-[20rem] tw-w-full tw-mt-[5rem] tw-mb-[15rem]"}>
      <div
        className={
          "tw-h-3/4 tw-border-t-[4rem] tw-border-r-[1.5rem] tw-border-b-0 tw-border-l-0 tw-border-solid tw-border-primary-yellow tw-bg-primary-yellow"
        }
      >
        <div
          className={
            "tw-h-full tw-flex tw-flex-row tw-justify-center tw-border-t-[.75rem] tw-border-r-[.75rem] tw-rounded-tr-lg tw-border-b-0 tw-border-l-0 tw-border-solid tw-border-primary-blue tw-bg-white"
          }
        >
          <div
            className={`tw-flex xs:tw-flex-col md:tw-flex-row tw-text-left xs:tw-w-full md:tw-w-1/2 tw-p-3`}
          >
            <div
              className={
                "tw-flex tw-flex-col xs:tw-w-full lg:tw-w-3/4 tw-h-full tw-justify-center"
              }
            >
              <p
                className={
                  "tw-title-styling-name xs:tw-text-sm md:tw-text-[1.5rem] tw-my-6 tw-font-poppins tw-leading-3"
                }
              >
                {" "}
                About Us
              </p>
              <p
                className={
                  "tw-font-calibri tw-font-medium xs:tw-text-sm lg:tw-text-[1.125rem] tw-leading-normal"
                }
              >
                {" "}
                Learn more about the team at Accessible Learning Labs and the
                amazing things we have in the works!
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
      <div
        className={
          "tw-w-full tw-h-1/2 tw-flex tw-flex-row tw-justify-center xs:tw-collapse md:tw-visible"
        }
      >
        <div
          ref={yellowBlock}
          className={
            "tw-bg-primary-yellow tw-w-1/2 xs:tw-h-1/2 md:tw-h-3/4 tw-my-10"
          }
        >
          {/*TODO: Placeholder for Stock Image*/}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
