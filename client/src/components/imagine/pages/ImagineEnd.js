import React from "react";
import { navigate } from "@reach/router";

const ImagineEnd = (props)=>{
    const handleNext= ()=>{
        navigate("/Imagine");
    }

    return(
        
        <div className="container bottomSpace" >
            <div>
                ImagineEnd
            </div>
            <button
              className="btn btn-primary text-black btn-xl text-uppercase "
              onClick = {handleNext}
              key="start"
            >
                Continue
            </button>
        </div>
    )
}

export default ImagineEnd;