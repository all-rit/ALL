import React, { useEffect, useState } from "react";
import Lab from "../lab/Lab";
import PropTypes from "prop-types";
import useMainStateContext from "../../../reducers/MainContext";
import UserService from "../../../services/UserService";
import UserLabService from "../../../services/UserLabService";
import UnenrollModal from "./components/UnenrollModal";

const GroupAssignedLabs = (props) => {
  const {
    assignedLabs,
    // enrolledStudents,
    groupID,
    groupName,
    setInstrGroupsUpdated,
    instructor,
  } = props;

  const { state } = useMainStateContext();
  const currentUser = state.main.user;
  const [toDoLabs, setToDoLabs] = useState([]);
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

  const getLabProgressState = (labId) => {
    if (toDoLabs.some((lab) => lab.labID === labId)) return "NOT_STARTED";
    if (inProgressLabs.some((lab) => lab.labid === labId)) return "IN_PROGRESS";
    if (completedLabs.some((lab) => lab.labid === labId)) return "COMPLETED";
    return "NOT_STARTED"; // Default state if not found in any array
  };

  return (
    <>
      {assignedLabs.length === 0 ? (
        <td>No labs have been assigned for this group.</td>
      ) : (
        <div className={"tw-p-5"}>
          <div className={"tw-w-full tw-flex tw-flex-row tw-justify-between"}>
            <div
              className={
                "tw-flex tw-flex-col tw-ml-5 tw-font-poppins tw-line-clamp-0"
              }
            >
              <p className={"tw-p-0 tw-m-0"}>{instructor}</p>
              <p className={"tw-title-styling-name tw-text-2xl tw-p-0 tw-m-0"}>
                {groupName}
              </p>
            </div>
            <div>
              <UnenrollModal
                userid={currentUser.userid}
                groupid={groupID}
                buttonLabel={"Leave Group"}
                groupsUpdated={setInstrGroupsUpdated}
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className={"tw-text-2xl tw-ml-5 tw-title-styling-name"}>
            Assigned Labs:
          </div>
          <div className="tw-flex xs:tw-flex-col sm:md:lg:tw-flex-row">
            {assignedLabs.map((lab, index) => (
              <Lab
                progressState={getLabProgressState(lab.labID)}
                key={index}
                alt={lab.labName + " Thumbnail"}
                lab={lab.labID}
                name={lab.labName}
                bio={lab.shortDescription}
                image={lab.thumbnailImageURL}
                learningObjectives={lab.learningObjectives}
                authors={lab.authors}
                actions={lab.actions}
                difficulty={lab.difficulty}
                labProgress={
                  getLabProgressState(lab.labID) === "NOT_STARTED"
                    ? null
                    : labRecords[index]
                }
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

GroupAssignedLabs.propTypes = {
  assignedLabs: PropTypes.array,
  groupID: PropTypes.number,
  groupName: PropTypes.string,
  instructing: PropTypes.bool,
  setInstrGroupsUpdated: PropTypes.bool,
  user: PropTypes.shape({}),
  inProgressLabs: PropTypes.array,
  toDoLabs: PropTypes.array,
  completedLabs: PropTypes.array,
  instructor: PropTypes.shape({}),
  setGroupsUpdated: PropTypes.func,
};

export default GroupAssignedLabs;
