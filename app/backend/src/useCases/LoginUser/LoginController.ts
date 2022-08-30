import { Request, Response } from 'express';
import LoginUserRequestValidator from '../../utils/JOI/loginSchema';
import LoginUseCase from './LoginUseCase';

export default class LoginController {
  constructor(private useCase: LoginUseCase) {

  }

  public checkToTokenUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    LoginUserRequestValidator.check({ email, password });

    const token = await this.useCase.getToken(email, password);

    res.status(200).json({ token });
  };
}
