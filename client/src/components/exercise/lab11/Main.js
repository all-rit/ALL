import React, { useState } from "react";
import ExerciseStateContext from "./Lab11Context";
import { Router, navigate } from "@reach/router";
import LiteracyExerciseStart from "./pages/LiteracyExerciseStart";
import LiteracyExerciseEnd from "./pages/LiteracyExerciseEnd";
import InformationLetterEmail from "./pages/InformationLetterEmail";
import {
  LETTER_TEXT_ARRAY,
  LETTER_TEXT_FOG_INDEX_10,
  REPAIR,
} from "../../../constants/lab11/index";
import FogIndexFormulaIntroduction from "./pages/Explanations/FogIndexFormulaIntroduction";
import useScroll from "../../../use-hooks/useScroll";
import LiteracyRepair from "./pages/LiteracyRepair";
import FogIndexFormulaSentences from "./pages/Explanations/FogIndexFormulaSetences";
import FogIndexFormulaComplexWords from "./pages/Explanations/FogIndexFormulaComplexWords";
import FogIndexFormulaConclusion from "./pages/Explanations/FogIndexFormulaConclusion";
import useMainStateContext from "src/reducers/MainContext";
import {
  FOG_INDEX_FORMULA_COMPLEX_WORDS,
  FOG_INDEX_FORMULA_CONCLUSION,
  FOG_INDEX_FORMULA_INTRODUCTION,
  FOG_INDEX_FORMULA_SENTENCES,
  INFORMATION_LETTER_COMPLEX_WORD_COUNT,
  INFORMATION_LETTER_FOG_INDEX_FORMULA,
  INFORMATION_LETTER_INTRODUCTION,
  INFORMATION_LETTER_SENTENCE_COUNT,
  INFORMATION_LETTER_WORD_COUNT,
  LITERACY_EXERCISE_END,
} from "src/constants/lab11/index";

const Main = () => {
  const { actions } = useMainStateContext();
  const [exerciseState, setExerciseState] = useState("");
  const [letterContent, setLetterContent] = useState(LETTER_TEXT_FOG_INDEX_10);
  const [totalWords, setTotalWords] = useState(0);
  const [totalSentences, setTotalSentences] = useState(0);
  const [totalComplexWords, setTotalComplexWords] = useState(0);
  const [fogIndex, setFogIndex] = useState(0);
  const [letterContentArray, setLetterContentArray] =
    useState(LETTER_TEXT_ARRAY);
  const [letterContentIndex, setLetterContentIndex] = useState(2);

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
          <LiteracyExerciseStart default path="/" />

          <LiteracyRepair path={`${REPAIR}/*`} actions={actions} />

          <InformationLetterEmail
            path={INFORMATION_LETTER_INTRODUCTION}
            sectionTitle={"Information Letter"}
            handleContinue={() =>
              navigate("/Lab11/Exercise/FogIndexFormulaIntroduction")
            }
            descriptionText={`First, read through the family weekend invitation email. Then, look at the Fog Index widget. Finally, click the “Next” button to continue to the next section!`}
          />

          <FogIndexFormulaIntroduction path={FOG_INDEX_FORMULA_INTRODUCTION} />

          <InformationLetterEmail
            path={INFORMATION_LETTER_WORD_COUNT}
            words
            sectionTitle={"Information Letter: Word Count"}
            handleContinue={() =>
              navigate("/Lab11/Exercise/FogIndexFormulaSentences")
            }
            descriptionText={`Notice that the Fog Index widget displays the correct number of words now. However, the number of sentences and complex words is still incorrect, and the Fog Index is incorrect.`}
          />

          <FogIndexFormulaSentences path={FOG_INDEX_FORMULA_SENTENCES} />

          <InformationLetterEmail
            path={INFORMATION_LETTER_SENTENCE_COUNT}
            words
            sentences
            sectionTitle={"Information Letter: Sentence Count"}
            handleContinue={() =>
              navigate("/Lab11/Exercise/FogIndexFormulaComplexWords")
            }
            descriptionText={`Notice that the Fog Index widget displays the correct number of sentences now. However, the number of complex words is still incorrect, and the Fog Index is incorrect.`}
          />

          <FogIndexFormulaComplexWords path={FOG_INDEX_FORMULA_COMPLEX_WORDS} />

          <InformationLetterEmail
            path={INFORMATION_LETTER_COMPLEX_WORD_COUNT}
            words
            sentences
            complexWords
            sectionTitle={"Information Letter: Complex Word Count"}
            handleContinue={() =>
              navigate("/Lab11/Exercise/FogIndexFormulaConclusion")
            }
            descriptionText={`Notice that the Fog Index widget displays the correct number of complex words now, and the Fog Index is correct! However, this Fog Index is not ideal.`}
          />

          <FogIndexFormulaConclusion path={FOG_INDEX_FORMULA_CONCLUSION} />

          <InformationLetterEmail
            path={INFORMATION_LETTER_FOG_INDEX_FORMULA}
            words
            sentences
            complexWords
            isEditable
            sectionTitle={"Information Letter: Fog Index Formula"}
            handleContinue={() => navigate("/Lab11/Exercise/ExerciseEnd")}
            descriptionText={`Choose one of the emails with a Fog Index greater than 4 but less than 10.`}
          />

          <LiteracyExerciseEnd path={LITERACY_EXERCISE_END} />
        </Router>
      </ExerciseStateContext.Provider>
    </div>
  );
};

export default Main;
