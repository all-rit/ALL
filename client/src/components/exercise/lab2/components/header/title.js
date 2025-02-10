/* eslint-disable react/prop-types */
import React from "react";
import "./title.css";

/*
Displays the title of the page dependent on the state it is in
State options: Home page or Exercise apge
*/
const Title = ({ exerciseState, replay }) => {
  return (
    <div>
      {exerciseState ? (
        <div>
          <p className="tw-title">Let the Exercise Begin!</p>
          <p className="tw-body-text tw-text-center">
            Click as fast as you can the correct colored circle!
          </p>
        </div>
      ) : (
        <div>
          {replay ? (
            <div>
              <p className="tw-title tw-text-center">Exercise Over!</p>
              <p className="tw-body-text tw-text-center">
                Check out your score and click the button when ready to move on!
              </p>
            </div>
          ) : (
            <div>
              <p className="tw-title tw-text-center tw-py-3">Color Clicker</p>
              <p className="tw-body-text tw-text-center">
                How fast can you click the correct colored circle?
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Title;
