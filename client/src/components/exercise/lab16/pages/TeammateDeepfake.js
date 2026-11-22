import DisplayDeepFake from "../components/DisplayDeepfake";
import TeammateVideo from "../components/TeammateVideo";
import React from "react";
import ExerciseStateContext from "../Lab16Context";
import { useContext, useState } from "react";
import { navigate } from "@reach/router";
import ChatMessageModal from "../components/ChatMessageModal";


const TeammateDeepfake = () =>{
    const contentSizing ="tw-border tw-rounded-xl tw-w-[46vw] tw-h-[39vw] tw-h-[40vw] xxl:tw-h-[600px] xxl:tw-w-[800px] tw-pt-[3rem]";
    // const contentSizing2 = "t"
    const {teammateId} = useContext(ExerciseStateContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleNavigation = async () => {
      navigate("/Lab16/Exercise/ChatRoom");
    };

    const handleModal = () => {
      setIsModalOpen(true);
    };

    return (
    <>
      {!isModalOpen ? (
        <div className={contentSizing}>
          <DisplayDeepFake
            teammateId={teammateId}
            isChatRoom={false}
            handleNavigation={handleModal}
          />
          <TeammateVideo teammateId={teammateId} status={'deepfakeVideo'} />
        </div>
      ) : (
        <ChatMessageModal
          handleNavigation={handleNavigation}
        />
      )}
    </>
    )
}

export default TeammateDeepfake;