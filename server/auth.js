const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_SECRET,
    process.env.GOOGLE_CALLBACK_URL,
);

const scopes = [
    'profile',
    'email'
];

module.exports = {
    oauth2Client,
    scopes
};

