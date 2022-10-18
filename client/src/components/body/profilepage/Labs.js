/* eslint-disable react/prop-types */
import React from "react";
import LabGeneration from "../lab/LabGeneration";
import { actions } from "../../../reducers/MainReducer";

const Labs = (props) => {
  return (
    <>
      {props.user && props.labRecords && (
        <>
          <div className="module__row">
            <div>
              <h4>In Progress Labs</h4>
              <div className="module__row">
                <LabGeneration
                  actions={actions}
                  progressState="IN_PROGRESS"
                  labRecords={props.inProgressLabs}
                />
              </div>
            </div>

            <div>
              <h4>Assigned Labs</h4>
              <div className="module__row">
                <LabGeneration
                  actions={actions}
                  progressState="NOT_STARTED"
                  labids={props.toDoLabs}
                />
              </div>
            </div>

            <div>
              <h4>Completed Labs</h4>
              <div className="module__row">
                <LabGeneration
                  actions={actions}
                  progressState="COMPLETED"
                  labRecords={props.completedLabs}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Labs;
