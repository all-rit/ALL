import handleRedirect from "../../../helpers/Redirect";
import InfoModal from "./InfoModal";
import React, { useState } from "react";
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
      button: `tw-mt-20 tw-bg-primary-yellow tw-font-poppins tw-border-0 tw-text-xl tw-absolute
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
      button: `tw-mt-20 tw-bg-primary-yellow poppins tw-border-0 tw-text-xl tw-absolute
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
      button: `tw-bg-primary-yellow poppins tw-border-0 tw-text-xl tw-absolute
              xs:tw-top-44 xs:tw-right-0 xs:tw-text-xs xs:tw-mt-0
              sm:tw-right-0 sm:tw-left-auto sm:tw-text-xl
              md:tw-left-auto md:tw-top-80
              lg:tw-left-auto lg:tw-top-48`,
      infoModal: `tw-absolute tw-right-0
              xs:tw-top-52 xs:tw-text-sm
              sm:tw-top-64 sm:tw-mt-3
              md:lg:tw-top-36 md:lg:tw-m-0`,
    },
  };

  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

  const labButtons = () => {
    let currentUseCase;

    switch (useCase) {
      case "NOT_STARTED":
      case "IN_PROGRESS":
        currentUseCase = (
          <div className={"tw-mt-20"}>
            <button
              className={`tw-font-medium tw-px-3 ${buttonStyles.notCompleted.button}`}
              onClick={() => handleRedirect(actions, lab)}
            >
              Launch
            </button>
            <div className={`${buttonStyles.notCompleted.infoModal}`}>
              <button
                className="tw-cursor-pointer tw-bg-darkGray poppins tw-text-white tw-font-medium tw-border-0 tw-px-3 tw-m-0 tw-text-xs md:tw-text-xl"
                onClick={toggleOpen}
              >
                More Info
              </button>
              <InfoModal
                open={open}
                toggleOpen={toggleOpen}
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
              className={`tw-font-medium tw-px-3 ${buttonStyles.completed.button}`}
              onClick={() => handleRedirect(actions, lab)}
            >
              Launch
            </button>
            <div className={`${buttonStyles.completed.infoModal}`}>
              <button
                className="tw-cursor-pointer tw-bg-darkGray poppins tw-text-white tw-font-medium tw-border-0 tw-px-3 tw-m-0 tw-text-xs md:tw-text-xl"
                onClick={toggleOpen}
              >
                More Info
              </button>
              <InfoModal
                open={open}
                toggleOpen={toggleOpen}
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
              className={`tw-px-3 tw-font-medium ${buttonStyles.default.button}`}
              onClick={() => handleRedirect(actions, lab)}
            >
              Launch
            </button>
            <div className={`${buttonStyles.default.infoModal}`}>
              <button
                className="tw-cursor-pointer tw-bg-darkGray poppins tw-text-white tw-font-medium tw-border-0 tw-px-3 tw-m-0 tw-text-xs md:tw-text-xl"
                onClick={toggleOpen}
              >
                More Info
              </button>
              <InfoModal
                open={open}
                toggleOpen={toggleOpen}
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
    <div className={"tw-w-full tw-pb-3 tw-h-[13rem]"}>
      <div className={"tw-flex tw-flex-row tw-justify-start tw-w-full"}>
        <div
          className={
            "xs:tw-hidden md:tw-flex tw-flex-row tw-font-poppins tw-text-sm tw-p-3 tw-w-full xs:tw-justify-start"
          }
        >
          Difficulty: {displayDifficulty()}
        </div>
        <div className="module__bio module__lab_buttons">{labButtons()}</div>
      </div>
      <div className="module__title module__lab_title tw-mt-0 tw-pd-3 xs:tw-w-full xs:tw-justify-start xs:tw-ps-3">
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
