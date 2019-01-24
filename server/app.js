require('dotenv').config()

let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let session = require('express-session')
let passport = require('passport');
let auth = require('./auth');

let app = express();
let port = process.env.PORT || 5000;

let allowedOrigins = ['http://localhost:5000'];

app.use(passport.initialize());
app.use(passport.session());
auth(passport);

app.use(cors({
  origins: function (origin, callback) {
    if (!origin)
      return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(null, false);
    }

    return callback(null, true);
  }
}));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  name: 'session',
  secret: process.env.KEY,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: false,
    secure: false
  }
}));

app.use(require('./routes'));

app.listen(port, () => console.log(`Listening on port ${port}!`));