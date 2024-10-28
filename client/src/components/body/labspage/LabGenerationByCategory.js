/* eslint-disable no-inner-declarations */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */

import React, { useEffect, useState } from "react";
import Lab from "../lab/Lab";
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
const LabGenerationByCategory = (props) => {
  const { actions, progressState, /*, labids,*/ labRecords, category } = props;
  const [labInformation, setLabInformation] = useState(new Map());

  useEffect(() => {
    if (labInformation.size === 0) {
      async function fetchGroups() {
        return LabService.getAllLabs();
      }
      fetchGroups().then((data) => {
        // hashmap... :D
        let hashmap = new Map();
        data.forEach((lab) => {
          const category = lab.category;
          if (hashmap.has(category)) {
            hashmap.get(category).push(lab);
          } else {
            hashmap.set(category, [lab]);
          }
        });
        setLabInformation(hashmap);
      });
    }
  });

  if (labInformation !== null && labInformation.length > 0 && category) {
    // check categories + difficulties
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
  } else {
    if (labInformation.length === 0) {
      return (
        <div className="landingpage__row">
          <Spinner />
        </div>
      );
    }

    return Array.from(labInformation.entries()).map(([category, labArray]) => (
      <div key={category} className="tw-text-left">
        <text className="tw-font-bold tw-ml-5 tw-font-calibri tw-text-xl tw-pb-0">
          {category}
        </text>
        <div className="tw-grid md:tw-grid-cols-3 sm:tw-grid-cols-2">
          {labArray.map((labInfo) =>
            renderLabData(actions, labInfo, progressState, labInfo.id - 1),
          )}
        </div>
      </div>
    ));

    // const labElements = [];
    // labInformation.forEach((labArray) => {
    //     labArray.forEach((labInfo) => {
    //         labElements.push(renderLabData(actions, labInfo, progressState, labInfo.id-1));
    //     })
    // })
    // return labElements;
  }
};

export default LabGenerationByCategory;
