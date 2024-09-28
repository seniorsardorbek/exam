import { NotFoundError } from '../../shared/errors/index.js';
import Comment from './Comment.js';

export const removeData = async (req) => {
  const { id } = req.params;
  const exist = await Comment.findById(id);
  if (!exist) {
    throw new NotFoundError(`${id} Comment not found`);
  }
  await Comment.findByIdAndDelete(id);
  return { message: 'Comment is deleted!' };

};
