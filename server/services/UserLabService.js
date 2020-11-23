const db = require('../database');

exports.completeAbout= (data)=>{
    const usersessionid = data.usersessionid;
    const labid = data.labid;
    const datetime = data.date
    return db.UserLab
        .findOne({
                where:
                    {
                        usersessionid:usersessionid,
                        labid:labid
                    }
            }
        ).then((userlab)=> {
            if(userlab !== null) {
                userlab.aboutcompletedtime = datetime;
                userlab.save();
            }
            else{
                db.UserLab.create({
                    usersessionid:usersessionid,
                    labid:labid,
                    aboutcompletedtime: datetime,
                });
            }
            return true;
        }).catch((err) => {
            console.log(err);
            return true;
        });
};
exports.completeReading= (data)=>{
    const usersessionid = data.usersessionid;
    const labid = data.labid;
    const datetime = data.date
    return db.UserLab
        .findOne({
                where:
                    {
                        usersessionid:usersessionid,
                        labid:labid
                    }
            }
        ).then((userlab)=> {
            if(userlab !== null) {
                userlab.readingcompletedtime = datetime;
                userlab.save();
            }
            else{
                db.UserLab.create({
                    usersessionid:usersessionid,
                    labid:labid,
                    readingcompletedtime: datetime,
                });
            }
            return true;
        }).catch((err) => {
            console.log(err);
            return true;
        });
};
exports.completeGame= (data)=>{
    const usersessionid = data.usersessionid;
    const labid = data.labid;
    const datetime = data.date
    return db.UserLab
        .findOne({
                where:
                    {
                        usersessionid:usersessionid,
                        labid:labid
                    }
            }
        ).then((userlab)=> {
            if(userlab !== null) {
                userlab.gamecompletedtime = datetime;
                userlab.save();
            }
            else{
                db.UserLab.create({
                    usersessionid:usersessionid,
                    labid:labid,
                    gamecompletedtime: datetime,
                });
            }
            return true;
        }).catch((err) => {
            console.log(err);
            return true;
        });
};
exports.completeVideo= (data)=>{
    const usersessionid = data.usersessionid;
    const labid = data.labid;
    const datetime = data.date
    return db.UserLab
        .findOne({
                where:
                    {
                        usersessionid:usersessionid,
                        labid:labid
                    }
            }
        ).then((userlab)=> {
            if(userlab !== null) {
                userlab.videocompletedtime = datetime;
                userlab.save();
            }
            else{
                db.UserLab.create({
                    usersessionid:usersessionid,
                    labid:labid,
                    videocompletedtime: datetime,
                });
            }
            return true;
        }).catch((err) => {
            console.log(err);
            return true;
        });
};
exports.completeQuiz= (data)=>{
    const usersessionid = data.usersessionid;
    const labid = data.labid;
    const datetime = data.date;
    const quizscore = data.quizscore;
    const quizresult = data.quizresult;
    return db.UserLab
        .findOne({
                where:
                    {
                        usersessionid:usersessionid,
                        labid:labid
                    }
            }
        ).then((userlab)=> {
            if(userlab !== null){
                if (userlab.quizscore <= quizscore){
                    userlab.quizcompletedtime = datetime;
                    userlab.quizresult = quizresult;
                    userlab.quizscore = quizscore;
                    userlab.save();
                }
            }
            else{
                db.UserLab.create({
                    usersessionid:usersessionid,
                    labid:labid,
                    quizcompletedtime: datetime,
                    quizresult: quizresult,
                    quizscore: quizscore,
                });
            }
            return true;
        }).catch((err) => {
            console.log(err);
            return true;
        });
};