import React from 'react';
import Lab from "./lab";
import labInformation from './labInformation';

function renderLabData(actions,state) {
    return labInformation.map((labInfo, index) => {
      const { alt,lab, name, bio , image} = labInfo //destructuring
        return (
                <Lab 
                    state={state}
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