import { BadRequestError, NotFoundError } from '../../shared/errors/index.js';
import Product from './Products.js';

export const removeData = async (req) => {
  const { id } = req.params;
  
  const exist = await Product.findById(id);

  if (!exist) {
    throw new NotFoundError(`${id} user not found`);
  }
  await Product.findByIdAndDelete(id);
  return { message: 'Product is deleted!' };
};
