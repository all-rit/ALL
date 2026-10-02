import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { navigate } from "@reach/router";
import DisplayDeepFake from "./DisplayDeepfake";

const Analysis = (props) => {
  const { teammateId, showVideo} = props;

  const fetchContent = () => {
    return (
      <div>
        <div className="tw-flex tw-flex-col tw-items-center tw-gap-8 tw-w-full">
          <div className="tw-w-full">
            {
              <DisplayDeepFake
                teammateId={teammateId}
                toggleAction={showVideo}
                isChatRoom={false}
              />
            }
          </div>

          {(
            <Button
              className="tw-body-text tw-text-center tw-border-solid tw-border-primary-blue tw-pt-[0.3rem] tw-pr-[0.5rem] tw-w-[10rem] tw-h-[3rem]
       tw-border-[0.4rem] tw-border-l-0 tw-border-b-0 tw-rounded-tr-lg blue-drop-shadow tw-bg-[white] tw-text-xl tw-text-black"
              //alert model should pop up and deepfake should be shown
              onClick={handleNavigation}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    );
  };

  const handleNavigation = async () => {
    sessionStorage.setItem("teammateId", teammateId);
      //insert Chatroom nav when finished implementing
      navigate("/Lab16/Exercise/Conclusion");
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
