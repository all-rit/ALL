/* eslint-disable react/prop-types */
import React from "react";
import ProgressBar from "./components/ProgressBar";

const ProfileHeader = (props) => {
  const { user, labRecords, toDoLabs } = props;
  const parsedRecords = [];

  if (labRecords) {
    labRecords.forEach((lab) => {
      parsedRecords.push([lab.labName, lab.labcompletiontime]);
    });
  }
  if (toDoLabs) {
    toDoLabs.forEach((lab) => {
      parsedRecords.push([lab.labName, null]);
    });
  }

  parsedRecords.sort((labRecord1, labRecord2) => {
    if (labRecord1[0] < labRecord2[0]) {
      if (labRecord1[1] !== null) {
        return -1;
      } else {
        return 1;
      }
    } else {
      if (labRecord1[1] !== null) {
        return -1;
      } else {
        return 1;
      }
    }
  });

  return (
    <>
      <ul className="profileHeader">
        {user && (
          <ul className="profileHeader__userInfo">
            <li className="profileHeader__logo">
              {user.firstname.charAt(0).toUpperCase()}
            </li>
            <li>
              <h3>
                {user.firstname} {user.lastinitial}.<br />
              </h3>
            </li>
          </ul>
        )}
        {user && labRecords ? (
          <li>
            <ProgressBar barData={parsedRecords} percentage={false} />
          </li>
        ) : (
          <li></li>
        )}
      </ul>
    </>
  );
};

export default ProfileHeader;
