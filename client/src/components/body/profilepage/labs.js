import React, { useState, useEffect } from "react";
import EnrolledGroups from "./enrolledGroups";
import LabGeneration from "../lab/LabGeneration";
import {actions} from "../../../reducers/MainReducer";
import UserService from "../../../services/UserService";
import UserLabService from "../../../services/UserLabService";

const Labs = (props) => {

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
        <>
            {
                (props.user && labRecords) &&
                    <>
                        <h4>My Enrolled Groups</h4>
                        <EnrolledGroups user={props.user}/>
                        <br/>
                        <h4>In Progress Labs</h4>
                        <div className="landingpage__row">
                            <LabGeneration actions={actions} progressState="IN_PROGRESS" labRecords={inProgressLabs}/>
                        </div>

                        <h4>Assigned Labs</h4>
                        <div className="landingpage__row">
                            <LabGeneration actions={actions} progressState="NOT_STARTED" labids={toDoLabs}/>
                        </div>

                        <h4>Completed Labs</h4>
                        <div className="landingpage__row">
                            <LabGeneration actions={actions} progressState="COMPLETED" labRecords={completedLabs}/>
                        </div>
                    </>
            }

        </>
    )
}

export default Labs;