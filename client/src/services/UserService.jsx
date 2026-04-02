import API from './API';

const userService = {
  getUser: (userID) => {
    return API.get(
      import.meta.env.VITE_REACT_APP_SERVER_URL + `/user/${userID}`,
    ).then((response) => response.json());
  },
  getUserEnrolledGroups: (userID) => {
    return API.get(
      import.meta.env.VITE_REACT_APP_SERVER_URL + `/user/${userID}/enrolled`,
    ).then((response) => response.json());
  },
  getUserInstructingGroups: (userID) => {
    return API.get(
      import.meta.env.VITE_REACT_APP_SERVER_URL + `/user/${userID}/groups`,
    ).then((response) => response.json());
  },
  getUserToDoLabs: (userID) => {
    return API.get(
      import.meta.env.VITE_REACT_APP_SERVER_URL + `/user/${userID}/todo`,
    ).then((response) => response.json());
  },
  getUserAssignedLabs: (userID) => {
    return API.get(
      import.meta.env.VITE_REACT_APP_SERVER_URL + `/user/${userID}/assigned`,
    ).then((response) => response.json());
  },
  developmentLogin: (userID) => {
    return API.get(
      import.meta.env.VITE_REACT_APP_SERVER_URL + `/user/${userID}/development`,
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  },
};

export default userService;
