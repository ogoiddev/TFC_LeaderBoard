import Joi = require('joi');
import { loginUserRequestDTO } from '../../useCases/LoginUser/LoginUserDTO';
import ErrorType from '../error/errorConstructor';

class LoginUserRequestValidator {
  static check(loginUserRequest: loginUserRequestDTO) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required().min(8),
    });

    const { error } = schema.validate(loginUserRequest);

    if (error) throw new ErrorType(400, 'All fields must be filled');
  }
}

export default LoginUserRequestValidator;
