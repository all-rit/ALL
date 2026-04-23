import React from "react";
import { navigate } from "@reach/router";
import { Chat } from "../../all-components/imagine-components/Chat";
import TeammateVideo from "../components/TeammateVideo";
import ImagineService from "src/services/ImagineService";

const ChatRoom = () => {
  const teammateId = Number(sessionStorage.getItem("teammateId"));
  const group = sessionStorage.getItem("group");

  const onSubmit = async (reply) => {
    await ImagineService.postChatReply(
      sessionStorage.getItem("userID"),
      reply,
      26,
    );
    setTimeout(() => {
      navigate("/Imagine2026/ReadingSection");
    }, 1000);
  };

  const groupMap = {
    experiential:
      "That image is so crazy, did you really say that? How do you feel?",
    expression: "THAT IS A FAKE IMAGE. I NEVER SAID THAT !!",
  };

  const contentSizing =
    "tw-flex tw-flex-col tw-h-full tw-border tw-rounded-xl tw-overflow-hidden";
  return (
    <>
      <div className="tw-w-full tw-p-2 tw-h-full">
        <div className="tw-flex tw-flex-row tw-gap-6 tw-mt-8 tw-overflow-hidden">
          <div className="tw-flex-1 tw-min-h-0 tw-min-w-0">
            <div className={contentSizing}>
              <div className="tw-w-full tw-pt-4 tw-pb-2">
                <h3 className={"tw-title tw-pb-3"}>Chat Room</h3>
                <div className={"tw-flex tw-justify-center"}>
                  <hr className={"tw-w-3/5 tw-bg-labLightGray"} />
                </div>
              </div>

              <div className="tw-flex-1 tw-w-[100%]">
                <Chat
                group={group}
                onSubmit={onSubmit}
                teammateMessage={groupMap[group]}
                height="100%"
                width="100%"
              />
              </div>
              
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
