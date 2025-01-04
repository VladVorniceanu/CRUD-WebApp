const admin = require('../firebase-config/config.js')
const checkAuth = async (req, res, next) => {
    const token = req.headers.authorization?.split('Bearer ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided.' });
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token.' });
    }
};

module.exports = { checkAuth };