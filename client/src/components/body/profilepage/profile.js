import React from "react";
import ProfileHeader from "./profileHeader";
import InstructingGroups from "./instructingGroups";
import AddModal from "./components/addModal";
import Labs from "./labs";

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

                <Labs user={props.user}/>

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