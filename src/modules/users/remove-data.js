import { BadRequestError, NotFoundError } from '../../shared/errors/index.js';
import Users from './Users.js';

export const removeData = async (req) => {
  const { id } = req.params;
  if (id == req.user.id) {
    throw new BadRequestError('You cannot delete yourself!');
  }
  const exist = await Users.findById(id);

  if (!exist) {
    throw new NotFoundError(`${id} user not found`);
  }
  await Users.findByIdAndDelete(id);
  return { message: 'User is deleted!' };
};
