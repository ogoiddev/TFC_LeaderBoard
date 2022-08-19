import * as express from 'express';
import LoginUserValidateController from '../useCases/LoginUserValidate/LoginUserValidateController';
import LoginUserController from '../useCases/LoginUser/LoginUserController';

const LoginRouter = express.Router();

LoginRouter.get('/login/validate', LoginUserValidateController.checkRequestAuth);

LoginRouter.post('/login', LoginUserController.checkUserByEmail);

export default LoginRouter;
