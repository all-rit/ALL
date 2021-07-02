const UserLabService = require('../services/UserLabService');

exports.completeAbout = (req, res) => {
    UserLabService.completeAbout({
            labid: req.body.labid,
            usersessionid: req.session.token,
            date: Date.now()
        }).then(() => {
            res.sendStatus(200);
        })
};

exports.completeReading = (req, res) => {
    UserLabService.completeReading({
        labid: req.body.labid,
        usersessionid: req.session.token,
        date: Date.now()
    }).then(() => {
        res.sendStatus(200);
    })
};

exports.completeGame = (req, res) => {
    UserLabService.completeGame({
        labid: req.body.labid,
        usersessionid: req.session.token,
        date: Date.now()
    }).then(() => {
        res.sendStatus(200);
    })
};

exports.completeReinforcement = (req, res) => {
    UserLabService.completeReinforcement({
        labid: req.body.labid,
        usersessionid: req.session.token,
        date: Date.now()
    }).then(() => {
        res.sendStatus(200);
    })
};

exports.completeQuiz = (req, res) => {
    UserLabService.completeQuiz({
        labid: req.body.labid,
        usersessionid: req.session.token,
        date: Date.now(),
        quizscore: req.body.quizscore,
        quizresult: req.body.quizresult
    }).then(() => {
        res.sendStatus(200);
    })
};


