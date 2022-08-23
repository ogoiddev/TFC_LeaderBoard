import { Request, Response, Router } from 'express';
import AuthController from '../useCases/AuthValidate/AuthController';
import { toLogin } from '../factories';

const LoginRouter = Router();

LoginRouter.get('/login/validate', AuthController.checkAuth);

LoginRouter.post('/login', (req: Request, res: Response) => toLogin.checkToToken(req, res));

export default LoginRouter;
