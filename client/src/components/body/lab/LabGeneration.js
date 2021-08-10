import React, {useEffect, useState} from 'react';
import Lab from "./lab";
import LabService from "../../../services/LabService";

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
  const { actions,progressState, labids, labRecords }=props;
  const [ labInformation, setLabInformation] = useState([]);

    useEffect(() => {
        if(labInformation.length===0){
            async function fetchGroups() {
                return LabService.getAllLabs();
            }
            fetchGroups().then((data) => {
                setLabInformation(data);
            });

        }
    });

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
                  <p>You have no labs for this section.</p>
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
                  <p>You have no labs for this section.</p>
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
