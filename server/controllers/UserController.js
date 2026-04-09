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

const authenticateCallback = async (req, res) => {
  try {
    const data = await UserService.authenticate(req.user.profile);

    if (data) {
      await UserService.updateGuestUserId(data.userid, req.session.token);
      req.session.token = data.usersessionid;
      res.redirect(req.session.url || '/');
    } else {
      // Handle case where authentication failed
      res.redirect('/login?error=auth_failed');
    }
  } catch (error) {
    console.error('Error while executing authenticateCallback', error);
    // Send user to error page with more specific error message
    res.redirect(`/login?error=${encodeURIComponent(error.message)}`);
  }
};

const developmentLogin = async (req, res) => {
  try {
    await UserService.updateGuestUserId(req.params.userID, 1);
    const user = await UserService.getUser(req.params.userID);
    req.session.token = 1;
    req.session.userID = user.userid;
    req.session.save();
    res.json(user);
  } catch (e) {
    console.error('Development Login failed! ', e);
  }
};

const storeURL = (req, res) => {
  req.session.url = req.body.url.href;
  res.sendStatus(200);
};

// Logging out will clear sessions
const logout = (req, res, next) => {
   
  const redirect = process.env.ENVIRONMENT === 'dev' ? process.env.CLIENT_URL + '/' : req.session.url;
  req.logout({keepSessionInfo: true}, (error) => {
    if (error) next(error);
    req.session.token = null;
    req.session.userID = null;
    res.redirect(redirect);
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
  developmentLogin,
};
