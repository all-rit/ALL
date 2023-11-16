import React, { useState } from "react";
import ExerciseStateContext from "./Lab11Context";
import PropTypes from "prop-types";
import { Router, navigate } from "@reach/router";
import LiteracyExerciseStart from "./pages/LiteracyExerciseStart";
import LiteracyExerciseEnd from "./pages/LiteracyExerciseEnd";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../reducers/lab11/ExerciseReducer";
import { connect } from "react-redux";
import InformationLetterEmail from "./pages/InformationLetterEmail";
import { LETTER_TEXT, REPAIR } from "../../../constants/lab11";
import FogIndexFormulaIntroduction from "./pages/Explanations/FogIndexFormulaIntroduction";
import useScroll from "../../../use-hooks/useScroll";
import LiteracyRepair from "./pages/LiteracyRepair";
import FogIndexFormulaSentences from "./pages/Explanations/FogIndexFormulaSetences";
import FogIndexFormulaComplexWords from "./pages/Explanations/FogIndexFormulaComplexWords";
import FogIndexFormulaConclusion from "./pages/Explanations/FogIndexFormulaConclusion";

const Main = (props) => {
  const { user = "" , actions } = props;
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

          <LiteracyRepair path={`${REPAIR}/*`} user={user} actions={actions} />

          <InformationLetterEmail
            path="/InformationLetterIntroduction"
            user={user}
            actions={actions}
            words={false}
            sentences={false}
            complexWords={false}
            isEditable={false}
            sectionTitle={"Information Letter"}
            handleContinue={() =>
              navigate("/Lab11/Exercise/FogIndexFormulaIntroduction")
            }
          />

          <FogIndexFormulaIntroduction
            path="/FogIndexFormulaIntroduction"
            user={user}
            actions={actions}
          />

          <InformationLetterEmail
            path="/InformationLetterWordCount"
            user={user}
            actions={actions}
            words
            sentences={false}
            complexWords={false}
            isEditable={false}
            sectionTitle={"Information Letter: Word Count"}
            handleContinue={() =>
              navigate("/Lab11/Exercise/FogIndexFormulaSentences")
            }
          />

          <FogIndexFormulaSentences
            path="/FogIndexFormulaSentences"
            user={user}
            actions={actions}
          />

          <InformationLetterEmail
            path="/InformationLetterSentenceCount"
            user={user}
            actions={actions}
            words
            sentences
            complexWords={false}
            isEditable={false}
            sectionTitle={"Information Letter: Sentence Count"}
            handleContinue={() =>
              navigate("/Lab11/Exercise/FogIndexFormulaComplexWords")
            }
          />

          <FogIndexFormulaComplexWords
            path="/FogIndexFormulaComplexWords"
            user={user}
            actions={actions}
          />

          <InformationLetterEmail
            path="/InformationLetterComplexWordCount"
            user={user}
            actions={actions}
            words
            sentences
            complexWords
            isEditable={false}
            sectionTitle={"Information Letter: Complex Word Count"}
            handleContinue={() =>
              navigate("/Lab11/Exercise/FogIndexFormulaConclusion")
            }
          />

          <FogIndexFormulaConclusion
            path="/FogIndexFormulaConclusion"
            user={user}
            actions={actions}
          />

          <InformationLetterEmail
            path="/InformationLetterFogIndexFormula"
            user={user}
            actions={actions}
            words
            sentences
            complexWords
            isEditable
            sectionTitle={"Information Letter: Fog Index Formula"}
            handleContinue={() => navigate("/Lab11/Exercise/ExerciseEnd")}
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
