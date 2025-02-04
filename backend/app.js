const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const firebaseConfig = require('./firebase-config/config.js');
const authRoutes = require('./routes/auth.js');
const apiRoutes = require('./routes/routes.js')
const { checkAuth } = require('./middleware/middleware.js');
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(cors({
    origin: "http://localhost:8080",
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));
app.use(express.json());

// Rutele
app.use('/api/auth', authRoutes);
app.use('/api', apiRoutes)

// Rute protejate cu Firebase Auth
app.use('/api/protected', checkAuth, (req, res) => {
    res.json({ message: 'Acces permis!', user: req.user });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Backend server running on port ${port}`);
});

module.exports = app;