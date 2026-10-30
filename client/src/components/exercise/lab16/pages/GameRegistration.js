import { navigate } from "@reach/router"
import React from "react"

const GameRegistration = () =>{

    const handleContinue = () => {
        navigate("/Lab16/Exercise/MeetTeammate");
      };

    return (<>
    <h1>
        Game Registration Page
    </h1>

      <button
          className="btn btn-primary text-black btn-xl text-uppercase"
          onClick={handleContinue}
          key="start"
        >
          Next Page
        </button>
    </>)
}

export default GameRegistration