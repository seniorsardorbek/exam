import Joi from 'joi';

export const postAddCategorySchema = {
  body: Joi.object({
    comment: Joi.string().required(),
    productId: Joi.string().required(),
  })
};



export const patchCategorySchema = {
  params: Joi.object({
    id: Joi.string().required()
  }),
  body: Joi.object({
    comment: Joi.string(),
  })
};

export const oneIdSchema = {
  params: Joi.object({
    id: Joi.string().required()
  })
};
