import UserModel from '../../database/models/UserModel';

export interface ILoginRepository {
  getByEmail(email: string): Promise<UserModel>;
}
