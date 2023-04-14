import React, { useState, useEffect } from "react";
import "../../../../assets/stylesheets/components/Witch.css";
import PropTypes from "prop-types";
import createAvatarData from "../../../body/lab/GridImages/createAvatarData";
import Avatar from "avataaars";

const ChatMessage = ({
  username,
  message,
  sentiment_score,
  useModeration,
  onModeration,
}) => {
  const [userAvatar, setUserAvatar] = useState(null);

  //used to remove the sentiment box so this component is more reusable
  const [displayModerationSection] = useState(useModeration || false);

  //used to remove the entire message if removed is clicked
  const [enableMessageDisplay, setEnableMessageDisplay] = useState(true);

  const [disabled, setDisabled] = useState(false);

  const [keepButtonColor, setKeepButtonColor] = useState("tw-bg-[#1ec029]");
  const [removeButtonColor, setRemoveButtonColor] = useState("tw-bg-[#c01e1e]");

  function handleKeep() {
    setDisabled(true);
    setKeepButtonColor("tw-bg-[#1ec029] tw-opacity-80");
    setRemoveButtonColor("tw-bg-gray-300");
    onModeration?.();
  }

  function handleRemove() {
    setEnableMessageDisplay(false);
    setDisabled(true);
    setKeepButtonColor("tw-bg-gray-300");
    setRemoveButtonColor("tw-bg-[#c01e1e] tw-opacity-80");
    onModeration?.();
  }

  console.log(enableMessageDisplay);

  useEffect(() => {
    setUserAvatar(createAvatarData(1)[0]);
  }, []);

  return (
    <div className="tw-bg-white tw-rounded-2xl tw-grid tw-grid-cols-[auto,1fr] tw-items-start tw-w-full">
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
      {displayModerationSection && (
        <div className="tw-ml-auto tw-bg-[#419ce6] tw-p-2 tw-rounded-2xl tw-flex tw-flex-col tw-h-full tw-justify-between">
          <p className="tw-text-[#000000] tw-font-bold tw-text-xl tw-underline">
            AI Score: {sentiment_score}
          </p>
          <div className="tw-flex tw-mt-2">
            <button
              className={`${keepButtonColor} tw-text-white tw-px-4 tw-py-2 tw-rounded-2xl tw-mr-2`}
              onClick={handleKeep}
              key="keep"
              disabled={disabled}
              // style={{
              //   opacity: opacity,
              //   cursor: disabled ? "not-allowed" : "pointer",
              // }}
            >
              Keep
            </button>
            <button
              className={`${removeButtonColor} tw-text-white tw-px-4 tw-py-2 tw-rounded-2xl`}
              onClick={handleRemove}
              key="remove"
              disabled={disabled}
              // style={{
              //   opacity: opacity,
              //   cursor: disabled ? "not-allowed" : "pointer",
              // }}
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
  useModeration: PropTypes.isRequired,
  onModeration: PropTypes.isRequired,
};

export default ChatMessage;
