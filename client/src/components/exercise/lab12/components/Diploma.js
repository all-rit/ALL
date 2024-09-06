import React from "react";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";
import SealImage from "../../../../assets/images/lab12/diploma_seal.png";
import "../../../../assets/stylesheets/components/Diploma.css";

const Diploma = (props) => {
  const {
    collegeName = "",
    firstName = "",
    middleName = "",
    lastName = "",
    degree = "",
    date = "",
  } = props;

  const handleContinue = () => {
    navigate(`/Lab12/Exercise/`);
  };

  return (
    <div>
      <div className="tw-flex tw-bg-diploma-background tw-flex-col tw-justify-center tw-items-center tw-p-4">
        <h1 className="tw-font-diploma tw-text-7xl tw-leading-none tw-pb-8 tw-pt-4">
          ALL University
        </h1>
        <p
          className="fancy-text tw-text-3xl tw-leading-none"
          data-testid="collegeName"
        >
          Upon the recommendation of the President and Faculty of the{" "}
          <span className="tw-font-diploma tw-leading-none">{collegeName}</span>{" "}
          and by the Board of Trustees has conferred upon
        </p>
        <h2
          className="tw-font-bold tw-text-5xl tw-leading-none tw-pb-4 tw-pt-4"
          data-testid="names"
        >
          {firstName} {middleName} {lastName}
        </h2>
        <p className="fancy-text tw-text-3xl tw-leading-none">
          for the degree of
        </p>
        <h3
          className="tw-font-diploma tw-text-5xl tw-leading-none tw-pb-4 tw-pt-4"
          data-testid="degree"
        >
          {degree}
        </h3>
        <p className="fancy-text tw-text-3xl tw-leading-none">
          In testimony, thereof, the Board of Trustees has granted this diploma
          bearing the Seal of the Institution.
        </p>
        <p
          className="fancy-text tw-text-3xl tw-pb-8 tw-leading-normal"
          data-testid="date"
        >
          Earned on this {date}
        </p>
        <div className="tw-flex tw-row tw-justify-evenly tw-items-center tw-w-full">
          <hr className="tw-flex-none tw-flex-grow-0 tw-w-1/5 tw-h-2 tw-border-2" />
          <img
            className="tw-w-32 md:tw-w-40 lg:tw-w-48"
            src={SealImage}
            alt="College Seal"
          />
          <hr className="tw-flex-none tw-flex-grow-0 tw-w-1/5 tw-h-2 tw-border-2" />
        </div>
      </div>
      <div className="playthrough__sentence">
        Click the &quot;Continue to Alumni Newsletter&quot; button.
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleContinue}
          key="start"
        >
          Continue to Newsletter
        </button>
      </div>
    </div>
  );
};

Diploma.propTypes = {
  collegeName: PropTypes.string,
  firstName: PropTypes.string,
  middleName: PropTypes.string,
  lastName: PropTypes.string,
  degree: PropTypes.string,
  date: PropTypes.string,
};

export default Diploma;
