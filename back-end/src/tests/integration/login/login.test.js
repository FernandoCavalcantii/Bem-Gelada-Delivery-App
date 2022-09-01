const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const app = require('../../../api/app');
const { User } = require('../../../database/models');
const {
  wrongEmailRequest,
  invalidEmailRequest,
  shortPasswordRequest,
  wrongPasswordRequest,
} = require('../../database-mock/loginMocks');

chai.use(chaiHttp);

describe('Integração - Testa requisição na rota /login', () => {
  describe('1 - Caso com e-mail não cadastrado no banco', () => {
    before(async () => {
      sinon.stub(User, 'findOne').resolves(null);
    });

    after(() => {
      User.findOne.restore();
    });

    it('1.1 - Retorna status 404 e objeto com message: "E-mail não cadastrado"', async () => {
      return chai
        .request(app)
        .post('/login')
        .send(wrongEmailRequest)
        .then((res) => {
          expect(res).to.have.status(404);
          expect(res.body.message).to.be.eql('E-mail não cadastrado');
        });
    });
  });

  describe('2 - Caso com e-mail com formatação inválida', () => {
    it('2.1 - Retorna status 400 e objeto com message: "email" must be a valid email"', async () => {
      return chai
        .request(app)
        .post('/login')
        .send(invalidEmailRequest)
        .then((res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.be.eql('"email" must be a valid email');
        });
    });
  });

  describe('3 - Caso com senha com menos de 06 caracteres', () => {
    it('3.1 - Retorna status 400 e objeto com message: "password" length must be at least 6 characters long""', async () => {
      return chai
        .request(app)
        .post('/login')
        .send(shortPasswordRequest)
        .then((res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.be.eql(
            '"password" length must be at least 6 characters long'
          );
        });
    });
  });

  describe('4 - Caso com senha incorreta', () => {
    it('4.1 - Retorna status 401 e objeto com message: "E-mail ou senha incorretos"', async () => {
      return chai
        .request(app)
        .post('/login')
        .send(wrongPasswordRequest)
        .then((res) => {
          expect(res).to.have.status(401);
          expect(res.body.message).to.be.eql('E-mail ou senha incorretos');
        });
    });
  });
});
