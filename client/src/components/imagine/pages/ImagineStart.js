import React from "react";
import { navigate } from "@reach/router";

const ImagineStart = (props)=>{
    const handleNext= ()=>{
        navigate("/Imagine/AvatarSelection");
    }

    return(
        
        <div className="container bottomSpace" >
            <div>
                ImagineStart
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

export default ImagineStart;