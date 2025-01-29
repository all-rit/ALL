/* eslint-disable no-undef */
import API from "./API";

const ImagineService = {
  postStudy: async (data) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL + `/imagine${data.year}/postStudy`,
      data,
    );
  },
  preSurvey: async (userID, preSurvey, year) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL + `/imagine${year}/preSurvey`,
      {
        userID,
        preSurvey,
        year,
      },
    );
  },
  postSurvey: async (userID, postSurvey, year) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL + `/imagine${year}/postSurvey`,
      {
        userID,
        postSurvey,
        year,
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
  getUserByID: (userID, year) => {
    return Promise.resolve(
      API.get(
        process.env.REACT_APP_SERVER_URL + `/imagine${year}/user/${userID}`,
        {},
      ).then((response) => response.json()),
    );
  },
  readMoreCount: async (userID, readMoreCount, year) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL + `/imagine${year}/readMoreCount`,
      {
        userID,
        readMoreCount,
        year,
      },
    );
  },

  readMoreTimeElapsed: async (userID, readMoreTimeElapsed, year) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL + `/imagine${year}/readMoreTimeElapsed`,
      {
        userID,
        readMoreTimeElapsed,
        year,
      },
    );
  },

  readingSectionPagePosition: async (
    userID,
    readingSectionPagePosition,
    year,
  ) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL +
        `/imagine${year}/readingSectionPagePosition`,
      {
        userID,
        readingSectionPagePosition,
        year,
      },
    );
  },
};

export default ImagineService;
