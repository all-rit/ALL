import React, { useState } from "react";
import { navigate } from "@reach/router";
import Spinner from "../../../common/Spinner/Spinner";

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
                    <div>
                        TicTacToe
                    </div>
                    <button
                    className="btn btn-primary text-black btn-xl text-uppercase "
                    onClick = {handleNext}
                    key="start"
                    >
                        Continue
                    </button>
                </>
            }
        </div>
    )
}

export default TicTacToe;