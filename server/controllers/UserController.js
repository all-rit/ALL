const passport = require('passport');
const UserService = require('../services/UserService');

// Checks if it's a guest or user entering webpage
const main = (req, res) => {
  UserService.getSession(req.session.token).then((data) => {
    req.session.token = data.token;
    res.json(data.user);
  });
};

const getUser = (req, res) => {
  UserService.getUser(req.params.userID).then((records) => {
    res.json(records);
  });
};

const getUserToDoLabs = (req, res) => {
  UserService.getUserToDoLabs(req.params.userID).then((records) => {
    res.json(records);
  });
};
const getUserAssignedLabs = (req, res) => {
  UserService.getUserAssignedLabs(req.params.userID).then((records) => {
    res.json(records);
  });
};

const getUserEnrolledGroups = (req, res) => {
  UserService.getUserEnrolledGroups(req.params.userID).then((records) => {
    res.json(records);
  });
};

const getUserInstructingGroups = (req, res) => {
  UserService.getUserInstructingGroups(req.params.userID).then((records) => {
    res.json(records);
  });
};

// Authenticates User through Google OAuth
const authenticate = passport.authenticate('google', {
  scope: ['email', 'profile'],
});

// Callback used for Google OAuth
const authenticateRedirect = passport.authenticate('google', {
  keepSessionInfo: true,
  failureRedirect: '/',
});

const authenticateCallback = (req, res) => {
  const mockData = {
    id: Math.random(),
    name: {
      givenName: 'mock',
      familyName: 'name',
    },
    emails: [`${Math.random().toString().slice(2, 5)}@gmail.com`],
  };
  if (process.env.NODE_ENV === 'development') {
    UserService.authenticate(mockData).then((data) => {
      console.warn(data);
      UserService.updateGuestUserId(data.userid, req.session.token).then(() => {
        req.session.token = data.usersessionid;
        res.redirect(req.session.url);
      },
      );
    });
  }

  UserService.authenticate(req.user.profile).then((data) => {
    UserService.updateGuestUserId(data.userid, req.session.token).then(()=> {
      req.session.token = data.usersessionid;
      res.redirect(req.session.url);
    },
    );
  });
};

const storeURL = (req, res) => {
  req.session.url = req.body.url.href;
  res.sendStatus(200);
};

// Logging out will clear sessions
const logout = (req, res, next) => {
  req.logout({keepSessionInfo: true}, (error) => {
    if (error) next(error);
    req.session.token = null;
    res.redirect(req.session.url);
  });
};

module.exports = {
  main,
  storeURL,
  getUser,
  logout,
  authenticate,
  authenticateRedirect,
  authenticateCallback,
  getUserEnrolledGroups,
  getUserInstructingGroups,
  getUserAssignedLabs,
  getUserToDoLabs,
};
