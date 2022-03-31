import React,{useState} from "react";
import { navigate } from "@reach/router";
import PlayerBoard from "../components/PlayerBoard";
import Timer from "../components/Timer";


const MatchLobby = (props)=>{
    const {user} = props;
    const [ startDelay , setStartDelay] = useState(false);

    const handleNext= ()=>{ 
        navigate("/Imagine/TicTacToe");
    }

    const throwAlert = ()=>{
        alert("Error: Bias Detected.");
    }

    const doWhenTimerFinished = () => {
        alert("Now Joining Game...");//Notifies the user when they can join game
    }

    const [clicked, setClicked] = useState(false);

    return(
        
        <div className="container bottomSpace" >

            <PlayerBoard user={user} handleNext={handleNext}/>
            {/* {clicked 
                ? <Timer seconds={5} finished={doWhenTimerFinished} />
                : <button onClick={() => setClicked(true)}>Start</button>
            } */}
            {/* change to any number */}
            {/* <button
              className="btn btn-primary text-black btn-xl text-uppercase "
              onClick = {handleNext}//{()=> throwAlert()}{handleNext}
              key="start"
            >
                Continue
            </button> */}
        </div>

    )
}

export default MatchLobby;