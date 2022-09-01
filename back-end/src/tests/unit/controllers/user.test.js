const { expect } = require('chai');
const sinon = require('sinon');
const UserController = require('../../../controllers/user.controller');
const UserService = require('../../../services/user.service');
const { tokenMock } = require('../../database-mock/loginMocks');
const {
  sucessCreateUserRequest,
  usersMock,
  sellersMock,
} = require('../../database-mock/userMocks');

describe('User controller', () => {
  const response = {};
  const request = {};

  describe('Função create', () => {
    describe('1 - Caso de requisição com sucesso', () => {
      before(() => {
        request.body = sucessCreateUserRequest;

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns(tokenMock);

        sinon.stub(UserService, 'create').resolves(tokenMock);
      });

      after(() => {
        UserService.create.restore();
      });

      it('1.1 - Retorna o status com o código 201', async () => {
        await UserController.create(request, response);
        expect(response.status.calledWith(201)).to.be.equal(true);
      });

      it('1.2 - Retorna um token', async () => {
        const result = await UserController.create(request, response);
        expect(result).to.be.equal(tokenMock);
      });
    });
  });

  describe('Função getAll', () => {
    describe('1 - Caso de requisição com sucesso', () => {
      before(() => {
        request.data = { role: 'administrator' };

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns(usersMock);

        sinon.stub(UserService, 'getAll').resolves(usersMock);
      });

      after(() => {
        UserService.getAll.restore();
      });

      it('1.1 - Retorna o status com o código 200', async () => {
        await UserController.getAll(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });

      it('1.2 - Retorna uma array de usuários', async () => {
        const result = await UserController.getAll(request, response);
        expect(result).to.be.equal(usersMock);
      });
    });
  });

  describe('Função getAllSellers', () => {
    describe('1 - Caso de requisição com sucesso', () => {
      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns(sellersMock);

        sinon.stub(UserService, 'getAllSellers').resolves(sellersMock);
      });

      after(() => {
        UserService.getAllSellers.restore();
      });

      it('1.1 - Retorna o status com o código 200', async () => {
        await UserController.getAllSellers(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });

      it('1.2 - Retorna uma array de usuários vendedores', async () => {
        const result = await UserController.getAll(request, response);
        expect(result).to.be.equal(sellersMock);
      });
    });
  });

  describe('Função remove', () => {
    describe('1 - Caso de requisição com sucesso', () => {
      before(() => {
        request.params = { id: 1 };
        request.data = { role: 'administrator' };

        response.status = sinon.stub().returns(response);
        response.end = sinon.stub().returns();

        sinon.stub(UserService, 'remove').resolves(true);
      });

      after(() => {
        UserService.remove.restore();
      });

      it('1.1 - Retorna o status com o código 200', async () => {
        await UserController.remove(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
    });
  });
});
