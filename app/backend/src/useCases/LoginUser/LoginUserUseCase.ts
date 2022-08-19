import ErrorType from '../../utils/error/errorConstructor';
import JWT from '../../utils/JWT/JWT.Generate';
import UserModel from '../../database/models/UserModel';
import { loginUserRequestDTO } from './LoginUserDTO';
import User from '../../entities/User';

class LoginUserUseCase {
  static async query(requestBody: loginUserRequestDTO) {
    const userData = await UserModel.findOne({ where: { email: requestBody.email } }) as User;

    if (!userData) throw new ErrorType(401, 'Incorrect email or password');
    const token = JWT.createToken(userData);

    return token;
  }
}

export default LoginUserUseCase;
