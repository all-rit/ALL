const ImagineService = require("../services/ImagineService");

const submitStudy = async (req, _res) => {
  try {
    const { userID, study, year } = req.body;
    const result = await ImagineService.submitStudy({
      userID,
      study,
      year,
    });
    if (!result) {
      throw new Error("Instance of study was not recorded");
    }
  } catch (error) {
    console.error(error);
  }
};

const newID = async (req, _res) => {
  try {
    const { userID, year } = req.body;
    const result = await ImagineService.newID({
      userID,
      year,
    });
    if (!result) {
      throw new Error("ID was not recorded");
    }
  } catch (error) {
    console.error(error);
  }
};

const preSurvey = async (req, _res) => {
  const { userID, preSurvey, year } = req.body;

  try {
    const resPreSurvey = await ImagineService.preSurvey({
      userID,
      preSurvey,
      year,
    });
    if (!resPreSurvey) {
      throw new Error("Pre survey was not recorded");
    }
    return resPreSurvey;
  } catch (error) {
    console.error(error);
  }
};

const postSurvey = async (req, _res) => {
  const { userID, postSurvey, year } = req.body;
  try {
    const respostSurvey = await ImagineService.postSurvey({
      userID,
      postSurvey,
      year,
    });
    if (!respostSurvey) {
      throw new Error("Post survey was not recorded");
    }
  } catch (error) {
    console.error(error);
  }
};

const getUsers = async (_req, _res) => {
  try {
    const users = await ImagineService.getUsers();
    return users;
  } catch (error) {
    console.log(error);
  }
};

const getGroup = async (req, _res) => {
  try {
    const { userID, year } = req.params;
    const group = await ImagineService.getGroup({ userID, year });
    return group;
  } catch (error) {
    console.log(error);
  }
};

const getTeammate = async (req, _res) => {
  try {
    const { year, userID } = req.params;
    const teammate = await ImagineService.getTeammate(userID, year);
    return teammate;
  } catch (error) {
    console.log(error);
  }
};

const getUserByID = async (req, _res) => {
  // const { userID, avatar, year } = req.body;
  try {
    const { userID, year } = req.params;
    const user = await ImagineService.getUserByID({
      userID,
      year,
    });
    return user;
  } catch (error) {
    console.log("Error retrieving user by ID: ", error);
  }
};

const readMoreCount = async (req, _res) => {
  const { userID, readMoreCount, year } = req.body;
  try {
    const result = await ImagineService.readMoreCount({
      userID,
      readMoreCount,
      year,
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

const readMoreTimeElapsed = async (req, _res) => {
  const { userID, readMoreTimeElapsed, year } = req.body;
  try {
    const result = await ImagineService.readMoreTimeElapsed({
      userID,
      readMoreTimeElapsed,
      year,
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

const readingSectionPagePosition = async (req, _res) => {
  const { userID, readingSectionPagePosition, year } = req.body;
  try {
    const result = await ImagineService.readingSectionPagePosition({
      userID,
      readingSectionPagePosition,
      year,
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

const postTeammateAvatar = async (req, _res) => {
  const { userID, teammateAvatar, year } = req.body;
  try {
    const avatarCreated = await ImagineService.postTeammateAvatar({
      userID,
      teammateAvatar,
      year,
    });
    if (!avatarCreated) {
      throw new Error("Post teammateAvatar was not recorded");
    }
  } catch (error) {
    console.error(error);
  }
};

const postOpponentAvatar = async (req, _res) => {
  const { userID, opponentAvatar, year } = req.body;
  try {
    const avatarCreated = await ImagineService.postOpponentAvatar({
      userID,
      opponentAvatar,
      year,
    });
    if (!avatarCreated) {
      throw new Error("Post opponentAvatar was not recorded");
    }
  } catch (error) {
    console.error(error);
  }
};

const postUserAvatar = async (req, _res) => {
  const { userID, avatar, year } = req.body;
  try {
    const avatarCreated = await ImagineService.postUserAvatar({
      userID,
      avatar,
      year,
    });
    if (!avatarCreated) {
      throw new Error("Post avatar was not recorded");
    }
  } catch (error) {
    console.error(error);
  }
};

const handleImageUploads = async (req, _res) => {
  try {
    const response = await ImagineService.handleImageUploads(req);
    if (!response) {
      throw new Error("Error while generating deepfake");
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getImagePath = async (req, _res) => {
  try {
    const { year, userID, pictureType } = req.params;
    const imagePath = await ImagineService.getImagePath({
      userID,
      year,
      pictureType,
    });
    if (!imagePath) {
      throw new Error("Error while fetching deepfake image path");
    }
    return imagePath;
  } catch (error) {
    console.log(error);
  }
};

const postChatReply = async(req,_res) =>{
  try {
     const {userID,reply} = req.body;
     const resp = await ImagineService.postChatReply({userID,reply})
    if(!resp){
      throw new Error("Error while posting chat reply")
    }
    return resp
  } catch (error) {
    console.log(error)
  }
 
}

module.exports = {
  readMoreCount,
  readMoreTimeElapsed,
  readingSectionPagePosition,
  getUsers,
  getUserByID,
  postSurvey,
  preSurvey,
  submitStudy,
  postUserAvatar,
  newID,
  postTeammateAvatar,
  postOpponentAvatar,
  getGroup,
  getTeammate,
  handleImageUploads,
  getImagePath,
  postChatReply
};
