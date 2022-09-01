const { expect } = require('chai');
const sinon = require('sinon');
const ProductController = require('../../../controllers/product.controller');
const ProductService = require('../../../services/product.service');
const { tokenMock } = require('../../database-mock/loginMocks');
const {
  productsMock,
  productMock,
} = require('../../database-mock/productMocks');

describe('Product controller', () => {
  const response = {};
  const request = {};

  describe('1- Caso de requisição para getAll com sucesso', () => {
    before(() => {
      request.headers = tokenMock;

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(productsMock);

      sinon.stub(ProductService, 'getAll').resolves(productsMock);
    });

    after(() => {
      sinon.restore();
    });

    it('1.1 - Retorna o status com o código 200', async () => {
      await ProductController.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('1.2 - Retorna uma array de produtos', async () => {
      const result = await ProductController.getAll(request, response);
      expect(result).to.be.equal(productsMock);
    });
  });

  describe('1- Caso de requisição para getAll com sucesso', () => {
    before(() => {
      request.headers = tokenMock;
      request.params = { id: 1 };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(productMock);

      sinon.stub(ProductService, 'getById').resolves(productMock);
    });

    after(() => {
      sinon.restore();
    });

    it('1.1 - Retorna o status com o código 200', async () => {
      await ProductController.getById(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('1.2 - Retorna um produto', async () => {
      const result = await ProductController.getById(request, response);
      expect(result).to.be.equal(productMock);
    });
  });
});
