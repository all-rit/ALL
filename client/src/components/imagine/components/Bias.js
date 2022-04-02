import React, { useState } from "react";
import Timer from "../components/Timer";

const Bias = (props) =>{
    const {handleNext,biasType,team,avatar} = props;
    const [bias,setBias]= useState(null)

    useState(()=>{
        setBias(avatar[0]?.bias)
    },[team,avatar])

    const throwAlert = ()=>{
        if(biasType==="user"){
            alert("Error: The AI has run into a computational error, ErrCode#"+Math.floor(Math.random() * (9999 - 1) + 1)+": "+bias);
        } else{
            alert("Error: The AI has been biased towards one of your teammates. There will be a penalty to join the game for you and your squad.");
        }
    }

    const penaltyFinished = () => {
        alert("Now Joining Game...");//Notifies the user when they can join game
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