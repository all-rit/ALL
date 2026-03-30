
import React, { useState } from "react";
import PropTypes from "prop-types";
import ImagineService from "src/services/ImagineService";

export const ChatComponent =  (props) =>{
    
    const {group} = props
    const [reply,setReply] = useState(" ")
    const [showReply,setShowReply] = useState(false)
    const [isDisabled,setIsDisabled] = useState(false)
    const [inputValue,setInputValue] = useState("")

    //logging the group to check that the correct chat is rendered
    console.log(group)

    const onHandle = (e) =>{
        const value = e.target.value
        setInputValue(value)
        setReply(value)
        setShowReply(false)
    }
    const submit = async (e) =>{
        e.preventDefault();
        if (reply.trim().length > 0) {
            setShowReply(true);
            //make call to database and save reply
            const resp = await ImagineService.postChatReply(
                sessionStorage.getItem("userID"),
                reply,
                26
            )
            console.log(resp)
            setIsDisabled(true)
            setInputValue("")
        }
    }
    const groupMap = {
            experiential:"That image is so crazy, did you really say that? How do you feel?",
            expression: "THAT IS A FAKE IMAGE. What do you think about this?"
    }

    return (
           <>
    <div className="tw-w-[600px] tw-h-[400px] tw-mx-auto tw-mt-10">
        <div className="tw-w-full tw-h-full tw-bg-white tw-border-solid tw-border-[0.4rem] tw-border-t-labBlue tw-border-r-labBlue tw-border-b-labYellow tw-border-l-labYellow tw-rounded-lg tw-p-8 tw-flex tw-flex-col">        
            <div className="tw-flex-1 tw-mt-10">
                <div className="tw-flex tw-flex-row tw-items-baseline tw-gap-2">
                    <span className="tw-text-lg tw-text-labBlue tw-font-extrabold"> Teammate:</span>
                    <p className="tw-text-md tw-font-semibold">{groupMap[group] || "Hello!"}</p>
                </div>
                <div className="tw-flex tw-flex-row tw-items-baseline tw-gap-2 tw-mt-10">
                        <span className="tw-text-lg tw-text-labBlue tw-font-extrabold"> User:</span>
                        {showReply && (
                            <p className="tw-text-md tw-font-semibold">{reply}</p>
                        )} 
                </div>
            </div>
            <form onSubmit={submit} className="tw-mt-auto">
                <div className="tw-relative tw-flex tw-items-center">
                    <input
                        type="text"
                        className="tw-w-full tw-border-2 tw-border-black tw-rounded-lg tw-p-3 tw-pr-12 tw-font-semibold"
                        value={inputValue}
                        onChange={onHandle}
                        placeholder="Message your teammate"
                        disabled={isDisabled}
                    />
                    <button 
                        disabled={isDisabled}
                        type="submit" 
                        className="tw-absolute tw-right-2 tw-p-1 tw-rounded tw-border tw-border-black"
                    >
                        <span className="tw-font-bold">↑</span>
                    </button>
                </div>
        </form>
    </div>
    </div>
    </>
    )
}

ChatComponent.propTypes = {
  group: PropTypes.string.isRequired
};

