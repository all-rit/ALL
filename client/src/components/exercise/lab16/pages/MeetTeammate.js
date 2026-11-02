import React from "react"
import { navigate } from "@reach/router";

const MeetTeammate = ()=>{

   const handleContinue = () => {
           navigate("/Lab16/Exercise/Game");
         };
   
       return (<>
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