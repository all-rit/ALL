import React from "react";
import { navigate } from "@reach/router";
import { Chat } from "../components/Chat";
import TeammateVideo from "../components/TeammateVideo";
import { ExerciseService } from "../../../../services/lab16/ExerciseService";
import useMainStateContext from "src/reducers/MainContext";
import ExerciseStateContext from "../Lab16Context";
import { useContext } from "react";
import { Link } from "@reach/router";

const ChatRoom = () => {
  const {state} = useMainStateContext();
  const {teammateId} = useContext(ExerciseStateContext);

  const teammateMessages = ["How was your experience with deepfakes"]

  const onSubmit = async (reply) => {
    console.log(reply)
    console.log("save user reply")
      await ExerciseService.postChatReply(
        {
          userid: state.main.user.userid, 
          reply: reply,
          page: 2,
        }
      );
      setTimeout(() => {
        navigate("/Lab16/Exercise/Conclusion");
      }, 1000);
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
                endConversation={onSubmit}
                height="100%"
                width="100%"
                teammateMessages={teammateMessages}
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