/* eslint-disable react/prop-types */
import React from "react";
import PartnerGeneration from "./citation/PartnerGeneration";
import ALLButton from "src/components/all-components/ALLButton";
import { navigate } from "@reach/router";

const DevPartners = () => {
  const handleNav = () => {
    navigate("/#");
  };

  return (
    <div className="tw-bg-primary-blue tw-py-16 sm:tw-py-24 lg:tw-py-28 tw-pl-4 lg:tw-pl-36">
      <div className="tw-bg-primary-yellow lg:tw-h-60 tw-rounded-bl-md tw-p-3 lg:tw-relative lg:tw-pb-20">
        <div className="tw-bg-bgwhite lg:tw-absolute -tw-mt-7 tw-px-4 sm:tw-px-8 lg:tw-px-16 tw-py-6 lg:tw-w-full">
          <h2 className="tw-text-black tw-text-3xl tw-font-bold tw-py-6 tw-text-left tw-title-styling-name">
            Development Partners
          </h2>
          <div className="tw-flex tw-flex-col lg:tw-flex-row lg:tw-items-center tw-text-left">
            <p className="tw-text-black tw-text-base tw-mb-4 tw-max-w-sm tw-body-styling-name">
              Aenean a venenatis metus, ut varius quam. Quisque lobortis odio
              libero, quis blandit nibh feugiat malesuada. Interdum et malesuada
              fames ac ante ipsum primis in faucibus.
            </p>
            <ALLButton label={"Learn More"} onClick={handleNav}></ALLButton>
          </div>
        </div>
      </div>
      <PartnerGeneration />
    </div>
  );
};
export default DevPartners;
