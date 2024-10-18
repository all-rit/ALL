/* eslint-disable react/prop-types */
import React from "react";
import PartnerGeneration from "./citation/PartnerGeneration";

const DevPartners = () => {
  return (
    <div className="tw-bg-labBlue tw-py-28 tw-pl-36">
      <div className="tw-bg-labYellow tw-h-72 tw-relative tw-rounded-bl-md tw-pb-3 tw-pl-3">
        <div className="tw-bg-bgwhite tw-absolute -tw-mt-7 tw-text-left tw-px-16 tw-l tw-py-6 tw-w-full">
          <h2 className="tw-text-black tw-text-3xl tw-font-bold tw-py-6 tw-text-left">
            Development Partners
          </h2>
          <div className="">
            <p className="tw-text-black tw-text-base tw-mb-4 tw-max-w-sm">
              Aenean a venenatis metus, ut varius quam. Quisque lobortis odio
              libero, quis blandit nibh feugiat malesuada. Interdum et malesuada
              fames ac ante ipsum primis in faucibus.
            </p>
            <button className="btn tw-w-36 tw-border-b-labYellow tw-border-l-labYellow tw-border-t-labBlue tw-border-r-labBlue tw-border-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <PartnerGeneration />
    </div>
  );
};
export default DevPartners;
