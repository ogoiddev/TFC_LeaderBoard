import * as jwt from 'jsonwebtoken';
import { IUser } from '../../entities/interfaces/IUser';

class JWT {
  static createToken(user: Omit<IUser, 'password'>) {
    const token = jwt.sign({ data: user }, process.env.JWT_SECRET || 'jwt_secret', {
      expiresIn: '7d',
      algorithm: 'HS256',
    });
    return token;
  }
}

export default JWT;
