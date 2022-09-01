const express = require('express');

const loginRouter = express.Router();

const loginController = require('../../controllers/login.controller');
const validateLoginRequest = require('../../middlewares/validateLoginRequest');

loginRouter.post('/', validateLoginRequest, loginController.login);

module.exports = loginRouter;
