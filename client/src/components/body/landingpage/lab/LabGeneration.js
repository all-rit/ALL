import React from 'react';
import Lab from "./lab";
import labInformation from './labInformation';

function renderLabData(actions,progressState) {
    return labInformation.map((labInfo, index) => {
      const { alt,lab, name, bio , image} = labInfo //destructuring
        return (
                <Lab 
                  progressState={progressState}
                    key={index}
                    alt= {alt} 
                    lab={lab}
                    name= {name} 
                    bio={bio}
                    image= {image} 
                    actions={actions}
                />
        );
    })
  }
  
export default renderLabData;