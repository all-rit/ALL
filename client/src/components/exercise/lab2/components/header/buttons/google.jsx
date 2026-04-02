import React, { Component } from 'react';
import GoogleButton from 'react-google-button';
import '../title.css';

/*
Class for handling the google signin button
*/
export class Google extends Component {
  // Constructor for binding the callback api to the state
  // Renderer for button
  render() {
    // Handles the call back api controller
    const clickMethod = () => {
      fetch(import.meta.env.VITE_REACT_APP_SERVER_URL + '/auth/google', {
        method: 'GET',
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          window.location.href = data.link;
        })
        .catch((error) => console.log(error));
    };

    return (
      <div className="googleButton">
        <GoogleButton className="signinButton" onClick={clickMethod} />
      </div>
    );
  }
}

export default Google;
