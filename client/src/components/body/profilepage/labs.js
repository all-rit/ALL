import React, { useState, useEffect } from "react";
import EnrolledGroups from "./enrolledGroups";
import LabGeneration from "../lab/LabGeneration";
import {actions} from "../../../reducers/MainReducer";
import UserService from "../../../services/UserService";
import UserLabService from "../../../services/UserLabService";
import LabService from "../../../services/LabService";

const Labs = (props) => {

    const [ toDoLabs, setToDoLabs ] = useState(null);
    const [ labRecords, setLabRecords ] = useState(null);
    const [ labInformation, setLabInformation] = useState([]);

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
            async function fetchLabs() {
                return LabService.getAllLabs();
            }
            fetchLabs().then((data) => {
                setLabInformation(data);
            });
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
                            <LabGeneration actions={actions} progressState="IN_PROGRESS" labInformation={labInformation} labRecords={inProgressLabs}/>
                        </div>

                        <h4>To-do Labs</h4>
                        <div className="landingpage__row">
                            <LabGeneration actions={actions} progressState="NOT_STARTED" labInformation={labInformation} labids={toDoLabs}/>
                        </div>

                        <h4>Completed Labs</h4>
                        <div className="landingpage__row">
                            <LabGeneration actions={actions} progressState="COMPLETED" labInformation={labInformation} labRecords={completedLabs}/>
                        </div>
                    </>
            }

        </>
    )
}

export default Labs;