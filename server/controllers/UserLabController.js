const UserLabService = require('../services/UserLabService');
const UserService = require('../services/UserService');

exports.startLab = (req, res) => {
    UserService.getSession(req.session.token).then((data) => {
        return data.user.userid;
    }).then((userid) =>
        UserLabService.startLab({
            labid: req.body.labid,
            userid: userid
        }).then(() => {
            res.sendStatus(200);
        })
    )
};

exports.completeLab = (req, res) => {
    UserService.getSession(req.session.token).then((data) => {
        return data.user.userid;
    }).then((userid) =>
        UserLabService.completeLab({
            labid: req.body.labid,
            userid: userid
        }).then(() => {
            res.sendStatus(200);
        })
    )
};

exports.quizScore = (req, res) => {
    UserService.getSession(req.session.token).then((data) => {
        return data.user.userid;
    }).then((userid) =>
        UserLabService.quizScore({
            labid: req.body.labid,
            userid: userid,
            quizscore: req.body.quizscore
        }).then(() => {
            res.sendStatus(200);
        })
    )
};
