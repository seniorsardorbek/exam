import bcryptjs from 'bcryptjs';
import { NotFoundError } from '../../shared/errors/index.js';
import User from './Users.js';

export const updateData = async (req) => {
  const { id } = req.params;
  const exist = await User.findById(id);

  if (!exist) {
    throw new NotFoundError(`${id} user not found`);
  }
  if (req.body?.password) {
    var salt = bcryptjs.genSaltSync(10);
    req.body.password = bcryptjs.hashSync(req.body.password, salt);
  }
  await User.findOneAndUpdate(
    { _id: id },
    {
      ...req.body
    }
  );
  return { message: 'User is updated!' };
};
