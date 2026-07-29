import React from "react";
import PartnerGeneration from "./citation/PartnerGeneration";

const DevPartners = () => {
  return (
    <div className="tw-flex tw-bg-primary-blue tw-justify-center tw-items-center tw-flex-col tw-pt-20">
      <div className="tw-grid tw-w-full tw-h-1/2">
        <div className="tw-bg-primary-yellow tw-w-11/12 tw-h-4/5 tw-justify-self-end tw-self-end tw-rounded-bl-lg tw-relative">
          <div className="tw-bg-white tw-w-full tw-p-10 tw-h-[120%] tw-justify-self-end tw-self-center tw-rounded-bl-lg tw-relative tw-bottom-14 tw-left-4 tw-flex tw-items-start tw-flex-col tw-gap-8">
            <h1 className="tw-title">Development Partners</h1>
            <div className="tw-flex tw-flex-col lg:tw-flex-row lg:tw-items-center tw-text-left">
              <p className="tw-text-black tw-mb-4 tw-max-w-sm tw-body-text">
                All of our content is made possible through our team of student
                developers as well as our development partners.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="xs:tw-w-full md:tw-w-3/4">
        <PartnerGeneration />
      </div>
    </div>
  );
};
export default DevPartners;
