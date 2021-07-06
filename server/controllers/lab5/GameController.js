const ExerciseService = require('../../services/lab5/ExerciseService');

exports.submitChoice = (req, res) => {
    ExerciseService.submitChoice({
        usersessionid: req.session.token,
        question: req.body.question,
        correct: req.body.correct,
        options: req.body.options,
        selectedoption: req.body.selectedoption,
    }).then((id) => {
        req.session.exercise = id;
        res.sendStatus(200);
    });
};
