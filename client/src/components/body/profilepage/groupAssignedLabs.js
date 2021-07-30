import React from "react";
import AddModal from "./components/addModal";

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
                        <AddModal addMode={"assign_grp_lab"}/>
                    </td>
            }
        </>
    )
}

export default GroupAssignedLabs;