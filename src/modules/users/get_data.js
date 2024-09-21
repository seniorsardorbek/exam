import Users from './Users.js';

export const getData = async ({
  q,
  page = { limit: 10, offset: 0 },
  sort = { by: '_id', order: 'desc' },
  filters
}) => {
  const filter = {};
  
 
  const totalItems = await Users.countDocuments({ ...filter });
  const totalPages = Math.ceil(totalItems / page.limit);
  const result = await Users.find({ ...filter })
    .sort({ [sort.by]: sort.order })
    .skip(page.offset * page.limit)
    .limit(page.limit);
  return {
    list: result,
    pageInfo: { ...page, totalPages },
    sortInfo: { ...sort }
  };
};
