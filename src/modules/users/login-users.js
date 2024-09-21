import bcr from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../../shared/config/index.js';
import { BadRequestError } from '../../shared/errors/index.js';
import Users from './Users.js';
export const loginUsers = async (req) => {
  const exist = await Users.findOne({ username: req.body.username });

  if (!exist) {
    throw new BadRequestError('Username or password is incorrect!');
  }
  const ver = bcr.compareSync(req.body.password, exist?.password);
  if (!ver) {
    throw new BadRequestError('Username or password is incorrect!');
  }


  const payload = {
    id: exist.id,
    role: exist.role
  }
  const token = jwt.sign(payload, config.jwt.secret, { expiresIn: '24h' });
  return token;
};
