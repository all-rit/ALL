import { navigate } from "@reach/router";
import React from "react";
import Letter from "../../components/Letter";
import { useEffect } from "react";
import { EXERCISE_PLAYING } from "../../../../../constants/lab11";
import PropTypes from "prop-types";
import useScroll from "../../../../../use-hooks/useScroll";

const InformationLetterFogIndexFormula = (props) => {
  const { actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, []);

  useScroll();

  const handleContinue = () => {
    navigate("/Lab11/Exercise/ExerciseEnd");
  };

  return (
    <div className="center-div">
      <div className="playthrough__sentence">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros
        tellus, hendrerit quis iaculis non, blandit eget turpis. Sed at
        tristique ex.
      </div>

      <div className="tw-flex flex-col tw-justify-center">
        <div className="tw-w-full tw-h-auto tw-bg-[#E8EBED] tw-rounded-2xl tw-shadow tw-py-5 tw-flex tw-flex-col">
          <div className="tw-flex tw-justify-center">
            <div className={`tw-w-[90%] tw-flex tw-flex-col`}>
              <div
                className={`tw-text-xl tw-self-start tw-my-4 tw-mb-5 tw-font-bold`}
              >
                New Message
              </div>
            </div>
          </div>
          <div className="tw-bg-white tw-flex tw-justify-center tw-pt-4">
            <div className={`tw-w-[90%] tw-flex tw-flex-col `}>
              <div className={`tw-opacity-50 tw-text-xl tw-self-start`}>
                Recipents
              </div>
              <div className="tw-w-full tw-mx-auto tw-bg-[#B4B4B4] tw-h-[2px] tw-my-4 tw-opacity-40" />
              <div className={`tw-opacity-50 tw-text-xl tw-self-start`}>
                Subject
              </div>
              <div className="tw-w-full tw-mx-auto tw-bg-[#B4B4B4] tw-h-[2px] tw-my-4 tw-opacity-40" />
              <Letter isEditable />
            </div>
          </div>
        </div>
      </div>

      <button
        className="btn btn-primary text-black btn-xl text-uppercase tw-mt-5"
        onClick={handleContinue}
        key="start"
      >
        Next
      </button>
    </div>
  );
};

InformationLetterFogIndexFormula.propTypes = {
  actions: PropTypes.object,
};
export default InformationLetterFogIndexFormula;
