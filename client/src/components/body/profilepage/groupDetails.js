import React, { useEffect, useState } from "react";
import GroupService from "../../../services/GroupService";
import GroupAssignedLabs from "./groupAssignedLabs";
import EnrolledStudentsTable from "./enrolledStudentsTable";

const GroupDetails = (props) => {
    const {group} = props;
    const [ assignedLabs, setAssignedLabs ] = useState([]);

    useEffect(() => {
        if (group){
            async function fetchAssignedLabs(){
                return GroupService.getGroupAssignedLabs(group.id);
            }
            fetchAssignedLabs().then((data) => {
                setAssignedLabs(data);
            })
        }
    }, [group]);

    return (
        <>
            {
                assignedLabs.length === 0 ?
                    <></> :
                    <>
                        <GroupAssignedLabs labs={{assignedLabs}}/>
                        <EnrolledStudentsTable groupid={group.id} labs={{assignedLabs}}/>
                    </>

            }
        </>
    )
}

export default GroupDetails;