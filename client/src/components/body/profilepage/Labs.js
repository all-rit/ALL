import React, { useState } from "react";
import LabGeneration from "../lab/LabGeneration";
import useMainStateContext from "src/reducers/MainContext";
import PropTypes from "prop-types";
import { Input } from "reactstrap";

const Labs = (props) => {
  const { actions, state } = useMainStateContext();

  const displayNotStartedLabs = () => {
    return (
      <LabGeneration
        actions={actions}
        progressState="NOT_STARTED"
        labids={props.toDoLabs}
      />
    );
  };

  const [displayedLabs, setDisplayedLabs] = useState(displayNotStartedLabs); // Now this will work because displayAssignedToMeLabs is defined

  const displayInProgressLabs = () => {
    return (
      <LabGeneration
        actions={actions}
        progressState="IN_PROGRESS"
        labRecords={props.inProgressLabs}
      />
    );
  };

  const displayCompletedLabs = () => {
    return (
      <LabGeneration
        actions={actions}
        progressState="COMPLETED"
        labRecords={props.completedLabs}
      />
    );
  };

  const selectLabs = (labs) => {
    setDisplayedLabs(labs);
  };

  return (
    <>
      {state.main.user && props.labRecords && (
        <>
          <ul className="tw-flex tw-flex-col">
            <div
              className={
                " tw-border-solid tw-border-r-[1rem] tw-border-t-[1rem] tw-border-primary-yellow tw-bg-primary-yellow tw-border-l-0 tw-border-b-0"
              }
            >
              <div
                className={
                  "tw-h-full tw-border-solid tw-border-r-[0.5rem] tw-border-t-[0.5rem] tw-border-primary-blue tw-bg-white tw-border-l-0 tw-border-b-0 tw-rounded-tr-xl"
                }
              >
                <div
                  className={
                    "tw-text-5xl tw-font-poppins tw-title-styling-name"
                  }
                >
                  My Labs
                </div>
                <div
                  className={
                    "tw-w-full tw-flex tw-flex-row tw-justify-center tw-m-5"
                  }
                >
                  <Input
                    className={"tw-w-1/2 tw-font-poppins"}
                    placeholder={"Search"}
                  />
                </div>

                <div
                  className={"tw-flex tw-flex-row tw-justify-center tw-w-full"}
                >
                  <button
                    className={"btn btn-primary tw-m-3"}
                    onClick={() => selectLabs(displayNotStartedLabs)}
                  >
                    Assigned to Me
                  </button>
                  <button
                    className={"btn btn-primary tw-m-3"}
                    onClick={() => selectLabs(displayInProgressLabs)}
                  >
                    In Progress
                  </button>
                  <button
                    className={"btn btn-primary tw-m-3"}
                    onClick={() => selectLabs(displayCompletedLabs)}
                  >
                    Completed
                  </button>
                </div>
                <div className={"tw-p-6 tw-w-full"}>{displayedLabs}</div>
              </div>
            </div>
          </ul>
        </>
      )}
    </>
  );
};

Labs.propTypes = {
  labRecords: PropTypes.array,
  toDoLabs: PropTypes.array,
  inProgressLabs: PropTypes.array,
  completedLabs: PropTypes.array,
};

export default Labs;
