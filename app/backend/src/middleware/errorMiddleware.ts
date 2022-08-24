import { Request, Response, NextFunction } from 'express';
import ErrorType from '../utils/error/errorConstructor';

class Errors {
  static middleware = (error: ErrorType, _req: Request, res: Response, _next: NextFunction) => {
    if (error.name === 'SequelizeForeignKeyConstraintError') {
      const status = 404;
      const message = 'There is no team with such id!';
      res.status(status).json({ status, message });
    } else {
      const status = error.status || 505;
      const message = error.message || 'Something went wrong';
      res.status(status).json({ status, message });
    }
  };
}

export default Errors;
