import { navigate } from "@reach/router";
import React from "react";
const { nanoid } = require("nanoid");
import { PropTypes } from "prop-types";

const UpdateID = (props) => {
  const { setUserID, user, isImagine, actions } = props;

  const handleNext = () => {
    navigate("/Imagine/PreSurvey");
  };

  const handleUpdateID = () => {
    sessionStorage.clear();
    console.log(isImagine);
    if (user?.userid) {
      let newID = nanoid(6).toUpperCase();
      sessionStorage.setItem(user?.userid, newID);
      setUserID(newID);
      console.log(sessionStorage.getItem(user?.userid));
    }
    actions.setIsImagine(true);
    handleNext();
    console.log(isImagine);
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

UpdateID.propTypes = {
  setUserID: PropTypes.func,
  user: PropTypes.object,
  actions: PropTypes.object,
  isImagine: PropTypes.bool,
};

export default UpdateID;
