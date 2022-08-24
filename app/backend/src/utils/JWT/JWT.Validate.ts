import { JwtPayload, verify } from 'jsonwebtoken';
import ErrorType from '../error/errorConstructor';

class ValidateJWT {
  static validateToken(token: string) {
    try {
      const data = verify(token, process.env.JWT_SECRET || 'jwt_secret') as JwtPayload;
      return data;
    } catch (error) {
      throw new ErrorType(401, 'Token must be a valid token');
    }
  }
}

export default ValidateJWT;
