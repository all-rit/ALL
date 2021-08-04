const db = require('../database');

exports.completeAbout= (data)=>{
    const usersessionid = data.usersessionid;
    const labid = data.labid;
    const datetime = data.date
    if(usersessionid){
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
    }
    return Promise.resolve();
};
exports.completeReading= (data)=>{
    const usersessionid = data.usersessionid;
    const labid = data.labid;
    const datetime = data.date
    if (usersessionid){
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
    }
    return Promise.resolve();

};
exports.completeExercise = (data)=> {
    const usersessionid = data.usersessionid;
    const labid = data.labid;
    const datetime = data.date
    if(usersessionid){
        return db.UserLab
            .findOne({
                    where:
                        {
                            usersessionid: usersessionid,
                            labid: labid
                        }
                }
            ).then((userlab) => {
                if (userlab !== null) {
                    userlab.exercisecompletedtime = datetime;
                    userlab.save();
                } else {
                    db.UserLab.create({
                        usersessionid: usersessionid,
                        labid: labid,
                        exercisecompletedtime: datetime,
                    });
                }
                return true;
            }).catch((err) => {
                console.log(err);
                return true;
            });
    }
    return Promise.resolve();

};
exports.completeReinforcement= (data)=>{
    const usersessionid = data.usersessionid;
    const labid = data.labid;
    const datetime = data.date
    if(usersessionid){
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
                    userlab.reinforcementcompletedtime = datetime;
                    userlab.save();
                }
                else{
                    db.UserLab.create({
                        usersessionid:usersessionid,
                        labid:labid,
                        reinforcementcompletedtime: datetime,
                    });
                }
                return true;
            }).catch((err) => {
                console.log(err);
                return true;
            });
    }
    return Promise.resolve();

};
exports.completeQuiz= (data)=>{
    const usersessionid = data.usersessionid;
    const labid = data.labid;
    const datetime = data.date;
    const quizscore = data.quizscore;
    const quizresult = data.quizresult;
    if(usersessionid){
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
    }
    return Promise.resolve();

};

exports.userCompleteAbout= (data)=>{
    const userid = data.userid;
    const labid = data.labid;
    const datetime = data.date
    if(userid){
        return db.UserLabCompletion
            .findOne({
                    where:
                        {
                            userid:userid,
                            labid:labid
                        }
                }
            ).then((userlabcompletion)=> {
                console.log(userlabcompletion + ".......")
                if(userlabcompletion !== null) {
                    if (userlabcompletion.aboutcompletedtime === null){
                        userlabcompletion.aboutcompletedtime = datetime;
                        userlabcompletion.save();
                    }
                }
                else{
                    db.UserLabCompletion.create({
                        userid:userid,
                        labid:labid,
                        aboutcompletedtime: datetime,
                        labstarttime: datetime,
                    });
                }
                return true;
            }).catch((err) => {
                console.log(err);
                return true;
            });
    }
    return Promise.resolve();
};
exports.userCompleteReading= (data)=>{
    const userid = data.userid;
    const labid = data.labid;
    const datetime = data.date
    if (userid){
        return db.UserLabCompletion
            .findOne({
                    where:
                        {
                            userid:userid,
                            labid:labid
                        }
                }
            ).then((userlabcompletion)=> {
                if(userlabcompletion !== null) {
                    if (userlabcompletion.readingcompletedtime === null){
                        userlabcompletion.readingcompletedtime = datetime;
                        userlabcompletion.save();
                    }
                }
                else{
                    db.UserLabCompletion.create({
                        userid:userid,
                        labid:labid,
                        readingcompletedtime: datetime,
                        labstarttime: datetime,
                    });
                }
                return true;
            }).catch((err) => {
                console.log(err);
                return true;
            });
    }
    return Promise.resolve();

};
exports.userCompleteExercise = (data)=> {
    const userid = data.userid;
    const labid = data.labid;
    const datetime = data.date
    if(userid){
        return db.UserLabCompletion
            .findOne({
                    where:
                        {
                            userid: userid,
                            labid: labid
                        }
                }
            ).then((userlabcompletion) => {
                if (userlabcompletion !== null) {
                    if (userlabcompletion.exercisecompletedtime === null){
                        userlabcompletion.exercisecompletedtime = datetime;
                        userlabcompletion.save();
                    }
                } else {
                    db.UserLabCompletion.create({
                        userid: userid,
                        labid: labid,
                        exercisecompletedtime: datetime,
                        labstarttime: datetime,
                    });
                }
                return true;
            }).catch((err) => {
                console.log(err);
                return true;
            });
    }
    return Promise.resolve();

};
exports.userCompleteReinforcement= (data)=>{
    const userid = data.userid;
    const labid = data.labid;
    const datetime = data.date
    if(userid){
        return db.UserLabCompletion
            .findOne({
                    where:
                        {
                            userid:userid,
                            labid:labid
                        }
                }
            ).then((userlabcompletion)=> {
                if(userlabcompletion !== null) {
                    if (userlabcompletion.reinforcementcompletedtime === null){
                        userlabcompletion.reinforcementcompletedtime = datetime;
                        userlabcompletion.save();
                    }
                }
                else{
                    db.UserLabCompletion.create({
                        userid:userid,
                        labid:labid,
                        reinforcementcompletedtime: datetime,
                        labstarttime: datetime,
                    });
                }
                return true;
            }).catch((err) => {
                console.log(err);
                return true;
            });
    }
    return Promise.resolve();

};
exports.userCompleteQuiz= (data)=>{
    const userid = data.userid;
    const labid = data.labid;
    const datetime = data.date;
    const quizscore = data.quizscore;
    if(userid){
        return db.UserLabCompletion
            .findOne({
                    where:
                        {
                            userid:userid,
                            labid:labid
                        }
                }
            ).then((userlabcompletion)=> {
                if(userlabcompletion !== null){
                    if (userlabcompletion.quizscore <= quizscore){
                        userlabcompletion.quizcompletedtime = datetime;
                        userlabcompletion.quizscore = quizscore;
                        userlabcompletion.save();
                    }
                }
                else{
                    db.UserLabCompletion.create({
                        userid:userid,
                        labid:labid,
                        quizcompletedtime: datetime,
                        quizscore: quizscore,
                        labstarttime: datetime,
                    });
                }
                return true;
            }).catch((err) => {
                console.log(err);
                return true;
            });
    }
    return Promise.resolve();
};


exports.getUserLabCompletion = (userid,labid) => {
	if(userid){
		return db.UserLabCompletion
			.findOne({
				where:
					{
						userid:userid,
						labid:labid
					}
			}).then((userlabcompletion) => {
				return userlabcompletion;
			})
			.catch((err) => {
				console.log(err);
		})
	}
};

