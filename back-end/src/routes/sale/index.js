const express = require('express');

const saleRouter = express.Router();

const saleController = require('../../controllers/sale.controller');
const { validateJWT } = require('../../middlewares/validateJWT');
const { validateCreateSale } = require('../../middlewares/validateCreateSale');
const validateUpdateStatus = require('../../middlewares/validateUpdateStatus');

saleRouter.post('/', validateJWT, validateCreateSale, saleController.create);

saleRouter.get('/:id', validateJWT, saleController.readOne);

saleRouter.get('/user/:id', validateJWT, saleController.getByRoleId);
saleRouter.put('/:id', validateJWT, validateUpdateStatus, saleController.updateStatus);

module.exports = saleRouter;
