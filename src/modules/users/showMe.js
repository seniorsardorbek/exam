import Users from './Users.js';

export const showDataMe = async (req) => {
  const { id } = req.user;
  const data = await Users.findById(id).populate([
    'total_guides',
    'todo_guides',
    'read_guides'
  ]);

  if (!data) {
    throw new NotFoundError(` User (${id}) not found`);
  }

  return { data };
};
