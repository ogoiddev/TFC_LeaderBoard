import UserModel from '../database/models/UserModel';
import User from '../entities/User';
import { ILoginRepository } from './interfaces/ILoginRepository';

export default class LoginRepository implements ILoginRepository {
  private _model = UserModel;

  async getByEmail(email: string): Promise<User | null> {
    const user = await this._model.findOne({ where: { email } });
    return user as User | null;
  }
}
