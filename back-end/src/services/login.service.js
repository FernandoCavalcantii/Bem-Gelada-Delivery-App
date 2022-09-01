const { User } = require('../database/models');
const errorObj = require('../helpers/errorObj');
const { generateToken } = require('../helpers/generateToken');
const passwordVerification = require('../validations/passwordVerification');

const login = async (email, password) => {
  const userExists = await User.findOne({ where: { email } });

  if (!userExists) throw errorObj(404, 'E-mail não cadastrado');

  const { dataValues: user } = userExists;
  const correctPassword = await passwordVerification(password, user.password);

  if (!correctPassword) {
    throw errorObj(401, 'E-mail ou senha incorretos');
  }

  delete user.password;
  const token = generateToken(user);
  return token;
};

module.exports = { login };
