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
};

export default ImagineService;
