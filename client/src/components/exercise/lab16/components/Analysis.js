import React from "react";
import PropTypes from "prop-types";
import DisplayDeepFake from "./DisplayDeepfake";

const Analysis = (props) => {
  const { teammateId, showVideo} = props;

  const fetchContent = () => {
    return (
      <div>
        {
          <DisplayDeepFake
            teammateId={teammateId}
            toggleAction={showVideo}
            isChatRoom={false}
          />
        }
      </div>
    );
  };

  return (
    //container aligns everything horizontally
    <div className="tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center tw-justify-center">
      {fetchContent()}
    </div>
  );
};

export default Analysis;

Analysis.propTypes = {
  teammateId: PropTypes.number.isRequired,
  showVideo: PropTypes.func.isRequired,
};
