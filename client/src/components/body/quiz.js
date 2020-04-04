import React from "react";
import QuizComp from "./../../quiz/App"
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";

const Quiz = ({ title, description, links }) => {
  if (links === undefined) {
    links = [null, null, null];
  }

  return (
    <div class="container">
        //TODO add the title
      <div class="row quiz">
        <QuizComp />
      </div>

    </div>
  );
};

export default Quiz;
