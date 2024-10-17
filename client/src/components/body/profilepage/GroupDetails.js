import React, { useEffect, useState } from "react";
import GroupService from "../../../services/GroupService";
import GroupAssignedLabs from "./GroupAssignedLabs";
import EnrolledStudentsTable from "./EnrolledStudentsTable";
import PropTypes from "prop-types";

const GroupDetails = (props) => {
  const {
    group,
    instructing,
    user,
    setInstrGroupsUpdated,
    inProgressLabs,
    toDoLabs,
    completedLabs,
    instructor,
    setGroupsUpdated,
  } = props;

  const [assignedLabs, setAssignedLabs] = useState([]);
  const [enrolledStudents, setEnrolledStudents] = useState([]);

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
        <td>There are currently no assigned labs.</td>
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
            inProgressLabs={inProgressLabs}
            toDoLabs={toDoLabs}
            completedLabs={completedLabs}
            instructor={instructor}
            setGroupsUpdated={setGroupsUpdated}
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

GroupDetails.propTypes = {
  group: PropTypes.shape({
    id: PropTypes.number,
    groupName: PropTypes.string,
  }),
  instructing: PropTypes.bool,
  setInstrGroupsUpdated: PropTypes.func,
  user: PropTypes.shape({}),
  inProgressLabs: PropTypes.array,
  toDoLabs: PropTypes.array,
  completedLabs: PropTypes.array,
  instructor: PropTypes.any,
  setGroupsUpdated: PropTypes.func,
};

export default GroupDetails;
