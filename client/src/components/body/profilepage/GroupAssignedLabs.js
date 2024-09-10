/* eslint-disable react/prop-types */
import React from "react";
import AddModal from "./components/AddModal";
import ProgressModal from "./components/ProgressModal";

const GroupAssignedLabs = (props) => {
  const {
    assignedLabs,
    instructing,
    enrolledStudents,
    user,
    groupID,
    groupName,
    setInstrGroupsUpdated,
  } = props;
  console.warn(assignedLabs);
  return (
    <>
      {assignedLabs.length === 0 ? (
        <td>No labs have been assigned for this group.</td>
      ) : (
        <td className="groups__labs">
          {assignedLabs.map((lab, index) => (
            <ProgressModal
              lab={lab}
              key={index}
              enrolledStudents={enrolledStudents}
              instructing={instructing}
            />
          ))}
          {instructing ? (
            <AddModal
              addMode={"update_grp_lab"}
              user={user}
              groupID={groupID}
              groupName={groupName}
              assignedLabs={assignedLabs}
              setInstrGroupsUpdated={setInstrGroupsUpdated}
            />
          ) : (
            <></>
          )}
        </td>
      )}
    </>
  );
};

export default GroupAssignedLabs;
