import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./chat.css";

export const Chat = (props) => {
  const { endConversation, height, width, teammateMessages } = props;
  const [teammateMessage, setTeammateMessage] = useState(teammateMessages);
  const [reply, setReply] = useState("");
  const [showReply, setShowReply] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [time, setTime] = useState(new Date());
  const [messages,setMessages] = useState([])

  useEffect(()=>{
    let startMessage = teammateMessage.shift()
    console.log(startMessage)
    setMessages([{ sender: 'teammate', text: startMessage }]);
  },[])

  const onHandle = async () => {

    //add user reply to messages array
    if (inputValue.trim() === '') return;
    
    setReply(inputValue)
    const newMessage = { sender: 'username', text: inputValue };
    setMessages([...messages, newMessage]);

    //teammate Reply
    
    await handleNextMessage()
    setShowReply(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNextMessage = async () => {
    if (teammateMessages.length >= 1){
      
      let nextMessage = teammateMessages.shift()
      setTimeout(() => {
        const teammateReply = {
          sender: 'teammate',
          text: nextMessage
        };
        setMessages((prevMessages) => [...prevMessages, teammateReply]);
      }, 1000);

    }else{
      //no more message so move to next page
      await endConversation(reply)
    }  
  
  };


  const actualTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <div className={`chat-container tw-w-[${width}] tw-h-[${height}]`}>
        <div className="inner-chat-container">
          <div className="messages">
            <div className="userMessageContainer">
              {messages.map((msg, index) => (
                <div key={index}>
                  <img
                    className="user-image "
                    src="/img/imagine_images/user.png"
                    alt="profile"
                  />
                   <div className="message-header">
                  <span className={msg.sender}>{msg.sender}</span>
                  <span className="time">{actualTime}</span>
                  </div>
                  <p className="message-text">{msg.text}</p>
                </div>
              ))}
            </div>
          </div>
          {!isDisabled ? (
            // <form onSubmit={onHandle} className="input-form">
              <div className="input-container">
                <input
                  type="text"
                  className="chat-input"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && onHandle()}
                  placeholder="Respond to your teammate"
                  disabled={isDisabled}
                  maxLength={100}
                />
                <button
                  disabled={isDisabled}
                  type="submit"
                  className="send-button"
                  onClick={onHandle}
                >
                  <img
                    className="send-icon"
                    src="/img/imagine_images/send.png"
                    alt="send"
                  />
                </button>
              </div>
            // </form>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

Chat.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  teammateMessage: PropTypes.array.isRequired,
};
