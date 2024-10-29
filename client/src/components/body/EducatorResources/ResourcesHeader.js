import React from "react";

const ResourcesHeader = () => {
  return (
    <div
      className={
        "tw-w-full tw-h-[40rem] tw-bg-primary-blue tw-relative tw-mb-[5rem]"
      }
    >
      <div
        className={
          "tw-bg-primary-yellow tw-h-1/2 tw-w-[86.5%] tw-absolute tw-right-0 tw-top-[35%] tw-rounded-bl-lg"
        }
      ></div>
      <div
        className={
          "tw-bg-white tw-h-3/5 tw-w-[85%] tw-absolute tw-right-0 tw-top-[20%] tw-rounded-l-lg"
        }
      >
        <div
          className={
            "tw-flex tw-flex-col tw-text-left xs:tw-w-full md:tw-w-3/4 lg:tw-w-1/2 tw-h-full tw-p-10  tw-justify-center"
          }
        >
          <p
            className={
              "tw-font-poppins tw-font-bold xs:tw-text-[1.5rem] md:tw-text-3xl "
            }
          >
            {" "}
            Educator Resources{" "}
          </p>
          <p
            className={
              "xs:tw-text-xs md:tw-text-[1.125rem] tw-text-justify tw-leading-normal"
            }
          >
            {" "}
            Welcome to Accessible Learning Labs Educators Resources! Below, you
            will find everything you need to begin using our interactive,
            intuitive learning labs, including lab structure, walkthrough
            videos, lecture slides, and how to create learning groups!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResourcesHeader;
