import { BadRequestError, NotFoundError } from '../../shared/errors/index.js';
import Comment from './Comment.js';

export const updateData = async (req) => {
  const { id } = req.params;
  const exist = await Comment.findById(id);
  if (!exist) {
    throw new NotFoundError(`${id} Comment not found`);
  }
 
  await Comment.findOneAndUpdate(
    { _id: id },
    {
      ...req.body
    }
  );
  return { message: 'Comment is updated!' };
};
