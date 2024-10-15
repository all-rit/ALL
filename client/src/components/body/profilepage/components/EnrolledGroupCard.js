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

  const [assignedLabs, setAssignedLabs] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const toggleDeleteModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDeleteModal(!openDeleteModal);
  };

  useEffect(() => {
    if (group) {
      GroupService.getGroupAssignedLabs(group.id).then((data) => {
        setAssignedLabs(data);
      });
    }
  }, [group, instructing]);

  const toggleGroupDetailsModal = () => {
    setOpenGroupDetails(!openGroupDetails);
  };

  return (
    <Card
      className={
        "tw-h-full hover:tw-drop-shadow-2xl tw-cursor-pointer lg:tw-max-w-[15rem] lg:tw-min-h-[15rem]"
      }
      onClick={toggleGroupDetailsModal}
    >
      {instructing ? (
        <CardHeader className={"tw-flex tw-flex-row tw-justify-between"}>
          <div>Code: {group.code}</div>
          <a onClick={(e) => toggleDeleteModal(e)} />
          <DeleteModal
            mainToggle={setOpenDeleteModal}
            groupID={group.id}
            groupsUpdated={setGroupsUpdated}
            setInstrGroupsUpdated={setInstrGroupsUpdated()}
          />
        </CardHeader>
      ) : (
        <></>
      )}
      <CardBody className={`${group.color} tw-rounded-t-md`} />
      <CardFooter
        className={
          "tw-flex tw-flex-col tw-justify-start tw-bg-white tw-h-1/2 tw-relative"
        }
      >
        {instructing ? (
          <AddModal
            addMode={"update_grp_lab"}
            user={user}
            groupID={group.id}
            groupName={groupName}
            assignedLabs={assignedLabs}
            setInstrGroupsUpdated={setInstrGroupsUpdated}
          />
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
        <div
          className={
            "tw-text-2xl tw-title-styling-name tw-font-poppins tw-flex tw-flex-row tw-justify-start tw-text-left"
          }
        >
          {groupName || group.groupName}
        </div>
      </CardFooter>
      <BrandedALLModal
        isOpen={openGroupDetails}
        toggle={toggleGroupDetailsModal}
        direction={"column"}
        width={"lg:tw-min-w-[80rem] lg:tw-min-h-[60rem]"}
        body={
          <GroupDetails
            group={group}
            instructing={false}
            inProgressLabs={inProgressLabs}
            toDoLabs={toDoLabs}
            completedLabs={completedLabs}
            setGroupsUpdated={setGroupsUpdated}
            instructor={<InstructorName instructorID={instructorID} />}
          />
        }
      />
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
