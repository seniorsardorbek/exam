import Category from './Products.js';
import mongoose from "mongoose"
export const getData = async ({
 q ={},
  page = { limit: 10, offset: 0 },
  sort = { by: '_id', order: 'desc' },
  
}) => {
  const filter ={}
  if (q?.name ) {
    filter.name = { $regex: new RegExp(q.name, 'i') };
  }
  if (q?.color ) {
    filter.color = { $regex: new RegExp(q.color, 'i') };
  }
  if (q?.price ) {
    filter.price = { $regex: new RegExp(q.price, 'i') };
  }
  if (q?.quantity ) {
    filter.quantity = { $regex: new RegExp(q.quantity, 'i') };
  }
  if (q.categoryId) {
    console.log(q);

    filter.categoryId = new mongoose.Types.ObjectId(q.categoryId); // Convert to ObjectId
    try {
    } catch (error) {
      throw new Error('Invalid categoryId');
    }
  }
  const totalItems = await Category.countDocuments(filter);
  const totalPages = Math.ceil(totalItems / page.limit);
  const result = await Category.find(filter)
    .populate([{path :'categoryId' , select :"name"},])
    .sort({ [sort.by]: sort.order })
    .skip(page.offset * page.limit)
    .limit(page.limit);
  return {
    list: result,
    pageInfo: { ...page, totalPages },
    sortInfo: { ...sort }
  };
};
