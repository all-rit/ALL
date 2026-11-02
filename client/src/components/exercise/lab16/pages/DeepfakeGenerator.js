import React from "react";
import { Button } from "reactstrap";
import { navigate } from "@reach/router";


const DeepfakeGenerator = ()=>{
    const handleNavigation = async () => {
      navigate("/Lab16/Exercise/Conclusion");
    };
     return (<>
    <h1>
        Deepfake Generator
    </h1>

     <Button
        className="tw-body-text tw-font-bold tw-text-center tw-border-solid tw-border-primary-blue tw-pt-[0.3rem] tw-pr-[0.5rem] tw-w-[10rem] tw-h-[3rem]
        tw-border-[0.4rem] tw-border-l-0 tw-border-b-0 tw-rounded-tr-lg blue-drop-shadow tw-bg-[white] tw-text-xl tw-text-black tw-mt-20"
        //change this to last chatpage when that's done
        onClick={handleNavigation}
    >
     End Game
    </Button>


    </>)
}

export default DeepfakeGenerator
