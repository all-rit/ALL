let express = require('express');
let router = express.Router();

// Universal Controllers
let UserController = require('../controllers/UserController');
let UserLabController = require ('../controllers/UserLabController');
let PageController = require('../controllers/PageController');
let GroupController = require('../controllers/GroupController');

//LAB1 Controllers
let ExerciseControllerLab1 = require('../controllers/lab1/ExerciseController');
let RepairControllerLab1 = require('../controllers/lab1/RepairController');

//LAB2 Controller
let RepairControllerLab2 = require('../controllers/lab2/RepairController');

//LAB3 Controller
let RepairControllerLab3 = require('../controllers/lab3/RepairController');

//LAB4 Controller
let RepairControllerLab4 = require('../controllers/lab4/RepairController');
//LAB5 Controller 
let RepairControllerLab5 = require('../controllers/lab5/RepairController');
let ExerciseControllerLab5 = require('../controllers/lab5/ExerciseController');

//Lab Controller
let LabController = require("../controllers/LabController");

//Team Members Controller
let TeamMemberController = require("../controllers/TeamMemberController");

// User Routes
router.post('/url', UserController.storeURL)
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
router.post('/group/create', GroupController.createGroup)
router.post('/group/:groupID/add', GroupController.addGroupLab)
router.put('/group/:groupID/update', GroupController.updateGroup)
router.delete('/group/:groupID/:labID/delete', GroupController.deleteGroupLab)
router.delete('/group/:groupID/delete', GroupController.deleteGroup)
router.get('/group/:groupID/labs', GroupController.getGroupLabs);
router.get('/group/:groupID/labs/:userID/completed',GroupController.getCompletedGroupLabs)
router.get('/group/:groupID/enrolled', GroupController.getGroupEnrolledStudents);

//user Lab Routes for lab progress and quiz
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
router.post('/lab5/exercise/choice', ExerciseControllerLab5.submitChoice)
// Code Editor Routes
router.post('/lab1/repair/submit', RepairControllerLab1.submitChange);
router.post('/lab2/repair/submit', RepairControllerLab2.submitChange);
router.post('/lab3/repair/submit', RepairControllerLab3.submitChange);
router.post('/lab4/repair/submit/button', RepairControllerLab4.submitChangeButton);
router.post('/lab4/repair/submit/skip', RepairControllerLab4.submitChangeSkip);
router.post('/lab4/repair/submit/hint', RepairControllerLab4.submitChangeHint);
router.post('/lab5/repair/submit', RepairControllerLab5.submitChange);
//Create a Page Entry
router.post('/page/complete', PageController.createPage);
//Labs
router.get('/lab', LabController.getAllLabs);
//Team
router.get('/teammember', TeamMemberController.getAllTeamMembers)
router.get('/professors', TeamMemberController.getAllProfessors)

module.exports = router;
