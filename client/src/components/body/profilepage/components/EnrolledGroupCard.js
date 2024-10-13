import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter } from "reactstrap";
import PropTypes from "prop-types";
import UserService from "../../../../services/UserService";
import BrandedALLModal from "../../../all-components/BrandedALLModal";
import GroupDetails from "../GroupDetails";

const EnrolledGroupCard = (props) => {
  const {
    instructorID,
    group,
    groupName,
    color,
    inProgressLabs,
    toDoLabs,
    completedLabs,
    setGroupsUpdated,
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

  const [openGroupDetails, setOpenGroupDetails] = useState(false);

  const toggleGroupDetailsModal = () => {
    setOpenGroupDetails(!openGroupDetails);
  };

  useEffect(() => {
    console.log(instructorID);
  }, [instructorID]);

  return (
    <Card
      className={"tw-h-full hover:tw-drop-shadow-2xl tw-cursor-pointer"}
      onClick={toggleGroupDetailsModal}
    >
      <CardBody className={`tw-bg-${color} tw-rounded-t-md`} />
      <CardFooter
        className={"tw-flex tw-flex-col tw-justify-start tw-bg-white tw-h-1/2"}
      >
        <div
          className={
            "tw-text-sm tw-font-poppins tw-flex tw-flex-row tw-justify-start"
          }
        >
          <InstructorName instructorID={instructorID} />
        </div>
        <div
          className={
            "tw-text-2xl tw-title-styling-name tw-font-poppins tw-flex tw-flex-row tw-justify-start"
          }
        >
          {groupName}
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
  group: PropTypes.shape({}),
  inProgressLabs: PropTypes.array,
  toDoLabs: PropTypes.array,
  completedLabs: PropTypes.array,
  setGroupsUpdated: PropTypes.func,
};

export default EnrolledGroupCard;
