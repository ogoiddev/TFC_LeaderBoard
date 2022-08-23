import { Router } from 'express';
import { toLogin } from '../factories';
import AuthController from '../useCases/AuthValidate/AuthController';

const LoginRouter = Router();

LoginRouter.get('/login/validate', AuthController.checkAuth);

LoginRouter.post('/login', toLogin.checkToToken);

export default LoginRouter;
