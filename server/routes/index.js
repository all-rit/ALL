let express = require('express');
let router = express.Router();

// Universal Controllers
let UserController = require('../controllers/UserController');
let UserLabController = require ('../controllers/UserLabController');
let PageController = require('../controllers/PageController');

//LAB1 Controllers
let GameControllerLab1 = require('../controllers/lab1/GameController');
let RepairControllerLab1 = require('../controllers/lab1/RepairController');

//LAB2 Controller

//LAB3 Controller
let RepairControllerLab3 = require('../controllers/lab3/RepairController');

//LAB5 Controller
let RepairControllerLab5 = require('../controllers/lab5/RepairController');
let GameControllerLab5 = require('../controllers/lab5/GameController');


// User Routes
router.post('/url', UserController.storeURL)
router.get('/auth/google', UserController.authenticate);
router.get('/auth/google/callback', UserController.authenticateRedirect, UserController.authenticateCallback);
router.get('/logout', UserController.logout);
router.get('/user', UserController.main);

//user Lab Routes for lab progress and quiz
router.post('/completeAbout', UserLabController.completeAbout);
router.post('/completeReading', UserLabController.completeReading);
router.post('/completeGame', UserLabController.completeGame);
router.post('/completeVideo', UserLabController.completeVideo);
router.post('/completeQuiz', UserLabController.completeQuiz);

// Game Routes
router.post('/lab1/game/start', GameControllerLab1.createGame);
router.post('/lab1/game/round', GameControllerLab1.createRound);
router.post('/lab1/game/choice', GameControllerLab1.createChoice);
router.post('/lab5/game/choice', GameControllerLab5.submitChoice)
// Code Editor Routes
router.post('/lab1/repair/submit', RepairControllerLab1.submitChange);
router.post('/lab3/repair/submit', RepairControllerLab3.submitChange);
router.post('/lab5/repair/submit', RepairControllerLab5.submitChange);
//Create a Page Entry
router.post('/page/complete', PageController.createPage);

module.exports = router;
