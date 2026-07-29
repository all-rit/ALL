import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useMainStateContext from "../../../reducers/MainContext";
import UserService from "../../../services/UserService";
import UserLabService from "../../../services/UserLabService";
import UnenrollModal from "./components/UnenrollModal";
import LabGeneration from "../lab/LabGeneration";

const GroupAssignedLabs = (props) => {
  const { assignedLabs, groupID, groupName, setGroupsUpdated, instructor } =
    props;

  const { actions } = useMainStateContext();
  const { state } = useMainStateContext();
  const currentUser = state.main.user;
  const [toDoLabs, setToDoLabs] = useState([]);
  const [labRecords, setLabRecords] = useState([]);

  const inProgressLabs = [];
  const completedLabs = [];

  console.log(toDoLabs);

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
  }, [state.main.user, instructor]);

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
    <div className={"tw-mb-6"}>
      {assignedLabs.length === 0 ? (
        <td>No labs have been assigned for this group.</td>
      ) : (
        <div className={"tw-p-5"}>
          <div className={"tw-w-full tw-flex tw-flex-row tw-justify-between"}>
            <div
              className={"tw-flex tw-flex-col  tw-font-poppins tw-line-clamp-0"}
            >
              <p className={"tw-p-0 tw-m-0"}>{instructor}</p>
              <p className={"tw-title tw-text-2xl tw-p-0 tw-m-0"}>
                {groupName}
              </p>
            </div>
            <div>
              <UnenrollModal
                userid={currentUser.userid}
                groupid={groupID}
                buttonLabel={"Leave Group"}
                groupsUpdated={setGroupsUpdated}
              />
            </div>
          </div>
          <br />
          <div className={"tw-text-2xl tw-title"}>Assigned Labs:</div>
          <div className="tw-flex tw-flex-col tw-gap-y-16 tw-w-full">
            {toDoLabs.length > 0 && (
              <div>
                <p className={"tw-title tw-text-sm"}> Not Started </p>
                <LabGeneration
                  actions={actions}
                  labids={toDoLabs}
                  progressState={"NOT_STARTED"}
                />
              </div>
            )}
            {inProgressLabs.length > 0 && (
              <div>
                <p className={"tw-title tw-text-sm"}> In Progress </p>
                <LabGeneration
                  actions={actions}
                  labids={inProgressLabs}
                  progressState={"IN_PROGRESS"}
                  labRecords={inProgressLabs}
                />
              </div>
            )}
            {completedLabs.length > 0 && (
              <div>
                <p className={"tw-title tw-text-sm"}> Complete </p>
                <LabGeneration
                  actions={actions}
                  labids={completedLabs}
                  progressState={"COMPLETED"}
                  labRecords={completedLabs}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

GroupAssignedLabs.propTypes = {
  assignedLabs: PropTypes.array,
  groupID: PropTypes.number,
  groupName: PropTypes.string,
  instructing: PropTypes.bool,
  user: PropTypes.shape({}),
  inProgressLabs: PropTypes.array,
  toDoLabs: PropTypes.array,
  completedLabs: PropTypes.array,
  instructor: PropTypes.shape({}),
  setGroupsUpdated: PropTypes.func,
};

export default GroupAssignedLabs;
