import ValidateJWT from '../../utils/JWT/JWT.Validate';

class LoginUserValidateUseCase {
  static validate(requestHeaderAuth: string) {
    const userData = ValidateJWT.validateToken(requestHeaderAuth);
    return userData.role;
  }
}

export default LoginUserValidateUseCase;
