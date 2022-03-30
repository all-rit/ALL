import API from './API';

const ImagineService = {
    userAvatar: (userID,avatar) => {
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + "/imagine/avatar", {
            userID,avatar
        });
    },
    userSquad: (userID,squad) => {
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + "/imagine/squad", {
            userID,squad
        });
    },
    userLobbyMessages: (userID,lobbyMessages) => {
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + "/imagine/lobbyMessages", {
            userID,lobbyMessages
        });
    },
}

export default ImagineService;