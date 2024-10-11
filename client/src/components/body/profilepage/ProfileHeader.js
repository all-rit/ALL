import React from "react";
import ProgressBar from "./components/ProgressBar";
import PropTypes from "prop-types";
import Headshot from "../../../assets/images/team/Headshot.jpeg";

const ProfileHeader = (props) => {
  const { user, labRecords, toDoLabs } = props;
  const parsedRecords = [];

  // Parse labRecords and toDoLabs
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

  // Sort parsedRecords
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

  // Render the ProgressBar if there are labRecords or toDoLabs
  const displayLabRecords = () => {
    if (parsedRecords.length > 0) {
      return (
        <li>
          <ProgressBar barData={parsedRecords} percentage={false} />
        </li>
      );
    }
    return null;
  };

  return (
    <div className="tw-w-screen tw-bg-primary-blue tw-h-[30rem] tw-flex tw-flex-row tw-align-middle tw-relative">
      {user && (
        <div className="tw-h-full tw-w-full tw-flex tw-flex-row tw-align-middle tw-justify-end">
          <div
            className="tw-bg-white tw-w-5/6 tw-h-[50%] tw-absolute tw-top-28 tw-z-0
              tw-border-t-0 tw-border-r-0 tw-border-b-[1rem] tw-border-solid tw-border-primary-yellow
              tw-flex tw-flex-col tw-justify-center"
          >
            <p
              className={
                "tw-flex tw-flex-row tw-justify-start tw-ml-[10%] tw-text-5xl tw-font-poppins tw-title-styling-name"
              }
            >
              {user.firstname} {user.lastinitial}.
            </p>
          </div>
          <div className="tw-absolute tw-rounded-full tw-left-0 tw-top-12">
            {/* TODO: Pull in the user's Google Profile Picture */}
            <div
              className="tw-h-[22rem] tw-w-[22rem] tw-rounded-full
                        tw-bg-white tw-text-primary-blue tw-border-solid tw-border-[1rem]
                        tw-border-primary-blue tw-z-[1rem] tw-flex tw-flex-row tw-align-middle tw-overflow-hidden"
            >
              <img
                src={Headshot}
                alt="User Profile"
                className="tw-h-full tw-w-full tw-object-cover tw-rounded-full"
              />
            </div>
          </div>
        </div>
      )}
      <ul>{displayLabRecords()}</ul>
    </div>
  );
};

ProfileHeader.propTypes = {
  user: PropTypes.shape({
    firstname: PropTypes.string,
    lastinitial: PropTypes.string,
  }),
  labRecords: PropTypes.array,
  toDoLabs: PropTypes.array,
};

export default ProfileHeader;
