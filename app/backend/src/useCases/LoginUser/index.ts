import LoginRepository from '../../repositories/implementations/LoginRepository';
import LoginController from './LoginController';
import LoginUseCase from './LoginUseCase';

const mySqlRepository = new LoginRepository();
const loginUseCase = new LoginUseCase(mySqlRepository);

const loginController = new LoginController(loginUseCase);

export default { loginUseCase, loginController };
