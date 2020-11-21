const db = require('../database');


exports.completeAbout= (data)=>{
    const usersessionid = data.usersessionid;
    const labid = data.labid;
    const datetime = data.date
    return db.UserLab
        .findOrCreate({
            where:
                {
                    usersessionid:usersessionid,
                    labid:labid
                }
            }
        ).then(([userlab, bool])=> {
                userlab.aboutcompletedtime = datetime;
                userlab.save();
                return true;

        })
};
exports.completeReading= (data)=>{
    const usersessionid = data.usersessionid;
    const labid = data.labid;
    const datetime = data.date
    return db.UserLab
        .findOrCreate({
                where:
                    {
                        usersessionid:usersessionid,
                        labid:labid
                    }
            }
        ).then(([userlab, bool])=> {
            userlab.completeReading = datetime;
            userlab.save();
            return true;

        })
};
exports.completeGame= (data)=>{
    const usersessionid = data.usersessionid;
    const labid = data.labid;
    const datetime = data.date
    return db.UserLab
        .findOrCreate({
                where:
                    {
                        usersessionid:usersessionid,
                        labid:labid
                    }
            }
        ).then(([userlab, bool])=> {
            userlab.completeGame = datetime;
            userlab.save();
            return true;

        })
};
exports.completeVideo= (data)=>{
    const usersessionid = data.usersessionid;
    const labid = data.labid;
    const datetime = data.date
    return db.UserLab
        .findOrCreate({
                where:
                    {
                        usersessionid:usersessionid,
                        labid:labid
                    }
            }
        ).then(([userlab, bool])=> {
            userlab.completeVideo = datetime;
            userlab.save();
            return true;

        })
};
exports.completeQuiz= (data)=>{
    const usersessionid = data.usersessionid;
    const labid = data.labid;
    const datetime = data.date;
    const quizscore = data.quizscore;
    const quizresults = data.quizresults;
    return db.UserLab
        .findOrCreate({
                where:
                    {
                        usersessionid:usersessionid,
                        labid:labid
                    }
            }
        ).then(([userlab, bool])=> {
            if (userlab.quizscore <= quizscore){
                userlab.quizcompletedtime = datetime;
                userlab.quizresults = quizresults;
                userlab.quizscore = quizscore;
                userlab.save();
                return true;
            }
        })
};