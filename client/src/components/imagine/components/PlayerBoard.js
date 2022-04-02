import React, { useEffect, useState } from "react";    
import "./App.css"
import GameScore from "./GameScore";
import GameStatus from "./GameStatus";
import { gridMockData } from "../../mockData/gridMockData";
import ImagineService from "../../../services/ImagineService";
import Spinner from "../../../common/Spinner/Spinner";
import Bias from "./Bias";
import PenaltyStatus from "./PenaltyStatus";

const PlayerBoard = (props) => { 
    const {user,handleNext,biasType} = props;
    const [team, setTeam] = useState([]);
    const [avatar, setAvatar] = useState([]);
    const [opposingTeam, setOpposingTeam] = useState([]);


    const shuffleArray = (array) =>{
		let currentIndex = array.length,
			temporaryValue,
			randomIndex;
	
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
	
			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
	
		return array;
	}

    useEffect(()=>{
        ImagineService.getUserSquad(user?.userid).then((data)=>{
            setTeam(data)
        })
        ImagineService.getUserAvatar(user?.userid).then((data)=>{
            setAvatar(data)
        })
        shuffleArray(gridMockData)
		setOpposingTeam(gridMockData.slice(0,4));
    // eslint-disable-next-line
    },[user])
    
    return  (
        <div className="FullPB moduleContainer">
            {avatar.length!==0 && team.length!==0 &&
                <Bias handleNext={handleNext} biasType={biasType} team={team} avatar={avatar}/>
            }
            {team?.length!==0 && opposingTeam?.length!==0?
                <>
                    <table className="table">
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>SCORE</th>
                                    <th>STATUS</th>
                                    <th>PENALTY</th>
                                </tr>
                            </thead>
                            <tr className="teamMember">
                                <td>{user?.firstname != null ? user?.firstname+" "+ user?.lastinitial : "User#"+user?.userid}</td>
                                <td>0/0/0</td>
                                <td><GameStatus userType="user" handleNext={handleNext} biasType={biasType}/></td>
                                <td><PenaltyStatus offender={biasType==="user"? true : false}/></td>
                            </tr>
                            {team?.map((data,index)=>{
                                return(
                                    <tr className="teamMember" key={index}>
                                        <td>{data.name}</td>
                                        <td><GameScore/></td>
                                        <td><GameStatus userType="teamMember" biasType={biasType}/></td>
                                        <td><PenaltyStatus offender={false}/></td>
                                    </tr>
                                )
                            })}
                            {opposingTeam?.map((data,index)=>{
                                return(
                                    <tr className="opposingMember" key={index}>
                                        <td>{data.name}</td>
                                        <td><GameScore/></td>
                                        <td><GameStatus userType="opposingMember" biasType={"none"}/></td>
                                        <td>None</td>
                                    </tr>
                                )
                            })}
                    </table>
                </>
            :
                <div className="landingpage__row">
                    <Spinner />
                </div>
            }
                
        </div>
    );
};

export default PlayerBoard;