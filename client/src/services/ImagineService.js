/* eslint-disable no-undef */
import API from "./API";

const ImagineService = {
  postStudy: async (userID, study) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL + "/imagine/postStudy",
      {
        userID,
        study,
      },
    );
  },
  preSurvey: async (userID, preSurvey) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL + "/imagine/preSurvey",
      {
        userID,
        preSurvey,
      },
    );
  },
  postSurvey: async (userID, postSurvey) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL + "/imagine/postSurvey",
      {
        userID,
        postSurvey,
      },
    );
  },
  getUsers: () => {
    return Promise.resolve(
      API.get(process.env.REACT_APP_SERVER_URL + "/imagine/users").then(
        (response) => response.json(),
      ),
    );
  },
  getUserByID: (userID) => {
    return Promise.resolve(
      API.get(
        process.env.REACT_APP_SERVER_URL + `/imagine/user/${userID}`,
        {},
      ).then((response) => response.json()),
    );
  },
  readMoreCount: async (userID, readMoreCount) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL + "/imagine/readMoreCount",
      {
        userID,
        readMoreCount,
      },
    );
  },

  readMoreTimeElapsed: async (userID, readMoreTimeElapsed) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL + "/imagine/readMoreTimeElapsed",
      {
        userID,
        readMoreTimeElapsed,
      },
    );
  },

  readingSectionPagePosition: async (userID, readingSectionPagePosition) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL + "/imagine/readingSectionPagePosition",
      {
        userID,
        readingSectionPagePosition,
      },
    );
  },
};

export default ImagineService;
