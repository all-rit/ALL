import API from './API';

const ImagineService = {
  userAvatar: (userID, avatar) => {
    return API.postWithBody(
        process.env.REACT_APP_SERVER_URL + '/imagine/avatar',
        {
          userID,
          avatar,
        },
    );
  },
  userSquad: (userID, squad) => {
    return API.postWithBody(
        process.env.REACT_APP_SERVER_URL + '/imagine/squad',
        {
          userID,
          squad,
        },
    );
  },
  userLobbyMessages: (userID, lobbyMessages) => {
    return API.postWithBody(
        process.env.REACT_APP_SERVER_URL + '/imagine/lobbyMessages',
        {
          userID,
          lobbyMessages,
        },
    );
  },
  getUserSquad: (userID) => {
    return API.get(
        process.env.REACT_APP_SERVER_URL + `/imagine/squad/${userID}`,
    ).then((response) => response.json());
  },
  getUserAvatar: (userID) => {
    return API.get(
        process.env.REACT_APP_SERVER_URL + `/imagine/avatar/${userID}`,
    ).then((response) => response.json());
  },
};

export default ImagineService;
