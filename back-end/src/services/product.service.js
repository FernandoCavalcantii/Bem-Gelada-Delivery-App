const { Product } = require('../database/models');
const errorObj = require('../helpers/errorObj');

module.exports = {
  async getAll() {
    const products = await Product.findAll();
    return products;
  },

  async getById(id) {
    const product = await Product.findOne({ where: { id } });
    if (!product) throw errorObj(404, 'Product not found');
    return product;
  },
};
