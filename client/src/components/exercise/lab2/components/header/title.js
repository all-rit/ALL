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
          <p className="tw-title-styling-name">Let the Exercise Begin!</p>
          <p className="tw-font-calibri tw-font-normal tw-text-[1.5rem]">
            Click as fast as you can the correct colored circle!
          </p>
        </div>
      ) : (
        <div>
          {replay ? (
            <div>
              <p className="tw-title-styling-name">Exercise Over!</p>
              <p className="tw-body-styling-name tw-font-medium">
                Check out your score and click the button when ready to move on!
              </p>
            </div>
          ) : (
            <div>
              <p className="tw-title-styling-name tw-py-3">Color Clicker</p>
              <p className="tw-font-calibri tw-font-normal tw-text-[1.5rem]">
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
