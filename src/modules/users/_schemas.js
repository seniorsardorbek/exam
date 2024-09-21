import Joi from 'joi';

export const postAddUserSchema = {
  body: Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    role: Joi.string().valid('admin', 'user').required(),
    username: Joi.string().required(),
    password: Joi.string().required()
  })
};

export const postLoginUserSchema = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
  })
};

export const patchMeSchema = {
  body: Joi.object({
    first_name: Joi.string(),
    last_name: Joi.string(),
    age: Joi.number(),
    username: Joi.string()
  })
};

export const patchUserSchema = {
  params: Joi.object({
    id: Joi.string().required()
  }),
  body: Joi.object({
    first_name: Joi.string(),
    last_name: Joi.string(),
    role: Joi.string().valid('admin', 'employee'),
    age: Joi.number(),
    username: Joi.string(),
    password: Joi.string()
  })
};

export const oneIdSchema = {
  params: Joi.object({
    id: Joi.string().required()
  })
};
