import React, { useState } from "react";
import Timer from "../components/Timer";
import { useAlert } from "react-alert";

const Bias = (props) =>{
    const {handleNext,biasType,team,avatar,offender} = props;
    const [bias,setBias]= useState(null)
    const alert = useAlert();

    useState(()=>{
        biasType ==="user" ? setBias(avatar[0]?.bias) : setBias(offender?.bias)
    },[team,avatar,offender])

    const throwAlert = ()=>{
        if(biasType==="user"){
            alert.error("Error: The AI has run into a computational error");
            alert.error("ErrCode#"+Math.floor(Math.random() * (9999 - 1) + 1)+": "+bias);
        } else{
            alert.error("Error: The AI has run into a computational error with one of your teammates.");
            alert.error("ErrCode#"+Math.floor(Math.random() * (9999 - 1) + 1)+": "+bias+ ".");
            alert.error("There will be a penalty to join the game for you and your squad.");
        }
    }

    const penaltyFinished = () => {
        alert.success("Now Joining Game...");
        handleNext()
    }

    if(biasType!=="none"){
        return(
            <div>
                <Timer seconds={15} finished={penaltyFinished} throwAlert={throwAlert}/>
                {/* change to any number */}
            </div>
        );
    } else{
        return(<></>)
    }

}

export default Bias;