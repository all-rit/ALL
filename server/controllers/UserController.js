let passport = require('passport');

let User = require('../models/user');
let Session = require('../models/session');
let Login = require('../models/login');

// Checks if it's a guest or user entering webpage
exports.main = (req, res) => {
  let token = req.session.token;

  // If it's a guest, create a new session for him
  if (!token) {
    let user = User.forge({
        FirstName: '',
        Nickname: '',
        Admin: false
      })
      .save(null, {
        method: 'insert'
      });
    let session = user.then((user) => {
      return Session.forge({
        UserID: user.get('UserID')
      }).save(null, {
        method: 'insert'
      });
    });

    session.then((session) => {
      Login.forge({
        UserID: session.get('UserID'),
        SessionID: session.get('SessionID'),
        Location: ''
      }).save(null, {
        method: 'insert'
      }).then((login) => {
        req.session.token = login.get('SessionID');

        user.then((user) => {
          res.json(user);
        });
      });
    });
  } else {
    let session = Session.forge({
        SessionID: token
      })
      .fetch();

    let user = session.then((session) => {
      return User.forge({
        UserID: session.get('UserID')
      }).fetch();
    });

    user.then((user) => {
      res.json(user);
    });
  }
};

// Authenticates User through Google OAuth
exports.authenticate = passport.authenticate('google', {
  scope: ['profile']
});

// Callback used for Google OAuth
exports.authenticateRedirect = passport.authenticate('google', {
  failureRedirect: '/'
});

exports.authenticateCallback = (req, res) => {
  let id = req.user.profile.id;
  let firstName = req.user.profile.name.givenName;

  let session = Session.where('SessionID', id).fetch();

  session.then((session) => {
    if (session) {
      Login.forge({
        UserID: session.get('UserID'),
        SessionID: id,
        Location: ''
      }).save(null, {
        method: 'insert'
      });
    } else {
      let user = User.forge({
          FirstName: firstName,
          Nickname: '',
          Admin: false
        })
        .save(null, {
          method: 'insert'
        });
      let session = user.then((user) => {
        return Session.forge({
          SessionID: id,
          UserID: user.get('UserID')
        }).save(null, {
          method: 'insert'
        });
      });

      session.then((session) => {
        Login.forge({
          UserID: session.get('UserID'),
          SessionID: id,
          Location: ''
        }).save(null, {
          method: 'insert'
        });
      });
    }
  });

  req.session.token = id;
  res.redirect(process.env.CLIENT_URL);
};

// Logging out will clear sessions
exports.logout = (req, res) => {
  req.logout();
  req.session.token = null;
  res.redirect(process.env.CLIENT_URL);
};
