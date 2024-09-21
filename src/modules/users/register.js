import { BadRequestError } from '../../shared/errors/index.js';
import Users from './Users.js';
import bcryptjs from 'bcryptjs';

export const register = async (req) => {
  var salt = bcryptjs.genSaltSync(10);
  req.body.password = bcryptjs.hashSync(req.body.password, salt);
  const exist = await Users.find({ username: req.body?.username });

  if (exist[0]) {
    throw new BadRequestError('Username already is exist!');
  }
  Users.create({ 
    ...req.body , role : "user"  
    
  });
  return { message: 'User is created!' };
};
