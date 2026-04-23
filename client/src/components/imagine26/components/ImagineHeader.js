import React from "react";
import PropTypes from "prop-types";

const ImagineHeader = (props) => {
  return (
    <div className="tw-relative tw-w-[96%] tw-pt-4 tw-mb-4">
      <h3 className={"tw-title tw-pb-3  "}>{props.title}</h3>
      <div className={"tw-flex tw-justify-center"}>
        <hr className={"tw-w-3/5 tw-bg-labLightGray"} />
      </div>
    </div>
  );
};

ImagineHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ImagineHeader;
