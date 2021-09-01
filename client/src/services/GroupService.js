import API from './API';

export default {
    getGroupAssignedLabs: (groupID) => {
        return API.get(process.env.REACT_APP_SERVER_URL + `/group/${groupID}/labs`)
            .then((response) => response.json())
    },

    getGroupEnrolledStudents: (groupID) => {
        return API.get(process.env.REACT_APP_SERVER_URL + `/group/${groupID}/enrolled`)
            .then((response) => response.json())
    },
    unenrollUserFromGroup: (userID, groupID) => {
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + `/group/unenroll`, {
            userID,
            groupID,
        });
    },
}