import express from 'express';
import { hasRole } from '../../shared/auth/has-role.js';
import httpValidator from '../../shared/http-validator/index.js';
import {
  oneIdSchema,
  patchCategorySchema,
  postAddCategorySchema
} from './_schemas.js';
import { addData } from './add-data.js';
import { getData } from './get_data.js';
import { removeData } from './remove-data.js';
import { showData } from './show-data.js';
import { updateData } from './update-data.js';
/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

export const getCategories = async (req, res, next) => {
  try {
    const data = await getData({ ...req.query });
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

export const showCategorie = async (req, res, next) => {
  try {
    const data = await showData(req);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

export const postCategorie = async (req, res, next) => {
  try {
    hasRole({ req }, ['admin']);
    httpValidator({ body: req.body }, postAddCategorySchema);

    const result = await addData(req);

    res.status(200).json({
      result
    });
  } catch (error) {
    next(error);
  }
};


export const deleteCategorie = async (req, res, next) => {
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

export const updateCategorie = async (req, res, next) => {
  try {
    hasRole({ req }, ['admin']);
    httpValidator({ params: req.params, body: req.body }, patchCategorySchema );

    const data = await updateData(req);
    res.status(200).json({
      data
    });
  } catch (error) {
    next(error);
  }
};

