import React from "react";
import BackgroundImage from "../../../../assets/images/lab12/diploma_background.png";
import SealImage from "../../../../assets/images/lab12/diploma_seal.png";
import "../../../../assets/stylesheets/main.css";
import "../../../../assets/stylesheets/components/Diploma.css";

const smallLine = {
  lineHeight: "normal",
};
const largeLine = {
  lineHeight: "1.5",
};

const Diploma = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <h1 className="fancy-text tw-text-7xl" style={largeLine}>
        ALL University
      </h1>
      <p className="fancy-text tw-text-3xl" style={smallLine}>
        Upon the recommendation of the President and Faculty of the
        <span id="college-name">&nbsp;(College Name)&nbsp;</span>
        and by the Board of Trustees has conferred upon
      </p>
      <h2 className="diploma-name tw-text-5xl" style={largeLine}>
        <span>(First Name)</span> Phillip <span>(Last Name)</span>
      </h2>
      <p className="fancy-text tw-text-3xl">for the degree of</p>
      <h3 className="fancy-text tw-text-5xl" style={largeLine}>
        <span>(Degree)</span>
      </h3>
      <p className="fancy-text tw-text-3xl" style={smallLine}>
        In testimony, thereof, the Board of Trustees has granted this diploma
        bearing the Seal of the Institution.
      </p>
      <p className="fancy-text tw-text-3xl" style={smallLine}>
        Earned on this <span>(Date)</span>
      </p>
      <br></br>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
        }}
      >
        <hr className="horizontal-bar-styling" />
        <img src={SealImage} />
        <hr className="horizontal-bar-styling" />
      </div>
    </div>
  );
};

export default Diploma;
