import { Request, Response } from 'express';
import LoginUserRepository from '../repositories/LoginUserRepository';
import LoginUserController from '../useCases/LoginUser/LoginUserController';
import LoginUserUseCase from '../useCases/LoginUser/LoginUserUseCase';

export default class LoginFactory {
  static async login(req: Request, res: Response) {
    const loginRepository = new LoginUserRepository();

    const loginUseCase = new LoginUserUseCase(loginRepository);

    const loginController = new LoginUserController(loginUseCase);

    return loginController.checkRequestAndGetUserByEmail(req, res);
  }
}
