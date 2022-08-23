import { Request, Response } from 'express';
import AUTH from './AuthUseCase';

require('express-async-errors');

class AuthController {
  static checkAuth(req: Request, res: Response) {
    const requestAuth = req.headers.authorization as string;

    const role = AUTH.validate(requestAuth);
    res.status(200).json({ role });
  }
}

export default AuthController;
