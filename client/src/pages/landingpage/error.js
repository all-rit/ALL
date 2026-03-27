import React from "react";
import useScroll from "src/use-hooks/useScroll";
import { navigate } from "@reach/router";
import ALLButton from "src/components/all-components/ALLButton";

const Error = () => {
  useScroll();

  return (
    <section
      className={
        "tw-w-screen tw-flex tw-flex-col tw-items-end tw-bg-primary-blue tw-py-20"
      }
    >
      <div
        className={
          "tw-flex tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-w-[90%] tw-gap-[5rem]"
        }
      >
        {/* Left Side */}
        <div className={"tw-relative tw-flex"}>
          <div
            className={
              "tw-z-1 tw-min-w-full tw-bg-white tw-rounded-l-md tw-min-h-[12rem]"
            }
          >
            <div
              className={
                "tw-h-full tw-flex tw-flex-col tw-px-6 tw-justify-center tw-items-center"
              }
            >
              <h1 className={"tw-title tw-text-[6rem]"}>404</h1>
            </div>
          </div>
          <div
            className={
              "tw-absolute -tw-bottom-4 -tw-left-4 tw-right-0 tw-h-[12rem] tw-min-w-full tw-bg-primary-yellow tw-rounded-bl-lg"
            }
          />
        </div>

        {/* Right Side */}
        <div className={"tw-relative tw-flex tw-grow md:tw-ml-[10%]"}>
          <div className={"tw-z-1 tw-min-w-full tw-bg-white tw-rounded-l-md"}>
            <div
              className={
                "tw-flex tw-flex-col tw-gap-y-6 tw-py-12 tw-px-6 tw-text-left"
              }
            >
              <h2 className={"tw-title xs:tw-text-xl md:tw-text-[2rem]"}>
                Invalid Page
              </h2>
              <p className={"tw-body-text md:tw-w-1/2"}>
                The URL you entered either does not exist or is not accessible!
                Please click the button to navigate home.
              </p>
              <div
                className={"xs:tw-w-full md:tw-w-1/2 tw-flex tw-justify-end"}
              >
                <ALLButton label="Return Home" onClick={() => navigate("/")} />
              </div>
            </div>
          </div>
          <div
            className={
              "tw-absolute -tw-bottom-4 -tw-left-4 tw-right-0 tw-h-[12rem] tw-min-w-full tw-bg-primary-yellow tw-rounded-bl-lg"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Error;
