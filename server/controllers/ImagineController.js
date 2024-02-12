const ImagineService = require('../services/ImagineService');

const submitStudy = async (req, res) => {
  try {
    const {userID, study} = req.body;
    const result = await ImagineService.submitStudy({userID, study});
    if (!result) {
      throw new Error('Instance of study was not recorded');
    }
  } catch (error) {
    console.error(error);
  }
};

const preSurvey = async (req, res) => {
  const {userID, preSurvey, section} = req.body;
  try {
    const resPreSurvey = await ImagineService.preSurvey({
      userID,
      preSurvey,
      section,
    });
    if (!resPreSurvey) {
      throw new Error('Pre survey was not recorded');
    }
  } catch (error) {
    console.error(error);
  };
};

const postSurvey = async (req, res) => {
  const {userID, postSurvey} = req.body;
  try {
    const respostSurvey = await ImagineService.postSurvey({
      userID,
      postSurvey,
    });
    if (!respostSurvey) {
      throw new Error('Post survey was not recorded');
    }
  } catch (error) {
    console.error(error);
  };
};

const getUsers = async (req, res) => {
  try {
    const users = await ImagineService.getUsers();
    return users;
  } catch (error) {
    console.log(error);
  }
};

const getUserByID = async (req, res) => {
  try {
    const {userID} = req.params;
    const user = await ImagineService.getUserByID(userID);
    return user;
  } catch (error) {
    console.log(error);
  }
};


const readMoreCount = async (req, res) =>{
  const {userID, readMoreCount} = req.body;
  try {
    const result = await ImagineService.readMoreCount({
      userID,
      readMoreCount,
    });
    return result;
  } catch (error) {
    console.error(error);
  };
};


const readMoreTimeElapsed = async (req, res) =>{
  const {userID, readMoreTimeElapsed} = req.body;
  try {
    const result = await ImagineService.readMoreTimeElapsed({
      userID,
      readMoreTimeElapsed,
    });
    return result;
  } catch (error) {
    console.error(error);
  };
};

const readingSectionPagePosition = async (req, res) =>{
  const {userID, readingSectionPagePosition} = req.body;
  try {
    const result = await
    ImagineService.readingSectionPagePosition({
      userID,
      readingSectionPagePosition,
    });
    return result;
  } catch (error) {
    console.error(error);
  };
};

module.exports = {
  readMoreCount,
  readMoreTimeElapsed,
  readingSectionPagePosition,
  getUsers,
  getUserByID,
  postSurvey,
  preSurvey,
  submitStudy,
};
