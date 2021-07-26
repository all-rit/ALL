import React, { useState, useEffect } from "react";
import GroupService from "../../../services/GroupService";

const GroupAssignedLabs = (props) => {
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
                    <td>No labs have been assigned for this group.</td> :
                    <td className="assigned-labs">
                        {assignedLabs.map((lab, index) => (
                            <div className="assigned-labs__lab-bubble" key={index}>
                                {lab.labShortName}
                            </div>
                        ))
                        }
                    </td>
            }
        </>
    )
}

export default GroupAssignedLabs;