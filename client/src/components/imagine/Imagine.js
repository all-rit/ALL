import { Router } from "@reach/router";
import React from "react";
import AvatarSelection from "./pages/AvatarSelection";
import ImagineEnd from "./pages/ImagineEnd";
import ImagineStart from "./pages/ImagineStart";
import MatchLobby from "./pages/MatchLobby";
import TicTacToe from "./pages/TicTacToe";

const Imagine = (props)=>{
    const {user,biasType,linkNum} = props;

    return(
        <section className="page-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">
                                ImagineRIT '22
                        </h2>
                    </div>
                </div>
            </div>
        <div className="container bottomSpace" >
            <Router className="app">
                <ImagineStart path="/" user={user} linkNum={linkNum}/>
                <AvatarSelection path="/AvatarSelection" user={user} linkNum={linkNum}/>
                <MatchLobby path="/MatchLobby" user={user} biasType={biasType} linkNum={linkNum}/>
                <TicTacToe path="/TicTacToe" user={user} linkNum={linkNum}/>
                <ImagineEnd path="/End" user={user} linkNum={linkNum}/>
            </Router>
        </div>
        </section>
    )
}

export default Imagine;