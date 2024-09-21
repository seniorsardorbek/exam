import express from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/index.js';
import { UnauthorizedError, NotFoundError } from '../errors/index.js';
import User from '../../modules/users/Users.js';

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 **/
const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      throw new UnauthorizedError('Unauthorized!');
    }

    const decoded = jwt.verify(token, config.jwt.secret, {
      ignoreExpiration: false
    });
    req.user = decoded;
    const user = await User.findById(decoded.id);
    if (!user) {
      throw new NotFoundError('The token was expried!');
    }

    next();
  } catch (error) {
    next(new UnauthorizedError(error.message));
  }
};

export default isLoggedIn;
