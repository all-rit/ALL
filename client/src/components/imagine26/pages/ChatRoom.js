import React from "react";
import { navigate } from "@reach/router";
import { Button } from "reactstrap";
import ImagineHeader from "../components/ImagineHeader";
import { ChatComponent } from "../../all-components/imagine-components/Chat";
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

    // const contentSizing = "tw-flex tw-flex-col tw-items-center tw-justify-between tw-gap-5 tw-border tw-rounded-xl tw-w-[46vw] tw-h-[39vw] xxl:tw-h-[600px] xxl:tw-w-[800px] tw-pt-[2rem] tw-pb-10 tw-mx-auto";    
    const contentSizing = "tw-flex tw-flex-col tw-items-center tw-justify-between tw-gap-5 tw-border tw-rounded-xl";    
    return (
        <>
            <div className="tw-w-full tw-p-2 tw-h-[90vh]">
                <div className="tw-flex tw-flex-row tw-items-center tw-gap-6 tw-mt-8 tw-overflow-hidden">
                    <div className="tw-flex-1">
                        <div className={contentSizing}>
                            <ImagineHeader title="Chat Room" />
                            <ChatComponent group={group} onSubmit={onSubmit} teammateMessage={groupMap[group]} height={400} width={500}/>
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
