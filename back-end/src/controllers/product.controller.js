const ProductService = require('../services/product.service');

module.exports = {
  async getAll(_req, res, _next) {
    const products = await ProductService.getAll();
    return res.status(200).json(products);
  },

  async getById(req, res, _next) {
    const { id } = req.params;
    const product = await ProductService.getById(id);
    return res.status(200).json(product);
  },
};
