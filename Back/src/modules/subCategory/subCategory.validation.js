import Joi from "joi";

export const addSubCategoryValidaion = Joi.object({
    name: Joi.string().min(2).required(),
    category: Joi.string().hex().length(24).required(),
})

export const updateSubCategoryValidation = Joi.object({
    id: Joi.string().hex().length(24).required(),
    name: Joi.string().min(2),
    category: Joi.string().hex().length(24),
})

export const idValidate = Joi.object({
    id: Joi.string().hex().length(24).required(),
})