import { Request, Response } from 'express';
import LoginUserRequestValidator from '../../utils/JOI/loginSchema';
import { ILoginUserUseCase } from './interfaces/ILoginUserUseCase';

class LoginUserController {
  constructor(private getToken: ILoginUserUseCase) { }

  async checkRequestAndGetUserByEmail(req: Request, res: Response) {
    const loginUserRequest = req.body;
    LoginUserRequestValidator.check(loginUserRequest);

    const token = await this.getToken.query(loginUserRequest);
    return res.status(200).json({ token });
  }
}

export default LoginUserController;
