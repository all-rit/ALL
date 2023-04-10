import React, { useState, useEffect } from "react";
import "../../../../assets/stylesheets/components/Witch.css";
import PropTypes from "prop-types";
import createAvatarData from "../../../body/lab/GridImages/createAvatarData";
import Avatar from "avataaars";

const ChatMessage = ({ username, message, sentiment_score }) => {
  const [userAvatar, setUserAvatarData] = useState(null);

  //used to remove the sentiment box so this component is more reusable
  const [enableSentimentDisplay] = useState(true);

  //used to remove the entire message if removed is clicked
  const [enableMessageDisplay, setEnableMessageDisplay] = useState(true);

  //used to remove the 'remove' button if keep is clicked. Or we can just have both unable to be clicked when 'keep' is clicked
  // const [enableRemoveButtonDisplay, setRemoveButtonDisplay] = useState(true);

  const [opacity, setOpacity] = useState(1);

  const [disabled, setDisabled] = useState(false);

  function handleKeep() {
    // setRemoveButtonDisplay(false);
    setOpacity(0.5);
    setDisabled(true);
  }

  function handleRemove() {
    setEnableMessageDisplay(false);
  }

  console.log(enableMessageDisplay);

  // function toggleEnableDisplay() {
  //   setEnableDisplay(!enableDisplay);

  //  }
  //will discuss if button for user should be here to be used

  useEffect(() => {
    setUserAvatarData(createAvatarData(1)[0]);
  }, []);

  return (
    <div className="tw-bg-white tw-rounded-2xl tw-flex tw-items-start tw-max-w-[500px]">
      <div className="tw-flex tw-flex-col">
        <div className="tw-flex tw-items-center tw-p-2">
          {userAvatar && (
            <Avatar
              alt={userAvatar.name}
              className="tw-w-10 tw-h-10 tw-rounded-full"
              avatarStyle="Circle"
              topType={userAvatar.avatarAttributes.topType}
              accessoriesType={userAvatar.avatarAttributes.accessoriesType}
              hairColor={userAvatar.avatarAttributes.hairColor}
              facialHairType={userAvatar.avatarAttributes.facialHairType}
              clotheType={userAvatar.avatarAttributes.clotheType}
              clotheColor={userAvatar.avatarAttributes.clotheColor}
              eyeType={userAvatar.avatarAttributes.eyeType}
              eyebrowType={userAvatar.avatarAttributes.eyebrowType}
              mouthType={userAvatar.avatarAttributes.mouthType}
              skinColor={userAvatar.avatarAttributes.skinColor}
            />
          )}
          <p className="tw-ml-3 tw-font-semibold">{username}</p>
        </div>
        <p className="tw-text-[#343434] tw-px-2 tw-pb-2 tw-text-left">
          {message}
        </p>
      </div>
      {enableSentimentDisplay && (
        <div className="tw-ml-auto tw-bg-[#419ce6] tw-p-2 tw-rounded-2xl">
          <p className="tw-text-[#000000] tw-font-bold tw-text-xl tw-underline">
            AI Score: {sentiment_score}
          </p>
          <div className="tw-flex tw-mt-2">
            <button
              className="tw-bg-[#1ec029] tw-text-white tw-px-4 tw-py-2 tw-rounded-2xl tw-mr-2"
              onClick={handleKeep}
              key="keep"
              style={{
                opacity: opacity,
                cursor: disabled ? "not-allowed" : "pointer",
              }}
            >
              Keep
            </button>
            <button
              className="tw-bg-[#c01e1e] tw-text-white tw-px-4 tw-py-2 tw-rounded-2xl"
              onClick={handleRemove}
              key="remove"
              style={{
                opacity: opacity,
                cursor: disabled ? "not-allowed" : "pointer",
              }}
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

ChatMessage.propTypes = {
  username: PropTypes.isRequired,
  message: PropTypes.isRequired,
  sentiment_score: PropTypes.isRequired,
  avatar_image: PropTypes.isRequired,
};

export default ChatMessage;
