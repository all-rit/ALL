import React, { useEffect, useState } from "react";

const GameStatus = (props) =>{
    const {userType,handleNext} = props;

    const [status,setStatus] = useState("Waiting...")
   // const [enterGame,setEnterGame] = useState(false);

    const timerTimeout = userType==="opposingMember"? (Math.random() * (10000 - 7500) + 7500) :(Math.random() * (15000 - 8500) + 7500);
   // const loadingTimeout = timerTimeout - 5000;
    
    useEffect(()=>{
        // const loading = setTimeout(()=>{
        //     if(userType!=="user"){
        //         setStatus("Loading...")
        //     }
        // }, loadingTimeout)

        const inGame = setTimeout(()=>{
            if(userType!=="user"){
                   setStatus("In Game")
            } else{
                setStatus("Loading...");
                handleNext()
            }
        }, timerTimeout)

        return () =>{
            clearTimeout(inGame)
        }
    })

    

    return(
        <div>
            {status}
        </div>
    );

}

export default GameStatus;