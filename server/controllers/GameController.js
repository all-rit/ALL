let Login = require('../models/login');
let Game = require('../models/game');
let Round = require('../models/round');
let Choice = require('../models/choice');

exports.startGame = (req, res) => {
  let sessionToken = req.session.token;
  let login = Login.forge({
      SessionID: sessionToken
    })
    .orderBy('LoginID', 'DESC')
    .fetch();

  login.then((login) => {
      Game.forge({
          LoginID: login.get('LoginID')
        })
        .save()
        .then((game) => {
          req.session.game = game.get('GameID');

          res.json({
            'success': true
          });
        })
        .catch((err) => {
          console.log(err);

          res.json({
            'success': false
          });
        });
    })
    .catch((err) => {
      console.log(err);

      res.json({
        'success': false
      });
    });
};

exports.insertRound = (req, res) => {
  let gameID = req.session.game;
  let soundOption = req.body.sound;

  let game = Game.forge({
      GameID: gameID
    })
    .fetch();

  game.then((game) => {
      Round.forge({
          GameID: game.get('GameID'),
          SoundOption: soundOption
        })
        .save()
        .then((round) => {
          req.session.round = round.get('RoundID');

          res.json({
            'success': true
          });
        })
        .catch((err) => {
          console.log(err);

          res.json({
            'success': false
          });
        });
    })
    .catch((err) => {
      console.log(err);

      res.json({
        'success': false
      });
    });
};

exports.insertChoice = (req, res) => {
  let gameID = req.session.game;
  let roundID = req.session.round;
  let score = req.body.score;
  let time = req.body.time;
  let hintUsed = req.body.hintUsed;
  let boxNumber = req.body.boxNumber;
  let correct = req.body.correct;

  let game = Game.forge({
      GameID: gameID
    })
    .fetch();

  let round = Round.forge({
      RoundID: roundID
    })
    .fetch();

  // Update game score & round hint used/time to complete
  if (correct) {
    game.then((game) => {
        game.set('Score', score);

        game.save();
      })
      .catch((err) => {
        console.log(err);
      });

    round.then((round) => {
        round.set('TimeToComplete', time);
        round.set('HintUsed', hintUsed);

        round.save();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Insert choice
  Choice.forge({
      RoundID: roundID,
      BoxNumber: boxNumber,
      Correct: correct
    })
    .save()
    .then(() => {
      res.json({
        'success': true
      });
    })
    .catch((err) => {
      console.log(err);

      res.json({
        'success': false
      });
    });
};
