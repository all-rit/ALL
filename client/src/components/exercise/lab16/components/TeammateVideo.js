import React, { useEffect, useState } from "react";
import {
  videoPaths,
  groupVideoPaths,
  scorePagePaths,
  typingVideoPaths,
} from "src/constants/lab16/Videos";
import PropTypes from "prop-types";
import DisplayDeepFake from "./DisplayDeepfake";

const TeammateVideo = (props) => {
  const { teammateId, status } = props;
  const [videoSrc, setVideoSrc] = useState("");
  const buttonSize = "tw-w-16 tw-mx-auto";

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


    } else if (status == "deepfakePage") {
      setVideoSrc("");
    } else if (status == "chatroom") {
      //once we have all videos of teammates typing uncomment this line
      setVideoSrc(typingVideoPaths[teammateId] || typingVideoPaths[0]);
    }
  }, [teammateId, status]);

  const modeClasses =
    status == "chatroom"
      ? "tw-flex-1 tw-h-full tw-flex tw-flex-col tw-h-min-0"
      : "tw-absolute tw-top-[3.4%] tw-right-1 tw-w-96 tw-max-h-[600px]";

  return (
    <div
      className={`${modeClasses}  tw-p-2 tw-bg-white tw-border-solid tw-border-[1px] tw-rounded-lg`}
    >
      <p className="tw-mb-3">
        Teammate live from: <b>Buffalo, NY</b>
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

        {status === "chatroom" ? (
          <div>
            {
              <DisplayDeepFake
                teammateId={teammateId}
                isChatRoom={true}
              />
            }
          </div>
        ) : (
          <>
            <p className="tw-text-center tw-font-bold tw-text-2xl">
              <br />
              Instructions:
            </p>
            <div className="tw-pt-1 tw-pb-[200px]">
              <h4 className="tw-text-center">Click the tile you want to place your icon in.</h4>
              <h4 className="tw-text-center tw-font-bold">Your Icon: X</h4>
              {/* <img
                className={
                  "tw-rotate-180 tw-translate-x-0 tw-translate-y-0 tw-skew-x-0 tw-skew-y-0 tw-scale-x-100 tw-scale-y-100 " +
                  buttonSize
                }
                src="/img/imagine_game_controls/ArrowKey.png"
              />
              <img
                className={buttonSize}
                src="/img/imagine_game_controls/ArrowKey.png"
              /> */}
              <h4 className="tw-text-center tw-font-bold">Computer's Icon: O</h4>
              {/* <img
                className="tw-col-span-2 tw-w-32 tw-mx-auto"
                src="/img/imagine_game_controls/SpaceBar.png"
              /> */}
            </div>
          </>
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
