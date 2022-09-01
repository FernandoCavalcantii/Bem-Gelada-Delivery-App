const express = require('express');
const validateCreateUser = require('../../middlewares/validateCreateUser');
const { validateJWT, validateJWTAdmin } = require('../../middlewares/validateJWT');

const userRouter = express.Router();

const userController = require('../../controllers/user.controller');

userRouter.post('/create', validateCreateUser, userController.create);
userRouter.post('/admin/create', validateJWTAdmin, validateCreateUser, userController.create);
userRouter.get('/', validateJWT, userController.getAll);
userRouter.delete('/:id', validateJWT, userController.remove);
userRouter.get('/sellers', validateJWT, userController.getAllSellers);

module.exports = userRouter;
