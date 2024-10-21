import React, { useEffect, useState } from "react";
import UserService from "../../../services/UserService";
// import UnenrollModal from "./components/UnenrollModal";
// import GroupDetails from "./GroupDetails";
import AddModal from "./components/AddModal";
import EnrolledGroupCard from "./components/EnrolledGroupCard";
import PropTypes from "prop-types";

const EnrolledGroups = (props) => {
  const { user, inProgressLabs, toDoLabs, completedLabs } = props;
  const [enrolledGroups, setEnrolledGroups] = useState([]);
  const [groupsUpdated, setGroupsUpdated] = useState(false);

  useEffect(() => {
    if (user) {
      UserService.getUserEnrolledGroups(user.userid).then((data) => {
        setEnrolledGroups(data);
        setGroupsUpdated(false);
      });
    }
  }, [user, groupsUpdated]);

  const displayEnrolledGroups = () => {
    return enrolledGroups.map((group, index) => (
      <EnrolledGroupCard
        key={index}
        instructorID={group.instructorUserID}
        groupName={group.groupName}
        group={group}
        color={"primary-blue"}
        inProgressLabs={inProgressLabs}
        toDoLabs={toDoLabs}
        completedLabs={completedLabs}
        setGroupsUpdated={setGroupsUpdated}
      />
    ));
  };

  return (
    <div
      className={
        "tw-bg-primary-blue tw-h-[30rem] tw-flex tw-flex-row tw-align-middle tw-justify-end"
      }
    >
      <div
        className={"tw-h-full tw-flex tw-flex-col tw-justify-center tw-w-3/4"}
      >
        <div
          className="tw-h-3/4 tw-bg-white tw-border-solid tw-rounded-bl-xl tw-border-primary-yellow
                          tw-border-t-0 tw-border-r-0 tw-border-b-[1rem] tw-border-l-[1rem]"
        >
          <div className="header_with_button">
            <h4 className={"tw-title-styling-name tw-font-poppins tw-text-2xl"}>
              {" "}
              View Your Enrolled Groups{" "}
            </h4>
          </div>
          <div
            className={"tw-flex tw-flex-row tw-justify-between tw-h-3/4 tw-m-5"}
          >
            {enrolledGroups.length === 0 ? (
              <div>
                <p> You are currently not enrolled in any groups</p>
              </div>
            ) : (
              <div
                className={
                  "xs:tw-flex sxs:tw-flex-col md:tw-grid md:tw-grid-cols-3"
                }
              >
                {displayEnrolledGroups()}
              </div>
            )}
            <div className={"tw-flex tw-flex-col tw-text-left"}>
              <p className={"tw-text-lg tw-title-styling-name tw-font-poppins"}>
                {" "}
                Have a group code?{" "}
              </p>
              <p className={"tw-text-sm tw-font-calibri"}>
                {" "}
                Click below to get started.{" "}
              </p>
              <AddModal
                addMode={"enroll_grp"}
                user={props.user}
                groupsUpdated={setGroupsUpdated}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EnrolledGroups.propTypes = {
  user: PropTypes.shape({
    userid: PropTypes.string,
  }),
  toDoLabs: PropTypes.array,
  completedLabs: PropTypes.array,
  inProgressLabs: PropTypes.array,
};

export default EnrolledGroups;
