const { google } = require('googleapis');
const jwt = require('jsonwebtoken');

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_SECRET,
    process.env.GOOGLE_CALLBACK_URL,
);

const scopes = [
    'profile',
    'email'
];

const authMiddleware = async (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(400).json({ error: 'Token missing or malformed.' });
        return;
    }

    const token = authHeader.substring(7);

    try {
        const verifiedToken = jwt.verify(token, process.env.KEY, {
            algorithms: ['HS256'],
            issuer: 'all.rit.edu'
        });
        req.userId = verifiedToken.sub;
        next();
    } catch {
        res.status(401).json({ error: 'Unable to verify token.' });
        return;
    }
};

module.exports = {
    oauth2Client,
    scopes,
    authMiddleware
};

