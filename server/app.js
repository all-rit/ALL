require('dotenv').config()

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const passport = require('passport');
const auth = require('./auth');
const fs = require('fs');
const https = require('https')
const http = require('http')

const app = express();
const port = process.env.PORT || 5005;

const allowedOrigins = [process.env.CLIENT_URL, 'https://localhost:5005','https://localhost:3000', 'https://all.rit.edu'];

app.use(express.urlencoded({
  extended: false
}));

app.use(express.json());

app.use(passport.initialize());
app.use(session({
  name: 'session',
  secret: process.env.KEY,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.session());
auth(passport);


app.use(cookieParser());

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

let server;

const private_key = '/etc/letsencrypt/live/all.rit.edu/privkey.pem';
const certificate = '/etc/letsencrypt/live/all.rit.edu/fullchain.pem';

// Only serve the API over HTTPS if the SSL files exist.
if (fs.existsSync(private_key, fs.R_OK) && fs.existsSync(certificate, fs.R_OK)) {
  const key = fs.readFileSync(private_key);
  const cert = fs.readFileSync(certificate);

  const options = {
    key: key,
    cert: cert
  }

  server = https.createServer(options, app);
} else { // If no SSL certs, create an HTTP server.
  server = http.createServer(app);
}


server.listen(port, () => console.log(`Listening on port ${port}!`));
