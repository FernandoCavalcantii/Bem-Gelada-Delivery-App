const LoginService = require('../services/login.service');

const login = async (req, res, _next) => {
  const { email, password } = req.body;
  const token = await LoginService.login(email, password);
  return res.status(200).json({ token });
};

module.exports = { login };
