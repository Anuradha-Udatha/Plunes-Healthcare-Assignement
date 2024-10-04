const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Simulated user credentials with mobileNo from environment variables
const users = {
    [process.env.DEFAULT_USER_EMAIL]: { 
        password: process.env.DEFAULT_USER_PASSWORD, 
        mobileNo: process.env.DEFAULT_USER_MOBILE 
    },
    // You can add more users here if needed
};

// Secret key for JWT from environment variable
const SECRET_KEY = process.env.SECRET_KEY;

// Login route
app.post('/login', (req, res) => {
    const { userID, mobileNo, password } = req.body;

    // Validate userID, password, and mobile number
    if (users[userID] && users[userID].password === password && users[userID].mobileNo === mobileNo) {
        const token = jwt.sign({ userID }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ token });
    }
    return res.status(401).json({ message: 'Invalid credentials' });
});

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Protected dashboard route
app.get('/dashboard', authenticateToken, (req, res) => {
    res.json({ message: `Welcome to the dashboard, ${req.user.userID}!` });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
