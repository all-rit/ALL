import React, { useState } from "react";
import { navigate } from "@reach/router";
import Spinner from "../../../common/Spinner/Spinner";
import TicTacToeBoard from "../TicTacToe/TicTacToeBoard";
const TicTacToe = (props)=>{
    const {linkNum} = props;
    const [loading,setLoading]=useState(true);

    const handleNext= ()=>{
        navigate("/Imagine"+linkNum+"/End");
    }

    setTimeout(()=>{
        setLoading(false)
    },3000)

    return(
        <div className="container bottomSpace" >
            {loading?
                <>
                    <h2 class="playthrough__title">Entering Match...</h2>
                    <div className="landingpage__row">
                        <Spinner />
                    </div>
                </>
            :
                <>
                   <h2 class="playthrough__title">Tic-Tac-Toe: Match</h2>
                    <TicTacToeBoard handleNext={handleNext}/>
                </>
            }
        </div>
    )
}

export default TicTacToe;