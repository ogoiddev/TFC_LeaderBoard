import { Request, Response, NextFunction } from 'express';
import ErrorType from '../utils/error/errorConstructor';

export default class Errors {
  static middleware = (error: ErrorType, _req: Request, res: Response, _next: NextFunction) => {
    const status = error.status || 505;
    const message = error.message || 'Something went wrong';
    switch (error.name) {
      case 'JsonWebTokenError':
        res.status(401).json({ message: 'Token must be a valid token' });
        break;
      case 'SequelizeForeignKeyConstraintError':
        res.status(404).json({ message: 'There is no team with such id!' });
        break;
      default: res.status(status).json({ message });
    }
  };
}
