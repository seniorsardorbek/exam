import User from './Users.js';

export const myUpdate = async (req) => {
  const { id } = req.user;

  await User.findOneAndUpdate(
    { _id: id },
    {
      ...req.body
    }
  );
  return { message: 'Your profile is updated!' };
};
