import express from 'express';
import {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError
} from './index.js';
import multerChecker from '../multer/multer.checker.js'; 
/**
 * @param {Error} err
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
export default (err, req, res, next) => {
  let status = 500;
  if (err instanceof BadRequestError) status = 400;
  else if (err instanceof UnauthorizedError) status = 401;
  else if (err instanceof ForbiddenError) status = 403;
  else if (err instanceof NotFoundError) status = 404;
if(req.files) {
  multerChecker(req, res , next)

}
  res.status(status).json({ error: err.message });
};
