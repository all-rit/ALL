import React, { useEffect, useState } from "react";
import GroupService from "../../../services/GroupService";
import GroupAssignedLabs from "./groupAssignedLabs";
import EnrolledStudentsTable from "./enrolledStudentsTable";

const GroupDetails = (props) => {
    const {group} = props.group;
    const instructing = props.instructing;
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
                    <td>There are currently no assigned labs.</td> :
                    <>
                        <GroupAssignedLabs labs={{assignedLabs}} instructing={instructing}/>
                        {
                            instructing ?
                                <EnrolledStudentsTable groupid={group.id} labs={{assignedLabs}}/>
                                : <></>
                        }

                    </>

            }
        </>
    )
}

export default GroupDetails;