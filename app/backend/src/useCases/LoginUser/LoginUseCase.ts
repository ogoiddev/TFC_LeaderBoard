import User from '../../entities/User';
import { ILoginRepository } from '../../repositories/interfaces/ILoginRepository';
import ErrorType from '../../utils/error/errorConstructor';
import JWT from '../../utils/JWT/JWT.Generate';
import { ILoginUseCase } from './interfaces/ILoginUseCase';

class LoginUseCase implements ILoginUseCase {
  constructor(private user: ILoginRepository) { }

  async getByEmail(email: string): Promise<string> {
    const userData = await this.user.getByEmail(email) as User;

    if (!userData) throw new ErrorType(401, 'Incorrect email or password');

    const token = JWT.createToken(userData) as string;

    return token;
  }
}

export default LoginUseCase;
