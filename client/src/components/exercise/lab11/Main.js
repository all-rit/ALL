import React, { useState } from "react";
import ExerciseStateContext from "./Lab11Context";
import PropTypes from "prop-types";
import { Router } from "@reach/router";
import LiteracyExerciseStart from "./pages/LiteracyExerciseStart";
import LiteracyExerciseEnd from "./pages/LiteracyExerciseEnd";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../reducers/lab11/ExerciseReducer";
import { connect } from "react-redux";
import InformationLetterIntroduction from "./pages/InformationLetterIntroduction";
import { LETTER_TEXT } from "../../../constants/lab11";

const Main = (props) => {
  const { user, actions } = props;
  const [exerciseState, setExerciseState] = useState("");
  const [letterContent, setLetterContent] = useState(LETTER_TEXT);
  const [totalWords, setTotalWords] = useState(0);
  const [totalSentences, setTotalSentences] = useState(0);
  const [totalComplexWords, setTotalComplexWords] = useState(0);
  const [fogIndex, setFogIndex] = useState(0);

  return (
    <div className="bottomSpace">
      <ExerciseStateContext.Provider
        value={{
          exerciseState,
          setExerciseState,
          letterContent,
          setLetterContent,
          totalWords,
          setTotalWords,
          totalSentences,
          setTotalSentences,
          totalComplexWords,
          setTotalComplexWords,
          fogIndex,
          setFogIndex,
        }}
      >
        <Router className="app">
          <LiteracyExerciseStart
            default
            path="/"
            user={user}
            actions={actions}
          />
          <InformationLetterIntroduction
            path="/InformationLetterIntroduction"
            user={user}
            actions={actions}
          />
          <LiteracyExerciseEnd
            path="/ExerciseEnd"
            user={user}
            actions={actions}
          />
        </Router>
      </ExerciseStateContext.Provider>
    </div>
  );
};

Main.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object,
};

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
