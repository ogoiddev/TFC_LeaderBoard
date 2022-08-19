import * as express from 'express';
import LoginUserController from '../useCases/LoginUser/LoginUserController';

const LoginRouter = express.Router();

LoginRouter.post('/login', LoginUserController.checkUserByEmail);

export default LoginRouter;
