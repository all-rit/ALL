import React, { useState,useEffect } from 'react';
import Lab from "./lab";
import LabService from '../../../services/LabService';


function renderLabData(actions,labInformation,progressState,user) {
  return labInformation.map((labInfo, index) => {
    const {id,labName,shortDescription,thumbnailImageURL}= labInfo //destructuring
      return (
              <Lab 
                  user={user}
                  progressState={progressState}
                  key={index}
                  alt= {labName+" Thumbnail"} 
                  lab={id}
                  name= {labName} 
                  bio={shortDescription}
                  image= {thumbnailImageURL} 
                  actions={actions}
              />
      );
  })
}
const LabGeneration = (props)=>{
  const {actions,progressState,user}=props;
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
  //console.log(labInformation)
  return(
      renderLabData(actions,labInformation,progressState,user)
  );
}

export default LabGeneration;
