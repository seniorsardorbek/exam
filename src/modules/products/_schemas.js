import Joi from 'joi';

export const postAddProductSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    color: Joi.string().required(),
    quantity: Joi.number().required(),
    price: Joi.number().required(),
    categoryId: Joi.string().required(),

  })
};

;

export const patchProductSchema = {
  params: Joi.object({
    id: Joi.string().required()
  }),
  body: Joi.object({
    name: Joi.string(),
    color: Joi.string(),
    quantity: Joi.number(),
    price: Joi.number(),
    categoryId: Joi.string()

  })
};

export const oneIdSchema = {
  params: Joi.object({
    id: Joi.string().required()
  })
};
