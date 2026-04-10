import React from "react";
import { navigate } from "@reach/router";
import { Chat } from "../../all-components/imagine-components/Chat";
import TeammateVideo from "../components/TeammateVideo";
import ImagineService from "src/services/ImagineService";

const ChatRoom = () => {
    const teammateId = Number(sessionStorage.getItem("teammateId"));
    const group = sessionStorage.getItem("group");

    const  onSubmit = async (reply)=>{
        const resp = await ImagineService.postChatReply(
                sessionStorage.getItem("userID"),
                reply,
                26
            )
        setTimeout(() => {
            navigate("/Imagine2026/ReadingSection");
        }, 1000);
        console.log(resp)
    }

    const groupMap = {
            experiential:"That image is so crazy, did you really say that? How do you feel?",
            expression: "THAT IS A FAKE IMAGE. I NEVER SAID THAT !!"
    }

    const contentSizing = "tw-flex tw-flex-col tw-items-center tw-justify-between tw-border tw-rounded-xl";    
    return (
        <>
            <div className="tw-w-full tw-p-2 tw-h-[90vh]">
                <div className="tw-flex tw-flex-row tw-items-center tw-gap-6 tw-mt-8 tw-overflow-hidden">
                    <div className="tw-flex-1">
                        <div className={contentSizing}>
                            <div className="tw-top-3 tw-w-[96%] tw-mb-[-5%]">
                            <h3 className={"tw-title tw-pb-3"}>Deepfake 101</h3>
                            <div className={"tw-flex tw-justify-center"}>
                                <hr className={"tw-w-3/5 tw-bg-labLightGray"} />
                                </div>
                            </div>
                            <Chat group={group} onSubmit={onSubmit} teammateMessage={groupMap[group]} height={450} width={500}/>
                            {/* </div> */}
                        </div>
                    </div>
                <TeammateVideo teammateId={teammateId} status="chatroom" />
                </div>
            </div>
        </>
    );
};

export default ChatRoom;
