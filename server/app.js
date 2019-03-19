require('dotenv').config()

let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let session = require('express-session')
let passport = require('passport');
let auth = require('./auth');

let app = express();
let port = process.env.PORT || 5050;

let allowedOrigins = [process.env.CLIENT_URL, 'http://localhost:5050', 'http://all.rit.edu', 'http://krutziscool.com'];

app.use(passport.initialize());
app.use(passport.session());
auth(passport);

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  name: 'session',
  secret: process.env.KEY,
  resave: false,
  saveUninitialized: true
}));
app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    }

    return callback(null, false);
  },
  credentials: true
}));

app.use(require('./routes'));

app.listen(port, () => console.log(`Listening on port ${port}!`));