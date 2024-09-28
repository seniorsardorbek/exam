import express from 'express';
import httpValidator from '../../shared/http-validator/index.js';
import {
  oneIdSchema,
  patchCategorySchema,
  postAddCategorySchema
} from './_schemas.js';
import { addData } from './add-data.js';
import { getData } from './get_data.js';
import { removeData } from './remove-data.js';
import { updateData } from './update-data.js';
/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

export const getComments = async (req, res, next) => {
  try {
    const data = await getData({ ...req.query } , req);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};



export const postComment = async (req, res, next) => {
  try {
   
    httpValidator({ body: req.body }, postAddCategorySchema);

    const result = await addData(req);

    res.status(200).json({
      result
    });
  } catch (error) {
    next(error);
  }
};


export const deleteComment = async (req, res, next) => {
  try {
   
    httpValidator({ params: req.params }, oneIdSchema);
    const data = await removeData(req);
    res.status(200).json({
      data
    });
  } catch (error) {
    next(error);
  }
};

export const updateComment = async (req, res, next) => {
  try {
   
    httpValidator({ params: req.params, body: req.body }, patchCategorySchema );

    const data = await updateData(req);
    res.status(200).json({
      data
    });
  } catch (error) {
    next(error);
  }
};

