const db = require('../database');
const Imagine = require('../database/models/Imagine');

exports.userAvatar = (data)=> {
    const userID = data.userID;
    const avatar = data.avatar;
    if(userID){
        return db.Imagine
            .findOne({
                    where:
                        {
                            userid: userID,
                        }
                }
            ).then((user) => {
                if (user !== null) {
                    user.avatar = avatar;
                    user.save();
                } else {
                    db.Imagine.create({
                        userid: userID,
                        avatar: avatar,
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

exports.userSquad = (data)=> {
    const userID = data.userID;
    const squad = data.squad;
    if(userID){
        return db.Imagine
            .findOne({
                    where:
                        {
                            userid: userID,
                        }
                }
            ).then((user) => {
                if (user !== null) {
                    user.squad = squad;
                    user.save();
                } else {
                    db.Imagine.create({
                        userid: userID,
                        squad: squad,
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


exports.userLobbyMessages = (data)=> {
    const userID = data.userID;
    const lobbyMessages = data.lobbyMessages;
    if(userID){
        return db.Imagine
            .findOne({
                    where:
                        {
                            userid: userID,
                        }
                }
            ).then((user) => {
                if (user !== null) {
                    user.lobbyMessages = lobbyMessages;
                    user.save();
                } else {
                    db.Imagine.create({
                        userid: userID,
                        lobbyMessages: lobbyMessages,
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