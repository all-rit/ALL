import React, { useState,useEffect } from 'react';
import Lab from "./lab";
//import labInformation from './labInformation';
import LabService from '../../../services/LabService';


function renderLabData(actions,labInformation,progressState) {
  return labInformation.map((labInfo, index) => {
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
              />
      );
  })
}
const LabGeneration = (props)=>{
  const {actions,progressState}=props;
  const [ labInformation, setLabInformation] = useState([]);

  useEffect(() => {
      if(labInformation.length===0){
        async function fetchCourses() {
            return LabService.getAllLabs();
        }
        fetchCourses().then((data) => {
          setLabInformation(data);
        });
        
      }
  });
  //console.log(labInformation)
  return(
      renderLabData(actions,labInformation,progressState)
  );
}



export default LabGeneration;
