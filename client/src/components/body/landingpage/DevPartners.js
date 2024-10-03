/* eslint-disable react/prop-types */
import React from "react";

const DevPartners = () => {
  return (
    <div className="tw-bg-labBlue tw-flex tw-flex-col tw-justify-center tw-items-center tw-py-8 tw-px-16">
      <div>
        <h2 className="tw-text-white tw-text-3xl tw-font-bold tw-mb-4">
          Development Partners
        </h2>
        <p className="tw-text-white tw-text-lg tw-mb-4">
          Aenean a venenatis metus, ut varius quam. Quisque lobortis odio
          libero, quis blandit nibh feugiat malesuada. Interdum et malesuada
          fames ac ante ipsum primis in faucibus.
        </p>
        <button className="tw-text-black tw-font-medium tw-rounded-full tw-px-4 tw-py-2 tw-border-2 tw-border-b-labYellow tw-border-r-labBlue">
          Learn More
        </button>
      </div>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8"></div>
    </div>
  );
};

export default DevPartners;
