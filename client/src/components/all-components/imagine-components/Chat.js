
import React, { useState , useEffect} from "react";
import PropTypes from "prop-types";
import "./chatStyle.css"

export const ChatComponent =  (props) =>{
    const {onSubmit,height,width,teammateMessage} = props
    const [reply,setReply] = useState("")
    const [showReply,setShowReply] = useState(false)
    const [isDisabled,setIsDisabled] = useState(false)
    const [inputValue,setInputValue] = useState("")
    const [time,setTime] = useState(new Date())

    //logging the group to check that the correct chat is rendered
    const onHandle = (e) =>{
        const value = e.target.value
        setInputValue(value)
        setShowReply(false)
    }

    useEffect(()=>{
        const timer = setInterval(() => {
        setTime(new Date())
        }, 1000)
        return () => clearInterval(timer)
    },[])

    const submit = async (e) =>{
        e.preventDefault()
        if (inputValue.trim().length > 0) {
            const reply = inputValue
            setReply(reply)
            setShowReply(true)
            setIsDisabled(true)
            setInputValue("")
            await onSubmit(reply)
        }
    }

    const actualTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    
    return (
           <>
    <div className="chat-container" style={{ width: `${width}px`, height: `${height}px` }}>
            <div className="inner-chat-container">
                <div className="messages">
                    <div className="teammateMessagesContainer">
                        <img className="user-image " 
                            src="/img/imagine26/activityImages/user.png" 
                            alt="profile"
                        />
                        <div className="message-content">
                            <div className="message-header">
                                <span className="username">Teammate</span>
                                <span className="time">{actualTime}</span>
                            </div>
                            <p className="message-text">
                                {teammateMessage || "add a message"}
                            </p>
                        </div>
                    </div>

                    {showReply && (
                        <div className="userMessageContainer">
                            <img className="user-image " src="/img/imagine26/activityImages/user-2.png" alt="profile" />
                            <div className="message-content">
                                <div className="message-header">
                                    <span className="username">You</span>
                                    <span className="time">{actualTime}</span>
                                </div>
                                <p className="message-text">{reply}</p>
                            </div>
                        </div>
                    )}
                </div>
                <form onSubmit={submit} className="input-form">
                    <div className="input-container">
                        <input
                            type="text"
                            className="chat-input"
                            value={inputValue}
                            onChange={onHandle}
                            placeholder="Respond to your teammate"
                            disabled={isDisabled}
                        />
                        <button disabled={isDisabled} type="submit" className="send-button">
                            <img className="send-icon" src="/img/imagine26/activityImages/send.png" alt="send" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
)
}

ChatComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
  height:PropTypes.string.isRequired,
  teammateMessage: PropTypes.string.isRequired
};

