import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import PropTypes from "prop-types";
import UserService from "../../../../services/UserService";
import BrandedALLModal from "../../../all-components/BrandedALLModal";
import GroupDetails from "../GroupDetails";
import AddModal from "./AddModal";
import DeleteModal from "./DeleteModal";
import useMainStateContext from "../../../../reducers/MainContext";
import GroupService from "../../../../services/GroupService";
import NewStudentProgress from "../../../all-components/NewStudentProgress";

const EnrolledGroupCard = (props) => {
  const {
    instructorID,
    instructing,
    group,
    groupName,
    inProgressLabs,
    toDoLabs,
    completedLabs,
    setGroupsUpdated,
    setInstrGroupsUpdated,
  } = props;

  const InstructorName = (props) => {
    const { instructorID } = props;
    const [instructorName, setInstructorName] = useState();
    useEffect(() => {
      if (instructorID) {
        UserService.getUser(instructorID).then((data) => {
          setInstructorName(
            "Instructor  " + data.firstname + " " + data.lastinitial,
          );
        });
      }
    });

    return instructorName === undefined
      ? "Retrieving Instructor Name..."
      : instructorName + ".";
  };

  const { state } = useMainStateContext();
  const user = state.main.user;

  const [openGroupDetails, setOpenGroupDetails] = useState(false);
  const [height, setHeight] = useState("tw-h-3/4");
  const [assignedLabs, setAssignedLabs] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [enrolledStudents, setEnrolledStudents] = useState([]);

  const toggleDeleteModal = (e) => {
    e.preventDefault();
    setOpenDeleteModal(!openDeleteModal);
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
    if (instructing) {
      setHeight("tw-min-h-[20rem]");
    }
  }, [group, instructing, height]);

  const toggleGroupDetailsModal = () => {
    setOpenGroupDetails(!openGroupDetails);
  };

  return (
    <Card className={`tw-shadow-md lg:tw-max-w-[15rem] ${height}`}>
      {instructing ? (
        <CardHeader
          className={
            "tw-flex tw-flex-row tw-justify-between tw-items-center tw-relative tw-bg-white tw-h-[3rem]"
          }
        >
          <div className={"tw-font-poppins tw-font-medium"}>
            Code: {group.code}
          </div>
          <a onClick={(e) => toggleDeleteModal(e)} />
          <DeleteModal
            mainToggle={setOpenDeleteModal}
            groupID={group.id}
            groupsUpdated={setGroupsUpdated}
            setInstrGroupsUpdated={setInstrGroupsUpdated}
          />
        </CardHeader>
      ) : (
        <></>
      )}
      <CardBody
        className={`${group.color} ${instructing ? "" : "tw-rounded-t-md"} tw-cursor-pointer`}
        onClick={toggleGroupDetailsModal}
      />
      <CardFooter
        className={
          "tw-flex tw-flex-col tw-justify-end tw-text-left tw-bg-white tw-h-1/2"
        }
      >
        {instructing ? (
          <div>
            <NewStudentProgress
              group={group}
              assignedLabs={assignedLabs}
              enrolledStudents={enrolledStudents}
            />
            <AddModal
              addMode={"update_grp_lab"}
              user={user}
              groupID={group.id}
              groupName={group.groupName}
              groupColor={group.color}
              assignedLabs={assignedLabs}
              setInstrGroupsUpdated={setInstrGroupsUpdated}
            />
          </div>
        ) : (
          <></>
        )}
        <div
          className={
            "tw-text-sm tw-font-poppins tw-flex tw-flex-row tw-justify-start"
          }
        >
          <InstructorName instructorID={instructorID} />
        </div>
        <a
          className={
            "tw-cursor-pointer tw-text-lg tw-title-styling-name tw-font-poppins tw-flex tw-flex-row tw-justify-start tw-text-left"
          }
          onClick={toggleGroupDetailsModal}
        >
          {groupName || group.groupName}
        </a>
      </CardFooter>
      <BrandedALLModal
        isOpen={openGroupDetails}
        toggle={toggleGroupDetailsModal}
        direction={"column"}
        width={"lg:tw-min-w-[70rem] lg:tw-min-h-[50rem]"}
      >
        <GroupDetails
          group={group}
          instructing={instructing}
          inProgressLabs={inProgressLabs}
          toDoLabs={toDoLabs}
          completedLabs={completedLabs}
          setGroupsUpdated={setGroupsUpdated}
          instructor={<InstructorName instructorID={instructorID} />}
          setInstrGroupsUpdated={setInstrGroupsUpdated}
          assignedLabs={assignedLabs}
        />
      </BrandedALLModal>
    </Card>
  );
};

EnrolledGroupCard.propTypes = {
  instructorID: PropTypes.number,
  labs: PropTypes.array,
  groupName: PropTypes.string,
  color: PropTypes.string,
  instructing: PropTypes.bool,
  group: PropTypes.shape({
    id: PropTypes.number,
    color: PropTypes.string,
    groupName: PropTypes.string,
    code: PropTypes.string,
  }),
  inProgressLabs: PropTypes.array,
  toDoLabs: PropTypes.array,
  completedLabs: PropTypes.array,
  setGroupsUpdated: PropTypes.func,
  setInstrGroupsUpdated: PropTypes.func,
};

export default EnrolledGroupCard;
