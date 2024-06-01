/* eslint-disable no-undef */
import API from "./API";

const groupService = {
  getGroupAssignedLabs: (groupID) => {
    return API.get(
      process.env.REACT_APP_SERVER_URL + `/group/${groupID}/labs`,
    ).then((response) => response.json());
  },
  getCompletedGroupLabs: (userID, groupID) => {
    return API.get(
      process.env.REACT_APP_SERVER_URL +
        `/group/${groupID}/labs/${userID}/completed`,
    ).then((response) => response.json());
  },

  getGroupEnrolledStudents: (groupID) => {
    return API.get(
      process.env.REACT_APP_SERVER_URL + `/group/${groupID}/enrolled`,
    ).then((response) => response.json());
  },

  enrollUser: (userID, inviteCode) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + `/group/enroll`,
      {
        userID,
        inviteCode,
      },
    ).then((response) => response.json());
  },
  unenrollUserFromGroup: (userID, groupID) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + `/group/unenroll`,
      {
        userID,
        groupID,
      },
    );
  },
  createGroup: (userID, groupName) => {
    API.postWithBody(process.env.REACT_APP_SERVER_URL + `/group/create`, {
      userID,
      groupName,
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.error(error, "Could not create group.");
      });
  },
  addGroupLab: (groupID, labID) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + `/group/${groupID}/add`,
      {
        groupID,
        labID,
      },
    );
  },
  deleteGroupLab: (groupID, labID) => {
    return API.putWithBody(
      process.env.REACT_APP_SERVER_URL + `/group/${groupID}/${labID}/delete`,
      {
        groupID,
        labID,
      },
    );
  },
  deleteGroup: (groupID) => {
    return API.putWithBody(
      process.env.REACT_APP_SERVER_URL + `/group/${groupID}/delete`,
      {
        groupID,
      },
    );
  },
  updateGroup: (groupID, groupName) => {
    return API.putWithBody(
      process.env.REACT_APP_SERVER_URL + `/group/${groupID}/update`,
      {
        groupID,
        groupName,
      },
    );
  },
};

export default groupService;
