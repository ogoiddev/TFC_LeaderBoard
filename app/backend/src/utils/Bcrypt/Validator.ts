/* eslint-disable import/no-import-module-exports */
import * as bcrypt from 'bcrypt';
import ErrorType from '../error/errorConstructor';

export const cryptPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(5);
  return bcrypt.hashSync(password, salt);
};

export const checkPassword = (password: string, passwordDb: string) => {
  const isMatch = bcrypt.compareSync(password, passwordDb);
  if (!isMatch) throw new ErrorType(404, 'wrong password');
};
