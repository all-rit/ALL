import React from "react";
import PropTypes from "prop-types";

const Partner = (props) => {
  const { partnerName, imageURL, websiteURL } = props;
  return (
    <div className="tw-p-4 tw-bg-white tw-rounded-lg tw-shadow-md tw-flex tw-flex-col tw-justify-center">
      <a href={websiteURL} target="_blank" rel="noopener noreferrer">
        <img src={`/img/dev_partners${imageURL}`} alt={partnerName} />
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
