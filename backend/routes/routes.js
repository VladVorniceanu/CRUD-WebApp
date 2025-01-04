const express = require('express');
const router = express.Router();
const { checkAuth } = require('../middleware/middleware');

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the public API!' });
});

router.get('/protected', checkAuth, (req, res) => {
    res.json({ message: 'This is a protected route!', user: req.user });
});

module.exports = router;