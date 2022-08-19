import { verify, JwtPayload } from 'jsonwebtoken';
import ErrorType from '../error/errorConstructor';

class ValidateJWT {
  static validateToken(token: string) {
    if (process.env.JWT_SECRET) {
      try {
        const { data } = verify(token, process.env.JWT_SECRET) as JwtPayload;
        return data;
      } catch (error) {
        throw new ErrorType(401, 'Invalid token');
      }
    }
  }
}

export default ValidateJWT;
