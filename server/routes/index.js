/* eslint-disable new-cap */
/* eslint-disable max-len */
const express = require('express');
const router = express.Router();

// Universal Controllers
const UserController = require('../controllers/UserController');
const UserLabController = require('../controllers/UserLabController');
const PageController = require('../controllers/PageController');
const GroupController = require('../controllers/GroupController');

// LAB1 Controllers
const ExerciseControllerLab1 = require('../controllers/lab1/ExerciseController');
const RepairControllerLab1 = require('../controllers/lab1/RepairController');

// LAB2 Controller
const RepairControllerLab2 = require('../controllers/lab2/RepairController');

// LAB3 Controller
const RepairControllerLab3 = require('../controllers/lab3/RepairController');

// LAB4 Controller
const RepairControllerLab4 = require('../controllers/lab4/RepairController');

// LAB5 Controller
const RepairControllerLab5 = require('../controllers/lab5/RepairController');
const ExerciseControllerLab5 = require('../controllers/lab5/ExerciseController');

// LAB6 Controller
const RepairControllerLab6 = require('../controllers/lab6/RepairController');
const ExerciseControllerLab6 = require('../controllers/lab6/ExerciseController');

// LAB7 Controller
const RepairControllerLab7 = require('../controllers/lab7/RepairController');
const ExerciseControllerLab7 = require('../controllers/lab7/ExerciseController');

// LAB 8 Controller
const ExerciseControllerLab8 = require('../controllers/lab8/ExerciseController');

// LAB 9 Controller
const ExerciseControllerLab9 = require('../controllers/lab9/ExerciseController');
// Lab 9 Controller
const RepairControllerLab9 = require('../controllers/lab9/RepairController');
// LAB10 Controller
const ExerciseControllerLab10 = require('../controllers/lab10/ExerciseController');

// Lab Controller
const LabController = require('../controllers/LabController');


// Team Members Controller
const TeamMemberController = require('../controllers/TeamMemberController');

// Imagien Controller
const ImagineController = require('../controllers/ImagineController');

// User Routes
router.post('/url', UserController.storeURL);
router.get('/auth/google', UserController.authenticate);
router.get('/auth/google/callback', UserController.authenticateRedirect, UserController.authenticateCallback);
router.get('/logout', UserController.logout);
router.get('/user', UserController.main);
router.get('/user/:userID', UserController.getUser);
router.get('/user/:userID/enrolled', UserController.getUserEnrolledGroups);
router.get('/user/:userID/groups', UserController.getUserInstructingGroups);
router.get('/user/:userID/assigned', UserController.getUserAssignedLabs);
router.get('/user/:userID/todo', UserController.getUserToDoLabs);
router.get('/user/:userID/labrecords', UserLabController.getUserLabRecords);
router.get('/user/:userID/:labID', UserLabController.getUserLabCompletion);

// Group Routes
router.post('/group/enroll', GroupController.enrollUserInGroup);
router.post('/group/unenroll', GroupController.unenrollUserFromGroup);
router.post('/group/create', GroupController.createGroup);
router.post('/group/:groupID/add', GroupController.addGroupLab);
router.put('/group/:groupID/update', GroupController.updateGroup);
router.put('/group/:groupID/:labID/delete', GroupController.deleteGroupLab);
router.put('/group/:groupID/delete', GroupController.deleteGroup);
router.get('/group/:groupID/labs', GroupController.getGroupLabs);
router.get('/group/:groupID/labs/:userID/completed', GroupController.getCompletedGroupLabs);
router.get('/group/:groupID/enrolled', GroupController.getGroupEnrolledStudents);

// user Lab Routes for lab progress and quiz
router.post('/completeAbout', UserLabController.completeAbout);
router.post('/completeReading', UserLabController.completeReading);
router.post('/completeExercise', UserLabController.completeExercise);
router.post('/completeReinforcement', UserLabController.completeReinforcement);
router.post('/completeQuiz', UserLabController.completeQuiz);

router.post('/:userID/completeAbout', UserLabController.userCompleteAbout);
router.post('/:userID/completeReading', UserLabController.userCompleteReading);
router.post('/:userID/completeExercise', UserLabController.userCompleteExercise);
router.post('/:userID/completeReinforcement', UserLabController.userCompleteReinforcement);
router.post('/:userID/completeQuiz', UserLabController.userCompleteQuiz);

// Exercise Routes
router.post('/lab1/exercise/start', ExerciseControllerLab1.createExercise);
router.post('/lab1/exercise/round', ExerciseControllerLab1.createRound);
router.post('/lab1/exercise/choice', ExerciseControllerLab1.createChoice);
router.post('/lab1/exercise/end', ExerciseControllerLab1.updateEndExerciseScore);
router.post('/lab5/exercise/choice', ExerciseControllerLab5.submitChoice);
router.post('/lab6/exercise/avatar', ExerciseControllerLab6.submitAvatar);
router.post('/lab6/exercise/qualquestions', ExerciseControllerLab6.submitQualQuestions);
router.post('/lab6/exercise/aianalysisquestion', ExerciseControllerLab6.submitAIanalysisQuestion);
router.post('/lab6/exercise/hiredcanidates', ExerciseControllerLab6.submitHiredCanidates);
router.post('/lab6/exercise/aireasoningquestion', ExerciseControllerLab6.submitAIReasoningQuestion);
router.post('/lab6/exercise/fixedhiredcanidates', ExerciseControllerLab6.submitFixedHiredCanidates);
router.post('/lab7/exercise/report', ExerciseControllerLab7.submitRepair);
router.get('/lab10/exercise/weights/:userID', ExerciseControllerLab10.retrieveWeights);
router.post('/lab10/exercise/weights', ExerciseControllerLab10.updateWeights);

// Code Editor Routes
router.post('/lab1/repair/submit', RepairControllerLab1.submitChange);
router.post('/lab2/repair/submit', RepairControllerLab2.submitChange);
router.post('/lab3/repair/submit', RepairControllerLab3.submitChange);
router.post('/lab4/repair/submit/button', RepairControllerLab4.submitChangeButton);
router.post('/lab4/repair/submit/skip', RepairControllerLab4.submitChangeSkip);
router.post('/lab4/repair/submit/hint', RepairControllerLab4.submitChangeHint);
router.post('/lab5/repair/submit', RepairControllerLab5.submitChange);
router.post('/lab6/repair/submit', RepairControllerLab6.submitChange);
router.get('/lab6/repair/:userID', RepairControllerLab6.getUserChange);
router.post('/lab7/repair/submit', RepairControllerLab7.submitChange);
router.post('/lab7/repair/update', RepairControllerLab7.updateReport);
router.get('/lab8/exercise/:userID', async function(req, res) {
  res.json(await ExerciseControllerLab8.getRepair(req, true));
});
router.post('/lab8/exercise/submit', async function(req, res) {
  const id = await ExerciseControllerLab8.submitChange(req);
  res.send(id);
});
router.get('/lab9/exercise/:userID', async function(req, res) {
  res.json(await ExerciseControllerLab9.getExercise(req, true));
});
router.post('/lab9/exercise/submit', async function(req, res) {
  const id = await ExerciseControllerLab9.postExercise(req);
  res.send(id);
});

router.get('/lab9/repair/:userID/:section', async function(req, res) {
  res.json(await RepairControllerLab9.getRepair(req));
});
router.post('/lab9/repair/submit', async function(req, res) {
  const id = await RepairControllerLab9.submitChange(req);
  res.send(id);
});
// Create a Page Entry
router.post('/page/complete', PageController.createPage);

// Labs
router.get('/lab', LabController.getAllLabs);
router.get('/lab:labID/shortname', LabController.getLabShortName);
router.get('/lab:labID/about', LabController.getLabAbout);
router.get('/lab:labID/reading', LabController.getLabReading);
router.get('/lab:labID/reinforcement', LabController.getLabReinforcement);
router.get('/lab:labID/quiz', LabController.getLabQuiz);

// Team
router.get('/teammember', TeamMemberController.getAllTeamMembers);
router.get('/professors', TeamMemberController.getAllProfessors);
router.get('/alumni', TeamMemberController.getAllAlumni);

// Imagine
router.post('/imagine/discomfortCount', ImagineController.discomfortCount);
router.post('/imagine/experientialMain', ImagineController.experientialMain);
router.post('/imagine/experientialProtanopia', ImagineController.experientialProtanopia);

module.exports = router;
