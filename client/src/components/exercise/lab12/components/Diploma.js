import React from "react";
import BackgroundImage from "../../../../assets/images/lab12/diploma_background.png";
import SealImage from "../../../../assets/images/lab12/diploma_seal.png";
import "../../../../assets/stylesheets/main.css";

const fancyText = {
  fontFamily: "'UnifrakturMaguntia', cursive",
};

const Diploma = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <h1 style={fancyText}>ALL University</h1>
      <p style={fancyText}>
        Upon the recommendation of the President and Faculty of the{" "}
        <span id="college-name">COLLEGE NAME</span> and by the Board of Trustees
        has conferred upon
      </p>
      <h2>
        <span>FIRST NAME</span> Phillip <span>LAST NAME</span>
      </h2>
      <p style={fancyText}>for the degree of</p>
      <h3>
        <span>DEGREE</span>
      </h3>
      <p style={fancyText}>
        In testimony, thereof, the Board of Trustees has granted this diploma
        bearing the Seal of the Institution.
      </p>
      <p style={fancyText}>
        Earned on this <span>DATE</span>
      </p>
      <img src={SealImage} />
    </div>
  );
};

export default Diploma;
