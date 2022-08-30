import { checkPassword } from '../../utils/Bcrypt/Validator';
import ErrorType from '../../utils/error/errorConstructor';
import { ILoginRepository } from '../../repositories/ILoginRepository';
import JWT from '../../utils/JWT/JWT.Generate';

export default class LoginUseCase {
  constructor(private repository: ILoginRepository) { }

  async getUserByEmail(email: string) {
    const userData = await this.repository.getUserByEmail(email);

    if (!userData) throw new ErrorType(401, 'Incorrect email or password');

    return userData;
  }

  async getToken(email: string, password: string) {
    const userData = await this.getUserByEmail(email);

    checkPassword(password, userData.password);

    const token = JWT.createToken(userData);

    return token;
  }
}
