import { BadRequestError, NotFoundError } from '../../shared/errors/index.js';
import Category from './Categories.js';

export const removeData = async (req) => {
  const { id } = req.params;
  const exist = await Category.findById(id);
  if (!exist) {
    throw new NotFoundError(`${id} category not found`);
  }
  await Category.findByIdAndDelete(id);
  return { message: 'Category is deleted!' };

};
