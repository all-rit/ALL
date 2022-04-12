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
            alert.show("ErrCode#"+Math.floor(Math.random() * (9999 - 1) + 1)+": "+bias,{title:"Error: The AI has run into a computational error based on the appearance of your avatar"})
        } else{
            alert.show("ErrCode#"+Math.floor(Math.random() * (9999 - 1) + 1)+": "+bias,{title:"Error: The AI has run into a computational error based on the appearance one of your teammates avatars"})
        }
    }

    const penaltyFinished = () => {
        alert.success("Now Joining Game...");
        handleNext()
    }

    if(biasType!=="none"){
        return(
            <div>
                <Timer seconds={30} finished={penaltyFinished} throwAlert={throwAlert}/>
                {/* change to any number */}
            </div>
        );
    } else{
        return(<></>)
    }

}

export default Bias;
