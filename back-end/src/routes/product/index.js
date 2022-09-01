const express = require('express');

const userRouter = express.Router();

const productController = require('../../controllers/product.controller');
const { validateJWT } = require('../../middlewares/validateJWT');

userRouter.get('/:id', validateJWT, productController.getById);
userRouter.get('/', validateJWT, productController.getAll);

module.exports = userRouter;
