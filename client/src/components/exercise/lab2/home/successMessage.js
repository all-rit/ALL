import React from 'react';
import './homeStyle.css'

/*
Component for displaying a success message after the colors succesfully switch
From the color change popup (lasts 5 seconds and fades to white)
*/
const SuccessMessage = () => {
  return(
    <p className='success'>
      Colors have been successfully updated
    </p>
  );
}

export default SuccessMessage;
