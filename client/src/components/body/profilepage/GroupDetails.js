import React, { useEffect, useState } from "react";
import GroupService from "../../../services/GroupService";
import GroupAssignedLabs from "./GroupAssignedLabs";
import EnrolledStudentsTable from "./EnrolledStudentsTable";

const GroupDetails = (props) => {
    const { group, instructing } = props;
    const [ assignedLabs, setAssignedLabs ] = useState([]);
    const [ enrolledStudents, setEnrolledStudents ] = useState([]);

    useEffect(() => {
        if (group){
            async function fetchAssignedLabs(){
                return GroupService.getGroupAssignedLabs(group.id);
            }
            fetchAssignedLabs().then((data) => {
                setAssignedLabs(data);
            });
            if (instructing){
                async function fetchEnrolledStudents() {
                    return GroupService.getGroupEnrolledStudents(group.id);
                }
                fetchEnrolledStudents().then((data) => {
                    setEnrolledStudents(data);
                });
            }
        }
    }, [group, instructing]);

    return (
        <>
            {
                assignedLabs.length === 0 ?
                    <td>There are currently no assigned labs.</td> :
                    <>
                        <GroupAssignedLabs enrolledStudents={enrolledStudents} assignedLabs={assignedLabs} instructing={instructing}/>
                        {instructing ?
                            <EnrolledStudentsTable groupid={group.id} enrolledStudents={enrolledStudents} assignedLabs={assignedLabs}/>
                            : <></>
                        }

                    </>

            }
        </>
    )
}

export default GroupDetails;