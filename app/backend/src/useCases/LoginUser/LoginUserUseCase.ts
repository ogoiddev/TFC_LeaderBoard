import JWT from '../../utils/JWT/JWT.Generate';
import UserModel from '../../database/models/UserModel';
import { loginUserRequestDTO } from './LoginUserDTO';
import User from '../../entities/User';

class LoginUserUseCase {
  static async query(query: loginUserRequestDTO) {
    const userData = await UserModel.findOne({ where: { email: query.email } }) as User;

    const token = JWT.createToken(userData);

    return token;
  }
}

export default LoginUserUseCase;