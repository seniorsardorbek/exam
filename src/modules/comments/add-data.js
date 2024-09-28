import { BadRequestError } from '../../shared/errors/index.js';
import Comment from './Comment.js';
import Product from '../products/Products.js';
export const addData = async (req) => {
  const { id } = req.user;
  const { productId } = req.body;

  const product = await Product.findById(productId);
  if (!product) throw new BadRequestError('Product not found');

  return await Comment.create({
    ...req.body,
    userId: id
  });
};
