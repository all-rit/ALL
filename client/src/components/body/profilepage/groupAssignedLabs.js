import React from "react";

const GroupAssignedLabs = (props) => {
    const { assignedLabs } = props.labs;

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