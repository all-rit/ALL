import { React, useState } from "react";
import { PropTypes } from "prop-types";
import PreSurveyQuestions from "./preSurveyQuestions"


function assignQuizQuestions(surveyType) {
    switch (surveyType) {
      case "pre":
        return PreSurveyQuestions;
      case "post":
        return PostSurveyQuestions;
      default:
        return [
          {
            question: "Default",
            answers: [
              {
                val: 0,
                type: "0",
                content: "Default",
              },
            ],
            multiChoice: false,
          },
        ];
    }
  }

const SurveyHandler = (props) => {

    return (
        <>


        
        </>
    )
}

export default SurveyHandler;
