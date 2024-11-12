import React from "react";

const LandingSection = () => {
  return (
    <section
      id={"about-us"}
      className={"tw-min-h-screen tw-py-52 tw-flex tw-flex-col"}
    >
      <div
        className={
          "tw-relative tw-bg-primary-blue tw-flex-1 tw-flex tw-flex-col tw-justify-center"
        }
      >
        <div className={"tw-relative tw-ml-64"}>
          <div
            className={
              "tw-z-1 tw-relative tw-grid tw-grid-cols-12 tw-min-w-full tw-bg-white tw-rounded-l-md"
            }
          >
            <div
              className={
                "tw-col-span-5 tw-flex tw-flex-col tw-gap-y-6 tw-py-12 tw-px-20 tw-text-left"
              }
            >
              <h2 className={"tw-title-styling-name"}>About Us</h2>
              <p className={"tw-body-styling-name"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur nisl in tortor tincidunt pharetra. Donec accumsan
                libero in sem luctus mollis.
              </p>
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

export default LandingSection;
