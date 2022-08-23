import { Request, Response } from 'express';
import LoginUserRequestValidator from '../../utils/JOI/loginSchema';
import { ILoginController } from './interfaces/ILoginController';
import { ILoginUseCase } from './interfaces/ILoginUseCase';

class LoginController implements ILoginController {
  constructor(private getToken: ILoginUseCase) {
    this.checkToToken = this.checkToToken.bind(this);
  }

  async checkToToken(req: Request, res: Response) {
    const loginUserRequest = req.body;
    LoginUserRequestValidator.check(loginUserRequest);

    console.log(this.getToken);
    const token = await this.getToken.getByEmail(loginUserRequest.email);
    res.status(200).json({ token });
  }
}

export default LoginController;
