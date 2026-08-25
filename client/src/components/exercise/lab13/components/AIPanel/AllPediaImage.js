import React from "react";
import PropTypes from "prop-types";

const AllPediaImage = ({ wikipediaContent }) => {
  return (
    <div className="tw-flex tw-items-start tw-justify-center">
      <img
        src={wikipediaContent.imageUrl}
        alt={wikipediaContent.title}
        className="tw-w-full tw-h-auto tw-rounded-lg tw-shadow-lg tw-object-cover"
        style={{ maxHeight: "400px" }}
      />
    </div>
  );
};
AllPediaImage.propTypes = {
  wikipediaContent: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default AllPediaImage;
