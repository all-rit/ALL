import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
const { nanoid } = require('nanoid');
import { PropTypes } from 'prop-types';

const UpdateID = (props) => {
  const { setUserID, user, actions } = props;

  const handleNext = () => {
    navigate('/Imagine2023/PreSurvey');
  };

  useEffect(() => {
    actions.setIsImagine(true);
  }, []);

  const handleUpdateID = () => {
    sessionStorage.clear();
    if (user?.userid) {
      let newID = nanoid(6).toUpperCase();
      sessionStorage.setItem(user?.userid, newID);
      setUserID(newID);
    }
    actions.setIsImagine(true);
    handleNext();
  };

  return (
    <div className="tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center">
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
};

export default UpdateID;
