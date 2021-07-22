import API from './API';

// const endpoints = {
//     GET_USER_ENROLLED_GROUPS: `/user/${userId}/enrolled`
// };

export default {
    getUserEnrolledGroups: (userId) => {
        return API.get(process.env.REACT_APP_SERVER_URL + `/user/${userId}/enrolled`)
            .then((response) => response.json())
            .then((json) => json);
    }
}