import { navigate } from "@reach/router";
import React from "react";
import { useEffect } from "react";
import {
  EXERCISE_PLAYING,
  REPAIR,
  EXERCISE_STATES,
} from "../../../../../constants/lab11";
import PropTypes from "prop-types";
import fog_index_formula from "../../../../../assets/images/lab11/fog_index_formula.png";
import fog_index_reading_levels from "../../../../../assets/images/lab11/fog_index_reading_levels.png";

const FogIndexFormulaIntroduction = (props) => {
  const { actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, []);

  const handleContinue = () => {
    navigate(`/Lab11/Exercise${REPAIR}/${EXERCISE_STATES.REPAIR_WORD_COUNT}`);
  };

  return (
    <div className="center-div">
      <h2 className="playthrough__title">Did You Notice?</h2>

      <div className="guidance margin-bottom-2">
        <p className="playthrough__sentence">
          You may have noticed that the family weekend invitation email was
          difficult to read and comprehend due to the amount of complex words.
          In addition, you may have noticed that the fog index widget indicated
          that the email had a fog index of 0.
        </p>
        <p className="playthrough__sentence">
          The Gunning Fog Index is a tool used to quantifiably measure the
          readability of English text. The formula below indicates how to
          calculate the fog index.
        </p>
      </div>

      <img src={fog_index_formula} alt="Fog index formula" />

      <div className="guidance margin-bottom-2">
        <p className="playthrough__sentence">
          “Total words” represents the total number of words, “Total sentences”
          represents the total number of sentences, and “Complex words”
          represents the total number of words with 3 or more syllables. The
          higher the fog index is, the higher the associated reading level is.
          The table below indicates what reading level corresponds to every fog
          index.
        </p>
      </div>

      <img
        src={fog_index_reading_levels}
        alt="Fog indices and corresponding reading levels"
      />

      <div>
        <a
          href="https://www.researchgate.net/figure/Gunnings-fog-index-level-31_tbl1_344162323"
          rel="noreferrer"
          target="_blank"
        >
          Fog Index and Reading Level by Grade
        </a>
      </div>

      <div className="guidance margin-bottom-2">
        <p className="playthrough__sentence">
          Since the email contained a high number of complex words, the fog
          index should not be 0. In the next 3 sections of the exercise, you
          will repair the fog index widget by implementing all 3 parts of the
          fog index formula. First, you will repair the “total words” portion of
          the formula.
        </p>
      </div>

      <p className="playthrough__sentence">
        Click the &quot;Continue to Repair&quot; button.
      </p>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleContinue}
          key="start"
        >
          Continue to Repair
        </button>
      </div>
    </div>
  );
};

FogIndexFormulaIntroduction.propTypes = {
  actions: PropTypes.object,
};
export default FogIndexFormulaIntroduction;
