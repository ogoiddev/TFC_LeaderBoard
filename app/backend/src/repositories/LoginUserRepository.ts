import User from '../entities/User';
import UserModel from '../database/models/UserModel';
import { ILoginUserRepository } from './interfaces/ILoginUserRepository';

export default class LoginUserRepository implements ILoginUserRepository {
  private model = UserModel;
  async getByEmail(email: string): Promise<User | null> {
    const user = await this.model.findOne({ where: { email } });
    return user as User | null;
  }
}
