import React from "react";
import BackgroundImage from "../../../../assets/images/lab12/diploma_background.png";
import SealImage from "../../../../assets/images/lab12/diploma_seal.png";
import "../../../../assets/stylesheets/main.css";
import "../../../../assets/stylesheets/components/Diploma.css";

const Diploma = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <h1 className="fancy-text tw-text-7xl">ALL University</h1>
      <p className="fancy-text tw-text-3xl">
        Upon the recommendation of the President and Faculty of the
        <span id="college-name">COLLEGE NAME</span> and by the Board of Trustees
        has conferred upo
      </p>
      <h2 className="diploma-name tw-text-5xl">
        <span>FIRST NAME</span> Phillip <span>LAST NAME</span>
      </h2>
      <p className="fancy-text tw-text-3xl">for the degree of</p>
      <h3 className="fancy-text tw-text-3xl">
        <span>DEGREE</span>
      </h3>
      <p className="fancy-text tw-text-3xl">
        In testimony, thereof, the Board of Trustees has granted this diploma
        bearing the Seal of the Institution.
      </p>
      <p className="fancy-text tw-text-3xl">
        Earned on this <span>DATE</span>
      </p>
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
