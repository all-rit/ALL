/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { navigate } from "@reach/router";
import React, { useState } from "react";
const { nanoid } = require("nanoid");

const UpdateID = (props) => {
  const { setUserID, user } = props;

  const [showNav, setShowNav] = useState(false);

  const handleExpression = () => {
    navigate("/Imagine/ExpressionStart");
  };
  const handleExperiential = () => {
    navigate("/Imagine/ExperientialStart");
  };

  const handleUpdateID = () => {
    sessionStorage.clear();
    if (user?.userid) {
      let newID = nanoid(6).toUpperCase();
      sessionStorage.setItem(user?.userid, newID);
      setUserID(newID);
    }
    setShowNav(true);
  };

  return (
    <div className="container bottomSpace center-div">
      {!showNav && (
        <>
          <h2 className="playthrough__title">PRESS BUTTON TO UPDATE ID</h2>
          <button
            className="btn btn-primary text-black btn-xl text-uppercase"
            onClick={handleUpdateID}
          >
            UPDATE ID
          </button>
        </>
      )}
      {showNav && (
        <>
          <h2 className="playthrough__title">NAVIGATION</h2>
          <button
            className="btn btn-primary text-black btn-xl text-uppercase tw-m-3"
            onClick={handleExperiential}
          >
            Experiential
          </button>
          <button
            className="btn btn-primary text-black btn-xl text-uppercase tw-m-3"
            onClick={handleExpression}
          >
            Expression
          </button>
        </>
      )}
    </div>
  );
};

export default UpdateID;
