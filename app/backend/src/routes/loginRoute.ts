import * as express from 'express';
import LoginFactory from '../factories/LoginUserFactory';
import LoginUserValidateController from '../useCases/LoginUserValidate/LoginUserValidateController';
import 'express-async-errors';

const LoginRouter = express.Router();

LoginRouter.get('/login/validate', LoginUserValidateController.checkRequestAuth);

LoginRouter.post('/login', LoginFactory.login);

export default LoginRouter;
