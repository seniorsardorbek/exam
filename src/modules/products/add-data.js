import { BadRequestError, NotFoundError } from '../../shared/errors/index.js';
import Product from './Products.js';
import Category from '../categories/Categories.js';

export const addData = async (req) => {
  // console.log(__dirname);
  const exist = await Product.findOne({ name: req.body?.name });
  if (exist) {
    
    throw new BadRequestError('Name already is exist!');
  }
  const images = req.files.map((file) => file?.filename);
  if (images > 0) {
    throw new BadRequestError('Image is required');
  }
  const category = await Category.findOne({ _id: req.body?.categoryId });

  if (!category) throw new NotFoundError('Category not found');

  return await Product.create({
    ...req.body , images
  });
};
