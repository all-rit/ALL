let express = require('express');
let router = express.Router();

// Controller modules
let UserController = require('../controllers/UserController');
let GameController = require('../controllers/lab1/GameController');
let RepairController = require('../controllers/lab1/RepairController');
let UserLabController = require ('../controllers/UserLabController');
// User Routes
router.get('/auth/google', UserController.authenticate);
router.get('/auth/google/callback', UserController.authenticateRedirect, UserController.authenticateCallback);
router.get('/logout', UserController.logout);

// Game Routes
router.post('/game/start', GameController.createGame);
router.post('/game/round', GameController.createRound);
router.post('/game/choice', GameController.createChoice);

// Code Editor Routes
router.post('/repair/submit', RepairController.submitChange);

// Default
router.get('/user', UserController.main);

//user Lab Routes for lab progress and quiz
router.post('/completeAbout', UserLabController.completeAbout);
router.post('/completeReading', UserLabController.completeReading);
router.post('/completeGame', UserLabController.completeGame);
router.post('/completeVideo', UserLabController.completeVideo);

router.post('/completeQuiz', UserLabController.completeQuiz);


module.exports = router;
