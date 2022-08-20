import UserModel from '../database/models/UserModel';
import { ILoginUserRepository } from './interfaces/ILoginUserRepository';

export default class LoginUserRepository implements ILoginUserRepository {
  private model = UserModel;
  async getByEmail(email: string) {
    const user = await this.model.findOne({ where: { email } });
    return user;
  }
}
