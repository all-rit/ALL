import React, { useState, useEffect } from "react";
import First from "../pages/First";
import Second from "../pages/Second";
import Third from "../pages/Third";
import Fourth from "../pages/Fourth";
import { useLab1StateContext } from "src/reducers/lab1/Lab1Context";
import PropTypes from "prop-types";

/**
 * Renders the Playthrough component.
 *
 * @returns {JSX.Element|null} The rendered Playthrough component.
 */
const Playthrough = ({ visible }) => {
  const { state: lab1State } = useLab1StateContext();
  const [maxScoreIdx, setMaxScoreIdx] = useState(2);
  const [finalResults, setFinalResults] = useState([]);

  useEffect(() => {
    if (lab1State.results.length > 3) {
      for (let i = 3; i < lab1State.results.length; i++) {
        if (lab1State.results[i].score > lab1State.results[maxScoreIdx].score) {
          setMaxScoreIdx(i);
        }
      }
    }
    setFinalResults([
      lab1State.results[0],
      lab1State.results[1],
      lab1State.results[maxScoreIdx],
    ]);
  }, [lab1State.results, maxScoreIdx]);

  if (!visible) return null;

  switch (lab1State.plays) {
    case 0:
      return <First />;
    case 1:
      return <Second />;
    case 2:
      return <Third />;
    case 3:
      return <Fourth results={lab1State.results} />;
    default:
      return <Fourth results={finalResults} />;
  }
};

Playthrough.propTypes = {
  visible: PropTypes.bool,
};

export default Playthrough;
