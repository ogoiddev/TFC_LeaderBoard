import { Request, Response } from 'express';
import LoginUserValidateUseCase from './LoginUserValidateUseCase';

require('express-async-errors');

class LoginUserValidateController {
  static checkRequestAuth(req: Request, res: Response) {
    const requestAuth = req.headers.authorization as string;

    const role = LoginUserValidateUseCase.validate(requestAuth);
    res.status(200).json({ role });
  }
}

export default LoginUserValidateController;
