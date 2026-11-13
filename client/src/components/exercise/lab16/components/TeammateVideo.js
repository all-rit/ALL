import React, { useEffect, useState,useContext } from "react";
import {
  videoPaths,
  groupVideoPaths,
  scorePagePaths,
  typingVideoPaths,
} from "src/constants/lab16/Videos";
import PropTypes from "prop-types";
import DisplayDeepFake from "./DisplayDeepfake";
import ExerciseStateContext from "../Lab16Context";

const TeammateVideo = (props) => {
  const { teammateId, status } = props;
  const [videoSrc, setVideoSrc] = useState("");
  const {location} = useContext(ExerciseStateContext);

  console.log(status)

  useEffect(() => {
    if (teammateId === null) return;

    if (status == "game") {
      setVideoSrc(videoPaths[teammateId] || videoPaths[0]);
    } else if (status == "scorePage") {
      setVideoSrc(scorePagePaths[teammateId] || scorePagePaths[0]);
    } else if (status == "deepfakeVideo") {
      //only get expression videos(teammate deepfake)
      const teammateReactionVideos =
        groupVideoPaths[teammateId] || groupVideoPaths[0];
      setVideoSrc(teammateReactionVideos["expression"] || teammateReactionVideos.A);
    } else if (status == "warningmodal") {
      setVideoSrc("");
    } else if (status == "chatroom") {
      //once we have all videos of teammates typing uncomment this line
      setVideoSrc(typingVideoPaths[teammateId] || typingVideoPaths[0]);
    }
  }, [teammateId, status]);

  const modeClasses =
    status == "chatroom"
      ? "tw-flex-1 tw-h-full tw-flex tw-flex-col tw-h-min-0"
      : "tw-absolute tw-top-[3.4%] tw-right-5 tw-w-96 tw-max-h-[600px]";

  return (
    <div
      className={`${modeClasses}  tw-p-2 tw-bg-white tw-border-solid tw-border-[2px] tw-rounded-lg`}
    >
      <p className="tw-mb-3">
        Teammate live from: <b>{location}</b>
      </p>
      <div className="tw-flex-1 tw-overflow-y-auto">
        <video
          key={`${videoSrc}-${status}`}
          src={videoSrc}
          autoPlay
          loop
          muted
          className={`tw-w-full tw-object-cover tw-rounded-lg ${status == "chatroom" ? "tw-aspect-video tw-h-[220px]" : "tw-h-[200px]"}`}
        />

        {status === "chatroom" && (
          <div>
            {
              <DisplayDeepFake
                teammateId={teammateId}
                isChatRoom={true}
              />
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default TeammateVideo;
TeammateVideo.propTypes = {
  teammateId: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};
