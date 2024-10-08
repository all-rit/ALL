import React from "react";
import LabGeneration from "../lab/LabGeneration";
import useMainStateContext from "src/reducers/MainContext";
import PropTypes from "prop-types";

const Labs = (props) => {
  const { actions, state } = useMainStateContext();
  return (
    <>
      {state.main.user && props.labRecords && (
        <>
          <ul className="tw-flex tw-flex-col">
            <li>
              <h4>In Progress Labs</h4>
              <ul className="tw-flex tw-grid-cols-2 xs:tw-flex-wrap">
                <LabGeneration
                  actions={actions}
                  progressState="IN_PROGRESS"
                  labRecords={props.inProgressLabs}
                />
              </ul>
            </li>

            <li>
              <h4>Assigned Labs</h4>
              <div className="tw-flex tw-grid-cols-2">
                <LabGeneration
                  actions={actions}
                  progressState="NOT_STARTED"
                  labids={props.toDoLabs}
                />
              </div>
            </li>

            <li>
              <h4>Completed Labs</h4>
              <div className="tw-grid">
                <LabGeneration
                  actions={actions}
                  progressState="COMPLETED"
                  labRecords={props.completedLabs}
                />
              </div>
            </li>
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
