require('express-async-errors');
const cors = require('cors');

const express = require('express');
const errorMiddleware = require('../middlewares/errorMiddleware');
const router = require('../routes/index');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(cors());
app.use(router);
app.use(errorMiddleware);

module.exports = app;
