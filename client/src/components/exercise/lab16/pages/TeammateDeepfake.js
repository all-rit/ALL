import DisplayDeepFake from "../components/DisplayDeepfake";
import TeammateVideo from "../components/TeammateVideo";
import React from "react";
import ExerciseStateContext from "../Lab16Context";
import { useContext } from "react";



const TeammateDeepfake = () =>{
    const contentSizing ="tw-border tw-rounded-xl tw-w-[46vw] tw-h-[39vw] tw-h-[40vw] xxl:tw-h-[600px] xxl:tw-w-[800px] tw-pt-[7rem]";
    const {teammateId} = useContext(ExerciseStateContext);

    return (<>
    
        <div className={contentSizing}>
            
            <div className={"tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center tw-justify-center"}>
             <DisplayDeepFake
                teammateId={teammateId}
                isChatRoom={false}
              />
            </div>
            <TeammateVideo teammateId={teammateId} status={'deepfakeVideo'} />
        </div>
    
    </>)
}

export default TeammateDeepfake;