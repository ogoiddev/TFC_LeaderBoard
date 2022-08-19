import { Request, Response } from 'express';
import LoginUserUseCase from './LoginUserUseCase';

class LoginUserController {
  static async checkUserByEmail(req: Request, res: Response) {
    const loginUserRequest = req.body;
    const token = await LoginUserUseCase.query(loginUserRequest);

    res.status(200).json({ token });
  }
}

export default LoginUserController;
