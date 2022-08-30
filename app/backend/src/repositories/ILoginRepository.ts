import UserModel from '../database/models/UserModel';

export interface ILoginRepository {
  getUserByEmail(email: string): Promise<UserModel | null>;
}
