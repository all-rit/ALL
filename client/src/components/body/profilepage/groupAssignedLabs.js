import React from "react";
import AddModal from "./components/addModal";

const GroupAssignedLabs = (props) => {
    const { assignedLabs } = props.labs;
    const instructing = props.instructing;
    return (
        <>
            {
                assignedLabs.length === 0 ?
                    <td>No labs have been assigned for this group.</td> :
                    <td className="groups__labs">
                        {assignedLabs.map((lab, index) => (
                            <div className="groups__labs__bubble" key={index}>
                                {lab.labShortName}
                            </div>
                        ))
                        }
                        {
                            instructing ?
                                <AddModal addMode={"assign_grp_lab"}/>
                                :
                                <></>
                        }
                    </td>
            }
        </>
    )
}

export default GroupAssignedLabs;