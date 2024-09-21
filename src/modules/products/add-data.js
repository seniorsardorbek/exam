import { BadRequestError, NotFoundError } from '../../shared/errors/index.js';
import Product from './Products.js';
import Category from  "../categories/Categories.js"
export const addData = async (req) => {
  

    const exist = await Product.findOne({ name: req.body?.name });

    if (exist) {
      throw new BadRequestError('Name already is exist!');
    }
    const category  = await Category.findOne({ _id: req.body?.categoryId})

    if(!category) throw new NotFoundError("Category not found")

    return await Product.create({
      ...req.body
    });
  
};
