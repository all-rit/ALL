/* eslint-disable no-undef */
import API from "./API";

const ImagineService = {
  discomfortCount: (userID, discomfortCount) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + "/imagine/discomfortCount",
      {
        userID,
        discomfortCount,
      }
    );
  },
  experientialMain: (userID, experientialMain) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + "/imagine/experientialMain",
      {
        userID,
        experientialMain,
      }
    );
  },
  experientialProtanopia: (userID, experientialProtanopia) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + "/imagine/experientialProtanopia",
      {
        userID,
        experientialProtanopia,
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
