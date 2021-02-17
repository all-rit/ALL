import React from "react";
import { navigate } from "@reach/router";


const Error = () => {
    return (
        <div>
            <h1>Invalid Page</h1>
            <div>Please click the button to navigate home</div>
            <button className="btn btn-second btn-xl text-uppercase js-scroll-trigger" onClick={()=>navigate("/")} >
                Go Home
            </button>
        </div>
    );
};


export default Error;