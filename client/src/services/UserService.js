import API from './API';

// const endpoints = {
//     GET_USER_ENROLLED_GROUPS: `/user/${userId}/enrolled`
// };

export default {
    getUserEnrolledGroups: (userID) => {
        return API.get(process.env.REACT_APP_SERVER_URL + `/user/${userID}/enrolled`)
            .then((response) => response.json())
            .then((json) => json);
    },

    getUserInstructingGroups: (userID) => {
        return API.get(process.env.REACT_APP_SERVER_URL + `/user/${userID}/groups`)
            .then((response) => response.json())
            .then((json) => json);
    },
}
