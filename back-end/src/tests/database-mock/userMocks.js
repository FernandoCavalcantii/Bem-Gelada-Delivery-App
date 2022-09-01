const sucessCreateUserRequest = {
  name: 'Teste teste teste',
  email: 'teste@teste.com',
  password: '123456',
  role: 'customer',
};

const userDataValuesMock = {
  dataValues: {
    id: 1,
    name: 'Teste teste teste',
    email: 'teste@teste.com',
    password: '0b4e7a0e5fe84ad35fb5f95b9ceeac79',
    role: 'customer',
  },
};

const usersMock = [
  {
    id: 1,
    name: 'Teste teste teste',
    email: 'teste@teste.com',
    password: '0b4e7a0e5fe84ad35fb5f95b9ceeac79',
    role: 'customer',
  },
  {
    id: 2,
    name: 'Teste teste teste 2',
    email: 'teste@teste2.com',
    password: '0b4e7a0e5fe84ad35fb5f95b9ceeac80',
    role: 'customer',
  },
];

const shortNameRequest = {
  name: 'Teste',
  email: 'teste@teste.com',
  password: 'teste1',
};

const shortNameRequestBody = {
  body: {
    name: 'Teste',
    email: 'teste@teste.com',
    password: 'teste1',
  },
};

const emptyNameRequest = {
  name: '',
  email: 'teste@teste.com',
  password: 'teste1',
};

const noNameRequest = {
  email: 'teste@teste.com',
  password: 'teste1',
};

const invalidEmailRequest = {
  name: 'Teste teste teste',
  email: 'teste@teste',
  password: 'teste1',
};

const noEmailRequest = {
  name: 'Teste teste teste',
  password: 'teste1',
};

const shortPasswordRequest = {
  name: 'Teste teste teste',
  email: 'teste@teste.com',
  password: 'teste',
};

const emptyPasswordRequest = {
  name: 'Teste teste teste',
  email: 'teste@teste.com',
  password: '',
};

const noPasswordRequest = {
  name: 'Teste teste teste',
  email: 'teste@teste.com',
};

const shortNameError = {
  status: 400,
  message: '"name" length must be at least 12 characters long',
};

const invalidRoleRequest = {
  name: 'Teste teste teste',
  email: 'teste@teste.com',
  password: 'teste1',
  role: 'fail',
};

const adminLoginRequest = {
  email: 'adm@deliveryapp.com',
  password: '--adm2@21!!--',
};

const sellersMock = [
  {
    id: 2,
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    password: '3c28d2b0881bf46457a853e0b07531c6',
    role: 'seller',
  },
];

module.exports = {
  sucessCreateUserRequest,
  userDataValuesMock,
  shortNameRequest,
  emptyNameRequest,
  noNameRequest,
  invalidEmailRequest,
  noEmailRequest,
  shortPasswordRequest,
  emptyPasswordRequest,
  noPasswordRequest,
  shortNameError,
  shortNameRequestBody,
  usersMock,
  invalidRoleRequest,
  adminLoginRequest,
  sellersMock,
};
