import { BadRequestError, NotFoundError } from '../../shared/errors/index.js';
import Category from './Categories.js';

export const updateData = async (req) => {
  const { id } = req.params;
  const exist = await Category.findById(id);
  if (!exist) {
    throw new NotFoundError(`${id} category not found`);
  }
  const nameExist = await Category.findOne({ name: req.body?.name });
  if (nameExist) {
    throw new BadRequestError('Name already is exist!');
  }

  await Category.findOneAndUpdate(
    { _id: id },
    {
      ...req.body
    }
  );
  return { message: 'Category is updated!' };
};
