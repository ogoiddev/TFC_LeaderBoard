import { NextFunction, Request, Response } from 'express';
import AUTH from '../useCases/AuthValidate/AuthUseCase';

class authMiddleware {
  static checkAuth(req: Request, _res: Response, next: NextFunction) {
    const requestAuth = req.headers.authorization as string;

    AUTH.validate(requestAuth);

    next();
  }
}

export default authMiddleware;
