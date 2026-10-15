import React from "react";
import { navigate } from "@reach/router";
import ALLButton from "src/components/all-components/ALLButton";

const LabUnderMaintenance = () => {
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
              <h1 className={"tw-title tw-text-[4rem] md:tw-text-[5rem]"}>
                Under Maintenance
              </h1>
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
                This Lab Is Currently Under Maintenance
              </h2>
              <p className={"tw-body-text md:tw-w-1/2"}>
                This lab is temporarily unavailable while we make improvements.
                Please check back later, or explore our other labs in the
                meantime.
              </p>
              <div
                className={
                  "xs:tw-w-full md:tw-w-1/2 tw-flex tw-justify-end tw-gap-x-16 tw-gap-y-4"
                }
              >
                <ALLButton label="Return Home" onClick={() => navigate("/")} />
                <ALLButton
                  label="Labs Page"
                  onClick={() => navigate("/Labs")}
                />
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

export default LabUnderMaintenance;
