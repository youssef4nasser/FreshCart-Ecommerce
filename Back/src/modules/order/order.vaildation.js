import Joi from "joi";

const idVaildation = Joi.string().hex().length(24).required()

export const validationashippingAddres = Joi.object({
    shippingAddress: {
        city: Joi.string().required(),
        street: Joi.string().required(),
        phone: Joi.string().required(),
    },
    id: idVaildation
})