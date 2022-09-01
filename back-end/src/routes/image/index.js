const express = require('express');

const imageRouter = express.Router();

const imageController = require('../../controllers/image.controller');

imageRouter.get('/:image', imageController.getImage);

module.exports = imageRouter;
