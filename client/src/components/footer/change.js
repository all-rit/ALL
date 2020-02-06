import React from "react";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";

const Change = ({ title, description, links }) => {
  if (links === undefined) {
    links = [null, null, null];
  }

  return (
    <div class="btn-change">
      <button
        class="btn-text btn btn-disabled text-uppercase"
        alt="Increase text size"
        title="Larger text"
        disabled="true"
      >
        Text+
      </button>
      <button
        class="btn-text btn btn-disabled text-uppercase"
        alt="Decrease text size"
        title="Smaller text"
        disabled="true"
      >
        Text-
      </button>
      <button class="btn btn-disabled text-uppercase" disabled="true">Change Color</button>
      <button class="btn btn-disabled text-uppercase" disabled="true">Change Color</button>
    </div>
  );
};

export default Change;
