import React from "react";
import Quiz from "./../../quiz/App"
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";

const Reading = ({ title, description, links }) => {
  if (links === undefined) {
    links = [null, null, null];
  }

  return (
    <div class="container">
      <div class="row quiz">
        <Quiz />
      </div>

    </div>
  );
};

export default Reading;
