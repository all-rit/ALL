import React from "react";
import { navigate } from "@reach/router";
import { Button } from "reactstrap";
import ImagineHeader from "../components/ImagineHeader";
import { ChatComponent } from "../components/Chat";
import TeammateVideo from "../components/TeammateVideo";

const ChatRoom = () => {
    const teammateId = Number(sessionStorage.getItem("teammateId"));
    const group = sessionStorage.getItem("group");
    console.log("group in chat")
    console.log(group)
    const contentSizing = "tw-flex tw-flex-col tw-items-center tw-justify-between tw-gap-5 tw-border tw-rounded-xl tw-w-[46vw] tw-h-[39vw] xxl:tw-h-[600px] xxl:tw-w-[800px] tw-pt-[2rem] tw-pb-10 tw-mx-auto";    
    const handleNavigation = ()=>{
        navigate("/Imagine2026/ReadingSection")
    }
    return (
        <>
            <div className="tw-flex tw-flex-row tw-items-center tw-mt-10 tw-overflow-hidden">
                <div>
                    <div className={contentSizing}>
                        <ImagineHeader title="Chat Room" />
                        {/* <div className="tw-w-full tw-flex tw-justify-center"> */}
                        <ChatComponent group={group}/>
                        {/* </div> */}
                    <Button
                        className="tw-body-text tw-text-center tw-border-solid tw-border-primary-blue tw-pt-[0.3rem] tw-pr-[0.5rem] tw-w-[10rem] tw-h-[3rem]
                       tw-border-[0.4rem] tw-border-l-0 tw-border-b-0 tw-rounded-tr-lg blue-drop-shadow tw-bg-[white] tw-text-xl tw-text-black"
                        onClick={handleNavigation}
                        >
                    Next
                    </Button>
                    </div>
                <TeammateVideo teammateId={teammateId} status="chatroom" />
                </div>
            </div>
            
        </>
    );
};

export default ChatRoom;
