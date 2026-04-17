import API from "./API";

const ImagineService = {
  postStudy: async (data) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL + `/imagine${data.year}/postStudy`,
      data,
    );
  },
  preSurvey: async (userID, preSurvey, year) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL + `/imagine${year}/preSurvey`,
      {
        userID,
        preSurvey,
        year,
      },
    );
  },

  newID: async (userID, year) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL + `/imagine${year}/newID`,
      {
        userID,
        year,
      },
    );
  },

  updateTeammateChat2025: async (userID, teammateChat) => {
    return await API.putWithBody(
      process.env.REACT_APP_SERVER_URL + "/imagine25/teammateChat",
      {
        userID,
        teammateChat,
      },
    );
  },

  postSurvey: async (userID, postSurvey, year) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL + `/imagine${year}/postSurvey`,
      {
        userID,
        postSurvey,
        year,
      },
    );
  },
  getUsers: () => {
    return Promise.resolve(
      API.get(process.env.REACT_APP_SERVER_URL + "/imagine/users").then(
        (response) => response.json(),
      ),
    );
  },
  getUserByID: (userID, year) => {
    return Promise.resolve(
      API.get(
        process.env.REACT_APP_SERVER_URL + `/imagine${year}/user/${userID}`,
        {},
      ).then((response) => response.json()),
    );
  },
  getGroup: (userID, year) => {
    return Promise.resolve(
      API.get(
        process.env.REACT_APP_SERVER_URL + `/imagine${year}/getGroup/${userID}`,
        {},
      ).then((response) => response.json()),
    );
  },
  getTeammate: (userID, year) => {
    return Promise.resolve(
      API.get(
        process.env.REACT_APP_SERVER_URL +
          `/imagine${year}/getTeammate/${userID}`,
        {},
      ).then((response) => response.json()),
    );
  },
  readMoreCount: async (userID, readMoreCount, year) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL + `/imagine${year}/readMoreCount`,
      {
        userID,
        readMoreCount,
        year,
      },
    );
  },

  readMoreTimeElapsed: async (userID, readMoreTimeElapsed, year) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL + `/imagine${year}/readMoreTimeElapsed`,
      {
        userID,
        readMoreTimeElapsed,
        year,
      },
    );
  },

  readingSectionPagePosition: async (
    userID,
    readingSectionPagePosition,
    year,
  ) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL +
        `/imagine${year}/readingSectionPagePosition`,
      {
        userID,
        readingSectionPagePosition,
        year,
      },
    );
  },
  postTeammateSelection: async (userID, teammateAvatar, year) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL +
        `/imagine${year}/teammateAvatarSelection`,
      {
        userID,
        teammateAvatar,
        year,
      },
    );
  },
  postUserAvatar: async (userID, avatar, year) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL + `/imagine${year}/userAvatarCreation`,
      {
        userID,
        avatar,
        year,
      },
    );
  },
  postOpponentSelection: async (userID, opponentAvatar, year) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL +
        `/imagine${year}/opponentAvatarSelection`,
      {
        userID,
        opponentAvatar,
        year,
      },
    );
  },

  handleImageUploads: async (data) => {
    return await API.postWithBodyFormData(
      process.env.REACT_APP_SERVER_URL + `/imagine26/handleImageUploads`,
      data,
    );
  },

  getImagePath: (userID, year, pictureType) => {
    return Promise.resolve(
      API.get(
        process.env.REACT_APP_SERVER_URL +
          `/imagine${year}/getImagePath/${userID}/${pictureType}`,
        {},
      ).then((response) => response.json()),
    );
  },
  postChatReply: async (userID, reply, year) => {
    return await API.postWithBody(
      process.env.REACT_APP_SERVER_URL +
        `/imagine${year}/postChatReply/${userID}`,
      {
        userID,
        reply,
      },
    );
  },
};
export default ImagineService;
