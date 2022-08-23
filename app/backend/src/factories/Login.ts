import LoginRepository from '../repositories/LoginRepository';
import LoginController from '../useCases/LoginUser/LoginController';
import LoginUseCase from '../useCases/LoginUser/LoginUseCase';
import Factory from './Factory';

export default class Login extends Factory {
  constructor() {
    super();
    this._repository = LoginRepository;
    this._useCase = LoginUseCase;
    this._controller = LoginController;
  }
}
