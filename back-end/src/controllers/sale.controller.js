const saleService = require('../services/sale.service');

module.exports = {
    async create(req, res) {
        const { 
            userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, itemsSold, 
        } = req.body;
        const newSale = await saleService.create({ 
            userId,
sellerId,
totalPrice,
deliveryAddress,
deliveryNumber,
itemsSold,
            saleDate: new Date(),
        });
        return res.status(201).json(newSale);
    },

    async readOne(req, res) {
        const { id } = req.params;
        const sale = await saleService.readOne(id);
        return res.status(200).json(sale);
    },

    async getByRoleId(req, res) {
        const { id } = req.params;
        const sales = await saleService.readAll(id);
        return res.status(200).json(sales);
    },

    async updateStatus(req, res) {
        const { body: { status }, params: { id } } = req;
        await saleService.updateStatus(status, id);
        return res.status(200).end();
    },
};