import React from "react";
import EnrolledGroups from "./EnrolledGroups";
import LabGeneration from "../lab/LabGeneration";
import {actions} from "../../../reducers/MainReducer";

const Labs = (props) => {

    return (
        <>
            {
                (props.user && props.labRecords) &&
                    <>
                        <h4>My Enrolled Groups</h4>
                        <EnrolledGroups user={props.user}/>
                        <br/>
                        <h4>In Progress Labs</h4>
                        <div className="landingpage__row">
                            <LabGeneration actions={actions} progressState="IN_PROGRESS" labRecords={props.inProgressLabs}/>
                        </div>

                        <h4>Assigned Labs</h4>
                        <div className="landingpage__row">
                            <LabGeneration actions={actions} progressState="NOT_STARTED" labids={props.toDoLabs}/>
                        </div>

                        <h4>Completed Labs</h4>
                        <div className="landingpage__row">
                            <LabGeneration actions={actions} progressState="COMPLETED" labRecords={props.completedLabs}/>
                        </div>
                    </>
            }

        </>
    )
}

export default Labs;