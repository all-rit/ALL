import React from "react";
import SealImage from "../../../../assets/images/lab12/diploma_seal.png";
import "../../../../assets/stylesheets/components/Diploma.css";

// TEMPORARY: TODO make State-ified
const info = {
  collegeName: "ALL University",
  firstName: "John",
  middleName: "Elden",
  lastName: "Ring",
  degree: "Software Engineering",
  date: "September 21st",
};

const Diploma = () => {
  return (
    <div className="tw-flex tw-bg-diploma-background tw-flex-col tw-justify-center tw-items-center tw-p-4">
      <h1 className="tw-font-diploma tw-text-7xl tw-leading-normal">
        ALL University
      </h1>
      <p className="fancy-text tw-text-3xl tw-leading-normal">
        Upon the recommendation of the President and Faculty of the{" "}
        <span className="tw-font-diploma">{info.collegeName}</span> and by the
        Board of Trustees has conferred upon
      </p>
      <h2 className="tw-font-bold tw-text-5xl tw-leading-normal">
        {info.firstName + " " + info.middleName + " " + info.lastName}
      </h2>
      <p className="fancy-text tw-text-3xl tw-leading-normal">
        for the degree of
      </p>
      <h3 className="tw-font-diploma tw-text-5xl tw-leading-normal">
        {info.degree}
      </h3>
      <p className="fancy-text tw-text-3xl tw-leading-none">
        In testimony, thereof, the Board of Trustees has granted this diploma
        bearing the Seal of the Institution.
      </p>
      <p className="fancy-text tw-text-3xl tw-pb-8 tw-leading-normal">
        Earned on this <span className="tw-font-diploma">{info.date}</span>
      </p>
      <div className="tw-flex tw-row tw-justify-evenly tw-items-center tw-w-full">
        <hr className="tw-flex-none tw-flex-grow-0 tw-w-1/5 tw-h-2" />
        <img src={SealImage} />
        <hr className="tw-flex-none tw-flex-grow-0 tw-w-1/5 tw-h-2" />
      </div>
    </div>
  );
};

export default Diploma;
