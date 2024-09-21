import { NotFoundError } from '../../shared/errors/index.js';
import Product from './Products.js';

export const updateData = async (req) => {
  const { id } = req.params;
  const exist = await Product.findById(id);

  if (!exist) {
    throw new NotFoundError(`${id} product not found`);
  }
  
  await Product.findOneAndUpdate(
    { _id: id },
    {
      ...req.body
    }
  );
  return { message: 'Product is updated!' };
};
