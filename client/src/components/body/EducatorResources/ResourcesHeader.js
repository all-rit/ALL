import React from "react";

const ResourcesHeader = () => {
  return (
    <div
      className={
        "tw-w-full xs:tw-h-[30rem] md:tw-h-[30rem] lg:tw-h-[30rem] tw-bg-primary-blue tw-relative"
      }
    >
      <div
        className={
          "tw-bg-primary-yellow tw-h-1/2 tw-w-[86.5%] tw-absolute tw-right-0 tw-top-[35%] tw-rounded-bl-2xl"
        }
      ></div>
      <div
        className={
          "tw-bg-white tw-h-3/5 tw-w-[85%] tw-absolute tw-right-0 tw-top-[20%] tw-rounded-tl-lg tw-rounded-bl-lg"
        }
      >
        <div
          className={
            "tw-flex tw-flex-col tw-text-left xs:tw-w-full md:lg:tw-w-7/12 tw-h-full tw-p-10  tw-justify-center"
          }
        >
          <p
            className={
              "tw-font-poppins tw-font-bold xxs:tw-text-md md:tw-text-3xl "
            }
          >
            {" "}
            Educator Resources{" "}
          </p>
          <p className={"xs:tw-text-xs md:tw-text-sm"}>
            {" "}
            Welcome to Accessible Learning labs Educators Resources! Below, you
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
