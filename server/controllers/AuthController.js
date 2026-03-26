const db = require('../database');
const crypto = require('crypto');
const { oauth2Client, scopes } = require('../auth');
const jwt = require('jsonwebtoken');

const google = (req, res) => {
    const state = crypto.randomBytes(32).toString('hex');
    req.session.state = state;
    
    const authorizationUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
        include_granted_scopes: true,
        state: state,
    });

    res.redirect(authorizationUrl)
};

const googleCallback = async (req, res) => {
    if(req.query.error) {
        res.status(400).json({ error: 'Error during Google consent screen authorization.' });
        return;
    }

    if(req.query.state !== req.session.state) {
        res.status(400).json({ error: 'Invalid state parameter. Aborting due to possible CSRF attack.' });
        return;
    }

    let ticket;
    try {
        let { tokens } = await oauth2Client.getToken(req.query.code);
    
        ticket = await oauth2Client.verifyIdToken({
            idToken: tokens.id_token,
            audience: oauth2Client._clientId,
        });
    } catch {
        res.status(500).json({ error: 'Failed to exchange provided code for Google token.' });
    }

    let user = await db.Users.findOne({ 
        where: { 
            googleAccountId: ticket.getUserId() 
        } 
    });

    if(!user) {
        user = await db.Users.create({
            googleAccountId: ticket.getUserId(),
            email: ticket.getPayload().email,
            firstName: ticket.getPayload().given_name,
            lastInitial: ticket.getPayload().family_name ? ticket.getPayload().family_name.charAt(0) : null,
            pfp: ticket.getPayload().picture,
        });
    }

    const iat = Math.floor(Date.now() / 1000);
    const token = jwt.sign({
        iss: "all.rit.edu",
        sub: user.id,
        aud: user.id,
        nbf: iat,
        iat: iat,
        googleAccountId: user.googleAccountId,
        email: user.email,
        firstName: user.firstName,
        lastInitial: user.lastInitial,
        pfp: user.pfp
    }, process.env.KEY, {
        algorithm: 'HS256'
    });

    const userSession = await db.UserSessions.create({
        userId: user.id,
        jwt: token,
        issuedAt: new Date(),
    });

    return res.status(200).json({
        jwt: userSession.jwt
    });
};

module.exports = {
    google,
    googleCallback
}