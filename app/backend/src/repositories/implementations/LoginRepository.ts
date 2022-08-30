import UserModel from '../../database/models/UserModel';
import { ILoginRepository } from '../ILoginRepository';

export default class LoginRepository implements ILoginRepository {
  private model = UserModel;

  async getUserByEmail(email: string): Promise<UserModel | null> {
    const user = await this.model.findOne({ where: { email }, raw: true });
    return user;
  }
}
