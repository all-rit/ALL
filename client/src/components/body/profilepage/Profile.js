import React, { useState, useEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import InstructingGroups from "./InstructingGroups";
import Labs from "./Labs";
import UserService from "../../../services/UserService";
import UserLabService from "../../../services/UserLabService";
import EnrolledGroups from "./EnrolledGroups";
import useMainStateContext from "src/reducers/MainContext";

const Profile = () => {
  const { state } = useMainStateContext();
  // toDoLabs is only the assigned labs that the user hasn't made any progress in
  const [toDoLabs, setToDoLabs] = useState(null);
  // labRecords is fetching all the records for the labs that the user has made progress in
  const [labRecords, setLabRecords] = useState(null);

  const inProgressLabs = [];
  const completedLabs = [];

  const getUserLabs = async () => {
    if (state.main.user) {
      try {
        const toDo = await UserService.getUserToDoLabs(state.main.user.userid);
        setToDoLabs(toDo);
        const records = await UserLabService.getUserLabRecords(
          state.main.user.userid,
        );
        setLabRecords(records);
      } catch (error) {
        console.error("Could not get labs", error);
      }
    }
  };

  useEffect(() => {
    getUserLabs();
  }, [state.main.user]);

  // go through the lab records fetched from the database and categorize if
  // the lab has been completed by the user or still in progress
  if (labRecords) {
    labRecords.forEach((rec) => {
      if (rec.labcompletiontime) {
        completedLabs.push(rec);
      } else {
        inProgressLabs.push(rec);
      }
    });
  }

  return (
    <React.Fragment className={"tw-mt-0"}>
      {state.main.user?.firstname === null ? (
        <h3>You are currently not logged in.</h3>
      ) : (
        <div className="tw-mt-0 tw-w-full">
          <ProfileHeader
            user={state.main.user}
            labRecords={labRecords}
            toDoLabs={toDoLabs}
          />
          <br />
          <EnrolledGroups user={state.main.user} />
          <br />
          <Labs
            labRecords={labRecords}
            inProgressLabs={inProgressLabs}
            toDoLabs={toDoLabs}
            completedLabs={completedLabs}
          />

          {/* <div className="header_with_button">
                    <h4>My Instructing Groups</h4>
                    <AddModal addMode={"add_instr_grp"} user={props.user}/>
                </div> */}
          <InstructingGroups user={state.main.user} />
        </div>
      )}
    </React.Fragment>
  );
};

export default Profile;
