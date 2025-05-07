/* eslint-disable no-undef */
import API from "./API";

const labService = {
  getAllLabs: async () => {
    return API.get(process.env.REACT_APP_SERVER_URL + `/lab`)
      .then((response) => response.json())
      .then((json) => json);
  },
  getLabShortName: async (labID) => {
    return API.get(process.env.REACT_APP_SERVER_URL + `/lab${labID}/shortname`)
      .then((response) => response.json())
      .then((json) => json);
  },
  getLabAbout: async (labID) => {
    return API.get(process.env.REACT_APP_SERVER_URL + `/lab${labID}/about`)
      .then((response) => response.json())
      .then((json) => json);
  },
  getLabReading: async (labID) => {
    return API.get(process.env.REACT_APP_SERVER_URL + `/lab${labID}/reading`)
      .then((response) => response.json())
      .then((json) => json);
  },
  getLabReinforcement: async (labID) => {
    return API.get(
      process.env.REACT_APP_SERVER_URL + `/lab${labID}/reinforcement`,
    )
      .then((response) => response.json())
      .then((json) => json);
  },
  getLabQuiz: async (labID) => {
    return API.get(process.env.REACT_APP_SERVER_URL + `/lab${labID}/quiz`)
      .then((response) => response.json())
      .then((json) => json);
  },
};

export default labService;
