import { IUserInfoLogin } from './IUserInfoLogin';

export interface IUser extends IUserInfoLogin {
  id: string;
  username: string;
  role: string;
}
