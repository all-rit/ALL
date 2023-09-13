import React, { useState, useEffect } from "react";
import "../../../../assets/stylesheets/components/Witch.css";
import PropTypes from "prop-types";
import createAvatarData from "../../../body/lab/GridImages/createAvatarData";
import Avatar from "avataaars";

const ChatMessage = ({
  username,
  message,
  ai_polarity,
  useModeration,
  onModeration,
}) => {
  const [userAvatar, setUserAvatar] = useState(null);

  //used to remove the moderation section so this component is more reusable
  const displayModerationSection = useModeration || false;

  //used to remove the entire message if removed is clicked
  const [enableMessageDisplay, setEnableMessageDisplay] = useState(true);

  const [disabled, setDisabled] = useState(false);

  // button colors can be set to tailwind classes (interpolated into className)
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

  function createAvatarComponent() {
    return createAvatarData(1)[0];
  }

  useEffect(() => {
    setUserAvatar(createAvatarComponent());
  }, []);

  return enableMessageDisplay ? (
    <div className="tw-border-solid tw-p-3 tw-grid tw-grid-cols-[auto,1fr] tw-bg-[#ffffff] tw-items-start tw-w-full">
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
        <div className="tw-ml-auto tw-p-2 tw-pt-0 tw-rounded-2xl tw-flex tw-flex-col tw-h-full tw-justify-between">
          <p className="tw-text-[#000000] tw-font-bold tw-text-lg tw-underline tw-text-sm">
            AI Decision:
          </p>
          <p className="tw-text-[#000000] tw-font-bold tw-text-lg tw-underline tw-text-sm">
            {ai_polarity > 0 ? "Keep" : "Remove"}
          </p>
          <div className="tw-flex tw-mt-2 tw-flex-col">
            <button
              className={`${keepButtonColor} tw-text-white tw-px-4 tw-py-2 tw-w-[100%] tw-rounded-lg tw-mb-1`}
              onClick={handleKeep}
              key="keep"
              disabled={disabled}
            >
              Keep
            </button>
            <button
              className={`${removeButtonColor} tw-text-white tw-w-[100%] tw-px-4 tw-py-2 tw-rounded-lg`}
              onClick={handleRemove}
              key="remove"
              disabled={disabled}
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  ) : null;
};

ChatMessage.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  ai_polarity: PropTypes.number.isRequired,
  useModeration: PropTypes.bool,
  onModeration: PropTypes.func,
};

export default ChatMessage;
