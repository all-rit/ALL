import React, { useContext } from "react"
import { navigate } from "@reach/router";
import ExerciseStateContext from "../Lab16Context";


const MeetTeammate = ()=>{
   const {teamName} = useContext(ExerciseStateContext)
   console.log(teamName)
   const handleContinue = () => {
           navigate("/Lab16/Exercise/Game");
         };
   
       return (<>
       <p style={{marginLeft: 'auto', padding: 5}}>Team: <b>{teamName}</b></p>
       <h1>
          Meet Teammate
       </h1>
   
         <button
             className="btn btn-primary text-black btn-xl text-uppercase"
             onClick={handleContinue}
             key="start"
           >
             Play Game
           </button>
       </>)
}

export default MeetTeammate