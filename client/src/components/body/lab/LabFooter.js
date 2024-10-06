import handleRedirect from "../../../helpers/Redirect";
import InfoModal from "./InfoModal";
import React from "react";
import PropTypes from "prop-types";

const LabFooter = (props) => {
  const {
    displayDifficulty,
    actions,
    lab,
    name,
    fullDescription,
    authors,
    learningObjectives,
    useCase,
  } = props;

  const buttonStyles = {
    notCompleted: {
      button: `tw-mt-20 tw-bg-labYellow poppins tw-border-0 tw-text-xl tw-absolute
              xs:tw-top-72 xs:tw-left-0 xs:tw-text-xs xs:tw-mt-0
              sm:tw-right-0 sm:tw-left-auto sm:tw-text-xl sm:tw-top-96
              md:tw-left-auto
              lg:tw-left-auto lg:tw-top-64`,
      infoModal: `tw-absolute tw-right-0
              xs:tw-top-72 xs:tw-text-sm
              sm:tw-top-80 sm:tw-mt-3
              md:lg:tw-top-52 md:lg:tw-m-0`,
    },
    completed: {
      button: `tw-mt-20 tw-bg-labYellow poppins tw-border-0 tw-text-xl tw-absolute
              xs:tw-top-72 xs:tw-left-0 xs:tw-text-xs xs:tw-mt-0
              sm:tw-right-0 sm:tw-left-auto sm:tw-text-xl sm:tw-top-96
              md:tw-left-auto
              lg:tw-left-auto lg:tw-top-64 lg:tw-mt-3`,
      infoModal: `tw-absolute tw-right-0
              xs:tw-top-72 xs:tw-text-sm
              sm:tw-top-80 sm:tw-mt-3
              md:lg:tw-top-56 md:lg:tw-m-0`,
    },
    default: {
      button: `tw-bg-labYellow poppins tw-border-0 tw-text-xl tw-absolute
              xs:tw-top-52 xs:tw-left-0 xs:tw-text-xs xs:tw-mt-0
              sm:tw-right-0 sm:tw-left-auto sm:tw-text-xl
              md:tw-left-auto md:tw-top-80
              lg:tw-left-auto lg:tw-top-48`,
      infoModal: `tw-absolute tw-right-0
              xs:tw-top-52 xs:tw-text-sm
              sm:tw-top-64 sm:tw-mt-3
              md:lg:tw-top-36 md:lg:tw-m-0`,
    },
  };

  const labButtons = () => {
    let currentUseCase;

    switch (useCase) {
      case "NOT_STARTED":
      case "IN_PROGRESS":
        currentUseCase = (
          <div className={"tw-mt-20"}>
            <button
              className={`${buttonStyles.notCompleted.button}`}
              onClick={() => handleRedirect(actions, lab)}
            >
              Launch Lab
            </button>
            <div className={`${buttonStyles.notCompleted.infoModal}`}>
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
        );
        break;
      case "COMPLETED":
        currentUseCase = (
          <div className={"tw-mt-20"}>
            <button
              className={`${buttonStyles.completed.button}`}
              onClick={() => handleRedirect(actions, lab)}
            >
              Launch Lab
            </button>
            <div className={`${buttonStyles.completed.infoModal}`}>
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
        );
        break;
      default:
        currentUseCase = (
          <div>
            <button
              className={`${buttonStyles.default.button}`}
              onClick={() => handleRedirect(actions, lab)}
            >
              Launch Lab
            </button>
            <div className={`${buttonStyles.default.infoModal}`}>
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
        );
        break;
    }
    return currentUseCase;
  };

  return (
    <div className={"tw-w-full"}>
      <div className={"tw-flex tw-flex-row tw-justify-start tw-w-full"}>
        <div
          className={
            "tw-flex tw-flex-row poppins tw-font-medium tw-text-sm tw-p-3 tw-w-full xs:tw-justify-start"
          }
        >
          Difficulty: {displayDifficulty()}
        </div>
        <div className="module__bio module__lab_buttons">{labButtons()}</div>
      </div>
      <div className="module__title module__lab_title tw-mt-0 tw-mb-3 xs:tw-w-full xs:tw-justify-start xs:tw-ps-3">
        <div className={"tw-font-medium tw-text-sm"}> Lab {lab}</div>
        <a
          className={"xs:tw-text-sm xs:tw-line-clamp-2 sm:tw-text-xl"}
          onClick={() => handleRedirect(actions, lab)}
          href="# "
        >
          {name}
        </a>
      </div>
    </div>
  );
};

LabFooter.propTypes = {
  displayDifficulty: PropTypes.func,
  actions: PropTypes.shape({}),
  lab: PropTypes.number,
  name: PropTypes.string,
  fullDescription: PropTypes.string,
  authors: PropTypes.string,
  learningObjectives: PropTypes.array,
  useCase: PropTypes.string,
};

export default LabFooter;
