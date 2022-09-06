/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, {useState, useEffect} from 'react';
import ProfileHeader from './ProfileHeader';
import InstructingGroups from './InstructingGroups';
import Labs from './Labs';
import UserService from '../../../services/UserService';
import UserLabService from '../../../services/UserLabService';
import EnrolledGroups from './EnrolledGroups';

const Profile = (props) => {
  // toDoLabs is only the assigned labs that the user hasn't made any progress in
  const [toDoLabs, setToDoLabs] = useState(null);
  // labRecords is fetching all the records for the labs that the user has made progress in
  const [labRecords, setLabRecords] = useState(null);

  const inProgressLabs = [];
  const completedLabs = [];

  useEffect(() => {
    if (props.user) {
      UserService.getUserToDoLabs(props.user.userid).then((data) => {
        setToDoLabs(data);
      });
      UserLabService.getUserLabRecords(props.user.userid).then((data) => {
        setLabRecords(data);
      });
    }
  }, [props.user]);

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
    <React.Fragment>
      {props.user?.firstname === null ? (
        <h3>You are currently not logged in.</h3>
      ) : (
        <div className="profile container">
          <ProfileHeader
            user={props.user}
            labRecords={labRecords}
            toDoLabs={toDoLabs}
          />
          <br />
          <EnrolledGroups user={props.user} />
          <br />
          <Labs
            user={props.user}
            labRecords={labRecords}
            inProgressLabs={inProgressLabs}
            toDoLabs={toDoLabs}
            completedLabs={completedLabs}
          />

          {/* <div className="header_with_button">
                    <h4>My Instructing Groups</h4>
                    <AddModal addMode={"add_instr_grp"} user={props.user}/>
                </div> */}
          <InstructingGroups user={props.user} />
        </div>
      )}
    </React.Fragment>
  );
};

export default Profile;
