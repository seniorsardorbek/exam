import { ForbiddenError } from '../errors/index.js';

export const hasRole = ({ req, res, next }, roles) => {
  const { role } = req.user;
  if (!roles.includes(role)) {
    throw new ForbiddenError('This road is forbidden!');
  }
};
