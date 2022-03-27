import React, { useState } from "react";
import { navigate } from "@reach/router";
import GridImages from "./../../body/lab/GridImages/GridImages"
import ImagineService from "../../../services/ImagineService";
const AvatarSelection = (props)=>{
    const {user}=props;
    const handleNext= ()=>{
        navigate("/Imagine/MatchLobby");
    }

    const [squadSelection,setSquadSelection]=useState(false);

    const [avatar, setAvatar] = useState({})
    const [squad, setSquad] = useState([])

    const handleAvatarSelection = () =>{
        if(avatar){
            ImagineService.userAvatar(user.userid,avatar)
            setSquadSelection(true)
        }
    }

    const handleSquadSelection = () =>{

        handleNext()
    }


    return(
        
        <div className="container bottomSpace center-div" >
            {squadSelection===false ?
            <>
                <h2 className="playthrough__title">Choose Your Avatar</h2>
                <div className="playthrough__sentence">
                    Choose the avatar you would like to use for the game!
                </div>
                
                <div className="moduleContainer tw-mb-5">
                    <GridImages multi={false} avatar={avatar} setAvatar={setAvatar}/>
                </div>
                <button
                    className="btn btn-primary text-black btn-xl text-uppercase "
                    onClick = {handleAvatarSelection}
                    key="start"
                >
                    Confirm Avatar Selection
                </button>
            </>
            :
            <>
                <h2 className="playthrough__title">Choose Your Squad</h2>
                <div className="playthrough__sentence">
                    Choose the members of your squad from this group of active players.
                </div>
                
                <div className="moduleContainer tw-mb-5">
                    <GridImages multi={false} avatar={avatar} setAvatar={setAvatar}/>
                </div>
                <button
                    className="btn btn-primary text-black btn-xl text-uppercase "
                    onClick = {handleSquadSelection}
                    key="start"
                >
                    Confirm Squad Selection
                </button>
            </>
            }
        </div>
    )
}

export default AvatarSelection;