import API from './API';

// const endpoints = {
//     GET_USER_ENROLLED_COURSES: `/user/${userId}/enrolled`
// };

export default {
    getUserEnrolledCourses: (userId) => {
        return API.get(process.env.REACT_APP_SERVER_URL + `/user/${userId}/enrolled`)
            .then((response) => response.json())
            .then((json) => json);
    }
}