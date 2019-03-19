let express = require('express');
let router = express.Router();

// Controller modules
let UserController = require('../controllers/UserController');
let GameController = require('../controllers/GameController');
let CodeEditorController = require('../controllers/CodeEditorController');

// User Routes
router.get('/auth/google', UserController.authenticate);
router.get('/auth/google/callback', UserController.authenticateRedirect, UserController.authenticateCallback);
router.get('/logout', UserController.logout);

// Game Routes
router.post('/game/start', GameController.startGame);
router.post('/game/round', GameController.insertRound);
router.post('/game/choice', GameController.insertChoice);

// Code Editor Routes
router.post('/codeeditor/submit', CodeEditorController.submitChanges);

// Default
router.get('/user', UserController.main);

module.exports = router;
