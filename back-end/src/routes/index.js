const express = require('express');
const bodyParser = require('body-parser');
const loginRouter = require('./login/index');
const userRouter = require('./user/index');
const productRouter = require('./product/index');
const saleRouter = require('./sale');
const imageRouter = require('./image');

const router = express.Router();

router.use(bodyParser.json());
router.use('/login', loginRouter);
router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/sales', saleRouter);
router.use('/images', imageRouter);

module.exports = router;
