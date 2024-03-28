import React from "react";
import BackgroundImage from "../../../../assets/images/lab12/diploma_background.png";

const Diploma = () => {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap"
        rel="stylesheet"
      ></link>
      <img src={BackgroundImage} />
      <div>
        {/* text stuff */}
        <p className="unifrakturmaguntia-regular">ALL University</p>
      </div>
    </div>
  );
};

export default Diploma;
