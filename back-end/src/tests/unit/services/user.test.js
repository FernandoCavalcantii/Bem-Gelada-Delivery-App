const { expect, assert } = require('chai');
const sinon = require('sinon');
const { User } = require('../../../database/models');
const UserService = require('../../../services/user.service');
const jwt = require('jsonwebtoken');
const {
  sucessCreateUserRequest,
  userDataValuesMock,
  usersMock,
  sellersMock,
} = require('../../database-mock/userMocks');
const { tokenMock } = require('../../database-mock/loginMocks');
const errorObj = require('../../../helpers/errorObj');

describe('User service', () => {
  const administrator = 'administrator';
  const seller = 'seller';
  const id = 1;
  // before(() => {
  //   sinon
  //     .stub(User, 'findAll')
  //     .onCall(0)
  //     .resolves([])
  //     .onCall(1)
  //     .resolves([userDataValuesMock])
  //     .onCall(2)
  //     .resolves(usersMock)
  //     .onCall(3)
  //     .resolves(usersMock)
  //     .onCall(4)
  //     .resolves(sellersMock);
  //   sinon.stub(User, 'create').resolves(userDataValuesMock);
  //   sinon.stub(User, 'destroy').resolves();
  //   sinon.stub(jwt, 'sign').resolves(tokenMock.token);
  // });

  // after(() => {
  //   sinon.restore();
  // });

  describe('1 - Função create em caso de requisição com sucesso', () => {
    before(() => {
      sinon.stub(User, 'findAll').resolves([]);
      sinon.stub(User, 'create').resolves(userDataValuesMock);
      sinon.stub(jwt, 'sign').resolves(tokenMock.token);
    });

    after(() => {
      sinon.restore();
    });

    it('1.1 - Retorna um token', async () => {
      const result = await UserService.create(sucessCreateUserRequest);
      expect(result).to.be.deep.equal(tokenMock.token);
    });
  });

  describe('2 - Função create em caso de usuário já cadastrado', () => {
    before(() => {
      sinon.stub(User, 'findAll').resolves([userDataValuesMock]);
    });

    after(() => {
      sinon.restore();
    });

    it('2.1 - Lança erro com status 409 e com mensagem "Usuário já cadastrado"', async () => {
      try {
        await UserService.create(sucessCreateUserRequest);
      } catch (err) {
        expect(err).to.eql(errorObj(409, 'Usuário já cadastrado'));
      }
    });
  });

  describe('3 - Função getAll', () => {
    before(() => {
      sinon.stub(User, 'findAll').resolves(usersMock);
    });

    after(() => {
      sinon.restore();
    });

    it('3.1 - Requisição com sucesso: retorna uma array de usuários', async () => {
      const result = await UserService.getAll(administrator);
      expect(result).to.be.deep.equal(usersMock);
    });

    it('3.2 - Requisição com role diferente de "administrator": Lança erro com status 403 e message "User unauthorized"', async () => {
      try {
        await UserService.getAll(seller);
      } catch (err) {
        expect(err).to.eql(errorObj(403, 'User unauthorized'));
      }
    });
  });

  describe('4 - Função remove', () => {
    before(() => {
      sinon
        .stub(User, 'findAll')
        .onCall(0)
        .resolves(usersMock)
        .onCall(1)
        .resolves([]);
      sinon.stub(User, 'destroy').resolves();
    });

    after(() => {
      sinon.restore();
    });

    it('4.1 - Requisição com sucesso: deleta o usuário com o ID passado', async () => {
      await UserService.remove(id, administrator);
      expect(User.destroy.calledWith({ where: { id } })).to.be.true;
    });

    it('4.2 - Requisição com role diferente de "administrator": Lança erro com status 403 e message "User unauthorized"', async () => {
      try {
        await UserService.remove(id, seller);
      } catch (err) {
        expect(err).to.eql(errorObj(403, 'User unauthorized'));
      }
    });

    it('4.3 - Requisição com ID inexistente: Lança erro com status 404 e message "User not found"', async () => {
      try {
        await UserService.remove(id, administrator);
      } catch (err) {
        expect(err).to.eql(errorObj(404, 'User not found'));
      }
    });
  });

  describe('5 - Função getAllSellers', () => {
    before(() => {
      sinon.stub(User, 'findAll').resolves(sellersMock);
    });

    after(() => {
      sinon.restore();
    });

    it('5.1 - Requisição com sucesso: retorna uma array de usuários vendedores', async () => {
      const result = await UserService.getAllSellers();
      expect(result).to.be.deep.equal(sellersMock);
    });
  });
});
