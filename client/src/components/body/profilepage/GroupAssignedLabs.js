/* eslint-disable react/prop-types */
import React, { useState } from "react";
import AddModal from "./components/AddModal";
// import ProgressModal from "./components/ProgressModal";
import DeleteModal from "./components/DeleteModal";
import Lab from "../lab/Lab";

const GroupAssignedLabs = (props) => {
  const {
    assignedLabs,
    instructing,
    // enrolledStudents,
    user,
    groupID,
    groupName,
    setInstrGroupsUpdated,
  } = props;

  const [toggle, setToggle] = useState(false);

  const toggleModal = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {assignedLabs.length === 0 ? (
        <td>No labs have been assigned for this group.</td>
      ) : (
        <td className="groups__labs">
          {assignedLabs.map((lab, index) => (
            <Lab
              progressState={lab.progressState}
              key={index}
              alt={lab.labName + " Thumbnail"}
              lab={lab.id}
              name={lab.labName}
              bio={lab.shortDescription}
              image={lab.thumbnailImageURL}
              learningObjectives={lab.learningObjectives}
              authors={lab.authors}
              actions={lab.actions}
              difficulty={lab.difficulty}
            />
          ))}
          {instructing ? (
            <>
              <AddModal
                addMode={"update_grp_lab"}
                user={user}
                groupID={groupID}
                groupName={groupName}
                assignedLabs={assignedLabs}
                setInstrGroupsUpdated={setInstrGroupsUpdated}
              />
              <div className="pt-3">
                <DeleteModal
                  mainToggle={toggleModal}
                  groupID={groupID}
                  setInstrGroupsUpdated={setInstrGroupsUpdated}
                />
              </div>
            </>
          ) : (
            <></>
          )}
        </td>
      )}
    </>
  );
};

export default GroupAssignedLabs;
