import Joi = require('joi');
import ErrorType from '../error/errorConstructor';

class LoginUserRequestValidator {
  static check(loginRequest: { email: string, password: string }) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required().min(8),
    });

    const { error } = schema.validate(loginRequest);

    if (error) throw new ErrorType(400, 'All fields must be filled');
  }
}

export default LoginUserRequestValidator;
