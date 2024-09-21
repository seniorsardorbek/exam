import express from 'express';
import { hasRole } from '../../shared/auth/has-role.js';
import httpValidator from '../../shared/http-validator/index.js';
import {
  oneIdSchema,
  patchMeSchema,
  patchUserSchema,
  postLoginUserSchema
} from './_schemas.js';
import { getData } from './get_data.js';
import { loginUsers } from './login-users.js';
import { register } from './register.js';
import { removeData } from './remove-data.js';
import { showData } from './show-data.js';
import { showDataMe } from './showMe.js';
import { updateData } from './update-data.js';
import { myUpdate } from './update-me.js';
/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

export const getUsers = async (req, res, next) => {
  try {
    hasRole({ req }, ['admin' ,]);
    const data = await getData({ ...req.query });
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};
export const registerAuth = async (req, res, next) => {
  try {
    const data = await register(req );
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

export const showUser = async (req, res, next) => {
  try {
    hasRole({ req }, ['admin']);
    const data = await showData(req);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

export const showMe = async (req, res, next) => {
  try {
    const data = await showDataMe(req);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};



export const  loginUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postLoginUserSchema);
    const result = await loginUsers(req);
    res.status(200).json({
      result
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUsers = async (req, res, next) => {
  try {
    hasRole({ req }, ['admin']);
    httpValidator({ params: req.params }, oneIdSchema);
    const data = await removeData(req);
    res.status(200).json({
      data
    });
  } catch (error) {
    next(error);
  }
};

export const updateUsers = async (req, res, next) => {
  try {
    hasRole({ req }, ['admin']);
    httpValidator({ params: req.params, body: req.body }, patchUserSchema);

    const data = await updateData(req);
    res.status(200).json({
      data
    });
  } catch (error) {
    next(error);
  }
};

export const updateMe = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, patchMeSchema);
    const data = await myUpdate(req);
    res.status(200).json({
      data
    });
  } catch (error) {
    next(error);
  }
};
