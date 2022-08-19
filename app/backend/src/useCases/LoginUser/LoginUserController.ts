import { Request, Response } from 'express';
import LoginUserUseCase from './LoginUserUseCase';
import LoginUserRequestValidator from '../../utils/JOI/loginSchema';
import 'express-async-errors';

class LoginUserController {
  static async checkUserByEmail(req: Request, res: Response) {
    const loginUserRequest = req.body;
    LoginUserRequestValidator.check(loginUserRequest);

    const token = await LoginUserUseCase.query(loginUserRequest);

    res.status(200).json({ token });
  }
}

export default LoginUserController;
