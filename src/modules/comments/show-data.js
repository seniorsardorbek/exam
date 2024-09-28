import { NotFoundError } from '../../shared/errors/index.js';
import Category from './Categories.js';

export const showData = async (req) => {
  const { id } = req.params;
  const category = await Category.findOne({ _id: id });
  if (!category) throw new NotFoundError(`Category ${id} not found`);
  return category;
};
