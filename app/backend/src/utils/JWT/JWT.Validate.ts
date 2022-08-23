import { verify } from 'jsonwebtoken';
import User from '../../entities/User';
import ErrorType from '../error/errorConstructor';

class ValidateJWT {
  static validateToken(token: string) {
    try {
      const dataValues = verify(token, process.env.JWT_SECRET || 'jwt_secret') as User;
      return dataValues.role;
    } catch (error) {
      throw new ErrorType(401, 'Token must be a valid token');
    }
  }
}

export default ValidateJWT;
