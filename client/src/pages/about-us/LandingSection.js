import React from "react";

const LandingSection = () => {
  return (
    <section
      id={"about-us"}
      className={
        "tw-flex tw-flex-col tw-bg-primary-blue tw-h-3/4 tw-mb-20 tw-py-20"
      }
    >
      <div className={"tw-flex tw-flex-col tw-justify-center"}>
        <div className={"tw-relative tw-flex tw-ml-[20%]"}>
          <div
            className={
              "tw-z-1 tw-relative tw-min-w-full tw-bg-white tw-rounded-l-md"
            }
          >
            <div
              className={
                "tw-flex tw-flex-col tw-gap-y-6 tw-py-12 tw-px-6 tw-text-left"
              }
            >
              <h2 className={"tw-title xs:tw-text-xl md:tw-text-[2rem]"}>
                About Us
              </h2>
              <p className={"tw-body-copy md:tw-w-3/5"}>
                Find out more about the team that makes Accessible Learning Labs
                possible. We&apos;re proud of our diverse group of principal
                investigators and advisors, as well as our fully undergraduate
                development team!
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
