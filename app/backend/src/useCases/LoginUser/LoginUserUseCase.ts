import { ILoginUserRepository } from '../../repositories/interfaces/ILoginUserRepository';
import ErrorType from '../../utils/error/errorConstructor';
import JWT from '../../utils/JWT/JWT.Generate';
import { ILoginUserUseCase } from './interfaces/ILoginUserUseCase';
import { ILoginUserRequestDTO } from './LoginUserDTO';

class LoginUserUseCase implements ILoginUserUseCase {
  constructor(private user: ILoginUserRepository) { }

  async query(requestBody: ILoginUserRequestDTO): Promise<string> {
    const userData = await this.user.getByEmail(requestBody.email);

    if (!userData) throw new ErrorType(401, 'Incorrect email or password');

    const token = JWT.createToken(userData) as string;

    return token;
  }
}

export default LoginUserUseCase;
