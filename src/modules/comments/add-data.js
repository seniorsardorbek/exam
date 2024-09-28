import { BadRequestError } from '../../shared/errors/index.js';
import Category from './Categories.js';

export const addData = async (req) => {
    const exist = await Category.findOne({ name: req.body?.name });
    if (exist) {
      throw new BadRequestError('Name already is exist!');
    }
    return await Category.create({
      ...req.body
    });

};
