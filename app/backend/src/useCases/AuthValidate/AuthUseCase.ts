import JWT from '../../utils/JWT/JWT.Validate';

class AuthUseCase {
  static validate(token: string): string {
    const userData = JWT.validateToken(token);
    return userData.role;
  }
}

export default AuthUseCase;
