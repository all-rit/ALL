const LabService = require('../services/LabService');

/**
 * getAllLabsController(): Gets all labs and their information.
 * @param {Object} req request object containing payload.
 * @param {Object} res response object. containing information to client
 */
async function getAllLabsController(req, res) {
  try {
    const labs = await LabService.getAllLabs();
    return await res.send(JSON.stringify(labs));
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Error: Could Not Find Labs'});
  }
}
/**
 * getLabShortNameController(): Gets the short name of a lab.
 * @param {Object} req request object containing payload.
 * @param {Object} res response object. containing information to client
 */
async function getLabShortNameController(req, res) {
  try {
    const {labID} = req.params;
    const shortName = await LabService.getLabShortName(labID);
    return res.json(shortName);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Error: Could Not Find Short Name'});
  }
}
/**
 * getLabAboutController(): Gets the about section of a lab.
 * @param {Object} req request object containing payload.
 * @param {Object} res response object. containing information to client
 */
async function getLabAboutController(req, res) {
  try {
    const {labID} = req.params;
    const about = await LabService.getLabAbout(labID);
    return res.json(about);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Error: Could Not Find About'});
  }
}
/**
 * getLabReadingController(): Gets the reading section of a lab.
 * @param {Object} req request object containing payload.
 * @param {Object} res response object. containing information to client
 */
async function getLabReadingController(req, res) {
  try {
    const {labID} = req.params;
    const reading = await LabService.getLabReading(labID);
    return res.send(JSON.stringify(reading));
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Error: Could Not Find Reading'});
  }
}
/**
 * getLabReinforcementController(): Gets the reinforcement section of a lab.
 * @param {Object} req request object containing payload.
 * @param {Object} res response object. containing information to client
 */
async function getLabReinforcementController(req, res) {
  try {
    const {labID} = req.params;
    const reinforcement = await LabService.getLabReinforcement(labID);
    return res.send(JSON.stringify(reinforcement));
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Error: Could Not Find Reinforcement'});
  }
}
/**
 * getLabQuizController(): Gets the quiz section of a lab.
 * @param {Object} req request object containing payload.
 * @param {Object} res response object. containing information to client
 */
async function getLabQuizController(req, res) {
  try {
    const {labID} = req.params;
    const quiz = LabService.getLabQuiz(labID);
    return res.send(JSON.stringify(quiz));
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Error: Could Not Find Quiz'});
  }
}

module.exports = {
  getAllLabsController,
  getLabShortNameController,
  getLabAboutController,
  getLabReadingController,
  getLabReinforcementController,
  getLabQuizController,
};

