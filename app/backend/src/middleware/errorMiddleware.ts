import { Request, Response, NextFunction } from 'express';
import ErrorType from '../utils/error/errorConstructor';

const errorMiddleware = (error: ErrorType, _req: Request, res: Response, _next: NextFunction) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  res.status(status).send({ status, message });
};

export default errorMiddleware;
