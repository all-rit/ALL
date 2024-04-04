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
      <h1 className="tw-font-diploma tw-text-7xl tw-leading-none tw-pb-8 tw-pt-4">
        ALL University
      </h1>
      <p className="fancy-text tw-text-3xl tw-leading-none">
        Upon the recommendation of the President and Faculty of the{" "}
        <span className="tw-font-diploma tw-leading-none">
          {info.collegeName}
        </span>{" "}
        and by the Board of Trustees has conferred upon
      </p>
      <h2 className="tw-font-bold tw-text-5xl tw-leading-none tw-pb-4 tw-pt-4">
        {info.firstName} {info.middleName} {info.lastName}
      </h2>
      <p className="fancy-text tw-text-3xl tw-leading-none">
        for the degree of
      </p>
      <h3 className="tw-font-diploma tw-text-5xl tw-leading-none tw-pb-4 tw-pt-4">
        {info.degree}
      </h3>
      <p className="fancy-text tw-text-3xl tw-leading-none">
        In testimony, thereof, the Board of Trustees has granted this diploma
        bearing the Seal of the Institution.
      </p>
      <p className="fancy-text tw-text-3xl tw-pb-8 tw-leading-normal">
        Earned on this {info.date}
      </p>
      <div className="tw-flex tw-row tw-justify-evenly tw-items-center tw-w-full">
        <hr className="tw-flex-none tw-flex-grow-0 tw-w-1/5 tw-h-2 tw-border-2" />
        <img className="tw-w-32 md:tw-w-40 lg:tw-w-48" src={SealImage} />
        <hr className="tw-flex-none tw-flex-grow-0 tw-w-1/5 tw-h-2 tw-border-2" />
      </div>
    </div>
  );
};

export default Diploma;
