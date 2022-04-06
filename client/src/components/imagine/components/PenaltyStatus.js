import React, { useEffect, useState } from "react";

const PenaltyStatus = (props) =>{
    const {isOffender} = props;

    const [penalty,setPenalty] = useState("None")
    
    useEffect(()=>{
        if(isOffender===true){
            const penaltyTimeout = setTimeout(()=>{
                setPenalty("Offender")
            },5100)
    
            return () =>{
                clearTimeout(penaltyTimeout)
            }
        }
    })


    return(
        <div className={penalty==="Offender"? "tw-text-brightRed" : ""}>
            {penalty}
        </div>
    );

}

export default PenaltyStatus;