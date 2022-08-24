import JWT from '../../utils/JWT/JWT.Validate';

class AuthUseCase {
  static validate(token: string) {
    const { data } = JWT.validateToken(token);

    return data.role;
  }
}

export default AuthUseCase;
