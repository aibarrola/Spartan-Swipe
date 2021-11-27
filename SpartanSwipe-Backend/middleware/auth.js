const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');

    // Check if no token
    if(!token)
    {
        // Status code 401 = not authorized
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // If a token is valid, decode the token and set the requested user to the decoded user
    try 
    {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        next();
    }
    // If token verification failed
    catch(error)
    {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}