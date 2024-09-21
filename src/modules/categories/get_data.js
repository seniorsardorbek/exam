import Category from './Categories.js';

export const getData = async ({
 q ={},
  page = { limit: 10, offset: 0 },
  sort = { by: '_id', order: 'desc' },
  
}) => {
const filter ={}

  if (q?.name ) {
    filter.name = { $regex: new RegExp(q.name, 'i') };
  }
  
  if (q?.description ) {
    filter.description = { $regex: new RegExp(q.description, 'i') };
  }
  const totalItems = await Category.countDocuments(filter);
  const totalPages = Math.ceil(totalItems / page.limit);
  const result = await Category.find(filter)
    .populate(['products',])
    .sort({ [sort.by]: sort.order })
    .skip(page.offset * page.limit)
    .limit(page.limit);
  return {
    list: result,
    pageInfo: { ...page, totalPages },
    sortInfo: { ...sort }
  };
};
