import React from "react";
import AddModal from "./components/AddModal";
import ProgressModal from "./components/ProgressModal";

const GroupAssignedLabs = (props) => {
    const { assignedLabs, instructing, enrolledStudents } = props;

    return (
        <>
            {
                assignedLabs.length === 0 ?
                    <td>No labs have been assigned for this group.</td> :
                    <td className="groups__labs">
                        {assignedLabs.map((lab, index) => (
                            <ProgressModal lab={lab} key={index} enrolledStudents={enrolledStudents} instructing={instructing}/>
                        ))}
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