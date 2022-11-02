import React, {useEffect } from "react";
import PropTypes from "prop-types";
import Question from "client/src/components/exercise/lab6/components/Question.js"
import QuestionCount from "client/src/components/exercise/lab6/components/QuestionCount.js"
import { navigate } from "@reach/router";
import {EXERCISE_PLAYING} from "../../../../../constants/lab6";
import { qqjson } from "../../components/QualQuesData";

import Quiz from "../../../../quiz/components/Quiz";

const QualificationQuestions = (props) =>{
    const {actions} = props;

    useEffect(()=>{
        actions.updateState(EXERCISE_PLAYING);
    },[actions]);

    const handleContinue = () =>{
        navigate("/Lab6/Exercise/AnalyzeData");
    }

    return(
        <div className="center-div">
            <h2 class="playthrough__title">Qualification Questions:</h2>

            <>
                {qqjson.map((data, key) => {
                return (
                    <div key={key}>
                    {data.question +
                        " , " +
                        data.answers}
                    </div>
                );
                })}
            </>
                    


            <button
                className="btn btn-primary text-black btn-xl text-uppercase "
                onClick = {handleContinue}
                key="confirm"
            >
                Finished
            </button>
      </div>
    );
}

export default QualificationQuestions;
