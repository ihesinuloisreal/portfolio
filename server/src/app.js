const express = require('express');
const cors = require('cors');
const { UserProfileRouter } = require('./router/userProfile/userProfile.router');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json());

app.use('/project', UserProfileRouter)

module.exports = app