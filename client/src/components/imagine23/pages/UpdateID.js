/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { navigate } from "@reach/router";
import React, { useState } from "react";
const { nanoid } = require("nanoid");

const UpdateID = (props) => {
  const { setUserID, user } = props;

  const handleNext = () => {
    navigate("/Imagine/Navigation");
  };

  const handleUpdateID = () => {
    sessionStorage.clear();
    if (user?.userid) {
      let newID = nanoid(6).toUpperCase();
      sessionStorage.setItem(user?.userid, newID);
      setUserID(newID);
    }
    handleNext();
  };

  return (
    <div className="container bottomSpace center-div">
      <h2 className="playthrough__title">PRESS BUTTON TO UPDATE ID</h2>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase"
        onClick={handleUpdateID}
      >
        UPDATE ID
      </button>
    </div>
  );
};

export default UpdateID;
