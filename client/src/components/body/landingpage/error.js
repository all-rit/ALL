import React from "react";
import { navigate } from "@reach/router";


const Error = () => {
    return (
        <div className="errorpage">
            <div>
                <h1>Invalid Page</h1>
                <hr class="horiz" />
                <p>Please click the button to navigate home</p>
                <hr class="horiz" />
                <button className="btn btn-second btn-xl text-uppercase" onClick={()=>navigate("/")} >
                    Return Home
                </button>
            </div>
        </div>
    );
};


export default Error;