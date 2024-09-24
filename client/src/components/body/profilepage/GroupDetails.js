/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import GroupService from "../../../services/GroupService";
import GroupAssignedLabs from "./GroupAssignedLabs";
import EnrolledStudentsTable from "./EnrolledStudentsTable";
import AddModal from "./components/AddModal";
import DeleteModal from "./components/DeleteModal";

const GroupDetails = (props) => {
  const { group, instructing, user, setInstrGroupsUpdated } = props;
  const [assignedLabs, setAssignedLabs] = useState([]);
  const [enrolledStudents, setEnrolledStudents] = useState([]);
  const [toggle, setToggle] = useState(false);

  const toggleModal = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (group) {
      GroupService.getGroupAssignedLabs(group.id).then((data) => {
        setAssignedLabs(data);
      });
      if (instructing) {
        GroupService.getGroupEnrolledStudents(group.id).then((data) => {
          setEnrolledStudents(data);
        });
      }
    }
  }, [group, instructing]);
  return (
    <>
      {assignedLabs.length === 0 ? (
        <td>
          There are currently no assigned labs.
          {instructing ? (
            <>
              <AddModal
                addMode={"update_grp_lab"}
                user={user}
                groupID={group.id}
                groupName={group.groupName}
                setInstrGroupsUpdated={setInstrGroupsUpdated}
              />
              <DeleteModal
                mainToggle={toggleModal}
                groupID={group.id}
                setInstrGroupsUpdated={setInstrGroupsUpdated}
              />
            </>
          ) : (
            <></>
          )}
        </td>
      ) : (
        <>
          <GroupAssignedLabs
            enrolledStudents={enrolledStudents}
            assignedLabs={assignedLabs}
            instructing={instructing}
            setInstrGroupsUpdated={setInstrGroupsUpdated}
            user={user}
            groupID={group.id}
            groupName={group.groupName}
          />
          {instructing ? (
            <EnrolledStudentsTable
              groupid={group.id}
              enrolledStudents={enrolledStudents}
              assignedLabs={assignedLabs}
            />
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default GroupDetails;
