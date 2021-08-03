import React from "react";
import ProfileHeader from "./profileHeader";
import {actions} from "../../../reducers/MainReducer";
import LabGeneration from "../lab/LabGeneration";
import EnrolledGroups from "./enrolledGroups";
import InstructingGroups from "./instructingGroups";
import AddModal from "./components/addModal";

const Profile = (props) => {
    return (
        <React.Fragment>
        {props.user?.firstname === null
            ?
            <h3>You are currently not logged in.</h3>
            :
            <div className="profile container">
                <ProfileHeader user={props.user}/>
                <br/>

                <h4>My Enrolled Groups</h4>
                <EnrolledGroups user={props.user}/>
                <br/>
                <h4>In Progress Labs</h4>
                <div className="landingpage__row">
                    <LabGeneration actions={actions} progressState="IN_PROGRESS" user={props.user}/>
                </div>

                <h4>To-do Labs</h4>
                <div className="landingpage__row">
                    <LabGeneration actions={actions} progressState="NOT_STARTED" user={props.user}/>
                </div>

                <h4>Completed Labs</h4>
                <div className="landingpage__row">
                    <LabGeneration actions={actions} progressState="COMPLETED" user={props.user}/>
                </div>

                <div className="header_with_button">
                    <h4>My Instructing Groups</h4>
                    <AddModal addMode={"add_instr_grp"}/>
                </div>
                <InstructingGroups user={props.user}/>

            </div>
        }
        </React.Fragment>
    );
};

export default Profile;