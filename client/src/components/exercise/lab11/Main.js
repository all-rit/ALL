import React, { useState } from "react";
import ExerciseStateContext from "./Lab11Context";
import PropTypes from "prop-types";
import { Router } from "@reach/router";
import LiteracyExerciseStart from "./pages/LiteracyExerciseStart";
import LiteracyExerciseEnd from "./pages/LiteracyExerciseEnd";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../reducers/lab11/ExerciseReducer";
import { connect } from "react-redux";
import InformationLetterIntroduction from "./pages/InformationLetters/InformationLetterIntroduction";
import { LETTER_TEXT, REPAIR } from "../../../constants/lab11";
import FogIndexFormulaIntroduction from "./pages/Explanations/FogIndexFormulaIntroduction";
import useScroll from "../../../use-hooks/useScroll";
import LiteracyRepair from "./pages/LiteracyRepair";
import InformationLetterWordCount from "./pages/InformationLetters/InformationLetterWordCount";
import FogIndexFormulaSentences from "./pages/Explanations/FogIndexFormulaSetences";
import InformationLetterSentences from "./pages/InformationLetters/InformationLetterSentences";
import FogIndexFormulaComplexWords from "./pages/Explanations/FogIndexFormulaComplexWords";
import InformationLetterComplexWords from "./pages/InformationLetters/InformationLetterComplexWords";
import FogIndexFormulaConclusion from "./pages/Explanations/FogIndexFormulaConclusion";
import InformationLetterFogIndexFormula from "./pages/InformationLetters/InformationLetterFogIndexFormula";

const Main = (props) => {
  const { user, actions } = props;
  const [exerciseState, setExerciseState] = useState("");
  const [letterContent, setLetterContent] = useState(LETTER_TEXT);
  const [totalWords, setTotalWords] = useState(0);
  const [totalSentences, setTotalSentences] = useState(0);
  const [totalComplexWords, setTotalComplexWords] = useState(0);
  const [fogIndex, setFogIndex] = useState(0);

  useScroll();

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

          <FogIndexFormulaIntroduction
            path="/FogIndexFormulaIntroduction"
            user={user}
            actions={actions}
          />
          <LiteracyRepair path={`${REPAIR}/*`} user={user} actions={actions} />

          <InformationLetterWordCount
            path="/InformationLetterWordCount"
            user={user}
            actions={actions}
          />

          <FogIndexFormulaSentences
            path="/FogIndexFormulaSentences"
            user={user}
            actions={actions}
          />

          <InformationLetterSentences
            path="/InformationLetterSentenceCount"
            user={user}
            actions={actions}
          />

          <FogIndexFormulaComplexWords
            path="/FogIndexFormulaComplexWords"
            user={user}
            actions={actions}
          />

          <InformationLetterComplexWords
            path="/InformationLetterComplexWordCount"
            user={user}
            actions={actions}
          />

          <FogIndexFormulaConclusion
            path="/FogIndexFormulaConclusion"
            user={user}
            actions={actions}
          />

          <InformationLetterFogIndexFormula
            path="/InformationLetterFogIndexFormula"
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
