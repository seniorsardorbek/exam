import Users from './Users.js';

export const showDataMe = async (req) => {
  const { id } = req.user;
  const data = await Users.findById(id)
  if (!data) {
    throw new NotFoundError(` User (${id}) not found`);
  }

  return { data };
};
