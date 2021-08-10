import React, { useState, useEffect } from "react";
import ProfileHeader from "./profileHeader";
import InstructingGroups from "./instructingGroups";
import AddModal from "./components/addModal";
import Labs from "./labs";
import UserService from "../../../services/UserService";
import UserLabService from "../../../services/UserLabService";

const Profile = (props) => {

    const [ toDoLabs, setToDoLabs ] = useState(null);
    const [ labRecords, setLabRecords ] = useState(null);

    let inProgressLabs = [];
    let completedLabs = [];

    useEffect(() => {
        if (props.user){
            async function fetchToDoLabs() {
                return UserService.getUserToDoLabs(props.user.userid);
            }
            fetchToDoLabs().then((data) => {
                setToDoLabs(data);
            })
            async function fetchLabRecords() {
                return UserLabService.getUserLabRecords(props.user.userid);
            }
            fetchLabRecords().then((data) => {
                setLabRecords(data);
            })
        }
    }, [props.user])

    if (labRecords){
        labRecords.forEach((rec) => {
            if (rec.labcompletiontime){
                completedLabs.push(rec);
            } else {
                inProgressLabs.push(rec);
            }
        })
    }

    return (
        <React.Fragment>
        {props.user?.firstname === null
            ?
            <h3>You are currently not logged in.</h3>
            :
            <div className="profile container">
                <ProfileHeader user={props.user} labRecords={labRecords}/>
                <br/>

                <Labs user={props.user} labRecords={labRecords} inProgressLabs={inProgressLabs} toDoLabs={toDoLabs} completedLabs={completedLabs}/>

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