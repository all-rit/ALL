import React from "react";
import PropTypes from "prop-types";

const Partner = (props) => {
  const { partnerName, imageURL, websiteURL } = props;
  return (
    <div className="tw-p-4 tw-bg-white tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-h-full tw-w-full">
      <a href={websiteURL} target="_blank" rel="noopener noreferrer">
        <img
          src={`/img/dev_partners${imageURL}`}
          alt={partnerName}
          className="tw-object-contain tw-h-full tw-max-h-80"
        />
      </a>
    </div>
  );
};

Partner.propTypes = {
  partnerName: PropTypes.string,
  imageURL: PropTypes.string,
  websiteURL: PropTypes.string,
};

export default Partner;
