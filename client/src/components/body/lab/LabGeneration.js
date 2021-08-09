import React from 'react';
import Lab from "./lab";

function renderLabData(actions,labInfo,progressState, index, labRecord) {
    const {id,labName,shortDescription,thumbnailImageURL}= labInfo //destructuring
    return (
        <Lab
            progressState={progressState}
            key={index}
            alt= {labName+" Thumbnail"}
            lab={id}
            name= {labName}
            bio={shortDescription}
            image= {thumbnailImageURL}
            actions={actions}
            labProgress={labRecord}
        />
    );
}
const LabGeneration = (props)=>{
  const { actions,progressState, labInformation, labids, labRecords }=props;

  if (progressState){
      if (progressState === "NOT_STARTED"){
          if (labids !== null && labids.length > 0){
              return (
                  labInformation.map((labInfo, index) => {
                      if (labids.includes(labInfo.id)){
                          return renderLabData(actions, labInfo, progressState, index, null)
                      } else {
                          return null;
                      }
                  })
              )
          } else {
              return (
                  <p>There are currently no more assigned labs.</p>
              )
          }
      } else {
          if (labRecords !== null && labRecords.length > 0 && labInformation !== null && labInformation.length > 0){
              return (
                  labRecords.map((rec, index) => {
                      let idx = rec.labid - 1;
                      return renderLabData(actions, labInformation[idx], progressState, index, rec)
                  }
              ))
          } else {
              return (
                  <p>
                      There are currently no data for this section.
                      Get started with the labs to see your progress.
                  </p>
              )
          }
      }
  }
  else {
      return(
          labInformation.map((labInfo, index) => {
              return renderLabData(actions, labInfo, progressState, index)
          })
      );
  }

}

export default LabGeneration;
