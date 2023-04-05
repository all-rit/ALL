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

  //used to remove the remove button if keep is clicked
  const [enableRemoveButtonDisplay, setRemoveButtonDisplay] = useState(true);

  //would use a setEnableDisplay if a function were to be used

  function handleKeep() {
    setRemoveButtonDisplay(false);
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
    // <div>
    //

    <div>
      {enableMessageDisplay && (
        <div className="chat-message">
          {/* {enableMessageDisplay &&
           */}
          <div className="chat-user-info-w-message">
            {/* Above div - Needed for flex styling for avatar image and avatar username as well as content underneath */}
            <div className="chat-user-info">
              {/* Above div - Needed to get the avatar image and avatar username in the top left together */}
              <div>
                {userAvatar && (
                  <Avatar
                    alt={userAvatar.name}
                    className="chat-avatar-image"
                    avatarStyle="Circle"
                    topType={userAvatar.avatarAttributes.topType}
                    accessoriesType={
                      userAvatar.avatarAttributes.accessoriesType
                    }
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
              </div>
              <div className="chat-message-username">{username}</div>
            </div>

            <div className="chat-message-content">{message}</div>
          </div>

          {enableSentimentDisplay && (
            <div className="chat-sentiment-box">
              <div className="chat-message-sentiment-title">
                AI Score: {sentiment_score}
                <div className="chat-message-sentiment"> </div>
              </div>

              <div className="kr-buttons">
                <button
                  className="chat-sentiment-keep"
                  onClick={handleKeep}
                  key="keep"
                >
                  Keep
                </button>

                {enableRemoveButtonDisplay && (
                  <button
                    className="chat-sentiment-remove"
                    onClick={handleRemove}
                    key="remove"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          )}
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
