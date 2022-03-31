import React from "react";
import Timer from "../components/Timer";

const Bias = (props) =>{
    const {handleNext,biasType} = props;
   
    const throwAlert = ()=>{
        if(biasType==="user"){
            alert("Error: The AI has been biased against you. There will be a penalty to join the game for you and your squad.");
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
                <Timer seconds={30} finished={penaltyFinished} throwAlert={throwAlert}/>
                {/* change to any number */}
            </div>
        );
    } else{
        return(<></>)
    }

}

export default Bias;