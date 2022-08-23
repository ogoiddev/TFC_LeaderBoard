import JWT from '../../utils/JWT/JWT.Validate';

class AuthUseCase {
  static validate(token: string): string {
    const role = JWT.validateToken(token);
    return role;
  }
}

export default AuthUseCase;
