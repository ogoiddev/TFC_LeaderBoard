import { verify, JwtPayload } from 'jsonwebtoken';
import ErrorType from '../error/errorConstructor';

class ValidateJWT {
  static validateToken(token: string) {
    try {
      const { data } = verify(token, 'mysegredin') as JwtPayload;

      return data[0];
    } catch (error) {
      throw new ErrorType(401, 'Invalid token');
    }
  }
}

export default ValidateJWT;
