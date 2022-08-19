import { Request, Response, NextFunction } from 'express';
import ErrorType from '../utils/error/errorConstructor';

class Errors {
  static middleware = (error: ErrorType, _req: Request, res: Response, _next: NextFunction) => {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';
    res.status(status).json({ status, message });
  };
}

export default Errors;
