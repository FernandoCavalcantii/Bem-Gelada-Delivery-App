const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const validateCreateUser = require('../../../middlewares/validateCreateUser');
const {
  shortNameError,
  shortNameRequestBody,
} = require('../../database-mock/userMocks');

chai.use(chaiHttp);

describe('validateCreateUser', () => {
  const request = shortNameRequestBody;
  const response = {};
  const next = sinon.stub().returns();

  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
  });

  describe('1 - Em requisição com chave "name" com menos de 6 caracteres', () => {
    it('1.1 - Chama a função next com objeto de erro correto', async () => {
      await validateCreateUser(request, response, next);
      expect(next.calledWith(shortNameError)).to.be.equal(true);
    });
  });
});
