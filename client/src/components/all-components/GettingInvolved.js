import React from "react";

const GettingInvolved = () => {
  return (
    <div className={"tw-h-[20rem] tw-w-full"}>
      <div
        className={
          "tw-h-full tw-border-t-[4rem] tw-border-r-[1.5rem] tw-border-b-0 tw-border-l-0 tw-border-solid tw-border-primary-yellow tw-bg-primary-yellow"
        }
      >
        <div
          className={
            "tw-flex tw-flex-row tw-justify-center tw-align-middle tw-h-full tw-border-t-[.75rem] tw-border-r-[.75rem] tw-rounded-tr-lg tw-border-b-0 tw-border-l-0 tw-border-solid tw-border-primary-blue tw-bg-white"
          }
        >
          <div
            className={`tw-flex tw-flex-col lg:tw-flex-row lg:tw-gap-8 tw-justify-center tw-text-left xs:tw-w-full lg:tw-w-1/2 tw-p-6`}
          >
            <div
              className={
                "tw-flex tw-flex-col tw-items-center tw-w-full tw-justify-center"
              }
            >
              <h1
                className={
                  "tw-title xs:tw-text-xl md:tw-text-[2rem] tw-text-left tw-w-full tw-my-6 tw-font-poppins tw-leading-tight tw-flex-wrap"
                }
              >
                Interested in Getting Involved?
              </h1>
              <p className={"tw-body-text tw-leading-snug tw-w-full"}>
                Whether you want to implement our labs in your course
                curriculum, join the Accessible Learning Labs as a development
                partner, or anything in between, contact us by emailing
                <a
                  href="mailto:dxkvse@rit.edu"
                  className="tw-body-text tw-no-underline"
                >
                  {" "}
                  dxkvse@rit.edu
                </a>
              </p>
            </div>
            <div
              className={
                "tw-h-full tw-flex tw-flex-col tw-justify-end tw-items-center lg:tw-items-end tw-py-5"
              }
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingInvolved;
