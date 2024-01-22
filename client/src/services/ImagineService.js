/* eslint-disable no-undef */
import API from "./API";

const ImagineService = {
  postStudy: (userID, study, section) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + "/imagine/postStudy",
      {
        userID,
        study,
        section,
      }
    );
  },
  preSurvey: (userID, preSurvey) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + "/imagine/preSurvey",
      {
        userID,
        preSurvey,
      }
    );
  },
  postSurvey: (userID, postSurvey) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + "/imagine/postSurvey",
      {
        userID,
        postSurvey,
      }
    );
  },
  getUsers: () => {
    return API.get(process.env.REACT_APP_SERVER_URL + "/imagine/users")
      .then((response) => response.json())
      .then((json) => json);
  },

  readMoreCount: (userID, readMoreCount) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + "/imagine/readMoreCount",
      {
        userID,
        readMoreCount,
      }
    );
  },

  readMoreTimeElapsed: (userID, readMoreTimeElapsed) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + "/imagine/readMoreTimeElapsed",
      {
        userID,
        readMoreTimeElapsed,
      }
    );
  },

  readingSectionPagePosition: (userID, readingSectionPagePosition) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + "/imagine/readingSectionPagePosition",
      {
        userID,
        readingSectionPagePosition,
      }
    );
  },
};

export default ImagineService;
