import { Router } from "@reach/router";
import React from "react";
import AvatarSelection from "./pages/AvatarSelection";
import ImagineEnd from "./pages/ImagineEnd";
import ImagineStart from "./pages/ImagineStart";
import MatchLobby from "./pages/MatchLobby";
import TicTacToe from "./pages/TicTacToe";

const Imagine = (props)=>{
    const {user} = props;

    return(
        
        <div className="container bottomSpace" >
            <Router className="app">
                <ImagineStart path="/" user={user}/>
                <AvatarSelection path="/AvatarSelection" user={user}/>
                <MatchLobby path="/MatchLobby" user={user}/>
                <TicTacToe path="/TicTacToe" user={user}/>
                <ImagineEnd path="/End" user={user}/>
            </Router>
        </div>
    )
}

export default Imagine;