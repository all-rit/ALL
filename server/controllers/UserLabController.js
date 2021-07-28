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

exports.completeExercise = (req, res) => {
    UserLabService.completeExercise({
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

exports.userCompleteAbout = (req, res) => {
    UserLabService.userCompleteAbout({
            labid: req.body.labid,
            userid: req.body.userid,
            date: Date.now()
        }).then(() => {
            res.sendStatus(200);
        })
};

exports.userCompleteReading = (req, res) => {
    UserLabService.userCompleteReading({
        labid: req.body.labid,
        userid: req.body.userid,
        date: Date.now()
    }).then(() => {
        res.sendStatus(200);
    })
};

exports.userCompleteExercise = (req, res) => {
    UserLabService.userCompleteExercise({
        labid: req.body.labid,
        userid: req.body.userid,
        date: Date.now()
    }).then(() => {
        res.sendStatus(200);
    })
};

exports.userCompleteReinforcement = (req, res) => {
    UserLabService.userCompleteReinforcement({
        labid: req.body.labid,
        userid: req.body.userid,
        date: Date.now()
    }).then(() => {
        res.sendStatus(200);
    })
};

exports.userCompleteQuiz = (req, res) => {
    UserLabService.userCompleteQuiz({
        labid: req.body.labid,
        userid: req.body.userid,
        date: Date.now(),
        quizscore: req.body.quizscore
    }).then(() => {
        res.sendStatus(200);
    })
};


