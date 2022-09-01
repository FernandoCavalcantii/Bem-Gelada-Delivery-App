const { expect } = require('chai');
const sinon = require('sinon');
const { User } = require('../../../database/models');
const LoginService = require('../../../services/login.service');
const jwt = require('jsonwebtoken');
const {
  tokenMock,
  userDataValuesMock,
  successRequest,
} = require('../../database-mock/loginMocks');

describe('Login service', () => {
  before(() => {
    sinon.stub(User, 'findOne').resolves(userDataValuesMock);
    sinon.stub(jwt, 'sign').resolves(tokenMock.token);
  });

  after(() => {
    sinon.restore();
  });

  describe('1 - Caso de requisição com sucesso', () => {
    it('1.1 - Retorna um token', async () => {
      const result = await LoginService.login(
        successRequest.email,
        successRequest.password
      );

      expect(result).to.be.deep.equal(tokenMock.token);
    });
  });
});
