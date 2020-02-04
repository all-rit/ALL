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
        class="btn-text"
        alt="Increase text size"
        title="Larger text"
        disabled="true"
      >
        Text+
      </button>
      <button
        class="btn-text"
        alt="Decrease text size"
        title="Smaller text"
        disabled="true"
      >
        Text-
      </button>
      <button disabled="true">Change Color</button>
      <button disabled="true">Change Color</button>
    </div>
  );
};

export default Change;
