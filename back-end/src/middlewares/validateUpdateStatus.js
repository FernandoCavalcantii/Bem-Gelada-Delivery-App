const Joi = require('joi');
const errorObj = require('../helpers/errorObj');

const JoiUpdateStatus = Joi.object({
  status: Joi.string().required(),
});

const isStatusValid = (status, role) => (
  (role === 'seller' && (status === 'Preparando' || status === 'Em Trânsito'))
  || (role === 'customer' && status === 'Entregue')
);

const validateUpdateStatus = (req, _res, next) => {
  const { body: { status }, data: { role } } = req;
  const validStatusOptions = ['Preparando', 'Em Trânsito', 'Entregue'];
  const { error } = JoiUpdateStatus.validate({ status });
  if (error) throw errorObj(400, error.message);
  if (validStatusOptions.every((s) => s !== status)) {
    throw errorObj(400, 'Invalid status option');
  }
  if (!isStatusValid(status, role)) throw errorObj(403, 'Operation unauthorized');
  next();
};

module.exports = validateUpdateStatus;
