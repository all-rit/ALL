const ImagineService = require('../services/ImagineService');

const submitStudy = async (req, res) => {
  try {
    const {userID, section, study} = req.body;
    const result = await ImagineService.submitStudy({userID, section, study});
    if (!result) {
      throw new Error('Instance of study was not recorded');
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const preSurvey = async (req, res) => {
  const {userID, preSurvey} = req.body;
  try {
    const resPreSurvey = await ImagineService.preSurvey({
      userID,
      preSurvey,
    });
    if (!resPreSurvey) {
      throw new Error('Pre survey was not recorded');
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
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
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  };
};

const getUsers = async (req, res) => {
  try {
    const users = ImagineService.getUsers();
    res.sendStatus(200);
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};


const readMoreCount = async (req, res) =>{
  const {userID, readMoreCount} = req.body;
  try {
    const resReadMoreCount = await ImagineService.readMoreCount({
      userID,
      readMoreCount,
    });
    if (!resReadMoreCount) {
      throw new Error('Read more count was not recorded');
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  };
};


const readMoreTimeElapsed = async (req, res) =>{
  const {userID, readMoreTimeElapsed} = req.body;
  try {
    const resReadMoreTimeElapsed = await ImagineService.readMoreTimeElapsed({
      userID,
      readMoreTimeElapsed,
    });
    if (!resReadMoreTimeElapsed) {
      throw new Error('Time elapsed was not recorded');
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  };
};

const readingSectionPagePosition = async (req, res) =>{
  const {userID, readingSectionPagePosition} = req.body;
  try {
    const resReadingSectionPagePosition = await
    ImagineService.readingSectionPagePosition({
      userID,
      readingSectionPagePosition,
    });
    if (!resReadingSectionPagePosition) {
      throw new Error('Reading Section position was not recorded');
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  };
};

module.exports = {
  readMoreCount,
  readMoreTimeElapsed,
  readingSectionPagePosition,
  getUsers,
  postSurvey,
  preSurvey,
  submitStudy,
};
