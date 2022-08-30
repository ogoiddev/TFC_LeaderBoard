import { Request, Response } from 'express';
import LoginUserRequestValidator from '../../utils/JOI/loginSchema';
import LoginUseCase from './LoginUseCase';

export default class LoginController {
  constructor(private useCase: LoginUseCase) {

  }

  public checkToTokenUser = async (req: Request, res: Response) => {
    const loginUserRequest = req.body;

    LoginUserRequestValidator.check(loginUserRequest);

    const token = await this.useCase.getToken(loginUserRequest.email);

    res.status(200).json({ token });
  };
}
