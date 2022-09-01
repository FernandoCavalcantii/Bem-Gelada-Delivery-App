const Joi = require('joi');

const JoiCreateSale = Joi.object({
        userId: Joi.number().required(), 
        sellerId: Joi.number().required(), 
        totalPrice: Joi.number().required(), 
        deliveryAddress: Joi.string().required(), 
        deliveryNumber: Joi.string().required(),
        itemsSold: Joi.array().items(
            Joi.object({
                productId: Joi.number().required(),
                quantity: Joi.number().required(),
            }),
        ).required(),
});

module.exports = {
    validateCreateSale(req, res, next) {
        const { error } = JoiCreateSale.validate(req.body);
        if (error) next({ message: error.message, status: 400 });
        next();
    },
};