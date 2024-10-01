/* eslint-disable require-jsdoc */
/* eslint-disable react/prop-types */
import React from "react";
import handleRedirect from "../../../helpers/Redirect";
import ProgressBar from "../profilepage/components/ProgressBar";
import InfoModal from "./InfoModal";

const Lab = (props) => {
  const {
    progressState,
    alt,
    lab,
    name,
    bio,
    image,
    fullDescription,
    learningObjectives,
    authors,
    actions,
    labProgress,
    difficulty,
  } = props;
  function getColor(labProgress) {
    if (labProgress !== null && labProgress !== undefined) {
      let score = labProgress.quizscore;
      score = parseFloat(score);
      switch (true) {
        case score <= 40:
          return "crimson";
        case score <= 70:
          return "orange";
        default:
          return "chartreuse";
      }
    }
  }

  const displayDifficulty = () => {
    const totalCircles = 3;
    const rating = [];
    for (let i = 1; i <= totalCircles; i++) {
      rating.push(
        <div
          className={`tw-m-0.5 
          ${i <= difficulty ? "module__lab_difficulty_filled" : "module__lab_difficulty"}`}
        ></div>,
      );
    }
    return <div className={"tw-flex tw-flex-row tw-ms-1"}>{rating}</div>;
  };

  switch (progressState) {
    case "IN_PROGRESS":
      return (
        <ul className="module__col module__lab_col tw-relative">
          <li>
            <a
              className="portfolio-link "
              onClick={() => handleRedirect(actions, lab)}
              href="# "
            >
              <div
                alt={alt}
                className="img-fluid module__image module__lab_image"
                style={{
                  backgroundImage: "url(/img/lab_thumbnails/" + image + ")",
                }}
              />
            </a>
          </li>
          <ul className="module__caption">
            <li className="module__title module__lab_title">
              <a onClick={() => handleRedirect(actions, lab)} href="# ">
                {name}
              </a>
            </li>
            {labProgress === null || labProgress === undefined ? (
              <p>No Lab Data Available..!</p>
            ) : (
              <ul>
                <li>
                  <ProgressBar
                    labID={lab}
                    barData={[
                      ["About", labProgress.aboutcompletedtime],
                      ["Reading", labProgress.readingcompletedtime],
                      ["Exercise", labProgress.exercisecompletedtime],
                      ["Reinforcement", labProgress.reinforcementcompletedtime],
                      ["Quiz", labProgress.quizcompletedtime],
                    ]}
                    percentage={true}
                  />
                </li>
                <li className="module__bio">
                  Started on {labProgress.labstarttime.split("T")[0]}
                </li>
              </ul>
            )}
          </ul>
        </ul>
      );
    case "COMPLETED":
      return (
        <ul className="module__col module__lab_col">
          <li>
            <a
              className="portfolio-link "
              onClick={() => handleRedirect(actions, lab)}
              href="# "
            >
              <div
                alt={alt}
                className="img-fluid module__image module__lab_image"
                style={{
                  backgroundImage: "url(/img/lab_thumbnails/" + image + ")",
                }}
              />
            </a>
          </li>
          <ul className="module__caption">
            <li className="module__title module__lab_title">
              <a onClick={() => handleRedirect(actions, lab)} href="# ">
                {name}
              </a>
            </li>
            <ul className="module__bio">
              <li>
                <b style={{ color: getColor(labProgress) }}>
                  {labProgress === null || labProgress === undefined
                    ? 0
                    : labProgress.quizscore}
                  % Quiz Score
                </b>
              </li>
              <li>
                {" "}
                Completed on {labProgress.labcompletiontime.split("T")[0]}
              </li>
              <li className="module__bio">
                <InfoModal
                  buttonLabel={"View Certificate"}
                  labName={name}
                  labNum={lab}
                  labProgress={labProgress}
                />
              </li>
            </ul>
          </ul>
        </ul>
      );
    case "NOT_STARTED":
      return (
        <ul className="module__col module__lab_col">
          <li>
            <a
              className="portfolio-link "
              onClick={() => handleRedirect(actions, lab)}
              href="# "
            >
              <div
                alt={alt}
                className="img-fluid module__image module__lab_image"
                style={{
                  backgroundImage: "url(/img/lab_thumbnails/" + image + ")",
                }}
              />
            </a>
          </li>
          <ul className="module__caption">
            <li className="module__title module__lab_title">
              <a onClick={() => handleRedirect(actions, lab)} href="# ">
                {name}
              </a>
            </li>
            <li className="module__bio">{bio}</li>
          </ul>
        </ul>
      );
    default:
      return (
        <ul className="module__col module__lab_col xs:tw-flex-col">
          <li className={"xs:tw-w-full"}>
            <a
              className="portfolio-link"
              onClick={() => handleRedirect(actions, lab)}
              href="# "
            >
              <div
                alt={alt}
                className="img-fluid module__image module__lab_image xs:tw-w-full"
                style={{
                  backgroundImage: "url(/img/lab_thumbnails/" + image + ")",
                }}
              />
            </a>
          </li>
          <div className={"tw-flex tw-flex-row tw-justify-start tw-w-full"}>
            <div
              className={
                "tw-flex tw-flex-row poppins tw-font-medium tw-text-sm tw-p-3 tw-w-full xs:tw-justify-start"
              }
            >
              Difficulty: {displayDifficulty()}
            </div>
            <div className="module__bio module__lab_buttons">
              <button
                className="tw-bg-labYellow poppins tw-border-0 tw-ps-3 tw-text-xl tw-absolute tw-right-0 md:lg:tw-top-48 md:lg:tw-m-0 xs:tw-mt-3"
                onClick={() => handleRedirect(actions, lab)}
              >
                Launch Lab
              </button>
              <div
                className={
                  "tw-absolute tw-right-0 md:lg:tw-top-36 xs:tw-top-64 md:lg:tw-m-0 xs:tw-mt-3 "
                }
              >
                <InfoModal
                  buttonLabel={"More Info"}
                  labName={name}
                  fullDescription={fullDescription}
                  learningObjectives={learningObjectives}
                  authors={authors}
                  redirect={() => handleRedirect(actions, lab)}
                />
              </div>
            </div>
          </div>
          <div className="module__title module__lab_title tw-m-5 xs:tw-w-full xs:tw-justify-start xs:tw-ps-3">
            <div className={"tw-font-medium tw-text-sm"}>
              {" "}
              Accessible Learning Labs
            </div>
            <a onClick={() => handleRedirect(actions, lab)} href="# ">
              {name}
            </a>
          </div>
        </ul>
      );
  }
};

export default Lab;
