import React, { useEffect, useState } from "react";
import UserService from "../../../services/UserService";
import AddModal from "./components/AddModal";
import EnrolledGroupCard from "./components/EnrolledGroupCard";
import PropTypes from "prop-types";

const EnrolledGroups = (props) => {
  const {
    user,
    inProgressLabs,
    toDoLabs,
    completedLabs,
    groupsUpdated,
    setGroupsUpdated,
  } = props;
  const [enrolledGroups, setEnrolledGroups] = useState([]);

  useEffect(() => {
    if (user) {
      UserService.getUserEnrolledGroups(user.userid).then((data) => {
        setEnrolledGroups(data);
        setGroupsUpdated(false);
      });
    }
  }, [user, groupsUpdated]);

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
            <h4
              id="MyGroups"
              className={"tw-title tw-font-poppins tw-text-2xl"}
            >
              {" "}
              View Your Enrolled Groups{" "}
            </h4>
          </div>
          <div
            className={"tw-flex tw-flex-row tw-justify-between tw-h-3/4 tw-m-5"}
          >
            {enrolledGroups.length === 0 ? (
              <div>
                <p className={"tw-body-text"}>
                  {" "}
                  You are currently not enrolled in any groups
                </p>
              </div>
            ) : (
              <div
                className={
                  "xs:tw-flex xs:tw-flex-col md:lg:tw-grid md:lg:tw-grid-cols-3 tw-gap-3"
                }
              >
                {enrolledGroups.map((group, index) => (
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
                ))}
              </div>
            )}
            <div
              className={
                "tw-flex tw-flex-col tw-text-left tw-px-[1rem] tw-gap-y-2"
              }
            >
              <p className={"tw-text-lg tw-title tw-font-poppins"}>
                {" "}
                Have a group code?{" "}
              </p>
              <p className={"tw-body-text"}> Click below to get started. </p>
              <AddModal
                addMode={"enroll_grp"}
                user={props.user}
                setGroupsUpdated={setGroupsUpdated}
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
    userid: PropTypes.number,
  }),
  toDoLabs: PropTypes.array,
  completedLabs: PropTypes.array,
  inProgressLabs: PropTypes.array,
  groupsUpdated: PropTypes.bool,
  setGroupsUpdated: PropTypes.func,
};

export default EnrolledGroups;
