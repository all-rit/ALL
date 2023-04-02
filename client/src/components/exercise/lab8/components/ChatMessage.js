import React, { useState, useEffect } from "react";
import "../../../../assets/stylesheets/components/Witch.css";
import PropTypes from "prop-types";
import createAvatarData from "../../../body/lab/GridImages/createAvatarData";
import Avatar  from "avataaars";


{/* Sentiment not being displayed yet, and not all three messages are being displayed */}

const ChatMessage = ({ username, message, sentiment_score}) => {

  const [userAvatar, setUserAvatarData] = useState(null);

  useEffect(() => {
    setUserAvatarData(createAvatarData(1)[0]);
  }, []);


  return (
    <div className="chat-message">
        <div className= "chat-user-info-w-message">
        {/* Above div - Needed for flex styling for avatar image and avatar username as well as content underneath */}
              <div className= "chat-user-info"> 
                {/* Above div - Needed to get the avatar image and avatar username in the top left together */}
                  <div>
                          {userAvatar && ( <Avatar 
                              alt={userAvatar.name}
                              className="chat-avatar-image"
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
                  </div>
              <div className="chat-message-username">{username}</div>
        </div>
          
          <div className="chat-message-content">{message}</div>
      
      </div>


        <div className="chat-sentiment-box"> AI Score: 
            <div className="chat-message-sentiment">  {sentiment_score}</div>
            <div className="chat-sentiment-keep"> Keep </div>
            <div className="chat-sentiment-remove"> Remove </div>
        </div>
    </div>
  );
};



ChatMessage.propTypes = {
  username: PropTypes.isRequired,
  message: PropTypes.isRequired,
  sentiment_score: PropTypes.isRequired,
  avatar_image: PropTypes.isRequired
};

export default ChatMessage;
