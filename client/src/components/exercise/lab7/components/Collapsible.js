/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import "../../../../assets/stylesheets/components/Collapsible.scss";

const Collapsible = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="collapsible-item">
      <div className="collapsible-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="collapsible-content">{content}</div>}
    </div>
  );
};

export default Collapsible;
