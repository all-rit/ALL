/* eslint-disable require-jsdoc */
/* eslint-disable react/prop-types */
import React from "react";
import handleRedirect from "../../../helpers/Redirect";
import ProgressBar from "../profilepage/components/ProgressBar";
import LabFooter from "./LabFooter";

const Lab = (props) => {
  const {
    progressState,
    alt,
    lab,
    name,
    image,
    fullDescription,
    learningObjectives,
    authors,
    actions,
    labProgress,
    difficulty,
  } = props;

  const displayProgress = () => {
    let currentProgress;
    switch (progressState) {
      case "NOT_STARTED":
        currentProgress = "Not Started";
        break;
      case "IN_PROGRESS":
        currentProgress = "Partially Completed";
        break;
      case "COMPLETED":
        currentProgress = "Completed";
        break;
    }
    return currentProgress;
  };

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
    case "NOT_STARTED":
    case "COMPLETED":
      return (
        <ul className="module__col module__lab_col tw-w-full xs:tw-flex-col poppins">
          <ul className={"tw-flex tw-flex-row tw-w-full tw-justify-between"}>
            <li className={"tw-flex tw-flex-col tw-justify-start tw-mt-3"}>
              <div
                className={
                  "tw-flex tw-flex-row tw-justify-start tw-align-super tw-ml-2 tw-text-lg tw-font-bold"
                }
              >
                Assigned
              </div>
              <div
                className={
                  "tw-flex tw-flex-row tw-justify-start tw-ml-2 tw-text-sm tw-font-semibold"
                }
              >
                {displayProgress()}
              </div>
              {progressState === "COMPLETED" ? (
                <div className={"tw-ps-2"}>
                  <a
                    className={
                      "tw-flex tw-flex-row tw-justify-start tw-text-labBlue"
                    }
                    href={"/"}
                  >
                    View Certificate
                  </a>
                </div>
              ) : (
                ""
              )}
            </li>
            <li className={"tw-p-5"}>
              <ProgressBar
                labID={lab}
                barData={[
                  ["About", labProgress?.aboutcompletedtime],
                  ["Reading", labProgress?.readingcompletedtime],
                  ["Exercise", labProgress?.exercisecompletedtime],
                  ["Reinforcement", labProgress?.reinforcementcompletedtime],
                  ["Quiz", labProgress?.quizcompletedtime],
                ]}
              />
            </li>
          </ul>
          <li className={"tw-w-full"}>
            <a
              className="portfolio-link tw-w-full"
              onClick={() => handleRedirect(actions, lab)}
              href="# "
            >
              <div
                alt={alt}
                className="img-fluid module__image module__lab_image tw-border-0 tw-w-full"
                style={{
                  backgroundImage: "url(/img/lab_thumbnails/" + image + ")",
                  borderRadius: "0px",
                }}
              />
            </a>
          </li>
          <LabFooter
            useCase={"profile"}
            displayDifficulty={displayDifficulty}
            actions={actions}
            lab={lab}
            name={name}
            fullDescription={fullDescription}
            authors={authors}
            learningObjectives={learningObjectives}
          />
        </ul>
      );
    default:
      return (
        <ul className="module__col module__lab_col tw-w-full xs:tw-flex-col xs:tw-h-50">
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
          <LabFooter
            displayDifficulty={displayDifficulty}
            actions={actions}
            lab={lab}
            name={name}
            fullDescription={fullDescription}
            authors={authors}
            learningObjectives={learningObjectives}
          />
        </ul>
      );
  }
};

export default Lab;
