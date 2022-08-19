import * as jwt from 'jsonwebtoken';
import User from '../../entities/User';

class JWT {
  static createToken(user: User) {
    if (process.env.JWT_SECRET) {
      const token = jwt.sign({ data: user }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24 * 7,
        algorithm: 'HS256',
      });
      return token;
    }
  }
}

export default JWT;
