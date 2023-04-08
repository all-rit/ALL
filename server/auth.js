const GoogleStrategy = require('passport-google-oidc');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(
      new GoogleStrategy(
          {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
          },
          (token, refreshToken, profile, done) => {
            return done(null, {
              profile: profile,
              token: token,
            });
          },
      ),
  );
};
