const express = require('express');
const { httpGetAppProject, httpPostMessage } = require('./userProfile.controller');

const UserProfileRouter = express.Router();

UserProfileRouter.get('/', httpGetAppProject)
UserProfileRouter.post('/', httpPostMessage)

module.exports = {
    UserProfileRouter
}