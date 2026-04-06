import React, { useEffect, useState } from "react";
import ImagineService from "src/services/ImagineService";
import {
  videoPaths,
  groupVideoPaths,
  scorePagePaths,
} from "src/constants/imagine26/Videos";
import PropTypes from "prop-types";
import DisplayDeepFake from "./DisplayDeepfake";

const TeammateVideo = (props) => {
  const { teammateId, status } = props;
  const [group, setGroup] = useState(null);
  const [videoSrc, setVideoSrc] = useState("");
  const buttonSize = "tw-w-16 tw-mx-auto";
  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const result = await ImagineService.getGroup(
          sessionStorage.getItem("userID"),
          26,
        );
        setGroup(result || "control");
      } catch (e) {
        console.error(e);
      }
    };
    fetchGroup();
  }, []);

  useEffect(() => {
    if (teammateId === null) return;

    if (status == "game") {
      setVideoSrc(videoPaths[teammateId] || videoPaths[0]);
      console.log(videoPaths[teammateId]);
    } else if (status == "scorePage") {
      setVideoSrc(scorePagePaths[teammateId] || scorePagePaths[0]);
      console.log(scorePagePaths[teammateId]);
    } else if (status == "groupVideo") {
      const teammateReactionVideos = groupVideoPaths[teammateId] || groupVideoPaths[0];
      console.log(teammateReactionVideos[group]);
      setVideoSrc(teammateReactionVideos[group] || teammateReactionVideos.A);
    } else if (status == "analysis") {
      setVideoSrc("");
    } else if (status == "chatroom") {
      //replace with video of teammate typing or keep the same reaction video
     const teammateReactionVideos = groupVideoPaths[teammateId] || groupVideoPaths[0];
      console.log(teammateReactionVideos[group]);
      setVideoSrc(teammateReactionVideos[group] || teammateReactionVideos.A);
    }
  }, [teammateId, status, group]);

    const fetchDeepfake = () => {
      console.log(group);      
      //using map instead of "code smell" switch statment ft - Professor Bobby (st.Jaques or something like that)
      const activity = {
        experiential: (
          <DisplayDeepFake
            teammateId={teammateId}
            isExperential={true}
            isChatRoom = {true}
          />
        ),
        expression: (
          <DisplayDeepFake
            teammateId={teammateId}
            isExperential={false}
            isChatRoom = {true}
          />
        ),
      };
      return <div>
        {activity[group]}
        </div>
  }

  const modeClasses = status == 'chatroom'
    ? "tw-flex-1 tw-h-full tw-flex tw-flex-col tw-h-min-0" 
    : "tw-absolute tw-top-[3.4%] tw-right-1 tw-w-96 tw-max-h-[600px]";

  return (
    <div 
      // className="tw-absolute tw-top-[3.4%] tw-right-1 tw-p-2 tw-pointer-events-none tw-bg-white tw-border-solid tw-border-[1px] tw-rounded-lg tw-max-h-[600px]"
      className={`${modeClasses}  tw-p-2 tw-bg-white tw-border-solid tw-border-[1px] tw-rounded-lg`}
    >
      <p className="tw-mb-3">
        Teammate live from: <b>Buffalo, NY</b>
      </p>
      <div className = "tw-flex-1 tw-overflow-y-auto">
             <video
        key={`${videoSrc}-${status}`}
        src={videoSrc}
        autoPlay
        loop
        muted
        // className={`tw-w-full tw-h-[250px] tw-object-cover tw-shadow-lg tw-rounded-lg`}
        className={`tw-w-full tw-object-cover tw-rounded-lg ${status == 'chatroom' ? 'tw-aspect-video tw-h-[220px]' : 'tw-h-[200px]'}`}
      />
      
    {status === "chatroom" ?(
      fetchDeepfake()
    )
    :(
     <>
      <p className="tw-col-span-2 tw-text-center tw-font-bold">
        <br />
        (Keyboard)
      </p>
      <div className="tw-pt-1 tw-pb-[200px] tw-grid tw-grid-cols-2 tw-grid-rows-4 tw-gap-y-2">
        <h4 className="tw-col-span-2 tw-text-center">Movement:</h4>
        <img
          className={
            "tw-rotate-180 tw-translate-x-0 tw-translate-y-0 tw-skew-x-0 tw-skew-y-0 tw-scale-x-100 tw-scale-y-100 " +
            buttonSize
          }
          src="/img/imagine_game_controls/ArrowKey.png"
        />
        <img
          className={buttonSize}
          src="/img/imagine_game_controls/ArrowKey.png"
        />
        <h4 className="tw-col-span-2 tw-text-center">Fire Weapon:</h4>
        <img
          className="tw-col-span-2 tw-w-32 tw-mx-auto"
          src="/img/imagine_game_controls/SpaceBar.png"
        />
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
