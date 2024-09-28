import Comment from './Comment.js';

export const getData = async ({
  page = { limit: 10, offset: 0 },
  sort = { by: '_id', order: 'desc' } 
} , req) => {
  const { productId } = req.params || {};
  const filter = { productId };
  const totalItems = await Comment.countDocuments(filter);
  const totalPages = Math.ceil(totalItems / page.limit);
  const result = await Comment.find(filter)
    .sort({ [sort.by]: sort.order })
    .skip(page.offset * page.limit)
    .limit(page.limit);
  return {
    list: result,
    pageInfo: { ...page, totalPages },
    sortInfo: { ...sort }
  };
};
