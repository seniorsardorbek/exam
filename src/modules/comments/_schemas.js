import Joi from 'joi';

export const postAddCategorySchema = {
  body: Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
  })
};



export const patchCategorySchema = {
  params: Joi.object({
    id: Joi.string().required()
  }),
  body: Joi.object({
    name: Joi.string() ,
    description: Joi.string() ,
  })
};

export const oneIdSchema = {
  params: Joi.object({
    id: Joi.string().required()
  })
};
