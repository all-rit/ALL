/* eslint-disable no-undef */
import API from "./API";

const userService = {
  getUser: async (userID) => {
    document.cookie = `userId=${userID}`;
    return API.get(process.env.REACT_APP_SERVER_URL + `/user/${userID}`).then(
      (response) => response.json(),
    );
  },
  getUserEnrolledGroups: async (userID) => {
    return API.get(
      process.env.REACT_APP_SERVER_URL + `/user/${userID}/enrolled`,
    ).then((response) => response.json());
  },
  getUserInstructingGroups: async (userID) => {
    return API.get(
      process.env.REACT_APP_SERVER_URL + `/user/${userID}/groups`,
    ).then((response) => response.json());
  },
  getUserToDoLabs: async (userID) => {
    return API.get(
      process.env.REACT_APP_SERVER_URL + `/user/${userID}/todo`,
    ).then((response) => response.json());
  },
  getUserAssignedLabs: async (userID) => {
    return API.get(
      process.env.REACT_APP_SERVER_URL + `/user/${userID}/assigned`,
    ).then((response) => response.json());
  },
};

export default userService;
