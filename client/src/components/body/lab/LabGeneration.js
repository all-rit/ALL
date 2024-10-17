/* eslint-disable no-inner-declarations */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { useEffect, useState } from "react";
import Lab from "./Lab";
import LabService from "../../../services/LabService";
import Spinner from "../../../common/Spinner/Spinner";

function renderLabData(actions, labInfo, progressState, index, labRecord) {
  const {
    id,
    labName,
    shortDescription,
    thumbnailImageURL,
    fullDescription,
    learningObjectives,
    authors,
    difficulty,
  } = labInfo; // destructuring
  return (
    <Lab
      progressState={progressState}
      key={index}
      alt={labName + " Thumbnail"}
      lab={id}
      name={labName}
      bio={shortDescription}
      image={thumbnailImageURL}
      fullDescription={fullDescription}
      learningObjectives={learningObjectives}
      authors={authors}
      actions={actions}
      labProgress={labRecord}
      difficulty={difficulty}
    />
  );
}
const LabGeneration = (props) => {
  const { actions, progressState, labids, labRecords } = props;
  const [labInformation, setLabInformation] = useState([]);

  useEffect(() => {
    if (labInformation.length === 0) {
      async function fetchGroups() {
        return LabService.getAllLabs();
      }
      fetchGroups().then((data) => {
        let arr = [];
        data.map((lab) => {
          arr[lab.id - 1] = lab;
        });
        setLabInformation(arr);
      });
    }
  });

  if (labInformation !== null && labInformation.length > 0 && progressState) {
    if (progressState === "NOT_STARTED") {
      if (labids !== null && labids.length > 0) {
        return (
          <div className={"tw-grid tw-grid-cols-3 tw-gap-5"}>
            {labids.map((lab, index) => {
              const idx = lab.labID - 1;
              return (
                <div key={idx} className="tw-h-full">
                  {renderLabData(
                    actions,
                    labInformation[idx],
                    progressState,
                    index,
                    null,
                  )}
                </div>
              );
            })}
          </div>
        );
      } else {
        return (
          <p className="module__no_labs">You have no labs for this section.</p>
        );
      }
    } else {
      if (labRecords !== null && labRecords.length > 0) {
        return labRecords.map((rec, index) => {
          const idx = rec.labid - 1;
          if (labInformation[idx]) {
            return renderLabData(
              actions,
              labInformation[idx],
              progressState,
              index,
              rec,
            );
          }
        });
      } else {
        return (
          <p className="module__no_labs">You have no labs for this section.</p>
        );
      }
    }
  } else {
    if (labInformation.length === 0) {
      return (
        <div className="landingpage__row">
          <Spinner />
        </div>
      );
    }
    return labInformation.map((labInfo, index) => {
      if (labInfo) {
        return renderLabData(actions, labInfo, progressState, index);
      }
    });
  }
};

export default LabGeneration;
