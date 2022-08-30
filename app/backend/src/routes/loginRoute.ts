import { Router } from 'express';
import login from '../useCases/LoginUser';

import AuthController from '../useCases/AuthValidate/AuthController';

const LoginRouter = Router();

LoginRouter.get('/login/validate', AuthController.checkAuth);

LoginRouter.post('/login', login.loginController.checkToTokenUser);

export default LoginRouter;
