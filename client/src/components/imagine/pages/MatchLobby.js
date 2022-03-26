import React from "react";
import { navigate } from "@reach/router";
import { createText } from "@reach/router";

const MatchLobby = (props)=>{

    const handleNext= ()=>{
        navigate("/Imagine/TicTacToe");
    }
   
    // ReactDOM.render(element, document.getElementById('root'));

const ChatBox = (props)=>{
    const handleNext= ()=>{
        navigate("");
    }
}
    return(
        
        <div className="container bottomSpace" >
            <div>
                MatchLobby
            </div>
            <button
              className="btn btn-primary text-black btn-xl text-uppercase "
              onClick = {handleNext}
              key="start"
            >
                Continue
            </button>

        <div className= 'chatbox'>
            <div>
                ChatBox
            </div>
            <form onSubmit={this.handleSubmit}>
            <input type = "text"/>
        
            </form>
            <button
              className="StartButton"
              onClick = {handleNext}
              key="start"
            >
                Submit
            </button>
        </div>
        </div>
    )


}

export default MatchLobby;