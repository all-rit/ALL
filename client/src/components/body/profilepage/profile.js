import React from "react";
import ProfileHeader from "./profileHeader";
import {actions} from "../../../reducers/MainReducer";
import renderLabData from "../landingpage/lab/LabGeneration";

const Profile = (props) => {

    return (
        <div className="profile container">
            {props.user?.firstname !== null
                ? <ProfileHeader user={props}/>
                : <p>You are currently not logged in.</p>

            }
            <h4>My Enrolled Classes</h4>
            <div className="enrolled-classes">
                <p>Classes the user is enrolled in</p>
            </div>

            <h4>In Progress Modules</h4>
            <br/>
            <div className="landingpage__row">
                {renderLabData(actions,"IN_PROGRESS")}
            </div>

            <h4>To-do Modules</h4>
            <br/>
            <div className="landingpage__row">
                {renderLabData(actions,"NOT_STARTED")}
            </div>

            <h4>Completed Modules</h4>
            <br/>
            <div className="landingpage__row">
                {renderLabData(actions,"COMPLETED")}
            </div>

        </div>
        
    );
};

export default Profile;