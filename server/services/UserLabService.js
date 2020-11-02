const db = require('../database');


exports.startLab= (data)=>{
    const userId = data.userid;
    const labId = data.labid;
    return db.UserLab
        .findOrCreate({
            where:
                {
                    userid:userId,
                    labid:labId
                },
            defaults: {
                quizscore: 0,
                completed: false
            }
        })
};
exports.completeLab= (data)=>{
    const userId = data.userid;
    const labId = data.labid;
    return db.UserLab
        .findOne({
            where:
                {
                    userid:userId,
                    labid:labId
                }
        }).then((userlab)=> {
            if (userlab !== null){
               userlab.completed = true;
               userlab.save();
               return true;
            }
            return false;
        })
};
exports.quizScore= (data)=>{
    const userId = data.userid;
    const labId = data.labid;
    return db.UserLab
        .findOne({
            where:
                {
                    userid:userId,
                    labid:labId
                }
        }).then((userlab)=> {
            if (userlab !== null){
                userlab.quizscore = data.quizscore;
                userlab.save();
                return true;
            }
            return false;
        })
};
