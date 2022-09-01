const Joi = require('joi');

const JoiLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const validateLoginRequest = (req, _res, next) => {
  const { email, password } = req.body;
  const { error } = JoiLogin.validate({ email, password });
  if (error) {
    return next({ message: error.message, status: 400 });
  }

  next();
};

module.exports = validateLoginRequest;
