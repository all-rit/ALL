const GameService = require('../../services/lab5/GameService');

exports.submitChoice = (req, res) => {
    GameService.submitChoice({
        usersessionid: req.session.token,
        question: req.body.question,
        correct: req.body.correct,
    }).then((id) => {
        req.session.game = id;
        res.sendStatus(200);
    });
};
