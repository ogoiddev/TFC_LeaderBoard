import ErrorType from '../utils/error/errorConstructor';
import UserModel from '../database/models/UserModel';
import { ILoginRepository } from './interfaces/ILoginRepository';

export default class LoginRepository implements ILoginRepository {
  constructor(private model = UserModel) {}

  async getByEmail(email: string) {
    const user = await this.model.findOne({ where: { email } });
    if (!user) throw new ErrorType(401, 'Incorrect email or password');
    return user;
  }
}
