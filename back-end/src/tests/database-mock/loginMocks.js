const tokenMock = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJuYW1lIjoiQ2xpZW50ZSBaw6kgQmlyaXRhIiwiZW1haWwiOiJ6ZWJpcml0YUBlbWFpbC5jb20iLCJyb2xlIjoiY3VzdG9tZXIifSwiaWF0IjoxNjU5NzM3NjA3LCJleHAiOjE2NTk4MjQwMDd9.oOQin8GGaPsPQXUlQTQQLt2Jiw-FXzSjT-c6Uk3fa8o',
};

const successRequest = {
  email: 'zebirita@email.com',
  password: '$#zebirita#$',
};

const noPasswordRequest = {
  email: 'zebirita@email.com',
};

const wrongEmailRequest = {
  email: 'test@email.com',
  password: '$#zebirita#$',
};

const invalidEmailRequest = {
  email: 'zebirit@email.',
  password: '$#zebirita#',
};

const wrongPasswordRequest = {
  email: 'zebirita@email.com',
  password: '$#zebirita#',
};

const shortPasswordRequest = {
  email: 'zebirita@email.com',
  password: '$#',
};

const wrongEmailResponse = {
  message: 'E-mail não cadastrado',
};

const shortPasswordResponse = {
  message: 'Senha deve ter ao menos 06 caracteres',
};

const invalidEmailResponse = {
  message: 'Formatação do e-mail inválida',
};

const wrongPasswordResponse = {
  message: 'E-mail ou senha incorretos',
};

const userDataValuesMock = {
  dataValues: {
    id: 3,
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    password: '1c37466c159755ce1fa181bd247cb925',
    role: 'customer',
  },
};

module.exports = {
  tokenMock,
  successRequest,
  wrongEmailRequest,
  invalidEmailRequest,
  wrongPasswordRequest,
  shortPasswordRequest,
  wrongEmailResponse,
  shortPasswordResponse,
  invalidEmailResponse,
  wrongPasswordResponse,
  userDataValuesMock,
  noPasswordRequest,
};
