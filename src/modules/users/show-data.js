import Users from './Users.js';

export const showData = async (req) => {
  const { id } = req.params;
  const data = await Users.findById(id)
    .select('-password')

  if (!data) {
    throw new NotFoundError(` User (${id}) not found`);
  }
  return { data };
};
