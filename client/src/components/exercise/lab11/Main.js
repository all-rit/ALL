import React, { useState } from "react";
import ExerciseStateContext from "./Lab11Context";
import PropTypes from "prop-types";
import { Router, navigate } from "@reach/router";
import LiteracyExerciseStart from "./pages/LiteracyExerciseStart";
import LiteracyExerciseEnd from "./pages/LiteracyExerciseEnd";
import InformationLetterEmail from "./pages/InformationLetterEmail";
import {
  LETTER_TEXT_ARRAY,
  LETTER_TEXT_FOG_INDEX_20,
  REPAIR,
} from "../../../constants/lab11";
import FogIndexFormulaIntroduction from "./pages/Explanations/FogIndexFormulaIntroduction";
import useScroll from "../../../use-hooks/useScroll";
import LiteracyRepair from "./pages/LiteracyRepair";
import FogIndexFormulaSentences from "./pages/Explanations/FogIndexFormulaSetences";
import FogIndexFormulaComplexWords from "./pages/Explanations/FogIndexFormulaComplexWords";
import FogIndexFormulaConclusion from "./pages/Explanations/FogIndexFormulaConclusion";
import useMainStateContext from "src/reducers/MainContext";

const Main = (props) => {
  const { user = null } = props;
  const { actions } = useMainStateContext();
  const [exerciseState, setExerciseState] = useState("");
  const [letterContent, setLetterContent] = useState(LETTER_TEXT_FOG_INDEX_20);
  const [totalWords, setTotalWords] = useState(0);
  const [totalSentences, setTotalSentences] = useState(0);
  const [totalComplexWords, setTotalComplexWords] = useState(0);
  const [fogIndex, setFogIndex] = useState(0);
  const [letterContentArray, setLetterContentArray] =
    useState(LETTER_TEXT_ARRAY);
  const [letterContentIndex, setLetterContentIndex] = useState(
    LETTER_TEXT_ARRAY.length - 1
  );

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
          letterContentIndex,
          setLetterContentIndex,
          letterContentArray,
          setLetterContentArray,
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
            descriptionText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros
            tellus, hendrerit quis iaculis non, blandit eget turpis. Sed at
            tristique ex.`}
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
            descriptionText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros
            tellus, hendrerit quis iaculis non, blandit eget turpis. Sed at
            tristique ex.`}
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
            descriptionText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros
            tellus, hendrerit quis iaculis non, blandit eget turpis. Sed at
            tristique ex.`}
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
            descriptionText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros
            tellus, hendrerit quis iaculis non, blandit eget turpis. Sed at
            tristique ex.`}
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
            descriptionText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros
            tellus, hendrerit quis iaculis non, blandit eget turpis. Sed at
            tristique ex.`}
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
  user: PropTypes.object,
};

export default Main;
