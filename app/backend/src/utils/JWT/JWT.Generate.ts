import * as jwt from 'jsonwebtoken';
import UserModel from '../../database/models/UserModel';

class JWT {
  static createToken(user: UserModel) {
    const token = jwt.sign({ data: user }, process.env.JWT_SECRET || 'jwt_secret', {
      expiresIn: 60 * 60 * 24 * 7,
      algorithm: 'HS256',
    });
    return token;
  }
}

export default JWT;
