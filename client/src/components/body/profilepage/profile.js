import React from "react";
import ProfileHeader from "./profileHeader";
import {actions} from "../../../reducers/MainReducer";
import LabGeneration from "../lab/LabGeneration";
import EnrolledCourses from "./enrolledCourses";

const Profile = (props) => {


    return (
        <div>
        {props.user?.firstname === null
            ? <h3>You are currently not logged in.</h3>
            :
            <div className="profile container">
                <ProfileHeader user={props}/>
                <h4>My Enrolled Classes</h4>
                <EnrolledCourses user={props.user}/>
                <h4>In Progress Modules</h4>
                <br/>
                <div className="landingpage__row">
                    <LabGeneration actions={actions} progressState="IN_PROGRESS"/>
                </div>
                <h4>To-do Modules</h4>
                <br/>
                <div className="landingpage__row">
                    <LabGeneration actions={actions} progressState="NOT_STARTED"/>
                </div>
                <h4>Completed Modules</h4>
                <br/>
                <div className="landingpage__row">
                    <LabGeneration actions={actions} progressState="COMPLETED"/>
                </div>

            </div>

        }
        </div>
    );
}

export default Profile;