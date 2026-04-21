/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Lab from "./Lab";
import LabService from "../../../services/LabService";
import Spinner from "../../../common/Spinner/Spinner";
import { Card, CardFooter, CardHeader } from "reactstrap";

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
  const { actions, progressState, labids, labRecords, search } = props;
  const [labInformation, setLabInformation] = useState([]);

  useEffect(() => {
    if (labInformation.length === 0) {
      // eslint-disable-next-line
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
          <div className={"tw-grid tw-grid-cols-3 tw-gap-5 tw-w-full"}>
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
          <>
            {!search && (
              <p className="module__no_labs tw-w-full tw-body-text">
                You have no labs to display. Join a group below to get labs
                assigned to you by an instructor.
              </p>
            )}
          </>
        );
      }
    } else if (
      progressState === "FEATURED_LABS" ||
      progressState === "MY_LABS"
    ) {
      return (
        <div
          className={`tw-grid xs:tw-grid-cols-1 ${progressState === "MY_LABS" ? "md:tw-grid-cols-3" : "md:tw-grid-cols-2 lg:tw-gap-32"} tw-w-full tw-gap-3`}
        >
          {labids.map((lab, index) => {
            const idx = lab.id - 1;
            return (
              <div key={idx} className="tw-m-1">
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
      // This is for displaying user labs with progress bars
      if (labRecords !== null && labRecords.length > 0) {
        return (
          <div className={"tw-grid tw-grid-cols-3 tw-gap-5 tw-w-full"}>
            {labRecords.map((rec, index) => {
              const idx = rec.labid - 1;
              if (labInformation[idx]) {
                return (
                  <div key={idx} className={"tw-w-full"}>
                    {renderLabData(
                      actions,
                      labInformation[idx],
                      progressState,
                      index,
                      rec,
                    )}
                  </div>
                );
              } else {
                return (
                  // If no labs are found, return a blank card
                  <Card key={idx} className="landingpage__row">
                    <CardHeader />
                    <CardFooter />
                  </Card>
                );
              }
            })}
          </div>
        );
      } else {
        return (
          <>
            {!search && (
              <p className="module__no_labs tw-w-full tw-body-text">
                You have no labs to display. Join a group below to get labs
                assigned to you by an instructor.
              </p>
            )}
          </>
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
