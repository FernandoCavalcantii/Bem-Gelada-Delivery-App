const { expect } = require('chai');
const sinon = require('sinon');
const { Product } = require('../../../database/models');
const ProductService = require('../../../services/product.service');
// const jwt = require('jsonwebtoken');
const { tokenMock } = require('../../database-mock/loginMocks');
const errorObj = require('../../../helpers/errorObj');
const {
  productsMock,
  productMock,
} = require('../../database-mock/productMocks');

describe('Product service', () => {
  before(() => {
    sinon.stub(Product, 'findAll').resolves(productsMock);
    sinon
      .stub(Product, 'findOne')
      .onCall(0)
      .resolves(productMock)
      .onCall(1)
      .resolves(null);
  });

  after(() => {
    sinon.restore();
  });

  describe('1 - Função getAll, em caso de requisição com sucesso', () => {
    it('1.1 - Retorna uma array de produtos', async () => {
      const result = await ProductService.getAll();
      expect(result).to.be.deep.equal(productsMock);
    });
  });

  describe('2 - Função getById', () => {
    it('2.1 - Caso de requisição com sucesso, retorna o produto com o ID passado por parâmetro', async () => {
      const result = await ProductService.getById(1);
      expect(result).to.be.deep.equal(productMock);
    });

    it('2.1 - Caso de requisição sem produto com o ID registrado, retorna status 404 e message: Product not found', async () => {
      try {
        await ProductService.getById(1);
      } catch (err) {
        expect(err).to.eql(errorObj(404, 'Product not found'));
      }
    });
  });

  describe('3 - Função getById, em caso de ', () => {});
});
