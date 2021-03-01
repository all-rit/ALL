import React from "react";
import Redirect from "../../../helpers/Redirect";



const Error = (props) => {
    const {actions}=props;
    return (
        <div className="errorpage">
            <div>
                <h1>Invalid Page</h1>
                <hr class="horiz" />
                <p>Please click the button to navigate home</p>
                <hr class="horiz" />
                <button className="btn btn-second btn-xl text-uppercase" onClick={()=>Redirect(actions,0,0)} >
                    Return Home
                </button>
            </div>
        </div>
    );
};


export default Error;