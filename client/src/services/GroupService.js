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
    createGroup: (userID, groupName) => {
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + `/group/create`, {
            userID, 
            groupName
        }).then((response) => response.json());
    },
    addGroupLab: (groupID,labID)=>{
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + `/group/${groupID}/add`, {
            groupID,
            labID,
        });
    },
    deleteGroupLab: (groupID,labID)=>{
        return API.deleteWithBody(process.env.REACT_APP_SERVER_URL + `/group/${groupID}/delete`, {
            groupID,
            labID,
        });
    },
    updateGroup: (groupID, groupName)=>{
        return API.putWithBody(process.env.REACT_APP_SERVER_URL + `/group/${groupID}/update`, {
            groupID,
            groupName
        });
    }
}
