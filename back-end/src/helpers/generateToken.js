require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = require('fs')
.readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });

const generateToken = (user) => {
  const token = jwt.sign({ data: user }, secret);

  return token;
};

module.exports = { generateToken };
