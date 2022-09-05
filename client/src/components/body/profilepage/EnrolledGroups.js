import React, { useEffect, useState } from "react";
import UserService from "../../../services/UserService";
import UnenrollModal from "./components/UnenrollModal";
import GroupDetails from "./GroupDetails";
import AddModal from "./components/AddModal";

const InstructorName = (props) => {
  const { instructorID } = props;
  const [instructorName, setInstructorName] = useState();
  useEffect(() => {
    if (instructorID) {
      UserService.getUser(instructorID).then((data) => {
        setInstructorName(data.firstname + " " + data.lastinitial);
      });
    }
  });

  return instructorName === undefined
    ? "Retrieving Instructor Name..."
    : instructorName + ".";
};

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

  return (
    <>
      {enrolledGroups.length === 0 ? (
        <>
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
        </>
      ) : (
        <>
          <div className="header_with_button">
            <h4>My Enrolled Groups</h4>
            <AddModal
              addMode={"enroll_grp"}
              user={props.user}
              groupsUpdated={setGroupsUpdated}
            />
          </div>
          <div className="enrolled-groups">
            {enrolledGroups.map((group, index) => (
              <ul key={index}>
                {index > 0 ? <hr className="groups__horiz" /> : <></>}
                <ul className="groups" key={index}>
                  <ul className="groups__group">
                    <li className="groups__instructorName">
                      <InstructorName instructorID={group.instructorUserID} />
                    </li>
                    <li className="groups__groupName">{group.groupName}</li>
                  </ul>
                  <ul className="groups__group">
                    <GroupDetails group={group} instructing={false} />
                  </ul>
                  <ul className="groups__group">
                    <li className="groups__date">
                      Enrolled on {group.enrolledDate.split("T")[0]}
                    </li>
                    <li>
                      <UnenrollModal
                        userid={user.userid}
                        groupid={group.groupID}
                        buttonLabel={"Unenroll"}
                        groupsUpdated={setGroupsUpdated}
                      />
                    </li>
                  </ul>
                </ul>
              </ul>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default EnrolledGroups;
