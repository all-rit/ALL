let express = require('express');
let router = express.Router();

// Universal Controllers
let UserController = require('../controllers/UserController');
let UserLabController = require ('../controllers/UserLabController');
let PageController = require('../controllers/PageController');

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


// User Routes
router.post('/url', UserController.storeURL)
router.get('/auth/google', UserController.authenticate);
router.get('/auth/google/callback', UserController.authenticateRedirect, UserController.authenticateCallback);
router.get('/logout', UserController.logout);
router.get('/user', UserController.main);

//user Lab Routes for lab progress and quiz
router.post('/completeAbout', UserLabController.completeAbout);
router.post('/completeReading', UserLabController.completeReading);
router.post('/completeExercise', UserLabController.completeExercise);
router.post('/completeReinforcement', UserLabController.completeReinforcement);
router.post('/completeQuiz', UserLabController.completeQuiz);

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

module.exports = router;
