import React from "react";
import  "../../../../assets/stylesheets/components/Witch.css";
import PropTypes from 'prop-types';


const ChatMessage = ({ username, message, sentiment_score }) => {
    return (
          <div className="chat-message"> 
            <div className="chat-message-username">{username}</div>
            <div className="chat-message-content">{message}</div>
            <div className="chat-message-sentiment">{sentiment_score}</div>
          </div>
          );
  };

  ChatMessage.propTypes = {
      username: PropTypes.isRequired,
      message: PropTypes.isRequired,
      sentiment_score: PropTypes.isRequired
    };
  

export default ChatMessage;