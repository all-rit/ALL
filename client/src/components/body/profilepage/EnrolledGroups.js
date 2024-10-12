/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import UserService from "../../../services/UserService";
// import UnenrollModal from "./components/UnenrollModal";
// import GroupDetails from "./GroupDetails";
import AddModal from "./components/AddModal";
import EnrolledGroupCard from "./components/EnrolledGroupCard";

const EnrolledGroups = (props) => {
  const { user } = props;
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
      />
    ));
  };

  return (
    <div
      className={
        "tw-bg-primary-blue tw-h-[30rem] tw-flex tw-flex-row tw-align-middle tw-justify-end"
      }
    >
      {enrolledGroups.length === 0 ? (
        <div className={"tw-bg-white"}>
          <div className="header_with_button">
            <h4>My Enrolled Groups</h4>
            <AddModal
              addMode={"enroll_grp"}
              user={props.user}
              groupsUpdated={setGroupsUpdated}
            />
          </div>
          <div className="enrolled-groups">
            <p> You are currently not enrolled in any groups</p>
          </div>
        </div>
      ) : (
        <div
          className={"tw-h-full tw-flex tw-flex-col tw-justify-center tw-w-3/4"}
        >
          <div
            className="tw-h-3/4 tw-bg-white tw-border-solid tw-rounded-bl-xl tw-border-primary-yellow
                          tw-border-t-0 tw-border-r-0 tw-border-b-[1rem] tw-border-l-[1rem]"
          >
            <div className="header_with_button">
              <h4
                className={"tw-title-styling-name tw-font-poppins tw-text-2xl"}
              >
                {" "}
                View Your Enrolled Groups{" "}
              </h4>
            </div>
            <div className={"tw-flex tw-flex-row tw-justify-between tw-h-3/4"}>
              <div className={"tw-m-3"}>
                {displayEnrolledGroups()}
                {/*{enrolledGroups.map((group, index) => (*/}
                {/*    <ul key={index}>*/}
                {/*      {index > 0 ? <hr className="groups__horiz"/> : <></>}*/}
                {/*      <ul className="groups" key={index}>*/}
                {/*        <ul className="groups__group">*/}
                {/*          <li className="groups__instructorName">*/}
                {/*          </li>*/}
                {/*          <li className="groups__groupName">{group.groupName}</li>*/}
                {/*        </ul>*/}
                {/*        <ul className="groups__group">*/}
                {/*          <GroupDetails group={group} instructing={false}/>*/}
                {/*        </ul>*/}
                {/*        <ul className="groups__group">*/}
                {/*          <li className="groups__date">*/}
                {/*            Enrolled on {group.enrolledDate.split("T")[0]}*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <UnenrollModal*/}
                {/*                userid={user.userid}*/}
                {/*                groupid={group.groupID}*/}
                {/*                buttonLabel={"Unenroll"}*/}
                {/*                groupsUpdated={setGroupsUpdated}*/}
                {/*            />*/}
                {/*          </li>*/}
                {/*        </ul>*/}
                {/*      </ul>*/}
                {/*    </ul>*/}
                {/*))}*/}
              </div>
              <div className={"tw-flex tw-flex-col"}>
                <p
                  className={"tw-text-lg tw-title-styling-name tw-font-poppins"}
                >
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
      )}
    </div>
  );
};

export default EnrolledGroups;
