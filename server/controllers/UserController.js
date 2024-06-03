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

const mockAuthenticate = async (req, res) => {
  try {
    const data = await UserService.mockAuthenticate();
    if (data) {
      req.session.token = data.sessionID;
      await UserService.updateGuestUserId(data.user.userid, req.session.token);
      res.redirect(req.session.url || '/');
    } else {
      res.status(500).send('Mock authentication failed');
    }
  } catch (error) {
    console.error(
        'Error occurred in mockAuthenticate of UserController', error);
    res.status(500).send('Internal Server Error');
  }
};

const authenticateCallback = async (req, res) => {
  if (process.env.ENVIRONMENT === 'production') {
    try {
      const data = await UserService.authenticate(req.user.profile);
      req.session.token = data.usersessionid;
      await UserService.updateGuestUserId(data.userid, req.session.token);
      res.redirect(req.session.url);
    } catch (error) {
      console.error('Error while executing authenticateCallback', error);
      res.redirect('/');
    }
  }
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
  mockAuthenticate,
  authenticateRedirect,
  authenticateCallback,
  getUserEnrolledGroups,
  getUserInstructingGroups,
  getUserAssignedLabs,
  getUserToDoLabs,
};
