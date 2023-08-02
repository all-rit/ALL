/* eslint-disable require-jsdoc */
/* eslint-disable react/prop-types */
import React from "react";
import handleRedirect from "../../../helpers/Redirect";
import ProgressBar from "../profilepage/components/ProgressBar";
import InfoModal from "./InfoModal";
import about from "../About";

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

  switch (progressState) {
    case "IN_PROGRESS":
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
            <ul className="module__bio module__lab_buttons">
              <li>
                <button
                  className="btn-primary btn btn-md"
                  onClick={() => {
                    console.log(lab, actions.body);
                    console.log(about);
                    handleRedirect(actions, lab);
                  }}
                >
                  Launch Lab
                </button>
              </li>
              <InfoModal
                buttonLabel={"More Info"}
                labName={name}
                fullDescription={fullDescription}
                learningObjectives={learningObjectives}
                authors={authors}
                redirect={() => handleRedirect(actions, lab)}
              />
            </ul>
          </ul>
        </ul>
      );
  }
};

export default Lab;
